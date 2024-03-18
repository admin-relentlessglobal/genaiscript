import { host } from "./host"
import MagicString from "magic-string"
import { consoleLogFormat } from "./logging"

export async function evalPrompt(
    ctx0: PromptContext,
    r: PromptTemplate,
    options?: {
        sourceMaps?: boolean
        logCb?: (msg: string) => void
    }
) {
    const { logCb, sourceMaps } = options || {}
    const log = (...args: any[]) => {
        const line = consoleLogFormat(...args)
        logCb?.(line)
    }
    const ctx = Object.freeze<
        PromptContext & { console: Partial<typeof console> }
    >({
        ...ctx0,
        console: {
            log: log,
            warn: log,
            debug: log,
            error: log,
            info: log,
            trace: log,
        },
    })
    const keys = Object.keys(ctx)
    const prefix = "async (" + keys.join(",") + ") => { 'use strict';\n"
    const suffix = "\n}"

    const jsSource = r.jsSource
    let src = [prefix, jsSource, suffix].join("")
    // source map
    if (r.filename && sourceMaps) {
        const s = new MagicString(jsSource)
        s.prepend(prefix)
        s.append(suffix)
        const source = host.path.resolve(r.filename)
        const map = s.generateMap({
            source,
            includeContent: true,
            hires: true,
        })
        src += `\n//# sourceMappingURL=${map.toUrl()}`
        src += `\n//# sourceURL=${source}`
    }
    const fsrc = src

    // in principle we could cache this function (but would have to do that based on hashed body or sth)
    // but probably little point
    const fn = (0, eval)(fsrc)
    return await fn(...Object.values(ctx))
}

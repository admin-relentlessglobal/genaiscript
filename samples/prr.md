
import { Code } from "@astrojs/starlight/components"
import source from "../../../../../packages/vscode/genaisrc/prr.genai.mts?raw"

Let's delve into the "Reviewer" script, which automates the code review process, making it a breeze for developers.

### Script Metadata

```ts
script({
    title: "Pull Request Reviewer",
    description: "Review the current pull request",
    model: "openai:gpt-4o",
    system: ["system.annotations"],
    tools: ["fs_find_files", "fs_read_text"],
    cache: "prr",
})
```

This block defines the script's metadata. It sets the `title` and `description` for the script, along with specifying the `model`, which is `openai:gpt-4o` in this case. The `system` and `tools` arrays list the dependencies that the script requires. Lastly, we have `parameters` which can control the behavior of the script—here, we see a boolean named `errors` that determines if only errors should be reported.

## Configuration

```ts
const { errors } = env.vars
```

In the configuration section, we extract the `errors` parameter from the environment variables to use it later in the script's logic.

## Context and File Handling

```ts
const defaultBranch = await git.defaultBranch()
const changes = await git.diff({
    base: defaultBranch,
})
console.log(changes)

def("GIT_DIFF", changes, { maxTokens: 20000 })
```



## The Prompt

The prompt is what instructs the AI on what to do. It's a critical part of the script, defining the role, task, and guidelines for the AI to follow during the review process.

```ts
$`
## Role

You are an expert developer at all known programming languages.
You are very helpful at reviewing code and providing constructive feedback.

## Task

Report ${errors ? `errors` : `errors and warnings`} in ${content} using the annotation format.

## Guidance

- Use best practices of the programming language of each file.
- If available, provide a URL to the official documentation for the best practice. do NOT invent URLs.
- Analyze ALL the code. Do not be lazy. This is IMPORTANT.
- Use tools to read the entire file content to get more context
${errors ? `- Do not report warnings, only errors.` : ``}
`
```

As you can see, the AI's role is that of an expert developer reviewing code. It's tasked with reporting errors (or errors and warnings) in the provided content. The guidance section sets clear expectations for the quality of the review.

## How to Run the Script

To run this script, you'll need the GenAIScript CLI. If you haven't installed it yet, check out the [installation guide](https://microsoft.github.io/genaiscript/getting-started).

Once you have the CLI, running the script is as simple as:

```bash
genaiscript run rv
```

This will execute the script and provide you with the AI's feedback directly in your terminal or command prompt.
It's like having a virtual code reviewer at your disposal whenever you need it!

## Full source ([GitHub](https://github.com/microsoft/genaiscript/blob/main/packages/vscode/genaisrc/rv.genai.mts))

<Code code={source} wrap={true} lang="ts" title="rv.genai.mts" />
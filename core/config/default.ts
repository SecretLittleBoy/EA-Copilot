import {
  ContextProviderWithParams,
  ModelDescription,
  SerializedContinueConfig,
  SlashCommandDescription,
} from "../index.js";

export const FREE_TRIAL_MODELS: ModelDescription[] = [
  {
    title: "GPT-4o (Free Trial)",
    provider: "free-trial",
    model: "gpt-4o",
    systemMessage:
      "You are an expert software developer. You give helpful and concise responses.",
  },
  {
    title: "Llama3 70b (Free Trial)",
    provider: "free-trial",
    model: "llama3-70b",
    systemMessage:
      "You are an expert software developer. You give helpful and concise responses. Whenever you write a code block you include the language after the opening ticks.",
  },
  {
    title: "Codestral (Free Trial)",
    provider: "free-trial",
    model: "codestral",
  },
  {
    title: "Claude 3 Sonnet (Free Trial)",
    provider: "free-trial",
    model: "claude-3-sonnet-20240229",
  },
];

export const defaultContextProvidersVsCode: ContextProviderWithParams[] = [
  { name: "code", params: {} },
  { name: "docs", params: {} },
  { name: "diff", params: {} },
  { name: "terminal", params: {} },
  { name: "problems", params: {} },
  { name: "folder", params: {} },
  { name: "codebase", params: {} },
];

export const defaultContextProvidersJetBrains: ContextProviderWithParams[] = [
  { name: "diff", params: {} },
  { name: "folder", params: {} },
  { name: "codebase", params: {} },
];

export const defaultSlashCommandsVscode: SlashCommandDescription[] = [
  {
    name: "edit",
    description: "Edit selected code",
  },
  {
    name: "comment",
    description: "Write comments for the selected code",
  },
  {
    name: "share",
    description: "Export the current chat session to markdown",
  },
  {
    name: "cmd",
    description: "Generate a shell command",
  },
  {
    name: "commit",
    description: "Generate a git commit message",
  },
];

export const defaultSlashCommandsJetBrains = [
  {
    name: "edit",
    description: "Edit selected code",
  },
  {
    name: "comment",
    description: "Write comments for the selected code",
  },
  {
    name: "share",
    description: "Export the current chat session to markdown",
  },
  {
    name: "commit",
    description: "Generate a git commit message",
  },
];

export let EA_apiBase = "http://eacopilot.sandbox-prod-eadp-ai-dstack.data.ea.com";
export let EA_dstackToken = "e52e481a-694e-4ebb-ba17-6a63fa119a51";

export const EA_MODELS: ModelDescription[] = [
  {
    "title": "deepseek-coder-v2:16b",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b",
    "contextLength": 8192,
    "requestOptions": {
      "headers": {
        "Authorization": `Bearer ${EA_dstackToken}`
      }
    },
    "apiBase": EA_apiBase
  },
  {
    "title": "nomic-embed-text",
    "provider": "ollama",
    "model": "nomic-embed-text",
    "requestOptions": {
      "headers": {
        "Authorization": `Bearer ${EA_dstackToken}`
      }
    },
    "apiBase": EA_apiBase
  }
];

export const defaultConfig: SerializedContinueConfig = {
  models: [],
  customCommands: [
    {
      name: "test",
      prompt:
        "{{{ input }}}\n\nWrite a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don't edit any file.",
      description: "Write unit tests for highlighted code",
    },
  ],
  tabAutocompleteModel: {
    title: "deepseek-coder-v2:16b",
    provider: "ollama",
    model: "deepseek-coder-v2:16b",
  },
  contextProviders: defaultContextProvidersVsCode,
  slashCommands: defaultSlashCommandsVscode,
};

export const defaultConfigJetBrains: SerializedContinueConfig = {
  models: EA_MODELS,
  // customCommands: [
  //   {
  //     name: "test",
  //     prompt:
  //       "{{{ input }}}\n\nWrite a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don't edit any file.",
  //     description: "Write unit tests for highlighted code",
  //   },
  // ],
  // tabAutocompleteModel: {
  //   title: "Starcoder2 3b",
  //   provider: "ollama",
  //   model: "starcoder2:3b",
  // },
  "tabAutocompleteModel": {
    "title": "deepseek-coder-v2:16b",
    "provider": "ollama",
    "model": "deepseek-coder-v2:16b"
  },
  "embeddingsProvider": {
    "provider": "ollama",
    "model": "nomic-embed-text"
  },
  contextProviders: defaultContextProvidersJetBrains,
  slashCommands: defaultSlashCommandsJetBrains,
};

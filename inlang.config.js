/**
 * @type { import("@inlang/core/config").DefineConfig }
 */
export async function defineConfig(env) {
  const { default: jsonPlugin } = await env.$import(
    'https://cdn.jsdelivr.net/gh/samuelstroschein/inlang-plugin-json@latest/dist/index.js'
  )

  const { default: standardLintRules } = await env.$import(
    'https://cdn.jsdelivr.net/npm/@inlang/plugin-standard-lint-rules@3/dist/index.js'
  )

  return {
    referenceLanguage: 'en-US',
    plugins: [
      jsonPlugin({ pathPattern: 'web/src/locales/{language}.json' }),
      standardLintRules(),
    ],
  }
}

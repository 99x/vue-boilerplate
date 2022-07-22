module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 0,
    'template-curly-spacing': 'off',
    indent: ['warn', 2, {SwitchCase: 1, ignoredNodes: ['TemplateLiteral']}],
    'object-curly-spacing': ['error', 'never'],
    complexity: ['error', 7],
    'max-lines': ['error', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-statements': ['error', 10],
    'max-len': ['error', {
      code: 100,
      ignoreComments: true,
      ignorePattern: "import .* from '.*' | from '.*'"
    }],
    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none']
    }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, {baseIndent: 1}],
        'vue/html-indent': ['error', 2]
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  globals: {
    describe: true,
    expect: true,
    it: true,
    beforeEach: true
  }
}

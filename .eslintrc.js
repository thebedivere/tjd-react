module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true
    },
  extends: [
    'standard',
    'plugin:jest-formatting/recommended',
    'plugin:react/recommended'
    ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
    },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
    },
  plugins: [
    'react',
    'jest',
    'jest-formatting'
    ],
  rules: {
      //standard
    'standard(array-bracket-spacing)': 'off',
        // jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
        // eslint
    'no-unused-vars': 'off',
    'sort-imports': [
      'warn',
            {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single'
                ]
            }
        ],
    'array-bracket-spacing': [
      'error',
      'always'
        ],
    'arrow-spacing': [
      'error'
        ],
    'block-spacing': [
      'error'
        ],
    camelcase: [
      'error'
        ],
    'computed-property-spacing': [
      'error',
      'never'
        ],
    curly: [
      'error',
      'all'
        ],
    eqeqeq: [
      'error',
      'always'
        ],
    'func-call-spacing': [
      'error',
      'never'
        ],
    indent: [
      'error',
            2
        ],
    'linebreak-style': [
      'error',
      'unix'
        ],
    'no-else-return': [
      'error'
        ],
    'no-empty-function': [
      'error'
        ],
    'no-lone-blocks': [
      'error'
        ],
    'no-multi-assign': [
      'error'
        ],
    'no-new': [
      'error'
        ],
    'no-new-func': [
      'error'
        ],
    'no-param-reassign': [
      'error'
        ],
    'no-return-assign': [
      'error'
        ],
    'no-self-compare': [
      'error'
        ],
    'no-trailing-spaces': [
      'error'
        ],
    'no-void': [
      'error'
        ],
    'no-with': [
      'error'
        ],
    'no-useless-return': [
      'error'
        ],
    'object-curly-spacing': [
      'error',
      'always'
        ],
    quotes: [
      'error',
      'single'
        ],
    semi: [
      'error',
      'never'
        ],
    yoda: [
      'error'
        ]
    }
}
module.exports = {
  extends: ['dslemay'],
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      rules: {
        'import/first': 'off',
        'import/no-mutable-exports': 'off',
      },
    },
  ],
}

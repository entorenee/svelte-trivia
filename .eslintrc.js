module.exports = {
  extends: ['dslemay'],
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      rules: {
        'import/no-mutable-exports': 'off',
      },
    },
  ],
}

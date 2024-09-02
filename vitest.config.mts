import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude],
    watch: false,
    coverage: {
      enabled: true,
    },
    // Faster than 'fork' pool at the cost of less isolation.
    pool: 'threads',
    reporters: process.env.GITHUB_ACTIONS
      ? ['verbose', 'github-actions']
      : ['verbose'],
    logHeapUsage: true,
  },
})

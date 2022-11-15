import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav, defaultShortcuts) => {
  const hideIndex = defaultShortcuts.findIndex(({ name }) => name === 'hide_overview')
  defaultShortcuts.splice(hideIndex, 1)

  return [
    ...defaultShortcuts,
    {
      key: 'Escape',
      fn: () => nav.toggleOverview(),
    }
  ]
})

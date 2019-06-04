import { writable } from 'svelte/store'

function cluesStore() {
  const { set, subscribe } = writable([])

  return {
    newClues: clues => set(clues),
    reset: () => set([]),
    subscribe,
  }
}

export const clues = cluesStore()

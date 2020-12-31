import { writable } from 'svelte/store'

function cluesStore() {
  const { set, subscribe } = writable([])

  return {
    newClues: clues => set(clues),
    reset: () => set([]),
    subscribe,
  }
}

function ClueCounter() {
  const { set, subscribe, update } = writable(0)

  return {
    increment: update(n => n++),
    reset: () => set(0),
    subscribe,
  }
}

export const clues = cluesStore()
// export const clueIndex = 

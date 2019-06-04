<script>
  import Dropdown from './dropdown.svelte'
  import { requestClues } from '../services/trivia-api'
  import { clues } from '../store/clues'

  let clueSelected = '5'
  let categorySelected = '260'

  const clueCountOptions = [
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 25, value: 25 },
  ]

  const categoryOptions = [
    { label: 'Animals', value: 260 },
    { label: 'Food', value: 215 },
    { label: 'History', value: 230 },
    { label: 'Literature', value: 140 },
    { label: 'Musical Instruments', value: 175 },
    { label: 'Mythology', value: 140 },
    { label: 'Nursery Rhymes', value: 110 },
    { label: 'Science', value: 250 },
    { label: 'Weights and Measures', value: 190 },
    { label: 'Word Origins', value: 200 },
  ]

  const fetchClues = async () => {
    const data = await requestClues(categorySelected, clueSelected)
    clues.newClues(data)
  }
</script>

<style>
</style>

<form on:submit|preventDefault={fetchClues}>
  <Dropdown
    id='clue-count-select'
    label='Number of clues'
    options={clueCountOptions}
    bind:selected={clueSelected}
  />
  <Dropdown
    id='category-select'
    label='Category'
    options={categoryOptions}
    bind:selected={categorySelected}
  />
  <button>Get New Clues</button>
</form>

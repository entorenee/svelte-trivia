<script>
  import NewGameControls from './components/new-game-controls.svelte'
  import { clues } from './store/clues'

  let clueIndex = 0
  let showAnswer = false
  $: currClue = $clues[clueIndex]

  const nextQuestion = () => {
    showAnswer = false
    clueIndex++
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Svelte Trivia</h1>
<NewGameControls />
{#if $clues.length > 0}
  <p>{currClue.question}</p>
  {#if showAnswer}
    <p>{currClue.answer}</p>
    <button on:click={nextQuestion}>Show next question</button>
  {:else}
    <button
      on:click={() => {
        showAnswer = true
      }}>
      Show Answer
    </button>
  {/if}
{/if}

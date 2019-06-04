<script>
  export let label, id, options, selected
</script>

<label for={id}>{label}</label>
<select {id} bind:value={selected}>
  {#each options as { value, label: optLabel }}
    <option {value}>{optLabel}</option>
  {/each}
</select>

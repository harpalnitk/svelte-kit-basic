<script>
  export let controlType = null;
  export let id;
  export let label;
  export let rows = null;
  export let value;
  export let type = 'text';
  export let valid = true;
  export let validityMessage = ''; //empty string is treated as not true
  let touched = false;
</script>

<div class="form-control">
  <label for={id}>{label}</label>
  {#if controlType === 'textarea'}
    <textarea
      class:invalid={!valid && touched}
      {rows}
      {id}
      bind:value
      on:blur={() => (touched = true)}
    />
  {:else}
    <input
      class:invalid={!valid && touched}
      {type}
      {id}
      {value}
      on:input
      on:blur={() => (touched = true)}
    />
  {/if}
  <!-- // when {type} is set dynamically then bind:value cannot be used
  in input however the same can be used in textarea
and  
     {value}
      on:input
    can be replaced by
    bind:value={value}
    which can be further replaced by
    bind:value
    -->
  {#if validityMessage && !valid && touched}
    <p class="error-message">{validityMessage}</p>
  {/if}
</div>

<style lang="scss">
 @import '../../../styles/vars';
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid $button-disabled-background;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: $secondary-color;
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }
  .invalid {
    border-color: $color-error;
    background: $tertiary-color;
  }
  .error-message {
    color: $color-error;
    margin: 0.25rem 0;
  }
</style>

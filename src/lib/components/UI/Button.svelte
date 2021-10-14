<script>
  export let type = "button";
 // export let caption;
  export let href = null;
  export let mode = null;
  export let color= null;
  export let disabled = false;
  export let width = 'auto';
</script>

<style lang="scss">
  @import '../../../styles/vars';
  button,
  a {
    //width: auto;
    font: inherit;
    border: 1px solid $primary-color;
    background: $primary-color;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 3px $anchor-box-shadow;
    cursor: pointer;
    text-decoration: none;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active,
  a:hover,
  a:active {
    background: $secondary-color;
    border-color: $secondary-color;
    box-shadow: 1px 1px 8px $anchor-active-box-shadow;
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: $button-disabled-background;
    border-color: $button-disabled-background;
    color: $button-disabled-color;
    box-shadow: none;
    cursor: not-allowed;
  }

  .success {
    background: $color-success;
    border-color: $color-success;
  }

  .success:hover,
  .success:active {
    background: $color-success-secondary;
    border-color: $color-success-secondary;
  }

  .outline {
    background: transparent;
    color: $primary-color;
    box-shadow: none;
  }

  .outline:hover,
  .outline:active {
    background: $tertiary-color;
    box-shadow: none;
  }

  .outline:disabled,
  .outline:disabled:hover,
  .outline:disabled:active {
    background: transparent;
    color: $button-disabled-background;
  }

  .outline.success {
    border-color: $color-success;
    color: $color-success;
  }

  .outline.success:hover,
  .outline.success:active {
    background: $color-success-tertiary;
  }
</style>

{#if href}
  <a {href}><slot/></a>
{:else}
  <button class="{mode} {color}" {type} on:click {disabled} style="width: {width}{width === 'auto'? '': '%'}">
    <slot/>
  </button>
{/if}

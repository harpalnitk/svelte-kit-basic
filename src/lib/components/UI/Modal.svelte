<script>
  import Button from './Button.svelte';
  import { createEventDispatcher } from 'svelte';

  //aNIMATIONS
  import {fly,fade} from 'svelte/transition';

  export let title;
  const dispatch = createEventDispatcher();
  function closeModal() {
    dispatch('cancel');
  }
</script>

<div transition:fade class="modal-backdrop" on:click={closeModal} />
<div transition:fly={{y:300}} class="modal" on:click>
  <h1>{title}</h1>
  <div class="content">
    <slot><!-- optional fallback --></slot>
  </div>
  <footer>
    <slot name="footer">
      <Button on:click={closeModal}>Close</Button>
    </slot>
  </footer>
</div>

<style lang="scss">
  @import '../../../styles/vars';
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: $modal-background;
    z-index: 10;
  }

  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px $anchor-box-shadow;
    overflow: scroll;
  }

  h1 {
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid $button-disabled-background;
    font-family: 'Roboto Slab', sans-serif;
  }

  .content {
    padding: 1rem;
  }

  footer {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
</style>

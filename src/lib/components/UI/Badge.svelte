<script>
  import {slide} from 'svelte/transition';
</script>

<span transition:slide>
  <slot />
</span>

<style lang="scss">
   @import '../../../styles/vars';
  span {
    display: inline-block;
    margin: 0 0.25rem;
    border-radius: 3px;
    border: 1px solid $primary-color;
    background: $primary-color;
    color: white;
    padding: 0 0.5rem;
    font-family: 'Lato', sans-serif;
    font-size: 0.8rem;
  }
</style>

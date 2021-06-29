
<script>
  export let header;
</script>
<style lang="scss">
 @import '../../../styles/vars';
  header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 4rem;
    background: $primary-color;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 6px $anchor-box-shadow;
  }

  h1 {
    color: white;
    font-family: "Roboto Slab", serif;
    margin: 0;
  }
</style>

<header>
  <h1>{header}</h1>
</header>

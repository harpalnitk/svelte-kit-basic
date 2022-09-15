<script>
   
       // import { writable } from "svelte/store";
       import { tweened } from "svelte/motion";
    import { cubicIn } from "svelte/easing";
  
    //tweened is a store like writable
    const progress = tweened(0, {
      delay: 0,
      duration: 700,
      easing: cubicIn
    });
  
    setTimeout(() => {
      progress.set(0.5);
    }, 1500);
</script>



<main>
  <!-- //progress is default html element -->
  <progress value={$progress} />

  <!-- TRANSITIONS CANNOT BE ADDED TO OWN COMPONENTS -->
</main>



<style lang="scss">
	@import '../../../styles/vars';
</style>
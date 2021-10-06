<script>
    import store from '$lib/stores/pageData';
</script>
<div class='back-button-cont'>
    <a href={$store.url} class='back-button'>Back</a>
</div>
<main>
    <h1>{$store.title}</h1>
</main>

<style lang="scss">
	@import '../../../styles/vars';
    h1 {
        text-align: center;
        margin: 1rem 0;
    }

    main {
        padding: 1rem;
        margin:0 auto;
        width: fit-content;
    }
    //FOR BACK BUTTON
.back-button-cont {
    display: flex;
    place-content: center;
    padding: 1rem;
  }
  
  .back-button{
      background: $secondary-color;
      padding: .5rem;
      border-radius: 5px;
      border: 1px solid $primary-color;
      color: white;
  }
  
    </style>
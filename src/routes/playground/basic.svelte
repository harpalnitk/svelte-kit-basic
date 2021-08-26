<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='TitleOfThePage'></BasicPage>

<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    background: linear-gradient(#dE685E, #EE786E);
    display: grid;
    place-content: center;
}
h1{
   font-size: 10rem; 
   color: azure;
}
</style>
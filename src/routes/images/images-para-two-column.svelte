<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Images Paragraph Two Columns' path='/images'></BasicPage>


<main>
    <img src="/img/background/background-1.jpg" alt="background-1" height="" width="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maxime provident, delectus nobis necessitatibus tempora architecto suscipit, enim illo maiores rem dignissimos eos recusandae. Id at minima veritatis totam. Ipsum sequi provident nulla, aliquam sapiente dolore iste, voluptatum ipsa eligendi, ut adipisci dolorem deserunt modi facere incidunt est excepturi? Vero?</p>
    
    <img src="/img/background/background-2.jpg" alt="background-2" height="" width="" />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, animi quae aliquid optio molestiae minima aperiam voluptates odit omnis totam fugit, expedita enim ut sapiente placeat ab voluptatibus unde reiciendis officia a recusandae, architecto corrupti quas. Rem vel porro assumenda perferendis hic, esse ut tenetur minus aut veniam magni rerum autem blanditiis magnam quos velit, optio id asperiores. Repudiandae, vero..</p>
    
    <img src="/img/background/background-2.jpg" alt="background-3" height="" width="" />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In magni reiciendis inventore maxime vitae necessitatibus veniam modi culpa quod sed unde laudantium obcaecati aspernatur consequuntur, earum incidunt corporis non aliquid enim dicta officia ipsam aperiam illo impedit. Modi, debitis totam?</p>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
        display: grid;
  padding: 2rem;
  grid-template-columns: 300px 1fr;
  gap: 1rem;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  font: 500 100%/1.5 system-ui;
    }
    img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 650px) {
  main {
    display: block;
    font-size: 80%;
  }
  p {
    position: relative;
    margin: -3rem 0 2rem 1rem;
    padding: 1rem;
    background: rgba(white, 0.8);
  }
}
</style>
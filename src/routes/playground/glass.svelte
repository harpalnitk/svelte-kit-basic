<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Transparent Cards-Glasmorphism'></BasicPage>


<main>
<div class="container">
    <div class="card">
        <div class="content">
            <h2>01</h2>
            <h3>Card One</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio nam veritatis
                 adipisci alias neque expedita suscipit
                  minima dolore. Laborum earum similique
                   exercitationem ratione provident officiis, 
                   magnam aliquam voluptatem nobis rem.</p>
                   <a href="/playground/glass">Read More</a>
        </div>
    </div>
    <div class="card">
        <div class="content">
            <h2>02</h2>
            <h3>Card Two</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio nam veritatis
                 adipisci alias neque expedita suscipit
                  minima dolore. Laborum earum similique
                   exercitationem ratione provident officiis, 
                   magnam aliquam voluptatem nobis rem.</p>
                   <a href="/playground/glass">Read More</a>
        </div>
    </div>
    <div class="card">
        <div class="content">
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Distinctio nam veritatis
                 adipisci alias neque expedita suscipit
                  minima dolore. Laborum earum similique
                   exercitationem ratione provident officiis, 
                   magnam aliquam voluptatem nobis rem.</p>
                   <a href="/playground/glass">Read More</a>
        </div>
    </div>
</div>  
</main>



<style lang="scss">
	@import '../../styles/vars';
main{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #161623;
    position: relative;
}
main::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00,#f0f);
    clip-path: circle(30% at right 70%);

}
main::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3,#e91e63);
    clip-path: circle(20% at 10% 10%);

}
</style>
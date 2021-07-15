<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Playground for CSS' path='/'></BasicPage>
<main>
    <h1>Playground</h1>
    <ul class='link-grid'>
        <li>1. <a href="/playground/http-firebase">Http Firebase</a></li>
        <li>2. <a href="/playground/image-fragmentation">Image Fragmentation</a></li>
        <li>3. <a href="/playground/spring">Spring Animation</a></li>
        <li>4. <a href="/playground/svg-graphics">SVG Graphics</a></li>
        <li>5. <a href="/playground/tweened">Tweened</a></li>
        <li>6. <a href="/playground/css-hexagon">CSS Hexagon</a></li>
        <li>7. <a href="/playground/box-shadow">Box Shadow Designs</a></li>
        <li>8. <a href="/playground/clip-path-animations">Clip Path Animations</a></li>
        <li>9. <a href="/playground/trignometry-sun">Shapes Using Trignometry</a></li>
        <li>10. <a href="/playground/star-rating">Scalable Star rating</a></li>
        <li>11. <a href="/playground/overlapping-cards">Overlapping Cards</a></li>
        <li>12. <a href="/playground/glow-card">Double color neon glow card</a></li>
        <li>13. <a href="/playground/curved-menu">Curved Outside Sidebar Menu</a></li>
        <li>14. <a href="/playground/conic-spinner">Conic Gradient Spinner</a></li>
        <li>15. <a href="/playground/glass">Transparent Cards-Glasmorphism</a></li>
        <li>16. <a href="/playground/ripple-button">Ripple Button</a></li>
        <li>17. <a href="/playground/product-card">Product card</a></li>
        <li>18. <a href="/playground/creative-menu">Creative Menu</a></li>
        <li>19. <a href="/playground/svg-animation">SVG Animation</a></li>
        <li>20. <a href="/playground/ripple-animation">Ripple-Animation</a></li>
        <li>21. <a href="/playground/shadows">CSS Shadows</a></li>
        <li>22. <a href="/playground/player-card">Player card</a></li>
        <li>23. <a href="/playground/profile-card">Profile card</a></li>
        <li>24. <a href="/playground/hovering-cards">Hovering cards</a></li>
    </ul>
</main>



<style lang="scss">
	@import '../../styles/vars';


    main {
        padding: 1rem;
        margin:0 auto;
        width: fit-content;
       
    }
    .link-grid li {
   // display: flex;
}
    .link-grid li a {
text-decoration: none;
// color: #a9a39f;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin-right: .2rem;
    }
    .link-grid li a:before {
    content: "";
    transition: .2s;
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    width: 100%;
    height: 1px;
    background: #333;
    transform: translateX(-101%);
    }

    .link-grid li a:focus, .link-grid li a:hover {
    // color: #fff;
    opacity: 1;
}

.link-grid li a:focus:before, .link-grid li a:hover:before {
    transform: translateX(0);
}
  

</style>
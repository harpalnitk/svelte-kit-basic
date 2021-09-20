<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    export let size = '1';
</script>
<BasicPage title='Colorful Loading Squares' path='/playground2'></BasicPage>


<!-- <main> -->
<section style='--size:{size}'>
    <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</section>
<!-- </main> -->



<style lang="scss">
	@import '../../styles/vars';
//     main{
//     min-height: 100vh;
//     position: relative;
//     width: min(70rem, 90vw);
//     margin: 0 auto;
// }
section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(5rem * var(--size));
    height: calc(5rem * var(--size));
    animation: changeBgColor 4s steps(1) infinite;
    margin: 0 auto;
    border-radius: 50%;
}
@keyframes changeBgColor{
    0%{
        background: #ff0;
    }
    25%{
        background: #0f0;
    }
    50%{
        background: #ff4786;
    }
    75%{
        background: #2da2ff;
    }
    100%{
        background: #ff0;
    }
}
.loader{
    position: relative;
    width: calc(var(--size) * 1rem);
    height: calc(var(--size) * 1rem);
    background: #000;
    animation: rotate 1s linear infinite;
}
@keyframes rotate{
    0%{
        transform: rotate(90deg);
    }
    50%,100%{
        transform: rotate(0deg);
    }
}
.loader div{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    animation: animate 1s linear infinite;
}
@keyframes animate{
    0%{
        transform: rotate(0deg);
    }
    50%,100%{
        transform: rotate(180deg);
    }
}
.loader div:nth-child(1){
top: -100%;
left: -2px;
transform-origin: bottom right;
}
.loader div:nth-child(1)::before{
background: #ff0;
}
.loader div:nth-child(2){
right: -100%;
top: -2px;
transform-origin: bottom left;
}
.loader div:nth-child(2)::before{
background: #0f0;
}
.loader div:nth-child(3){
bottom: -100%;
left: 2px;
transform-origin: top left;
}
.loader div:nth-child(3)::before{
background: #ff4786;
}
.loader div:nth-child(4){
left: -100%;
top: 2px;
transform-origin: top right;
}
.loader div:nth-child(4)::before{
background: #2da2ff;
}

.loader::before,
.loader div::before{
    content: '';
    position: absolute;
    inset: 2px;
    background: #fff;
}
</style>
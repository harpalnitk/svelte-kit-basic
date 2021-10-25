<script>
    import { onMount } from 'svelte';
    let section;
    let w,h;
    const colors = ['#2196f3', '#e91e63', '#ffeb3b','#74ff1d'];

    function createSquare(){
        const square = document.createElement('span');
        var size = Math.random() * 50;

        square.style.width = 20 + size + 'px';
        square.style.height = 20 + size + 'px';

        square.style.top = Math.random() * h + 'px';
        square.style.left = Math.random() * w + 'px';
        const bg = colors[Math.floor(Math.random() * colors.length)];
        square.style.background = bg;

        section.appendChild(square);
        setTimeout(()=>{
            square.remove()
        },5000)
    }
    onMount(() => {
        setInterval(createSquare, 150)
    });
</script>
<main>
    <section bind:this={section} class='bg-anim' bind:clientWidth={w} bind:clientHeight={h}>

    </section>
</main>
<style>
main{
    /* overflow: hidden; */
    min-height: 100vh;
    background: #000;
}
section{
    height: 100vh;
    overflow: hidden;
}
:global(.bg-anim span){
    position: absolute;
    pointer-events: none;
    background: #fff;
    animation: animate 5s linear infinite;
}
@keyframes animate{
    0%{
        transform: scale(0) translateY(0) rotate(0deg);
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    100%{
        transform: scale(1) translateY(-500%) rotate(360deg);
        opacity: 0;
    }
}
</style>
<script>
    let index = 1;
    let videos = [
        {id:'1',src:'/vid/video1.mp4'},
        {id:'2',src:'/vid/video2.mp4'},
        {id:'3',src:'/vid/video3.mp4'},
        {id:'4',src:'/vid/video4.mp4'},
        ];
        let thumbs = [
        {id:'1',src:'/img/background/background-1.jpg'},
        {id:'2',src:'/img/background/background-2.jpg'},
        {id:'3',src:'/img/background/background-3.jpg'},
        {id:'4',src:'/img/background/background-4.jpg'},
        ];

        $: console.log(index)
        $: video_src = videos[index].src
        $: console.log(video_src)
        
</script>
<main>
    <section>
              <!-- we cannot use transition on this component as only text values
      are being chnaged inside it and the component is not being rendered again
      svelte offers something called key KEY which re-renders the component 
      whneever some value changes -->
        {#key video_src}
        <video id='slider' autoplay muted loop>
        <source src='{video_src}' type='video/mp4'>    
        </video>
        {/key}
        <ul class='navigation'>
            {#each thumbs as thumb,i}
            <li><img src="{thumb.src}" alt="thumb{i}" on:click="{()=> index = i}"></li>
            {/each}
           
            <!-- <li><img src="/img/background/background-2.jpg" alt="thumb2"></li>
            <li><img src="/img/background/background-3.jpg" alt="thumb3"></li>
            <li><img src="/img/background/background-4.jpg" alt="thumb4"></li> -->
        </ul>
    </section>
</main>

<style>
section{
    position: relative;
    width: 100%;
    height: 100vh;
}
section video{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
section .navigation{
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}
section .navigation li{
    list-style: none;
    cursor: pointer;
    margin: 0 10px;
    border-radius: 4px;
    background: #fff;
    padding: 3px 3px 0;
    opacity: 0.7;
    width: 120px;
    height: 120px;
    position: relative;
    transition: 0.5s;
}
section .navigation li:hover{
opacity: 1;
width: 140px;
    height: 140px;
}
section .navigation li img{
    position: absolute;
    top: 3px;
    left: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    /* width: 120px; */
    object-fit: cover;
    transition: 0.5s;
}
</style>
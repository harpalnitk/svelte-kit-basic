<script>
    let toggle= false;
    let paused = false;
    let time = 0;

    const handlePlay = ()=> {
        toggle= !toggle
        paused= false;
        time=0;
    }
    const handlePause = ()=> {
        toggle= !toggle
        paused=true;
    }
</script>
<main class='flex-center'>
    <div class="btn" class:active={toggle} on:click="{handlePlay}">
        <div class="play" ></div>
        <p>Play Video</p>
    </div>
    <div class="clip" class:active={toggle}>
        <video controls autoplay		bind:currentTime={time}
		bind:paused>
            <track kind="captions" />
            <source src="/vid/video5.mp4" type="video/mp4" />
            <!-- <source src="video2.mp4" type="video/mp4" /> -->
            Sorry, your browser doesn't support embedded videos
        </video>
        <b class="close" on:click="{handlePause}">Close</b>
    </div>
</main>

<style>
main{
    min-height: 100vh;
    position: relative;
}
.btn{
    position: relative;
cursor: pointer;
display: flex;
flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  
}

.btn .play{
    position: relative;
    width: 80px;
    height: 80px;
    background: #f42e79;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 15px 25px #f42e7966;
    transition: 0.5s;
}
.btn.active .play{
    box-shadow: 0 0 0 150vh #f42e79;
}
.btn .play::before{
    content: '';
    position: absolute;
    border: 25px solid #fff;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 0px solid transparent;
    transform: translateX(5px);

}
.btn p{
font-weight: 500;
font-size: 1em;
letter-spacing: 4px;
text-transform: uppercase;
}
.clip{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: 0.5s;
}
.clip.active{
    transition-delay: 0.5s;
    transform: translate(-50%,-50%) scale(1);
}
.clip video{
    max-width: 900px;
    outline: none;
    border: 10px solid #fff;
    box-shadow: 0 15px 35px rgba(0,0,0,0.25);
}
.clip .close{
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
}
/* make it responsive */
@media(max-width: 991px){
    .clip video{
    max-width: 90%;
}   
}
</style>
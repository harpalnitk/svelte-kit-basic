<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    let toggle = false;
    let paused = true; // paused is a two way svelte binding on media elements
    let audioPlayer;

    const toggleButton = ()=>{
        toggle = !toggle;
        audioPlayer.play();
    }
</script>
<BasicPage title='Light Bulb On/Off with Sound' path='/playground2'></BasicPage>


<main class:on={toggle}>
<div class="light">
    <div class="wire"></div>
    <div class="bulb">
        <span></span>
        <span></span>
    </div>
    <div class="switch">
        <div class="btn" on:click="{toggleButton}"></div>
    </div>
</div>
</main>
<audio src="/audio/click.mp3" id="audio" 
bind:this={audioPlayer}
        bind:paused></audio>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
background: #222;
}
main.on{
    background: radial-gradient(#555,#111);
}
.bulb{
    position: relative;
    width: 80px;
    height: 80px;
    background: #444;
    border-radius: 50%;
    z-index: 2;
}
main.on .bulb{
    background: #fff;
    box-shadow: 0 0 50px #fff,
    0 0 100px #fff,
    0 0 150px #fff,
    0 0 200px #fff,
    0 0 250px #fff,
    0 0 300px #fff,
    0 0 350px #fff;
}
.bulb::before{
    content: '';
    position: absolute;
    top: -50px;
    left: 22.5px;
    width: 35px;
    height: 80px;
    background: #444;
    border-top: 30px solid #000;
    border-radius: 10px;
}

main.on .bulb::before{
    background: #fff;
}

main.on .bulb::after{
content: '';
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 120px;
height: 120px;
background: #fff;
border-radius: 50%;
filter: blur(40px);
}
//for getting curve at the top of the bulb
//change shadow color and see for examining
.bulb span:nth-child(1){
    position: absolute;
    top: -16px;
    left: -4px;
display: block;
width: 30px;
height: 30px;
background: transparent;
transform: rotate(342deg);
border-bottom-right-radius: 40px;
box-shadow: 20px 20px 0 10px #444;
}

main.on .bulb span:nth-child(1){
    box-shadow: 20px 20px 0 10px #fff;  
}
.bulb span:nth-child(2){
    position: absolute;
    top: -16px;
    right: -4px;
display: block;
width: 30px;
height: 30px;
background: transparent;
transform: rotate(17deg);
border-bottom-left-radius: 40px;
box-shadow: -20px 20px 0 10px #444;
}
main.on .bulb span:nth-child(2){
    box-shadow: -20px 20px 0 10px #fff; 
}
.wire{
 position: absolute;
 left: calc(50% - 2px);
 bottom: 50%;
 width: 4px;
 height: 50vh;
 background: #000;
z-index: 1;
}
.switch{
    position: absolute;
    bottom: 50px;
    right: 50px;
    width: 80px;
    height: 80px;
    background: linear-gradient(#eee,#ccc,#eee);
    border: 3px solid #000;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.switch .btn{
    position: relative;
    width: 25px;
    height: 40px;
    background: linear-gradient(#777,#fff,#777);
    border-radius: 6px;
    border: 2px solid #000;
    cursor: pointer;
}
.switch .btn::before{
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 85%;
background: linear-gradient(#fff,#fff);
border-radius: 4px;
}
.on .switch .btn::before{
    top: 15%;

}
#audio{
    display: none;
}
</style>
<script>
   
    import { audioData } from './audioData';
    let audioPlayer;
	let trackIndex = 0;
	//let isPlaying = false;
    let paused = true; // paused is a two way svelte binding on media elements
	let trackTitle = audioData[trackIndex].name;
    let audioFile = audioData[trackIndex].url;

let playPauseHtml = ' <i class="fas fa-play"></i>';
  

    const loadTrack = () => {
		audioFile = audioData[trackIndex].url;
		trackTitle = audioData[trackIndex].name;
		audioPlayer.load();
	};
	
    $: console.log(trackIndex)
    const playPauseAudio = () => {
		if (paused) {
			audioPlayer.play();
            playPauseHtml = '<i class="fas fa-pause"></i>';
			paused = false;
		} else {
            playPauseHtml = '<i class="fas fa-play"></i>';
          
			paused = true;
		}
	};

    // NEXT PREV
    const nextSong = () => {
		if (trackIndex === audioData.length - 1) {
			trackIndex = 0;
		} else {
			trackIndex += 1;
		}
        loadTrack();
		playPauseAudio();
	};

	const prevSong = () => {
		if (trackIndex === 0) {
			trackIndex = audioData.length - 1;
		} else {
			trackIndex -= 1;
		}
        loadTrack();
		playPauseAudio();
	};


</script>



<main>
<div class="music">
    <h2 class="title">{trackTitle}</h2>
    <div class="player">
        <audio 
        bind:this={audioPlayer}
        bind:paused >
        	<track kind="captions" />
	<source src={audioFile} type="audio/ogg" />
	<source src={audioFile} type="audio/mpeg" />
	Your browser does not support the audio element.</audio>
        <div class="btns">
            <span class="prev" on:click="{prevSong}">
                <i class="fas fa-backward"></i>
            </span>
            <span class="playPause" on:click={playPauseAudio} class:active={!paused}>
               {@html playPauseHtml}
            </span>
            <span class="next" on:click="{nextSong}">
                <i class="fas fa-forward"></i>
            </span>
        </div>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 70vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
}
.music{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.title{
    font-weight: 400;
    font-size: 2em;
    color: #38a7ff;
    display: inline-flex;
    text-align: center;
    margin-bottom: 20px;
}
.player{
    position: relative;
    width: 500px;
    min-height: 100px;
    background: #fbfbfb;
    border: 2px solid #fff;
    border-radius: 80px;
    padding: 20px 30px;
    box-shadow: -10px -10px 15px #fff,
                 10px 10px 15px rgba(0,0,0,0.1),
                 inset -5px -5px 15px #fff,
                 inset 5px 5px 15px rgba(0,0,0,0.1);
}
.btns{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.btns span{
    position: relative;
    width: 80px;
    height: 80px;
    background: #ffF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    cursor: pointer;
    box-shadow:  inset 0 -5px 5px rgba(0,0,0,0.1),
                       0 5px 10px rgba(0,0,0,0.1),
                       0 10px 15px rgba(0,0,0,0.1);
}
.btns span:active,
.btns span.active{
color: #ff669a;
box-shadow:  inset 0 -7px 5px rgba(0,0,0,0.025),
             inset 0 5px 10px rgba(0,0,0,0.15);
}
.btns span.playPause{
    width: 100px;
    height: 100px;
}
.btns span i{
font-size: 2em;
}
:global(.btns span.playPause i){
font-size: 3em;
}
</style>
<script>
	import { audioData } from '$lib/audio-player/audioData';
	import Controls from '$lib/audio-player/Controls.svelte';
	import TrackHeading from '$lib/audio-player/TrackHeading.svelte';
	import VolumeSlider from '$lib/audio-player/VolumeSlider.svelte';
	import ProgressBarTime from '$lib/audio-player/ProgressBarTime.svelte';
	import PlayList from '$lib/audio-player/PlayList.svelte';

	let audioPlayer;
	let trackIndex = 0;
	//let isPlaying = false;
    let paused = true; // paused is a two way svelte binding on media elements
	let trackTitle = audioData[trackIndex].name;
	let audioFile = audioData[trackIndex].url;

	// $: console.log(trackIndex)
	//$: audioFile = audioData[trackIndex].url;

	const loadTrack = () => {
		audioFile = audioData[trackIndex].url;
		trackTitle = audioData[trackIndex].name;
		audioPlayer.load();
	};

	const playPauseAudio = () => {
		if (paused) {
			toggleTimeRunning();
			audioPlayer.play();
			paused = false;
		} else {
			paused = true;
		}
	};
	//Rewind, Forward Buttons
	const rewindAudio = () => (audioPlayerCurrentTime -= 10);
	const forwardAudio = () => (audioPlayerCurrentTime += 10);

	// Volume Slider
	let vol = 50;
	let audioPlayerVolume;
	const adjustVol = () => (audioPlayerVolume = vol / 100);

	// Track Duration and Progress Bar
	//let totalTrackTime; //in seconds
	let audioPlayerTrackDuration; //bind value in seconds
	let totalTimeDisplay = 'Play Track..';
	let currTimeDisplay = '0:00:00';
	let audioPlayerCurrentTime=0; //in seconds
	let progress = 0;
	let trackTimer;
	let audioPlayerTrackEnded;

	$: console.log(audioPlayerTrackDuration);
	// On initial load  audioPlayer will be undefined so using reactive statement and null check for audio player
	// $: audioPlayer
	// 	? (audioPlayer.onloadedmetadata = () => {
	// 			//totalTrackTime = audioPlayer.duration;
	// 			updateTime();
	// 	  })
	// 	: '';

	function updateTime() {
		progress = audioPlayerCurrentTime * (100 / audioPlayerTrackDuration);

		let currHrs = Math.floor(audioPlayerCurrentTime / 60 / 60);
		let currMins = Math.floor(audioPlayerCurrentTime / 60);
		let currSecs = Math.floor(audioPlayerCurrentTime - currMins * 60);

		let durHrs = Math.floor(audioPlayerTrackDuration / 60 / 60);
		let durMins = Math.floor((audioPlayerTrackDuration / 60) % 60);
		let durSecs = Math.floor(audioPlayerTrackDuration - durHrs * 60 * 60 - durMins * 60);

		if (currSecs < 10) currSecs = `0${currSecs}`;
		if (durSecs < 10) durSecs = `0${durSecs}`;
		if (currMins < 10) currMins = `0${currMins}`;
		if (durMins < 10) durMins = `0${durMins}`;

		currTimeDisplay = `${currHrs}:${currMins}:${currSecs}`;
		totalTimeDisplay = `${durHrs}:${durMins}:${durSecs}`;

		if (audioPlayerTrackEnded) {
			toggleTimeRunning();
		}
	}

	const toggleTimeRunning = () => {
		if (audioPlayerTrackEnded) {
			paused = true;
			clearInterval(trackTimer);
			console.log(`Ended = ${audioPlayerTrackEnded}`);
		} else {
			trackTimer = setInterval(updateTime, 100);
		}
	};

	const handleTrack = (e) => {
		if (paused) {
			trackIndex = e.target.dataset.trackId;
			loadTrack();
			playPauseAudio();
		} else {
			paused = true;
			audioPlayer.pause();
			trackIndex = e.target.dataset.trackId;
			loadTrack();
			playPauseAudio();
		}
	};
</script>

<main>
	<section id="player-cont">
		<TrackHeading {trackTitle} />

		<ProgressBarTime {currTimeDisplay} {totalTimeDisplay} {progress} />

		<Controls
			isPlaying={!paused}
			on:rewind={rewindAudio}
			on:playPause={playPauseAudio}
			on:forward={forwardAudio}
		/>

		<!-- <VolumeSlider {vol} on:input={adjustVol} />  Not work because in Volume slider we are binding to the property vol
so here also we will have to bind-->
		<VolumeSlider bind:vol on:input={adjustVol} />
	</section>
	<PlayList on:click={handleTrack} selectedTrackIndex={trackIndex} />
</main>

<!-- add controls to see audio player on page 
<audio bind:this={audioPlayer} controls>
-->
<audio bind:this={audioPlayer} 
bind:paused 
bind:volume={audioPlayerVolume} 
bind:currentTime={audioPlayerCurrentTime}
bind:duration={audioPlayerTrackDuration}
bind:ended={audioPlayerTrackEnded}>
	<track kind="captions" />
	<source src={audioFile} type="audio/ogg" />
	<source src={audioFile} type="audio/mpeg" />
	Your browser does not support the audio element.
</audio>

<style lang="scss">
	@import '../../styles/vars';
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* 		justify-content: center; */
		padding: 20px 0 0 0;
		background-color: #ddd;
	}

	#player-cont {
		width: 250px;
		height: 165px;
		padding: 0.7rem 1.5rem 0;
		box-shadow: 0 0 5px black;
		background: $primary-color;
		color: #bbb;
		border-radius: 5px 5px 0 0;
	}
</style>

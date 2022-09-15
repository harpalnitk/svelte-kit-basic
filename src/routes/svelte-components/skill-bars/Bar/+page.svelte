<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { tweened } from 'svelte/motion';
	import { backInOut, expoInOut } from 'svelte/easing';

	export let title = 'TITLE';
	export let percent = 90;
	export let color = '#04AA6D';
	export let delTime = 1000;

	const progress = tweened(30, {
		delay: delTime,
		duration: 800,
		easing: backInOut
		//easing: expoInOut
	});
	//changes percent from 0 to percent value(90%) after 1s delay with duration of .5s
	progress.set(percent);
</script>


<div class="container">
    <span class="skill">{title}</span>
	<div class="skills" style="background-color: {color}; width: {$progress}%">{percent}%</div>
</div>


<style lang="scss">
	@import '../../../styles/vars';
	/* Container for skill bars */
	.container {
		width: 100%; /* Full width */
		background-color: #ddd; /* Grey background */
        margin-bottom: 15px;
        position: relative;

	}
    span{
        position: absolute;
        top: 26%;
        left: 15px;
        font-weight: 500;
        color: white;
    }

	.skills {
		text-align: right; /* Right-align text */
		padding: 10px 10px 10px 0; /* Add top padding */
	    font-weight: 300;
		color: white; /* White text color */
        transition: .5s ease-out;
	}
</style>

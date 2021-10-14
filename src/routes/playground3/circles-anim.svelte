<script>
</script>

<main class="main-page flex-center">
	<div class="loader">
		<span style="--i:1"/>
		<span style="--i:1"/>
		<span style="--i:1"/>
		<span style="--i:1"/>
		<span style="--i:1"/>
		<span style="--i:1"/>
		<span style="--i:1"/>
		<span style="--i:1"/>
		<span style="--i:1"/>
        <span style="--i:1"/>
        <span style="--i:1"/>
        <span style="--i:1"/>
        <span style="--i:1"/>
        <span style="--i:1"/>
        <span style="--i:1"/>
	</div>
</main>

<style lang="scss">
	@import '../../styles/vars';
    main{
        background: #9c27b0;
    }
    .loader{
        position: relative;
        width: 300px;
        height: 300px;
        transform-style: preserve-3d;
        transform: perspective(500px) rotateX(60deg);
    }
    .loader span{
position: absolute;
display: block;
border: 5px solid #fff;
box-shadow: 0 5px 0 #ccc,
            inset 0 5px 0 #ccc;
border-radius: 50%;
animation: animate 3s ease-in-out infinite;
    }
@keyframes animate{
    0%,100%{
        transform: translateZ(-100px);
    }
    50%{
        transform: translateZ(100px);
    }
}

    // .loader span:nth-child(1){
    //     inset: 0;
    //     animation-delay: 0s;
    // }

    @for $i from 1 through 15 {
        .loader span:nth-child(#{$i}){
        inset: 10px * ($i - 1);
        animation-delay: 0.1s * (15 - $i);
    }
}
    
</style>

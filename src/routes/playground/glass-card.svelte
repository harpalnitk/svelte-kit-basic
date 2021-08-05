<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Glass Card' path='/playground'></BasicPage>


<main>
<div class="card">
<span style="--i:0;"></span>
<span style="--i:1;"></span>
<span style="--i:2;"></span>
<span style="--i:3;"></span>
<div class="glass">
<h2>Harpal Singh<br><i>+91 94192 150 35</i></h2>
</div>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    font-family: 'Ubuntu', sans-serif;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
}

.card{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

}
.card span{
    position: absolute;
    top: 0;
    width: 250px;
    height: 250px;
    display: block;
    background: #000;
    border-radius: 50%;
    transform-origin: 125px 0;
    transform: rotate(calc(90deg * var(--i)));
    filter: blur(80px);
    opacity: 0.75;
}

.card span:nth-child(1){
    background: #01b2fe;
}
.card span:nth-child(2){
    background: #ff008c;
}
.card span:nth-child(3){
    background: #ffcd00;
}
.card span:nth-child(4){
    background: #00c456;
}

.card .glass{
    position: absolute;
    width: 450px;
    height: 300px;
    background: rgba(255,255,255,0.5);
    border-radius: 20px;
    border: 1px solid #fff;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}
.card .glass::before{
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.2);
    pointer-events: none;
    transform: skewX(345deg);
}
.card .glass h2{
padding: 20px;
font-weight: 400;
width: 100%;
background: rgba(255,255,255,0.2);
color: #333;
text-align: end;
}

.card .glass i{
font-weight: 300;
font-size: 0.75em;
font-style: normal;
}

</style>
<script>
   
    import Hoverable from '$lib/components/Hoverable.svelte';
    let left;
    let width; 

    function moveIndicator(e){
//   console.log('offsetLeft', e.target);
//   console.log('offsetLeft e', e.target.offsetLeft);
//   console.log('offsetLeft e', e.target.offsetWidth);
left = e.target.offsetLeft + 'px';
width = e.target.offsetWidth + 'px';
    }
</script>



<main>
<ul>
    <Hoverable let:hoveringI={hovering}>
        <li class:active={hovering} on:mousemove={moveIndicator}>
            <a href="home">
            <i class="fas fa-home"></i>
        </a>
    </li>
    </Hoverable>


    <Hoverable let:hovering={hovering}>
        <li class:active={hovering} on:mousemove={moveIndicator}>
            <a href="profile">
            <i class="fa fa-user"></i>
        </a>
        </li> 
    </Hoverable>
    <Hoverable let:hovering={hovering}>
        <li class:active={hovering} on:mousemove={moveIndicator}>
            <a href="info">
            <i class="fa fa-info-circle"></i>
        </a>
        </li>   
    </Hoverable>
    <Hoverable let:hovering={hovering}>
        <li class:active={hovering} on:mousemove={moveIndicator}>
            <a href="setting">
            <i class="fas fa-cog"></i>
        </a>
        </li> 
    </Hoverable>
    <Hoverable let:hovering={hovering}>
        <li class:active={hovering} on:mousemove={moveIndicator}>
            <a href="signout">
            <i class="fas fa-sign-out-alt"></i>
        </a>
        </li>
    </Hoverable>
    <div id="marker" style="left:{left};width:{width}"></div>
</ul>

</main>



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
    min-height: 70vh;
    background: #1e2759;
}
ul{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 5px 25px rgba(0,0,0,0.25);
}
ul li{
    list-style: none;
}
ul li a{
    position: relative;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 20px 30px;
    z-index: 1000;
    backdrop-filter: blur(15px);
}
ul li a i{
   font-size: 2.5em;
   pointer-events: none;
   transition: 0.25s; 
   opacity: 0.25;
}
ul div li.active a i{
opacity: 1;
}
#marker{
  position: absolute;
  top: 0;
  transition: 0.5s;
  z-index: 1;  
}
#marker::before{
content: '';
position: absolute;
top: -10px;
left: 50%;
transform: translateX(-50%);
width: 50px;
height: 40px;
border-radius: 8px;
background: #5da6ff;
    box-shadow: 0 0 15px #5da6ff,
                0 0 30px #5da6ff,
                0 0 45px #5da6ff,
                0 0 60px #5da6ff;


}

</style>
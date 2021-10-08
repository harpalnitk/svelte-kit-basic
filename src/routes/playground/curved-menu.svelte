<script>
   
    import Hoverable from '$lib/components/Hoverable.svelte';
let active = true;
</script>



<main>
<div class="navigation">
    <ul>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} >
                <b></b>
                <b></b>
                <a href="/">
                <span class="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                <span class="title">Profile</span>
                </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span>
                    <span class="title">Home</span>
                </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-address-card-o" aria-hidden="true"></i></span>
                    <span class="title">Contact</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                    <span class="title">About</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <span class="title">Message</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-cog" aria-hidden="true"></i></span>
                    <span class="title">Setting</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-question" aria-hidden="true"></i></span>
                    <span class="title">Help</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-key" aria-hidden="true"></i></span>
                    <span class="title">Password</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                    <span class="title">Signout</span>
                    </a>
            </li>
        </Hoverable>
    </ul>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
        --main-color: dodgerblue;
        --text-color: #fff;
        --text-color-dark: #333;
        min-height: 100vh;
        background: whitesmoke;
    }
    .navigation{
        position: fixed;
        top: 20px;
        bottom: 20px;
        left: 20px;
        width: 300px;
        border-radius: 10px;
        border-left: 5px solid var(--main-color);
        box-sizing: initial;
        background: var(--main-color);
        transition: width 0.5s;
    }
    .navigation ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-left: 5px;
        padding-top: 40px;
    }
    .navigation ul li {
        position: relative;
        width: 100%;
        list-style: none;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    .navigation ul li.active {
        background: var(--text-color);
    }
    .navigation ul li b:nth-child(1) {
    position: absolute;
    top: -20px;
    height: 20px;
    width: 100%;
    background: var(--text-color);
    display: none;
    }
    .navigation ul li b:nth-child(1)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--main-color);
    border-bottom-right-radius: 20px;
    }
    .navigation ul li b:nth-child(2) {
    position: absolute;
    bottom: -20px;
    height: 20px;
    width: 100%;
    background: var(--text-color);
    display: none;
    }
    .navigation ul li b:nth-child(2)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--main-color);
    border-top-right-radius: 20px;
    }
    .navigation ul li.active b:nth-child(1),
    .navigation ul li.active b:nth-child(2){
display: block;
    }
    .navigation ul li a{
        position: relative;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: var(--text-color);
    } 
    .navigation ul li.active a{
        color: var(--text-color-dark);
    }
    .navigation ul li a .icon{
        position: relative;
        min-width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        display: block;

    } 
    .navigation ul li a .icon i{
font-size: 1.5em;
    } 
    .navigation ul li a .title{
        position: relative;
        height: 60px;
        line-height: 60px;
        display: block;
        padding-left: 10px;
        white-space: normal;

    } 
</style>
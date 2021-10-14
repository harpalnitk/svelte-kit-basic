<script>
	  import Hoverable from '$lib/components/Hoverable.svelte';
	export let open = false;
	function closeSidebar() {
		open = !open;
	}
</script>

<aside class="navigation" class:open>
	<ul>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/">
                <span class="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                <span class="title">Profile</span>
                </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering} >
            <li class="list" class:active={hovering} on:click={closeSidebar} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span>
                    <span class="title">Home</span>
                </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-address-card-o" aria-hidden="true"></i></span>
                    <span class="title">Contact</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                    <span class="title">About</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <span class="title">Message</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-cog" aria-hidden="true"></i></span>
                    <span class="title">Setting</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-question" aria-hidden="true"></i></span>
                    <span class="title">Help</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-key" aria-hidden="true"></i></span>
                    <span class="title">Password</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hovering={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                    <span class="title">Signout</span>
                    </a>
            </li>
        </Hoverable>
    </ul>
</aside>

<style lang="scss">
	@import '../../../../styles/vars';
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 1000;
		background-color: var(--primary-color);
		//min-height: 100%;
		//overflow-y: scroll;
	}

	.open {
		left: 0;
	}
	.navigation{
        position: absolute;
        top: 0;
        bottom: 0;
        width:20rem;
        max-width: 70vw;
        border-radius: 1rem;
        border-left: 5px solid  $primary-color;
        box-sizing: initial;
        background:  $primary-color;
       // transition: width 0.5s;
    }
    .navigation ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-left: 5px;
        padding-top: 1.5rem;
    }
    .navigation ul li {
        position: relative;
        width: 100%;
        list-style: none;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
    .navigation ul li.active {
        background: var(--primary-color);
    }
    .navigation ul li b:nth-child(1) {
    position: absolute;
    top: -1rem;
    height: 1rem;
    width: 100%;
    background: var(--primary-color);
    display: none;
    }
    .navigation ul li b:nth-child(1)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: $primary-color;
    border-bottom-right-radius: 1rem;
    }
    .navigation ul li b:nth-child(2) {
    position: absolute;
    bottom: -1rem;
    height: 1rem;
    width: 100%;
    background:var(--primary-color);
    display: none;
    }
    .navigation ul li b:nth-child(2)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background:  $primary-color;
    border-top-right-radius: 1rem;
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
        color: $text-bg-primary;
    } 
    .navigation ul li.active a{
        color: $text-bg-primary-dark;
    }
    .navigation ul li a .icon{
        position: relative;
        min-width: 3rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        display: block;

    } 
    .navigation ul li a .icon i{
       font-size: 1em;
    } 
    .navigation ul li a .title{
        position: relative;
        height: 3rem;
        line-height: 3rem;
        display: block;
        padding-left: .5rem;
        white-space: normal;

    } 


</style>

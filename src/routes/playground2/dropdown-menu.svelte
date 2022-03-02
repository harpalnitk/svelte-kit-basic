<script>
  let index = 0;
    const links =[
        { id:1, name: 'Edit Profile', icon: 'fa fa-user' },
        { id:2, name: 'Inbox', icon: 'fas fa-comment-alt' },
        { id:3, name: 'Settings', icon: 'fas fa-cog' },
        { id:4, name: 'Support', icon: 'fas fa-question-circle' },
        { id:5, name: 'Logout', icon: 'fas fa-sign-out-alt' },

    ];

    let toggle = false;
</script>



<main>
<div class="card" class:active={toggle}>
    <div class="content">
        <div class="imgBx">
            <img src="/img/avatar/avatar-1.jpg" alt="avatar-1">
        </div>
        <h2>Someone Famous<br><span>Website Designer</span></h2>
    </div>
    <ul class="navigation">
        {#each links as link}
        <li>
            <a href="edit-profile">
                <i class="{link.icon}" aria-hidden="true"></i>    
                {link.name}
            </a>
        </li>
        {/each}

    </ul>
    <div class="toggle" class:active={toggle} on:click={()=> toggle = !toggle}>
        <i class="fas fa-chevron-down"></i>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 80vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
   background: #67a5d4;
}
.card{
    position: relative;
    width: 350px;
    // height: 400px;
    height: 120px;
    background: #fff;
    box-shadow: 0 50px 50px rgba(0,0,0,0.2);
    padding: 20px;
    overflow: hidden;
    transition: height 0.5s ease-in-out;
}
.card.active{
    height: 400px;
}
.card .content{
    display: flex;
    align-items: center;
}
.card .content .imgBx{
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    overflow: hidden;
}
.card .content .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card .content h2{
    margin-left: 15px;
    font-size: 1.3em;
    color: #111;
}
.card .content h2 span{
    font-size: 0.8em;
    font-weight: 400;
    color: #999;
}
.navigation {
    position: relative;
    top: 25px;
    border-top: 1px solid rgba(0,0,0,0.1);
    padding: 20px 0;
}
.navigation li{
    list-style: none;
    margin: 15px 0;

}
.navigation li a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #555;
    font-size: 1.1em;
    transition: color 0.25s;
}
.navigation li a:hover {
color: #36b3ff;

}
.navigation li a .fas,
.navigation li a .fa{
    font-size: 1.6em;
    margin-right: 15px;
}
.toggle{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background: #36b3ff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 100;
}
.toggle .fas{
    color: #fff;
    font-size: 1.4em;
    transition: transform ease-in-out 0.5s;
}
.card.active .toggle .fas{
transform: rotate(-180deg);
}
</style>
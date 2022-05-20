<script>
    let toggle = false;
    const links =[
        { id:1, name: 'Edit Profile', icon: 'fa fa-user' },
        { id:2, name: 'Inbox', icon: 'fas fa-comment-alt' },
        { id:3, name: 'Settings', icon: 'fas fa-cog' },
        { id:4, name: 'Support', icon: 'fas fa-question-circle' },
        { id:5, name: 'Logout', icon: 'fas fa-sign-out-alt' },

    ];
</script>
<main class="flex-center">
    <div class="navigation" class:active={toggle}>
        <div class="menu-toggle"  on:click="{()=>toggle= !toggle}">

        </div>
        <div class="profile">
            <div class="imgBx">
                <img src="/img/profile/profile-1.jpg" alt="profile_image">
            </div>
        </div>
        <ul class="menu">
{#each links as link}
<li>
    <a href="#{link.name}">
        <span class="icon"><i class="{link.icon}"></i></span>
        <span class="text">{link.name}</span>
    </a>

</li>

{/each}
        </ul>
    </div>
</main>
<style>
    main{
        min-height: 100vh;
        background: #f7f7f7;
    }
    .navigation{
        width: 80px;
      
        background: #fff;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: -20px 20px 50px rgba(0,0,0,0.05);
        transition: 0.5s;
        overflow: hidden;
    }
    .navigation.active{
        width: 400px;
    }
    .navigation .menu-toggle{
        position: relative;
        width: 80px;
        height: 70px;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0 20px;
        width: 100%;
        border-bottom: 1px solid rgba(0,0,0,0.05);
       
        
    }
    .navigation .menu-toggle::before{
content: '';
position: absolute;
width: 35px;
height: 2px;
background: #333;
transform: translateY(-10px);
transition: 0.5s;
    }
    .navigation .menu-toggle::after{
content: '';
position: absolute;
width: 35px;
height: 2px;
background: #333;
transform: translateY(10px);
transition: 0.5s;
box-shadow: 0 -10px #333;
    }
    .navigation.active .menu-toggle::before{
        transform: translateY(0px) rotate(45deg);
    }
    .navigation.active .menu-toggle::after{
        transform: translateY(0px) rotate(-45deg);
        box-shadow: 0 0 #333;
    }
    .navigation .profile{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        padding: 0 10px;
        width: 100%;
    }
    .navigation .profile .imgBx{
        position: relative;
        width: 60px;
        height: 60px;
        overflow: hidden;
        transition: 0.5s;
        border-radius: 50%;
    }
    .navigation.active .profile .imgBx{
       width: 200px;
       height: 200px; 
    }
    .navigation .profile .imgBx img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .navigation .menu{
        position: relative;
        width: 100%;
        padding: 10px;
        transition: 0.5s;
        border-top: 1px solid rgba(0,0,0,0.05);
    }
    .navigation.active .menu{
       padding: 10px 20px; 
    }
    .navigation .menu li{
        list-style: none;
    }
    .navigation .menu li a{
        position: relative;
        display: flex;
        text-decoration: none;
        color: #111;
        border-radius: 10px;
    }
    .navigation .menu li a:hover{
        background: #0084ff;
        color: #fff;
    }
    .navigation .menu li a .icon{
       position: relative;
       min-width: 60px;
       height: 60px;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 1.5em;

    }
    .navigation .menu li a .text{
position: relative;
height: 60px;
margin-left: 10px;
display: flex;
       justify-content: center;
       align-items: center;
       font-size: 1.25em;
    }
</style>
<script>
    let darkMode = false;
</script>

<main class='flex-center' class:darkMode={darkMode}>
    <div class="box">
        <div class="profile">
            <div class="imgBx">
                <img src="/img/profile/profile-1.jpg" alt="profile_img">
            </div>
            <h4 class="text">Harpal Singh<br><span>Creative Designer</span></h4>
        </div>
        <div class="menu">
            <li>
                <label for='title'>
                    <span class='title'> <i class="fas fa-wifi"></i> Wi-Fi</span>
                    <span class="action">
                        <input type="checkbox">
                       <i></i>
                    </span>
                </label>
            </li>
            <li>
                <label for='title'>
                    <span class='title'> <i class="fab fa-bluetooth-b"></i> Bluetooth</span>
                    <span class="action">
                        <input type="checkbox">
                       <i></i>
                    </span>
                </label>
            </li>
            <li>
                <label for='title'>
                    <span class='title'> <i class='fas fa-plane'></i> Airplane Mode</span>
                    <span class="action">
                        <input type="checkbox">
                       <i></i>
                    </span>
                </label>
            </li>
            <li>
                <label for='title'>
                    <span class='title'> <i class='fas fa-map-marker-alt'></i> Location</span>
                    <span class="action">
                        <input type="checkbox">
                       <i></i>
                    </span>
                </label>
            </li>
            <li>
                <label for='title'>
                    <span class='title'> <i class="far fa-moon"></i> Dark Mode</span>
                    <span class="action">
                        <input type="checkbox" bind:checked={darkMode}>
                       <i></i>
                    </span>
                </label>
            </li>
        </div>
    </div>
</main>

<style>
    main{
        min-height: 100vh;
        background: #f0f0f0;
        transition: 0.5s;
    }
    .darkMode{
      background: #222;  
    }
    .box{
        position: relative;
        width: 300px;
        padding: 30px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 30px 30px rgba(0,0,0,0.05);
        transition: 0.5s;
    }
    .darkMode .box{
       background: #292929; 
    }
    .profile{
       position: relative;
       display: flex;
       align-items: center;
       gap: 10px; 
    }
    .profile .imgBx{
        position: relative;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }
    .profile .imgBx img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .profile .text{
        font-weight: 500;
        color: #333;
        line-height: 1.2em;
        transition: 0.5s;

    }
    .darkMode  .profile .text{
color: #ddd;
    }
    .profile .text span{
        font-weight: 400;
        font-size: 0.85em;
        color: #555;
        transition: 0.5s;

    }
    .darkMode  .profile .text span{
        color: #aaa;
    }
    .menu{
        position: relative;
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px solid rgba(0,0,0,0.05);
        transition: 0.5s;

    }
    .darkMode .menu{
        border-top: 1px solid rgba(255,255,255,0.05);
    }

    .menu li{
        list-style: none;
        margin: 8px 0;
    }
    .menu li label{
        position: relative;
        display: flex;
        justify-content: space-between;
    }
    .menu li label span{
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
        color: #777;
        transition: 0.5s;
    }
   .darkMode .menu li label span{
    color: #aaa;
   }
    .menu li label span i{
        margin-right: 10px;
    }
    .menu li label .action{
        position: relative;
    }
    .menu li label .action input[type='checkbox']{
        position: relative;
        cursor: pointer;
        /* appearance: none;
        -webkit-appearance: none; */
        opacity: 0;
        z-index: 2;
        width: 30px;
    }
    .menu li label .action i{
        position: absolute;
        left: 0;
        width: 30px;
        height: 15px;
        background: #ddd;
        border-radius: 15px;
        transition: 0.5s;
    }
    .darkMode  .menu li label .action i{
        background: #666;
    }
    .menu li label .action input:checked[type='checkbox'] ~ i{
        background: #2aa0ff;
    }
    .menu li label .action i::before{
        content: '';
        position: absolute;
        top: 2.5px;
        left: 2.5px;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: 0.5s;
    }
    .menu li label .action input:checked[type='checkbox'] ~ i::before{
        left: calc(100% - 12.5px);
    }

</style>
<script>
   
    const icons = [
        {id:1, name:'fas fa-phone-alt'},
        {id:2, name:'fas fa-volume-up'},
        {id:3, name:'fab fa-bluetooth-b'},
        {id:4, name:'far fa-moon'},
        {id:5, name:'fas fa-plane'},
        {id:6, name:'fas fa-wifi'},
        ]
</script>



<main>
    <section class='dark'>
        <ul>
            {#each icons as icon}
            <li>
                <label>
                    <input type="checkbox" name=''>
                    <div class="icon-box">
                        <i class={icon.name}></i>
                    </div>
                </label>
            </li>
            {/each}
        </ul>
    </section>
    <section class='light'>
        <ul>
            {#each icons as icon}
            <li>
                <label>
                    <input type="checkbox" name=''>
                    <div class="icon-box">
                        <i class={icon.name}></i>
                    </div>
                </label>
            </li>
            {/each}
        </ul>
    </section>

</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
section{
    margin: 20px 0;
}
.dark {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111;
    ul{
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border: 3px solid #000;
    border-radius: 10px;
    padding: 20px 0;
    overflow: hidden;
    width:240px;
    background: linear-gradient(0deg, #000000,#0c0c0c);
}
ul::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.05);
    bottom: -50%;
    pointer-events: none;
    z-index: 1;

}
ul li {
    position: relative;
    list-style: none;
    text-align: center;
    margin: 15px;
}
ul li label{
    position: relative;

}
ul li label input[type="checkbox"]{
    position: absolute;
    cursor: pointer;
    opacity: 0;
}
ul li label .icon-box{
    width: 60px;
    height: 60px;
    background: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #000;
    border-radius: 10px;
    transition: 0.5s;
}
ul li label .icon-box i{
    font-size: 30px;
    color: #222;
    transition: 0.5s;
}
ul li label input[type="checkbox"]:checked ~ .icon-box{
background: #000;
border: 3px solid #fff;
box-shadow: 0 0 10px rgba(33,156,243,.5),
            0 0 20px rgba(33,156,243,.5),
            0 0 30px rgba(33,156,243,.5),
        inset 0 0 10px rgba(33,156,243,1);
}
ul li label input[type="checkbox"]:checked ~ .icon-box i{
color: #fff;
text-shadow: 0 0 10px rgba(33,156,243,1),
             0 0 10px rgba(33,156,243,1),
}
}

.light {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ebf5fc;

    ul{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 20px;
    width:240px;
    background: #ebf5fc;
    box-shadow: -2px -2px 5px rgba(255,255,255,1),
                3px 3px 5px rgba(0,0,0,0.1);
    // border: 3px solid #000;
   

    // overflow: hidden;
   
 
}
ul li {
    position: relative;
    list-style: none;
    text-align: center;
    margin: 15px;
}
ul li label{
    position: relative;

}
ul li label input[type="checkbox"]{
    position: absolute;
    cursor: pointer;
    opacity: 0;
}
ul li label .icon-box{
    width: 60px;
    height: 60px;
    background: #ebf5fc;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -2px -2px 5px rgba(255,255,255,1),
                3px 3px 5px rgba(0,0,0,0.1);
    border-radius: 10px;
   
}
ul li label .icon-box i{
    font-size: 30px;
    color: #6a9bd8;
    transition: 0.5s;
}
ul li label input[type="checkbox"]:checked ~ .icon-box{
    box-shadow: inset -2px -2px 5px rgba(255,255,255,1),
                inset 3px 3px 5px rgba(0,0,0,0.1);
}
ul li label input[type="checkbox"]:checked ~ .icon-box i{
    transform: scale(0.95);
}










}

</style>
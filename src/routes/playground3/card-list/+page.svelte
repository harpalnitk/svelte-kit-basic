<script>



    let creatorList = [
        {id:1,img:'avatar-1.jpg',rank:1,name:'Ricardo Flanagan',profession:'Digital Artist'},
        {id:2,img:'avatar-2.jpg',rank:2,name:'Christina Shaw',profession:'Photoshop Expert'},
        {id:3,img:'avatar-3.png',rank:3,name:'Clara Jones',profession:'Backend Developer'},
        {id:4,img:'avatar-4.png',rank:4,name:'Mark Davis',profession:'Illustrator Designer'},
        {id:5,img:'avatar-5.png',rank:5,name:'Shara Anderson',profession:'Food Vlogger'},
        // {id:6,img:'avatar-6.png',rank:6,name:'Mohammad Irshad',profession:'UX/UI Designer'},
        // {id:7,img:'avatar-7.png',rank:7,name:'Erik Karine',profession:'Food Vlogger'},
    ];
</script>
<main class='flex-center'>
    <section>
        <div class="box">
            <h3>Popular Creator List</h3>
            {#each creatorList as item}
            <div class="list">
                <div class="imgBx">
                    <img src="/img/avatar/{item.img}" alt="{item.name}">
                </div>
                <div class="content">
                    <h2 class='rank'><small>#</small>{item.id}</h2>
                    <h4>{item.name}</h4>
                    <p>{item.profession}</p>
                </div>
            </div>
            {/each}

        </div>
    </section>
</main>
<style>
main{
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    background: #fcfcfc;
}
.box{
    position: relative;
    min-width: 425px;
    background: #00bcd4;
    padding: 20px;
    box-shadow: 0 35px 50px rgba(0,0,0,0.1);
}
.box::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - 75px);
    height: 100%;
    background: #fff;

}
.box h3{
    position: relative;
    color: #333;
    font-size: 1.5em;
    margin-bottom: 20px;
    padding-left: 70px;
}
.box .list{
position: relative;
display: flex;
align-items: center;
padding: 10px;
margin: 10px 0;
cursor: pointer;
}
.box .list::before{
content: '';
position: absolute;
width: 100%;
height: 100%;
background: #00bcd4;
transition: transform 0.5s;
transform: scaleX(0);
transform-origin: right;
}
.box .list:hover::before{
    transition: transform 0.5s;
transform: scaleX(1);
transform-origin: left;
}
.box .list .imgBx{
position: relative;
min-width: 70px;
height: 70px;
background: #fff;
overflow: hidden;
border: 6px solid #fff;
box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
margin-right: 20px;
margin-left: 10px;
}
.box .list .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.box .list .content{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    color: #333;
}
.box .list .content .rank{
    position: absolute;
    right: 0;
    font-size: 2em;
    color: #fff;
    transform: scale(0);
    transition: 0.5s;
}
.box .list .content .rank small{
    font-weight: 500;
    opacity: 0.25;
}
.box .list:hover .content .rank{
    transform: scale(1);
}
.box .list .content h4{
   font-weight: 600;
   line-height: 1.2em;
   text-transform: uppercase; 
   transition: 0.5s;
}
.box .list .content p{
    opacity: 0.85;
    transition: 0.5s;
}
.box .list:hover .content h4,
.box .list:hover .content p{
    color: #fff;
}
</style>
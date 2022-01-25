<script>
    let list= [
        {id:1,img:'avatar-1.jpg',rank:1,name:'Ricardo Flanagan',profession:'Digital Artist'},
        {id:2,img:'avatar-2.jpg',rank:2,name:'Christina Shaw',profession:'Photoshop Expert'},
        {id:3,img:'avatar-3.png',rank:3,name:'Clara Jones',profession:'Backend Developer'},
        {id:4,img:'avatar-4.png',rank:4,name:'Mark Davis',profession:'Illustrator Designer'},
        {id:5,img:'avatar-5.png',rank:5,name:'Shara Anderson',profession:'Food Vlogger'},
        ]
</script>
<main>
<section class='flex-center'>
<div class="box">
    <h3>Popular Creator Rank List</h3>
    {#each list as item}
    <div class="list">
        <div class="imgBx">
            <img src="/img/avatar/{item.img}" alt="{item.name}">
        </div>
        <div class="content">
            <h2 class="rank"><small>#</small>{item.rank}</h2>
            <h4>{item.name}</h4>
            <p>{item.profession}</p>
        </div>
    </div>
    {/each}

    
</div>
</section>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
main{
    font-family: 'Poppins', sans-serif;
}
section{
   position: relative;
   background: #161623; 
   min-height: 100vh;
   overflow: hidden;
}
section::before{
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: linear-gradient(#ffc107,#e91e63);
    border-radius: 50%;
    transform: translate(-250px,-120px);
}
section::after{
    content: '';
    position: absolute;
    width: 350px;
    height: 350px;
    background: linear-gradient(#2196f3,#31ff38);
    border-radius: 50%;
    transform: translate(250px,150px);
}
.box{
    position: relative;
    min-width: 350px;
    min-height: 400px;
    background: rgba(255,255,255,0.1);
    box-shadow: 0 24px 40px rgba(0,0,0,0.1);
    border: 1px solid rgba(255,255,255,0.5);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    z-index: 10;
    padding: 20px;
    backdrop-filter: blur(25px);
}
.box h3{
    color: #fff;
    margin-bottom: 20px;

}
.box .list{
    position: relative;
    display: flex;
    padding: 10px;
    background: rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
    overflow: hidden;
    transition: 0.5s;
}
.box .list:hover{
    background: #fff;
    box-shadow: -15px 30px 50px rgba(0,0,0,0.5);
    transform: scale(1.15) translateX(30px) translateY(-15px);
    z-index: 1000;
}
.box .list .imgBx{
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 10px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
}
.box .list .content .rank{
    position: absolute;
    right: -50px;
    color: #03a9f4;
    transition: 0.5s;
    font-size: 2em;
}
.box .list .content .rank small{
    font-weight: 500;
    opacity: 0.25;
}
.box .list:hover .content .rank{
right: 20px;
}
.box .list .content h4{
  line-height: 1.2em;
  font-weight: 600;
    transition: 0.5s;
}
.box .list .content p{
   font-size: 0.75em;
    transition: 0.5s;
}
.box .list:hover .content h4,
.box .list:hover .content p{
   color: #333; 
}
</style>
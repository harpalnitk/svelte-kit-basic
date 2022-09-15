<script>
  
    import { onMount } from 'svelte';
    let jsReady = false;
    let mounted= false;
    onMount(() => {
            // The payment-form is ready.
            mounted = true;
            if (jsReady) {
                loadSwiper();
                console.log('mounted');
            }
        });

        function jsLoaded(){
            jsReady = true;
            if (mounted){
                console.log('script loaded');
                loadSwiper();
            }
        }

        function loadSwiper(){
            var swiper = new Swiper(".swiper-container", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
shadow:true,
slideShadows:true,
shadowOffset:20,
shadowScale:0.94
        },
        loop:true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
        }

        const slides = [
            { id:1, name:'Martha Angel', imgUrl:'/img/avatar/avatar-1.jpg', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae molestiae ipsam enim aut hic eveniet. Nam provident ipsum pariatur nobis et dignissimos dolore perspiciatis quas, sed laborum, voluptate recusandae!', desig:'UI/UX Designer' },
            { id:2, name:'John Cena', imgUrl:'/img/avatar/avatar-2.jpg', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae molestiae ipsam enim aut hic eveniet. Nam provident ipsum pariatur nobis et dignissimos dolore perspiciatis quas, sed laborum, voluptate recusandae!', desig:'Software Engineer' },
            { id:3, name:'Anthony Hopkins', imgUrl:'/img/avatar/avatar-3.png', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae molestiae ipsam enim aut hic eveniet. Nam provident ipsum pariatur nobis et dignissimos dolore perspiciatis quas, sed laborum, voluptate recusandae!', desig:'Sr Database Designer' },
            { id:4, name:'Robert De Niro', imgUrl:'/img/avatar/avatar-4.png', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae molestiae ipsam enim aut hic eveniet. Nam provident ipsum pariatur nobis et dignissimos dolore perspiciatis quas, sed laborum, voluptate recusandae!', desig:'Node Developer' },
            { id:5, name:'Kirsten', imgUrl:'/img/avatar/avatar-5.png', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae molestiae ipsam enim aut hic eveniet. Nam provident ipsum pariatur nobis et dignissimos dolore perspiciatis quas, sed laborum, voluptate recusandae!', desig:'Angular Developer' },

        ];
</script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js" on:load={jsLoaded}></script>
</svelte:head>



<main>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            {#each slides as slide}
              <div class="swiper-slide">
                  <div class="imgBx">
                      <img src="{slide.imgUrl}" alt="">
                  </div>
                  <div class="content">
                      <h2>{slide.name}<br><span>{slide.desig}</span></h2>
                  </div>
              </div>
            {/each}
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
    </div>

</main>



<style lang="scss">
	@import '../../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
main{
    background: #f5f5f5;
}
.swiper-container{
    width: 300px;
    height: 380px; //size changed from 300 to 380
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
}
.swiper-slide{
    background-position: center;
    background-size: cover;
    background: #f2f2f2; //added by us
}
//above copied from swiper.js
.swiper-container .swiper-slide .imgBx{
position: absolute;
width: 300px;
height: 300px;
}
.swiper-container .swiper-slide .imgBx img{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
}
.swiper-container .swiper-slide .content{
    position: absolute;
    bottom: 0;
    height: 80px;
    width: 100%;
    background: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-container .swiper-slide .content h2{
font-size: 20px;
}
.swiper-container .swiper-slide .content h2 span{
font-size: 16px;
color: #f44336;
}
</style>
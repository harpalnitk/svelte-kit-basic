<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
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
            var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        },
        loop:true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
        }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js" on:load={jsLoaded}></script>
</svelte:head>
<BasicPage title='Responsive Testimonial slider With Swiper.js' path='/cards'></BasicPage>


<main>
<div class="testimonials">
    <div class="swiper-container mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
           <div class="card">
               <div class="layer"></div>
               <div class="content">
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae molestiae ipsam enim aut hic eveniet. Nam provident ipsum pariatur nobis et dignissimos dolore perspiciatis quas, sed laborum, voluptate recusandae!</p>
                   <div class="imgBx">
                       <img src="/img/avatar/cosima-avatar.jpg" alt="">
                   </div>
                   <div class="details">
                       <h2>Someone Famous<br><span>Website Designer</span></h2>
                   </div>
               </div>
           </div>
          </div>
          <div class="swiper-slide">
            <div class="card">
                <div class="layer"></div>
                <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae molestiae ipsam enim aut hic eveniet. Nam provident ipsum pariatur nobis et dignissimos dolore perspiciatis quas, sed laborum, voluptate recusandae!</p>
                    <div class="imgBx">
                        <img src="/img/avatar/cosima-avatar.jpg" alt="">
                    </div>
                    <div class="details">
                        <h2>Someone Famous<br><span>Website Designer</span></h2>
                    </div>
                </div>
            </div>
           </div>
           <div class="swiper-slide">
            <div class="card">
                <div class="layer"></div>
                <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae molestiae ipsam enim aut hic eveniet. Nam provident ipsum pariatur nobis et dignissimos dolore perspiciatis quas, sed laborum, voluptate recusandae!</p>
                    <div class="imgBx">
                        <img src="/img/avatar/cosima-avatar.jpg" alt="">
                    </div>
                    <div class="details">
                        <h2>Someone Famous<br><span>Website Designer</span></h2>
                    </div>
                </div>
            </div>
           </div>
          </div>
          </div>
</div>
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
    background: #111;
    min-height: 100vh;
}
.testimonials{
    position: relative;
    max-width: 100%;
    -webkit-box-reflect: below 1px linear-gradient(transparent 70%, #0009)
}

// .swiper-container {
//         width: 100%;
//         padding-top: 50px;
//         padding-bottom: 50px;
//       }

      .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 350px;
        min-height: 350px;
        margin: 0 20px;
        background: #fff;
      }

      .swiper-container-3d .swiper-slide-shadow-left,
      .swiper-container-3d .swiper-slide-shadow-right{
          background-image: none;
      }


      .swiper-slide img {
        display: block;
        width: 100%;
      }
      .testimonials .card{
          position: relative;
          width: 100%;
        //   margin: 0 20px;
          background: #333;
          padding: 60px 40px;
          text-align: center;
          overflow: hidden;
      }
      .testimonials .card .layer{
          position: absolute;
          top: calc(100% - 2px);
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(#03a9f4, #e91ee3);
          z-index: 1;
          transition: 0.5s;
      }
      .testimonials .card:hover .layer{
         top: 0;
      }
      .testimonials .card .content{
position: relative;
z-index: 2;
      }
      .testimonials .card .content p{
font-size: 18px;
line-height: 24px;
margin-bottom: 20px;
color: #fff;
}
.testimonials .card .content .imgBx{
width: 100px;
height: 100px;
margin: 0 auto 10px;
border-radius: 50%;
overflow: hidden;
border: 4px solid #fff;
box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.testimonials .card .content h2{
    font-size: 18px;
    color: #fff;
}
.testimonials .card .content span{
    font-size: 14px;
    color: #03a9f4;
    transition: 0.5s;
}
.testimonials .card:hover .content span{
    color: #fff;
}
</style>
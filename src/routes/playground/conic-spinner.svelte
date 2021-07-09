<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Conic Gradient Spinner'></BasicPage>


<main>
   <!--  I first created a short <path> that represents the 
       shape of the ring and used it as 
       a clip-path on a simple <rect> element. -->
           <div class="part-1">
            <svg viewBox="0 0 100 100">
    
                <clipPath id="clip">
                  <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 8 a 42 42 0 0 0 0 84 42 42 0 0 0 0 -84" />
                </clipPath>
            
                <rect x="0" y="0" width="100" height="100" clip-path="url(#clip)" />
            </svg>
           </div>

           <!---The last step was to replace the <rect> with 
               something else that supports conic gradients,
                and the simplest way I’ve found is to use an 
                SVG <foreignObject> element with a regular <div>
                     inside it, and a conic-gradient as a 
                     background-image. Then all I needed to 
                     do was to set the clip-path on the 
                     <foreignObject> element, and that’s it.-->
           <div class="part-2">
            <svg viewBox="0 0 100 100">
    
                <clipPath id="clip">
                  <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 8 a 42 42 0 0 0 0 84 42 42 0 0 0 0 -84" />
                </clipPath>
            
                <foreignObject x="0" y="0" width="100" height="100" clip-path="url(#clip)">
                    <div class="gradient" xmlns="http://www.w3.org/1999/xhtml" />
                </foreignObject>
            </svg>
           </div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    div {
        display: flex;
        justify-content: center;
    }
    .part-1{

        svg {
  max-width: 240px;
}

rect {
  fill: orange;
}
    }

    .part-2{
        svg {
  max-width: 240px;
}

div.gradient {
  width: 100px; height: 100px;
  border-radius: 50%;
  background-image: conic-gradient(from 270deg, #ff4800 10%, #dfd902 35%, #20dc68, #0092f4, #da54d8 72% 75%, #ff4800 95%);
}
    }
</style>
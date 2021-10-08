<script>
   
    import { onMount } from "svelte";

    onMount(() => {
        if (CSS.paintWorklet) {  
            try {
                //We add the paint worklet using CSS.paintWorklet.addModule('your_js_file')
                CSS.paintWorklet.addModule('../js/paint/paint-blob-all.js'); 
                console.log('Js file loaded');
            } catch (error) {
                console.log('Error',error);
            }            
        
    }});
</script>



<section>
    <h2>Static elements</h2>
<img style="--n:20;--t:0;--b:20;--na:0;" src="https://picsum.photos/id/1069/150/150">
<img style="--n:12;--t:0;--b:10;--na:0;" src="https://picsum.photos/id/1069/150/150">
<img style="--n:18;--t:1;--b:20;--na:0;--seed:33" src="https://picsum.photos/id/1069/150/150">
<img style="--n:44;--t:0;--b:30;--na:1;" src="https://picsum.photos/id/1069/150/150">
<img style="--n:24;--t:1;--b:78;--na:2;--seed:34" src="https://picsum.photos/id/1069/150/150">
<h2>Hover animations</h2>
<img class="h" style="--n:26;--t:0;--b:20;--v:0;--na:0;" src="https://picsum.photos/id/1074/150/150">
<img class="h" style="--n:20;--t:1;--b:0;--v:50;--na:0;--seed:208" src="https://picsum.photos/id/1074/150/150">
<img class="h" style="--n:30;--t:1;--b:20;--v:-10;--na:0;--seed:566" src="https://picsum.photos/id/1074/150/150">
<img class="h s" style="--n:40;--t:0;--b:0;--v:10;--na:3;" src="https://picsum.photos/id/1074/150/150">
<img class="h s" style="--n:50;--t:1;--b:0;--v:20;--na:4;--seed:115" src="https://picsum.photos/id/1074/150/150">
<h2>keyframes animations</h2>
<img class="a1" style="--n:50;--t:1;--na:0;--seed:123" src="https://picsum.photos/id/1016/150/150">
<img class="a1" style="--n:60;--t:0;--na:2;" src="https://picsum.photos/id/1016/150/150">
<img class="a1" style="--n:12;--t:0;--na:0;" src="https://picsum.photos/id/1016/150/150">
<img class="a2" style="--n:15;--na:5;--seed:50" src="https://picsum.photos/id/1016/150/150">
<img class="a2" style="--n:60;--na:5;--seed:50" src="https://picsum.photos/id/1016/150/150">

<h2>Hover + keyframes animations</h2>
<img class="a2 bo" style="--n:10;--na:6;--seed:385;--v:20" src="https://picsum.photos/id/1022/150/150">
<img class="a2 bo" style="--n:8;--na:6;--seed:966;--v:-100" src="https://picsum.photos/id/1022/150/150">
<img class="a2 bo" style="--n:30;--na:6;--seed:580;--v:50" src="https://picsum.photos/id/1022/150/150">
<img class="a2 bo" style="--n:40;--na:6;--seed:666;--v:-30" src="https://picsum.photos/id/1022/150/150">
</section>


<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}


@property --b{
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}
@property --bo{
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

img {
  cursor:pointer;
  border-radius:50%;
  -webkit-mask:paint(blob);
  transition:--b .5s,--bo .5s;
}
.h:hover {
  --b:var(--v)!important
}

.s:hover {
  --b:0.1!important;
  transition:--b .5s cubic-bezier(.5,calc(var(--v)/(-.289*.1)),.5,calc(var(--v)/(.289*.1)));
}
.a1 {
  animation:b1 2s infinite alternate;
}
@keyframes b1{
  20% { --b:25 }
  50%,90% {--b:50}
  60% {--b:40}
}
.a2 {
  animation:b2 2s infinite linear;
}
@keyframes b2{
  0% { --b:0 }
  100% {--b:1}
}
.bo:hover {
  --bo:var(--v);
}

section {
  background:pink;
}

</style>
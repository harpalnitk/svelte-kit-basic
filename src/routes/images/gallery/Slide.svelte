<script>
    export let slideNo;
	export let totalSlides;
	export let image;
	export let altTag;
	export let attr;
 
</script>

    <!-- Full-width images with number text -->
<!-- Full-width images with number text -->
<div class="mySlides">
	<div class="numbertext">{slideNo} / {totalSlides}</div>
	<img src={image} alt={altTag} title={attr}>
</div>


<style lang="scss">
    @import '../../../styles/vars';

//     .mySlides {
//      overflow: hidden;
//      max-height: clamp(450px, 50vh, 600px);
//      display: grid;
//   grid-template: "container";
//   place-items: center;
//   place-content: center;
//     }

//     .mySlides > * {
//   grid-area: container;
//   max-width: 1000px;
// }

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  user-select: none;
}

</style>
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
    @import '../../styles/vars';

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
}

</style>
<!-- The mask-border CSS property sets a 
border image to an element’s masked
 border area. It is s shorthand for
 setting the mask-border-source, 
 mask-border-slice, mask-border-width,
  mask-border-outset, mask-border-repeat,
   and mask-border-mode properties in a
    single declaration -->

    <!-- The only required property value for mask-border
     is mask-border-source, which points to the image 
     file used for the border. The other properties
      default to their initial values if they’re
       unspecified. -->

       <!-- mask-border: <'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'> -->

       <!--/* source */
mask-border: url('mask.png');
/* source | slice | repeat */
mask-border: url('mask.webp') 10 space;
/* source | slice | width */
mask-border: url('mask.png') 15 / 5px;
/* source | slice | width | outset | repeat | mode */            
mask-border: url('mask.png') 20 / 25px / 5px round alpha;
/* All values */
mask-border: url(img.png) 20% 30% 25px 40 / 2em 3em 4em 1.5em / 10px 20px 15px 30px space;
-->

<!--Applying a mask border
The whole process of a mask border happens in the following steps:

An image file for the mask border image is specified using mask-border-source property.
The image is sliced into nine images using the mask-border-slice property.
The nine images are scaled according to the value specified using the mask-border-width and mask-border-repeat properties.
After the images have been scaled, they are positioned and tiled to fill their respective areas using the mask-border-repeat property.


/* Keyword value */
mask-border-source: none;

/* <image> values */
mask-border-source: url(img.webp);
mask-border-source: linear-gradient(90deg, #f00, #00f);
mask-border-source: radial-gradient(#e66465, #9198e5);

mask-border-mode
The mask-border-mode property specifies whether the 
source image defined by mask-border-source is treated
 as an alpha mask or a luminance mask.

 mask-border-slice
The mask-border-slice property sets inward offsets from the four edges of the mask
 image defined by mask-border-source, dividing it 
 into nine pieces

 /* top | right | bottom | left */
mask-border-slice: 10 12 15 5;

By default, the center of the source image is discarded and treated as fully transparent black,
 unless the fill keyword is specified

 mask-border-slice: 10 12 15 5 fill;

 mask-border-slice accepts up to four positive,
  unitless numbers or percentages, and an optional fill keyword.
-->

<!--mask-border-outset
The mask-border-outset property specifies how far the mask border image area extends beyond the border box.

As we said earlier, by default, the boundaries of the border mask image area 
correspond to the boundaries of the element’s border box. However,
 the boundaries of the border mask image area can be extended using
  the mask-border-outset property.


/* <number> value */
mask-border-outset: 5;

/* <length> value */
mask-border-outset: 10px;

/* Multiple values */
mask-border-outset: 1em 1.5em;
mask-border-outset: 15px 10px 5;
mask-border-outset: 10 1rem 2rem 0.5rem;-->

<script>
     import { onMount } from 'svelte';
    let basicSection;
    let fillVariable;
    let sliceVariable = 100;
    let widthVariable = 100;
    let outsetVariable = 0;
    let repeatVariable;
    onMount(() => {

        });

    

</script>


<main class='flex-center'>
    <h3>Basic Mask Border</h3>
    <section class="basic" bind:this={basicSection}>
        <div class="demo">
            <!-- Main element on which border mask is applied -->
            <div class="element" style='
            -webkit-mask-box-image-slice: {sliceVariable} {fillVariable ? 'fill' : ''};
            -webkit-mask-box-image-width:{widthVariable}px;
            -webkit-mask-box-image-outset:{outsetVariable}px;
            -webkit-mask-box-image-repeat:{repeatVariable};
            '>
              <p>Masking allows you to display selected parts of an element while hiding the rest.</p>
              <p>The mask-border property is used to apply a border mask image to an element.</p>
            </div>
          
            <div class="input-wrapper">
              <input type="checkbox" id="switch" bind:checked={fillVariable}/>
              <label for="switch" class="label">fill</label>
            </div>      
          
            <div class="input-wrapper">
              <label for="slice">Slice:</label>
              <input id="slice" type="range" min="0" max="300" step="1" bind:value={sliceVariable} />
              <span class="slice-value">{sliceVariable} {fillVariable ? 'fill' : ''}</span>
            </div>

            <div class="input-wrapper">
                <label for="width">Width:</label>
                <input id="width" type="range" min="0" max="300" step="1" bind:value={widthVariable} />
                <span class="width-value">{widthVariable}px</span>
              </div>

              <div class="input-wrapper">
                <label for="outset">Outset:</label>
                <input id="outset" type="range" min="0" max="300" step="1" bind:value={outsetVariable} />
                <span class="outset-value">{outsetVariable}px</span>
              </div>
              <select name="" id="select" bind:value="{repeatVariable}">
                <option value="stretch" selected>stretch</option>
                <option value="repeat">repeat</option>
                <option value="round">round</option>
                <option value="space">space</option>
              </select>  
          </div>
    </section>
</main>

<style lang='scss'>

main {
    flex-direction: column;
  --color: #ffc000;
  --bg: #1b1b1b;
  /* accent-color: var(--color);   */
     
}

input {
  outline: none;
}
select:focus-visible,
input:focus-visible {
  outline: 1px dashed var(--color);
  outline-offset: 3px;
}
    h3{
        margin: 1rem auto;
    }
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto;
        padding: 1rem;
        color: #eee;
        font-size: 1.1em;        
        font-family: system-ui;
        padding: 2rem;
        background-color: var(--bg); 
    }
    .basic{
        .demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
.element {
  width: 300px;
  height: 300px;
  background-color: var(--color);
  padding: 20px;
  color: #333;
  font-weight: 600;
//   -webkit-mask-box-image-source: linear-gradient(90deg, #f00, #00f);
//   -webkit-mask-box-image-source: radial-gradient(#e66465, #9198e5);
  -webkit-mask-box-image-source: url('/img/misc/border-mask.png');
  -webkit-mask-box-image-slice: 100;
  -webkit-mask-box-image-width: 100px;  
  -webkit-mask-box-image-repeat: round;

}          

input[type="range"] {
  width: 300px;
}
select {
  padding: .5rem 1rem;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: .5em;
  user-select: none;
}

.label {
  cursor: pointer;
  font-weight: bold;
}  
@supports not (mask-border: none) {

main::before {    
  box-sizing: border-box;
  content: "⚠️ Your browser doesn't support mask-border";
  display: block;
  max-width: 72rem;
  color: #f44336;
  font-weight: bold;
  padding: 2rem;
  margin: 0 auto 2rem;
  text-align: center;
}
}
    }
</style>
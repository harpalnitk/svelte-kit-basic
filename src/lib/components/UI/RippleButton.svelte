<script>
      export let width = 'auto';
      export let text = 'button';
let rX;
let rY;
let ripple = false;
const addRipple = (e)=>{
    ripple = true;

let x = e.clientX - e.target.offsetLeft; 
let y = e.clientY - e.target.offsetTop;
rX = x + 'px';
rY = y + 'px';
// Remove the span class 
setTimeout(()=>{
    ripple = false;
},500);
}
</script>
<a 
href="/playground/ripple-button" 
style="width: {width}{width === 'auto'? '': '%'}"
on:click="{addRipple}">
<span style='left:{rX};top:{rY}' class:ripple></span>
{text}</a>

<style lang="scss">
    @import '../../../styles/vars';
    a{
        // position: relative;
        // display: inline-block;
        // padding: 12px 36px;
        // margin: 10px;
        // color: #fff;
        // text-decoration: none;
        // text-transform: uppercase;
        // font-size: 18px;
        // letter-spacing: 2px;
        // border-radius: 40px;
        // overflow: hidden;
        // background: linear-gradient(90deg, #0162c8, #55e7fc);
       // background: linear-gradient(90deg, #755bea, #ff72c0);
       font: inherit;
    border: 1px solid $primary-color;
    background: $primary-color;
    background: linear-gradient(90deg, $primary-color, $secondary-color);
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 40px;
    box-shadow: 1px 1px 3px $anchor-box-shadow;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    }

    .ripple{
        position: absolute;
        background: #fff;
        transform: translate(-50%, -50%);
        pointer-events: none;
        border-radius: 50%;
        animation: animate .5s linear infinite;
    }
    @keyframes animate {
        0%{
            width: 0px;
            height: 0px;
            opacity: 0.5;
        }
        100%{
            width: 500px;
            height: 500px;
            opacity: 0;
        }
    }
    </style>
<script>
    
export let background = '#27022d';
export let hoverBackground = '#a41ee9';
let color = background;

const handleMouseOver = ()=>{
    color = hoverBackground;
}
const handleMouseOut = ()=>{
    color = background;
}
</script>

<a href="shine-1" 
style="background:{color}"
on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} 
>Shine Button</a>

<style lang="scss">
    @import '../../../styles/vars';
    a{
    position: relative;
    padding: 15px 30px;
    margin: 10px;
    // background: #27022d;
    color: #fff;
    text-decoration: none;
    letter-spacing: 1px;
    border: 1px solid #000;
    transition: 0.5s;
    overflow: hidden;
}
// a:hover{
//     //background: #a41ee9;
// }
a::before{
content: '';
position: absolute;
top: 0;
left: -100%;
width: 100%;
height: 100%;
background: linear-gradient(90deg,transparent,#fff,transparent);
transition: 0.5s;
}
a:hover::before{
    left: 100%;
}
    </style>
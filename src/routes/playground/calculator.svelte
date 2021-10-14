<script>
  
    let value='';

    const evaluate = ()=>{
        value = eval(value);
    }
</script>



<main>
<form class='calculator' name='calc'>
    <input class='value' type="text" name='txt' value={value} readonly>
    <span class='num clear' on:click={()=>{value=''}} >c</span>
    <span class='num' on:click={()=>{value +='/'}} >/</span>
    <span class='num' on:click={()=>{value +='*'}} >*</span>
    <span class='num' on:click={()=>{value +='7'}} >7</span>
    <span class='num' on:click={()=>{value +='8'}} >8</span>
    <span class='num' on:click={()=>{value +='9'}} >9</span>
    <span class='num' on:click={()=>{value +='-'}}>-</span>
    <span class='num' on:click={()=>{value +='4'}} >4</span>
    <span class='num' on:click={()=>{value +='5'}} >5</span>
    <span class='num' on:click={()=>{value +='6'}} >6</span>
    <span class='num plus' on:click={()=>{value +='+'}} >+</span>
    <span class='num' on:click={()=>{value +='3'}} >3</span>
    <span class='num' on:click={()=>{value +='2'}} >2</span>
    <span class='num' on:click={()=>{value +='1'}} >1</span>
    <span class='num' on:click={()=>{value +='0'}} >0</span>
    <span class='num' on:click={()=>{value +='00'}} >00</span>
    <span class='num' on:click={()=>{value +='.'}} >.</span>
    <span class='num equal' on:click={evaluate}>=</span>
</form>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
}

main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #091921;
}
.calculator{
    position: relative;
    display: grid;
}
.calculator .value{
    grid-column: span 4;
    height: 100px;
    text-align: right;
    border: none;
    outline: none;
    padding: .6rem;
    font-size: 1.1rem;
}
.calculator span{
    display: grid;
    width: 60px;
    height: 60px;
    color: #fff;
    background: #0c2835;
    place-items: center;
    border: 1px solid rgba(0,0,0,0.1);
}
.calculator span:active{
    background: #74ff3b;
    color: #111;
}
.calculator span.clear{
    grid-column: span 2;
    width: 120px;
    background: #ff3077;
}
.calculator span.plus{
    grid-row: span 2;
    height: 120px;
}
.calculator span.equal{
background: #03b1ff;
}
</style>
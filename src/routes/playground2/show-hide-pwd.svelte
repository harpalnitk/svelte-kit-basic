<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    let showPW = false;
</script>
<BasicPage title='Show Hide Password' path='/playground2'></BasicPage>


<main>
<div class="inputBox">
    <input  type={showPW ? "text" : "password"}  name="" placeholder="Enter Password" id="password">
<div id="toggle" 
class:active={showPW}
on:click={() => showPW = !showPW}>&#128065;</div>
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
    background: #f8f8f8;
}
.inputBox{
    position: relative;
    width: 270px;
    height: 50px;
}
.inputBox input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    padding: 0 20px;
    font-size: 16px;
    box-sizing: border-box;
    outline: none;
    border-radius: 8px;
    box-shadow: -4px -4px 10px rgba(white,1),
               inset 4px 4px 10px rgba(black,.05),
               inset -4px -4px 10px rgba(white,1),
               4px 4px 10px rgba(black,.05);
}
.inputBox input::placeholder{
    color: #ccc;
}
//128065	
#toggle{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
   // width: 30px;
   // height: 30px;
    font-size: 24px;
   // background-size: cover;
    cursor: pointer;
}
#toggle::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    display: none;
}
#toggle.active::before{
display: block;
}
</style>
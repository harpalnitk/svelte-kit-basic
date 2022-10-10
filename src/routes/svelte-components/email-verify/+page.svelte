<script>
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let email='';

    $: console.log('Email', email);
    $: valid = email.match(pattern);

</script>
<main class='flex-center'>
    <div class="box">
        <h3>Email Validation Check</h3>
        <form id='form' action='#' class:valid={valid} class:invalid={!valid && email}>
            <div class="inputBox">
               <input type="text" id="email" placeholder="Enter Email Address" bind:value={email}> 
           <span id="text" style="color:{valid ? '#4caf50':'#f44336'}">{valid  ? 'Your Email Address is Valid' : !email ? '' : 'Please Enter Valid Email Address'}</span>
            </div>
        </form>
    </div>
</main>

<style lang='scss'>
main{
  min-height: 100vh;
  background: linear-gradient(45deg,#4e65ff,#92effd);  
}
.box{
    background: #fff;
    padding: 15px 40px;
    box-shadow: 15px 15px rgba(0,0,0,0.1);
}
.box h3{
    position: relative;
    font-size: 1.25em;
    color: #ccc;
    letter-spacing: 0.1em;
    font-weight: 500;
    margin-bottom: 5px;
}
.box #form{
    position: relative;
}
.box #form #email{
    width: 400px;
    outline: none;
    border: none;
    border-bottom: 2px solid #333;
    color: #333;
    padding: 10px 0;
    font-weight: 500;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}
.box .inputBox{
    position: relative;
}
#text{
    display: block;
    color: #999;
    font-weight: 500;
    padding: 5px 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.75em;
}
.box #form.invalid .inputBox::before{
    content:'';
    position: absolute;
    right: 0;
    top: 12px;
    width: 24px;
    height: 24px;
    background: url(/img/misc/invalid.png);
    background-size: cover;
}
.box #form.valid .inputBox::before{
    content:'';
    position: absolute;
    right: 0;
    top: 12px;
    width: 24px;
    height: 24px;
    background: url(/img/misc/valid.png);
    background-size: cover;
}
</style>
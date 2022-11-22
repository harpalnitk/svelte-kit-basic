<script>
 
</script>



<main>
<div class="container">
    <p>Are you 18 years old ?</p>
    <div>
        <label for="age">
            <input type="radio" name="age" class='sr-only'>
            <i class='fa fa-check' aria-hidden="true"></i>
        </label>
        <label for="age">
            <input type="radio" name="age" class='sr-only'>
            <i class='fa fa-times' aria-hidden="true"></i>
        </label>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../../styles/vars';
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
    background: #091921;
}
.container{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container p {
    color: #215e65;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 5px;
}
.container label{
    position: relative;
}
.container label input{
     appearance: none;
     -webkit-appearance: none !important;
     cursor: pointer;
}
.container label .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  .container label input[type="radio"] {
    position: absolute;
  }
.container label .fa{
position: relative;
width: 2.5rem;
height: 2.5rem;
background: #091921;
line-height: 2.5rem;
text-align: center;
margin: 0 4px;
color: #6f6f6f;
font-size: 1rem;
border-radius: 50%;
cursor: pointer;
box-shadow: -1px -1px 3px rgba(255,255,255,0.1),
            2px 2px 6px rgba(0,0,0,0.8);
}
.container label .fa:hover{
    box-shadow: -1px -1px 3px rgba(255,255,255,0.1),
            2px 2px 6px rgba(0,0,0,0.8),
            inset -2px -2px 10px rgba(255,255,255,0.05),
            inset 2px 2px 10px rgba(0,0,0,0.5);
}

.container label input[type="radio"]:checked ~ .fa{
color: #00fff1;
box-shadow: inset -1px -1px 3px rgba(255,255,255,0.1),
            inset 2px 2px 6px rgba(0,0,0,1);
text-shadow: 0 0 5px #00fff1,
             0 0 20px #00fff1;

}          

</style>
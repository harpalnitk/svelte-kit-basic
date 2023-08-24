<script>
   
	export let size = '2rem';
    export let background = '#382f45';
    export let question = 'Do you like this?';
    export let opt1 = 'Yes';
    export let opt2 = 'No';
</script>

<div class="center" style="--size:{size}; background:{background}">
<div class="container">
    <p>{question}</p>
    <label>
        <input type="radio" name="yesNo">
        <span class="check"></span>
        {opt1}
    </label>
    <label>
        <input type="radio" name="yesNo">
        <span class="cross"></span>
        {opt2}
    </label>
</div>
</div>

<style>
	.center {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* text-align: center; */
        /* background: #382f45; */
	}
    .container{
        position: relative;
        display: flex;
        flex-direction: column;
    }
    p{
        color: #fff;
        font-size: var(--size);
        margin-bottom: calc(var(--size) / 10);
    }
    label{
        position: relative;
        margin: calc(var(--size) / 6) 0;
        cursor: pointer;
        align-items: center;
        font-size: var(--size);
        color: #fff;
    }
    label input{
        -webkit-appearance: none;
        appearance: none;
        /* display: none; */
        outline: none;
    }
    label span{
        position: relative;
        display: inline-block;
        width: var(--size);
        height: var(--size);
        /* background: #ccc; */
        margin-right:calc(var(--size) / 2);
        transition: 0.5s;
    }
    label span::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: calc(var(--size) / 10);
        background: #fff;
        box-shadow: 0 calc(-9 * (var(--size) / 10)) 0 #fff;
        transition: 0.5s;
    }

    label input:checked ~ span.check::before{
background: #0f0;
box-shadow: 0 0 0 transparent;
    }
    label input:checked ~ span.cross::before{
background: #f00;
box-shadow: 0 0 0 transparent;
transform: rotate(-45deg) translate(calc(var(--size) / 3),calc(var(--size) / -3));
    }
    label span::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: calc(var(--size) / 10);
        height: 100%;
        background: #fff;
        box-shadow: calc(9 * (var(--size) / 10)) 0 0 #fff;
    }
    label input:checked ~ span.check::after{
        height: 50%;
background: #0f0;
box-shadow: 0 0 0 transparent;
    }
    label input:checked ~ span.check{
        transform: rotate(-45deg) translate(calc(7 * (var(--size) / 30)),calc(-7 * (var(--size) / 30)));
    }

    label input:checked ~ span.cross::after{
background: #f00;
box-shadow: 0 0 0 transparent;
transform: rotate(-45deg) translate(calc(var(--size) / 3),calc(var(--size) / 3));
    }


</style>

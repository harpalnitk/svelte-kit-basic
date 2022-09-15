<script>
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    export let size = 80;
</script>
<main class='flex-center' >
<label style="--size:{size}">
    <input type="checkbox">
    <span>
        <i></i>
    </span>
</label>

</main>

<style>
main{
    min-height: 100vh;
}
label{
    position: relative;
    width: calc(var(--size) * 2px);
    height: calc(var(--size) * 1px);
    cursor: pointer;
}
label input{
    position: relative;
    z-index: 1;
    appearance: none;
}
label span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fe0000;
    border-radius: calc(var(--size) * 1px);
    transition: 0.5s;
    box-shadow: 0 15px 25px #fe000066;
}
label input:checked ~ span{
    background: #05be05;
    box-shadow: 0 15px 25px #05be0566;
}
label span i{
    position: absolute;
    top: calc(var(--size) * 1px / 20);
    left: calc(var(--size) * 1px / 20);
    width: calc(var(--size) * 9px / 10);
    height: calc(var(--size) * 9px / 10);
    background: #fff;
    border-radius: 50%;
    transition: 0.5s;
}
label input:checked ~ span i{
    left:calc(var(--size) * 21px / 20);
}
label span i::before{
content: '';
position: absolute;
top: calc(var(--size) * 11px / 40);
left: calc(var(--size) * 3px / 20);
width: calc(var(--size) * 3px / 20);
height: calc(var(--size) * 3px / 20);
border-radius: 50%;
background: #fe0000;
box-shadow: calc(var(--size) * 7px / 16) 0 0 #fe0000;
transition: 0.5s;
}
label input:checked ~ span i::before{
    background: #05be05;
box-shadow: calc(var(--size) * 7px / 16) 0 0 #05be05;
}
label span i::after{
    content: '';
position: absolute;
bottom: calc(var(--size) * 3px / 16);
left: calc(50% - (var(--size) * 3px / 16));
width: calc(var(--size) * 3px / 8);
height: calc(var(--size) * 3px / 40);
border-radius: calc(var(--size) * 3px / 40);
background: #fe0000;
transition: 0.5s;
}
label input:checked ~ span i::after{
    background: #05be05;
    border-radius: 0;
    bottom: calc(var(--size) * 3px / 20);
    height: calc(var(--size) * 3px / 16);
    border-bottom-left-radius: calc(var(--size) * 3px / 16);
    border-bottom-right-radius: calc(var(--size) * 3px / 16);
}
</style>
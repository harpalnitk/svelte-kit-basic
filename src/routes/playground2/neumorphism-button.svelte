<script>
   
</script>



<main>
<a href="button"><span>Button</span></a>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 60vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f3f7;
}
a{
    position: relative;
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    color: #5a84a2;
    font-size: 18px;
    border-radius: 40px;
    box-shadow: -2px -2px 8px rgba(255,255,255,1),
                -2px -2px 12px rgba(255,255,255,0.5),
                inset 2px 2px 4px rgba(255,255,255,0.1),
                2px 2px 8px rgba(0,0,0,0.15);
}
a:hover{
    box-shadow: inset -2px -2px 8px rgba(255,255,255,1),
                inset -2px -2px 12px rgba(255,255,255,0.5),
                inset 2px 2px 4px rgba(255,255,255,0.1),
                inset 2px 2px 8px rgba(0,0,0,0.15); 
}
a:hover span{
    display: inline-block;
    transform: scale(0.98);
}
</style>
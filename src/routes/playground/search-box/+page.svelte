<script>
  
    
</script>



<main>
    <div class="container">
        <div class="search-box">
            <input class='search-txt' type="text" name='' placeholder='Type to search'>
            <a href="search" class='search-btn'>
              <i class='fas fa-search'></i>
            </a>
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
.container{
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 2px solid #e84118;
    border-radius: 40px;
    padding: 5px;
}
.search-box{
   background: #2f3640;
   height: 40px;
   border-radius: 40px;
   padding: 0 10px;
}
.search-box:hover > .search-txt{
    width: 240px;
    padding: 0 6px;
}
.search-box:hover > .search-btn{
background: white;
}
.search-box a{
    text-decoration: none;
}
.search-btn{
    color: #e84118;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}
.search-txt{
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
}
</style>
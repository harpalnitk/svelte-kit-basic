<script></script>
<main class='flex-center'>
    <div class="loader">
        {#each Array(10) as _,i}
        <span style="--i:{i+1}"></span>
        {/each}
      
    </div>
</main>
<style>
main{
    min-height: 100vh;
    overflow: hidden;
    background: #001f25;
}
.loader{
    position: relative;
    width: 300px;
    height: 300px;
}
.loader span{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
transform: rotate(calc(36deg * var(--i)));
}
.loader span::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    box-sizing: border-box;
    background: transparent;
    border: 4px solid #00efff;
    box-shadow: 0 0 20px #00efff,
    -30px -30px 0 #00efff,
    -30px -30px 20px #00efff,
    30px 30px 0 #00efff,
    30px 30px 20px #00efff,
    -30px 30px 0 #00efff,
    -30px 30px 20px #00efff,
    30px -30px 0 #00efff,
    30px -30px 20px #00efff;
    animation: animate 5s linear infinite;
    animation-delay: calc(-0.25s * var(--i));
    transform-origin: 20px;
    transition: 2s;
}
.loader:hover span::before{
    transform-origin: 250px;
    box-shadow: 0 0 20px #00efff,
    -200px -200px 0 #00efff,
    -200px -200px 20px #00efff,
    200px 200px 0 #00efff,
    200px 200px 20px #00efff,
    -200px 200px 0 #00efff,
    -200px 200px 20px #00efff,
    200px -200px 0 #00efff,
    200px -200px 20px #00efff;
}
@keyframes animate{
  0%{
      transform: rotate(0deg);
      filter: hue-rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
      filter: hue-rotate(360deg);
  }   
}
</style>
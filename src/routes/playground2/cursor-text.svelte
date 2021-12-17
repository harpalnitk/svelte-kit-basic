<main class='flex-center'>
    <h2 data-text='creative...'>Creative...</h2>
</main>

<style>
    main{
      min-height: 100vh;
      background: #252839;
    }
    h2{
        position: relative;
        font-size: 14vw;
        color: #252839;
        -webkit-text-stroke: 0.3vw #383d52;
        text-transform: uppercase;
    }
    h2::before{
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        color: #01fe87;
        -webkit-text-stroke: 0vw #383d52;
        border-right: 2px solid #01fe87;
        overflow: hidden;
        animation: animate 6s linear infinite;

    }
    @keyframes animate{
        0%,10%,100%{
            width:0;
        }
        70%,90%{
            width:100%;
        }
    }
</style>
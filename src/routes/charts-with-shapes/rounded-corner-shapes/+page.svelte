<main class='flex-center'>


<section class="clip-path">
    <h1>With Clip Path</h1>
    <div class="box"></div>
</section>

<section class="svg-filter">
    <h1>With SVG Filter</h1>
    <div class="hexagone"></div>
    <div class="triangle"></div>
    <div class="star" style="color:gold"></div>
    <div class="arrow" style="color:green"></div>
    <div class="custom"></div>
    
    <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
            <filter id="round">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
        </defs>
    </svg>
</section>

<section class="only-css">
    <h1>With Only CSS</h1>
    <div class="hexagone"></div>
<div class="triangle"></div>
<div class="star" style="color:rgb(255 0 255)"></div>
<div class="arrow" style="color:rgb(0 255 0)"></div>
<div class="custom" style="color:rgb(0 255 255)"></div>
</section>
</main>

<style lang="scss">
    main{
        flex-direction: column;
    }
    section{
        margin-bottom: 1rem;
        border: 1px solid grey;
        min-width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        h1{
            border-bottom: 1px dotted limegreen;
            margin-bottom: 1rem;
        }
    }

    // WITH CLIP PATHS
    .clip-path{
        .box {
  width: 150px;
  height: 150px;
  background: red;
  clip-path: path(
    "M38,2 L82,2 A12,12 0 0,1 94,10 L112,44 A12,12 0 0,1 112,56 L94,90 A12,12 0 0,1 82,98 L38,98 A12,12 0 0,1 26,90 L8,56 A12,12 0 0,1 8,44 L26,10 A12,12 0 0,1 38,2");
}
    }

    //WITH SVG

    .svg-filter{
        div[class] {
  display:inline-block;
  width:150px;
  color:red;
  margin:20px;
  filter:url(#round); // this filter gives rounded shape to corners
}
.hexagone::before {
   content:"";
   display:block;
   padding-top:86.6%;
   background:currentColor;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
.triangle::before {
   content:"";
   display:block;
   padding-top:86.6%;
   background:url(https://picsum.photos/id/1061/300/300) center/cover;
   clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.star::before {
   content:"";
   display:block;
   padding-top:100%;
   background:currentColor;
   clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
.arrow::before {
   content:"";
   display:block;
   padding-top:70%;
   background:currentColor;
   clip-path: polygon(40% 0%, 40% 40%, 100% 40%, 100% 60%, 40% 60%, 40% 100%, 0% 50%);
}
.custom::before {
   content:"";
   display:block;
   padding-top:100%;
   background: conic-gradient(at 53% 47%, orange,pink,purple);
   clip-path: polygon(50% 0%, 50% 50%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
}
    }

    // WITH ONLY CSS
    .only-css{
        div[class] {
  display:inline-block;
  width:150px;
  color:red;
  margin:10px;
  background:#fff;
  filter:blur(5px) contrast(10);//this line gives rounded corners
  padding:10px;
}
.hexagone::before {
   content:"";
   display:block;
   padding-top:86.6%; //gives height
   background:currentColor;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
.triangle::before {
   content:"";
   display:block;
   padding-top:86.6%;
   background:currentColor;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.star::before {
   content:"";
   display:block;
   padding-top:100%;
   background:currentColor;
   clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
.arrow::before {
   content:"";
   display:block;
   padding-top:70%;
   background:currentColor;
   clip-path: polygon(40% 0%, 40% 40%, 100% 40%, 100% 60%, 40% 60%, 40% 100%, 0% 50%);
}
.custom::before {
   content:"";
   display:block;
   padding-top:100%;
   background:currentColor;
   clip-path: polygon(50% 0%, 50% 50%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
}
    }

</style>
<script>
  
</script>


<section>
    <div class="img-div">
        <img
          class="img-1"
          src="https://picsum.photos/id/1069/400/400"
          alt="cssTest"
        />
      
        <img
          class="img-2"
          src="https://picsum.photos/id/1025/400/400"
          alt="cssTest"
        />
      </div>
      
      <!-- https://css-tricks.com/clipping-masking-css/ 
          Masks are images; Clips are paths.
      
      Imagine a square image that is a left-to-right, 
      black-to-white gradient. That can be a mask. The
       element it is applied to will be transparent
        (see-through) where there is black in our
         gradient mask image, and opaque (normal)
          where there is white. So the final result 
          will be an element that fades in from left to right.
      CLIP_PATH
      Clips are always vector paths. 
      Outside the path is transparent,
       inside the path is opaque.
      clip only works if the element is absolutely positioned
      clip can only do rectangles.
      .clip-examples {
      
        clip-path: rectangle(x, y, width, height, rounded-x, rounded-y)
                
        clip-path: inset-rectangle(from top, from right, from bottom, from left, rounded-x, rounded-y)
        /* Looks like this is what rect() used to be like with clip */
        /* Will replace inset(), I suppose */
      
        clip-path: polygon(a, bunch, of, points)
        clip-path: circle(radius at x, y)
        clip-path: ellipse(radius-x, radius-y at x, y)
      
      /////////////////////////////////////////
        CLIP PATH WITH SVG
      /////////////////////////////////////////
        <img class="clip-svg" src="harry.jpg" alt="Harry Potter">
      
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip">
            <circle cx="100" cy="100" r="40" />
            <circle cx="60" cy="60" r="40" />
          </clipPath>
        </defs>
      </svg>
      
      .clip-svg {
        clip-path: url(#myClip);
      }
      }
      /////////////////////////////////////////////////////////
      MASK
      ///////////////////////////////////////////////////
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/Harry-Potter-1-.jpg" alt="" />
      img {
        width: 150px;
        mask-image: -webkit-gradient(linear, left top, right bottom, 
            color-stop(0.00,  rgba(0,0,0,1)),
            color-stop(0.35,  rgba(0,0,0,1)),
            color-stop(0.50,  rgba(0,0,0,0)),
            color-stop(0.65,  rgba(0,0,0,0)),
            color-stop(1.00,  rgba(0,0,0,0)));
      }
      
      body {
        padding: 20px;
      }
      MASK TYPES
      .mask {
        mask-type: luminance; /* white = transparent, grays = semi-transparent, black = opaque */
        mask-type: alpha; /* transparent areas of the image let image through, otherwise not */
      }
      
      <div class="el"></div>
      
      
      .el {
        width: 100vw;
        height: 100vh;
        padding: 1rem;
      
        background-image: url(https://images.unsplash.com/photo-1528287942171-fbe365d1d9ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&w=1200&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      
        /*USING SVG*/
        //////////////////////
        mask-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/sun.svg);
        mask-size: 100vmin;
        mask-repeat: no-repeat;
        mask-position: center;
      
        Here’s that same background graphic, only with a linear-gradient mask covering it, which makes the top transparent fading the bottom which is not transparent at all:
      USING LINEAR GRADIENT
      ///////////////////////////////
        mask-image: linear-gradient(to bottom, transparent 10%, black);}
      
        ANIMATED MASK
      ///////////////////////
      body {
        margin: 0;
        background: linear-gradient(to right, red, blue);
        background-position-x: 0;
        animation: size 3s infinite linear;
      }
      @keyframes size {
        to {
          background-position-x: 100vw;
        }
      }
      
      .el {
        width: 100vw;
        height: 100vh;
        padding: 1rem;
      
        background-image: url(https://images.unsplash.com/photo-1528287942171-fbe365d1d9ac?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&w=1200&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
        background-size: cover;
        background-position: center;
      
        mask-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/chris-mask.png);
        mask-size: contain;
      
        /////////////////////////////
        MASK DIRECTLY INSIDE SVG
      ///////////////////////////////
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="170" height="200">
        <defs>
          <filter id="filter">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <mask id="mask">
            <ellipse cx="50%" cy="50%" rx="25%" ry="25%" fill="white" filter="url(#filter)"></ellipse>
          </mask>
        </defs>
      
        <image xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/Harry-Potter-1-.jpg" width="170" height="200" mask="url(#mask)"></image>
      </svg>
        //////////////////////////////
      
      -->
</section>


<style lang="scss">
	@import '../../../styles/vars';
   .img-div {
    position: relative;
  }

  $x: 20; /*  number of row */
  $y: 20; /*  number of columns */
  $s: 0.8; /* speed factor */

  @for $i from 0 through ($x - 1) {
    @for $j from 0 through ($y - 1) {
      @property --c-#{$i}-#{$j} {
        syntax: '<number>';
        initial-value: 1;
        inherits: false;
      }
    }
  }

  @function transition($i, $j) {
    //@return (($s*($i+$j))/($x+$y))+s (($s*($i+$j))/($x+$y))+s; /* diagonal */
    //@return (($s*$i)/$x)+s (($s*$j)/$y)+s; /* left to right */
    //@return (($s*$j)/$y)+s (($s*$i)/$x)+s; /* top to bottom */
    //@return  ($s*random())+s (($s*$j)/$y)+s; /* top to bottom random */
    //@return  ($s*random())+s (($s*$i)/$y)+s; /* left to right random */
    @return ($s * random())+s (($s * ($i + $j))/ ($x + $y))+s; /* diagonal random */
    //@return ($s*random())+s ($s*random())+s; /* full random*/
  }

  @mixin image() {
    $all_t: (); // Transition
    $all_m: (); // Mask
    @for $i from 0 through ($x - 1) {
      @for $j from 0 through ($y - 1) {
        $all_t: append($all_t, --c-#{$i}-#{$j} transition($i, $j), comma);
        $all_m: append(
          $all_m,
          linear-gradient(rgba(0, 0, 0, var(--c-#{$i}-#{$j})) 0 0)
            calc(#{$i}* 100% / (#{$x} - 1))
            calc(#{$j}* 100% / (#{$y} - 1)),
          comma
        );
      }
    }
    transition: $all_t;
     mask: $all_m;
    -webkit-mask: $all_m;
  }
  .img-1 {
    position: absolute;
    top: 70px;
    left: 0px;
    width: 200px;

    /* clip-path: inset(10px 20px 30px 40px);
    /* Also can take single values to make all sides the same, or 2 values (vert/horz), or 3 values (top/horz/bottom). */
    /* clip-path: circle(60px at center); */
    /* clip-path: ellipse(60px 40px at 75px 30px); */
    /* clip-path: polygon(5% 5%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%); */

    /*/////////////////////////////////////////////*/
    /*IMAGE FRAGMENTATION CODE*/
    /*/////////////////////////////////////////////*/
    /* -webkit-mask:
    /* linear-gradient(rgba(0,0,0,0.8) 0 0) left,  /*1*/
    /* linear-gradient(rgba(0,0,0,0.5) 0 0) right; /*2 */
    /* -webkit-mask-size: 50% 100%; */
    /* -webkit-mask-repeat: no-repeat; */
    // -webkit-mask: linear-gradient(rgba(0, 0, 0, var(--c-0)) 0 0) left,
    //   /* 1 */ linear-gradient(rgba(0, 0, 0, var(--c-1)) 0 0) right; /* 2 */
    // -webkit-mask-size: 50% 100%;
    // -webkit-mask-repeat: no-repeat;
    // transition: --c-0 0.5s, --c-1 0.3s 0.4s;
    @include image();
    -webkit-mask-size: calc(100% /#{$x}) calc(100% /#{$y});
    -webkit-mask-repeat: no-repeat;
    mask-size: calc(100% /#{$x}) calc(100% /#{$y});
    mask-repeat: no-repeat;

    &:hover {
  @for $i from 0 through ($x - 1) {
        @for $j from 0 through ($y - 1) {
           --c-#{$i}-#{$j}: 0;
        }
      }
  }
  }



  .img-2 {
    position: absolute;
    top: 270px;
    left: 0px;
    width: 200px;
  }
    </style>
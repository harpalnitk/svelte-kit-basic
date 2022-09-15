<main class='flex-center'>
    <h3>Effect 1</h3>
    <section class='link link1'>
        <a href="link1">Hover this link</a>
    </section>
    <h3>Effect 2</h3>
    <section class='link link2'>
        <p>Hover <a href="link2"  data-replace="this link"><span>this link</span></a></p>
    </section>
    <h3>Effect 3</h3>
    <section class='link link3'>
        <p>Hover this <a href="link3">cool</a> link.</p>
    </section>
    <h3>Effect 4</h3>
    <section class='link link4'>
        <a href="link4">Hover This Link</a>
    </section>
    <h3>Effect 5</h3>
    <section class='link link5'>
        <a href="link5">Hover This Link</a>
    </section>
    <h3>Effect 6 - passing underline</h3>
    <section class='link link6'>
        <a href="link6">Hover This Link</a>
    </section>
    <h3>Effect 7 - Multiline</h3>
    <section class='link link7'>
        <p><a href="link7-1">Multiline<br/>effect</a></p>
        <p><a href="link7-2" class="underline">Underline<br/>version</a></p>
    </section>
    </main>
    <style lang='scss'>
        main{
            min-height: 100vh;
            background: #f8f8f8;
            flex-direction: column;
            h3{
                font-weight: 700;
                font-size: 2em;
                margin-bottom: 1rem;
            }
        }
        section{
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .link{
            /* Presentational styles */
            a,p {
  color: #54b3d6;
  font-family: 'Poppins', sans-serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  vertical-align: top;
}
        }

        .link1{
            a {
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
  padding: 0 .25rem;
  margin: 0 -.25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
a:hover {
  color: #fff;
  box-shadow: inset 200px 0 0 0 #54b3d6;;
}



        }

        .link2{
            a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

a::before,
a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
a::before {
  background-color: #54b3d6;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #54b3d6;
}

a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
a:hover::after {
  transform: translate3d(0, 0, 0);
}

a span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover span {
  transform: translate3d(-200%, 0, 0);
}

        }

        .link3{
            a {
  text-decoration: none;
  color: #18272F;
  font-weight: 700;
  position: relative;
  z-index: 0;
}

a::before {
  content: '';
  background-color: hsla(196, 61%, 58%, .75);
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 100%;
  height: 8px;
  z-index: -1;
  transition: all .3s ease-in-out;
}

a:hover::before {
  bottom: 0;
  height: 100%;
}
        }

        .link4{
            a {
                // We give the link a linear background 
                // gradient with a hard stop between two
                //  colors at the halfway mark.
  background-image: linear-gradient(
    to right,
    #54b3d6,
    #54b3d6 50%,
    #000 50%
  );
//   We make the background double the link’s width,
//  or 200%, and position it all the way over to
//   the left. That way, it’s like only one of 
//   the gradients two colors is showing.
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
//   The magic happens when we reach for a couple
//  of non-standard -webkit-prefixed properties.
//   One strips the color out of the text to make
//    it transparent. The other clips the background
//     gradient to the text so it appears the text 
//     is actually the color of the background.
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

a:before{
  content: '';
  background: #54b3d6;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

a:hover {
 background-position: 0;
}
// Now, this is a little tricky. On hover,
//  we make the link’s ::before pseudo-element 
//  100% of the link’s width. If we were to
//   apply this directly to the link’s hover,
//    we’d make the link itself full-width,
//     which moves it around the screen. Yikes!
a:hover::before{
  width: 100%;
}

        }

        .link5{
            a {
  color: inherit;
  text-decoration: none;
}

a {
  background:
//   Now for those gradients. We chain two 
// linear gradients together on the same background
//  property. One gradient is the initial color
//   before hover. The second is the rainbow on hover.
    linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
  );
//   Let’s make the background size a mere 3px tall 
// so it looks like, you know, an underline. 
// We can size both gradients together on the
//  background-size property so that the initial
//   gradient is full width and 3px tall, and
//    the rainbow is zero width.
  background-size: 100% 3px, 0 3px;
//   Now we can position the background gradients 
// — at the same time on the background-position
//  property — so that the first gradient is 
//  fully in view and the rainbow is pushed out
//   of view. Oh, and let’s make sure the 
//   background isn’t repeating while we’re at it.
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

a:hover {
  background-size: 0 3px, 100% 3px;
}

        }

        .link6{
            a {
  color: #18272F;
  position: relative;
  text-decoration: none;
}

a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #18272F;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
        }

        .link7{
            flex-direction: column;
            a {
  background: linear-gradient(0deg, slateblue, slateblue) no-repeat right bottom / 0 var(--bg-h);
  transition: background-size 350ms;
  --bg-h: 100%;
}
a:where(:hover, :focus-visible) {
  background-size: 100% var(--bg-h);
  background-position-x: left;
}

.underline {
  padding-bottom: 2px;
  --bg-h: 2px;
}
        }
        
    </style>
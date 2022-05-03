<main class='flex-center'>
    <section class='first'>
        <div class="units">
            <div>trinket</div>
            <div>trinket</div>
          </div>
          <!-- There are two steps to a reflection design:

1. Create a copy of the original design.
2. Style that copy. -->
    </section>
    <h3>Linear Gradient</h3>
    <section class='second'>
        <div class="units">
            <div>trinket</div>
            <div>trinket</div>
          </div>
    </section>
    <h3>Repeating Linear Gradient</h3>
    <section class='third'>
        <div class="units">
            <div>trinket</div>
            <div>trinket</div>
          </div>
    </section>
    <h3>Radial Gradient</h3>
    <section class='fourth'>
        <div class="units">
            <div>trinket</div>
            <div>trinket</div>
          </div>
    </section>
    <h3>Skew</h3>
    <section class='fifth'>
        <div class="units">
            <div>trinket</div>
            <div>trinket</div>
          </div>
    </section>
    <h3>Blur and Brightness</h3>
    <section class='sixth'>
        <div class="units">
            <div>trinket</div>
            <div>trinket</div>
          </div>
    </section>
    <h3>Shadowy</h3>
    <section class='seventh'>
        <div class="units">
            <div>trinket</div>
            <div>trinket</div>
          </div>
    </section>
    </main>
    <style lang='scss'>
          @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&amp;display=swap');

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

            .units {
  width: max-content;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
  padding: 0 10px;
}
/* original design */
.units > * {

    // The original design is a knock-out text graphic created 
    // from the combination of a background image, 
    // transparent text color, and the background-clip
    //  property with its text value.
  font: bolder 5rem/5rem "EB Garamond";
  background-image: url("/img/misc/trinket.jpg");
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  overflow: hidden;
}
/* reflections */
.units > :last-child {
    // The bottom element of the pair is then turned upside-down 
    // and moved closer to the original design using 
    // transform. This is the reflection:
  transform: rotateX(180deg) translateY(15px);
}
        }

        .second{

/* reflection */
.units > :last-child {
  transform: rotatex(180deg) translatey(15px);
//   By default, the mask-mode of the mask-image property is 
//   alpha. That means the transparent parts of an image,
//    when the image is used as a mask layer for an element,
//     turn their corresponding areas of the element transparent
//      as well. That’s why a linear-gradient with transparent
//       gradation at the top fades out the upside-down reflection
//        at the end.
  mask-image: linear-gradient(transparent 50%, white 90%);
  -webkit-mask-image: linear-gradient(transparent 50%, white 90%);
}
        }

        .third{
            .units > :last-child {
  transform: rotatex(180deg) translatey(15px);
  mask-image: repeating-linear-gradient(
      transparent,
      transparent 3px,
      white 3px,
      white 4px
    ),
    linear-gradient(transparent 50%, white 90%);
    // We can also try other gradient styles, with or without
    //  combining them. Take this one with stripes, for example.
    //   I added the pattern along with the fade effect from before.
  -webkit-mask-image: repeating-linear-gradient(
      transparent,
      transparent 3px,
      white 3px,
      white 4px
    ),
    linear-gradient(transparent 50%, white 90%);
}
        }

        .fourth{
            .units > :last-child {
  transform: rotatex(180deg) translatey(15px);
  mask-image: radial-gradient(circle at center, white, transparent 50%);
  -webkit-mask-image: radial-gradient(circle at center, white, transparent 50%);
}
        }

        .fifth{
            .units > :last-child {
  transform: rotatex(180deg) translatey(15px) skew(135deg) translatex(30px);
  mask-image: linear-gradient(transparent 50%, white 90%);
  -webkit-mask-image: linear-gradient(transparent 50%, white 90%);
} 
        }
        .sixth{
            .units > :last-child {
  transform: rotatex(180deg) translatey(15px);
  filter: blur(10px) brightness(1.5);
}
        }
        .seventh{
            // Sometimes a reflection can also be shadowy itself,
            //  so, instead of using the background image (from
            //   the original design) or a block color for the 
            //   text, I tried giving the reflection a series
            //    of translucent shadows of red, blue and green
            //     colors that go well with the original design.
            .units > :last-child {
  transform: rotatex(180deg) translatey(15px);
  mask-image: linear-gradient(transparent 50%, white 90%);
  -webkit-mask-image: linear-gradient(transparent 50%, white 90%);
  text-shadow: 0 0 8px rgba(255 0 0 / 0.4), -2px -2px 6px rgba(0 255 0 / 0.4),
    2px 2px 4px rgba(0 255 255 / 0.4);
  background-image: unset;
}
        }
        
    </style>
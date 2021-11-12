<!-- //https://css-tricks.com/icon-glassmorphism-effect-in-css/ -->
<script>
    let data = [
        {name:'home', ico: '🏠', hue: 200 },
        {name:'notes', ico: '🗒️', hue: 260 }, 
        {name:'activity', ico: '🔔', hue: 320 }, 
        {name:'discovery', ico: '🧭', hue: 30 },  
               ];
</script>
<main class='flex-center'>
    <h3>With Problem</h3>
    <section class='with-problem'>
        <nav>
            <a href='#home' data-ico='🏠' style='--hue: 200deg'>home</a>
            <a href='#notes' data-ico='🗒️' style='--hue: 260deg'>notes</a>
            <a href='#activity' data-ico='🔔' style='--hue: 320deg'>activity</a>
            <a href='#discovery' data-ico='🧭' style='--hue: 30deg'>discovery</a>
          </nav>
    </section>
    <h3>With Solution</h3>
    <section class='with-solution'>
        <nav>
            {#each data as item}
            <a class='item' href='#{item.name}' style='--hue: {item.hue}deg'>
                <span class='icon tint' id='blur0' aria-hidden='true'>{item.ico}</span>
                <span class='icon tint' aria-hidden='true'>{item.ico}</span>
                <span class='icon midl' aria-hidden='true' style='background-image: -moz-element(#blur0)'>{item.ico}</span>
                <span class='icon grey' aria-hidden='true'>{item.ico}</span>
                {item.name}
              </a>
            {/each}
        </nav>
    
    </section>
</main>


<style lang='scss'>
    main{
        background: #333;
        flex-direction: column;
        h3{
            margin: 0 auto;
            margin-bottom: 1rem;
            color:#fff
        }
    }
    section, nav, a { display: grid; }

section.with-problem  {
  margin: 0;
  height: 40vh;
  margin-bottom: 1rem;
  nav {
  grid-auto-flow: column;
  place-self: center;
  padding: .75em 0 .375em;
  background: #fff;
  font: clamp(.625em, 5vw, 1.25em)/ 1.25 ubuntu, sans-serif;
}

a {
  width: 5em;
  text-align: center;
  color: hsl(var(--hue), 100%, 50%);
  text-decoration: none;

  &::before, &::after {
    grid-area: 1/ 1;
    content: attr(data-ico);
    font-size: 2.5em;
  }

  //   Here’s where things start to get interesting because 
//   we start differentiating between the two emoji layers
//    created with the link pseudos. We slightly
//     move and rotate the ::before pseudo, make 
//     it monochrome with a sepia(1) filter, get 
//     it to the right hue, and bump up its contrast()
//      — an oldie but goldie technique from Lea Verou.

&::before {
    transform: 
      translate(.375em, -.25em) 
      rotate(22.5deg);
    filter: 
      sepia(1) 
      hue-rotate(calc(var(--hue) - 50deg)) 
      saturate(3);
  }
  //       We also apply a filter: grayscale(1) on the 
//       ::after pseudo and make it semitransparent
//        because, otherwise, we wouldn’t be able to
//         see the other pseudo through it.
  &::after {
    opacity: .5;
    filter: grayscale(1);
  }

  //The next step, which I foolishly thought would be the last 
//   when I got the idea to code this, involves
//    setting a backdrop-filter: blur(5px) 
//    on the top (::after) layer.

//    Sadly, the result looks nothing 
//    like what I expected. We get a 
//    sort of overlay the size of the
//     entire top icon bounding box, but 
//     the bottom icon isn’t really blurred.



// It looks like we found the problem! 
// For some reason, making the top layer
//  semitransparent using opacity breaks the 
//  backdrop-filter effect in both Chrome and
//   Firefox. Is that a bug? Is that what’s
//    supposed to happen?
}
}



//SOLUTION EXTRA CSS
section.with-solution  {
    $r: 5px;
$t: .3s;
display: grid 

 nav, a { display: grid }

// body {
//   margin: 0;
//   height: 100vh;
//   background: #333
// }

nav {
  grid-auto-flow: column;
  place-self: center;
  padding: .75em 0 .375em;
  background: #fff;
  font: clamp(.625em, 5vw, 1.25em)/ 1.25 ubuntu, sans-serif
}

.item {
    // There’s just one more thing to take care of — 
    // we don’t want this effect at all times; only on
    //  :hover or :focus states. So, we’re going to 
    //  use a flag, --hl, which is 0 in the normal
    //   state, and 1 in the :hover or :focus stat
    //    in order to control the opacity and transform values of the .base spans. 
  --hl: 0;
  width: 5em;
  color: hsl(var(--hue), calc(var(--hl)*100%), 65%);
  text-align: center;
  text-decoration: none;
  transition: color $t;
  
  &:focus { outline: none }
  &:hover, &:focus { --hl: 1 }
}

.icon {
  grid-area: 1/ 1;
  place-self: center;
  font-size: 2.5em
}

.tint {
  z-index: 1;
  transform: 
      translate(calc(var(--hl)*.375em), calc(var(--hl)*-.25em)) 
      rotate(calc(var(--hl)*22.5deg));
  opacity: var(--hl);
  filter: 
    sepia(1) hue-rotate(calc(var(--hue) - 50deg)) saturate(3) 
    blur(var(--r, 0));
  transition: .3s;
  
  &[id*='blur'] {
    --r: #{$r};
    position: fixed;
    bottom: 100vh
  }
}

.midl {
  z-index: 2;
  color: transparent;
  backdrop-filter: blur($r);
  mask: linear-gradient(red 0 0) text;
  -webkit-mask: linear-gradient(red 0 0) text;
  
  @supports (background: -moz-element(#hl)) {
    background-color: #fff;
    background-clip: text;
    backdrop-filter: none
  }
}

.grey {
  z-index: 3;
  filter: grayscale(1) opacity(.35)
}
}

</style>
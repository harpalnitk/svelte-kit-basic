<main>
    <div class="canvas">
        <img src="https://images.unsplash.com/photo-1553514029-1318c9127859?cs=tinysrgb&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM5NDAxMTk&ixlib=rb-1.2.1&auto=format&auto=compress&w=1600" srcset="https://images.unsplash.com/photo-1553514029-1318c9127859?cs=tinysrgb&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM5NDAxMTk&ixlib=rb-1.2.1&auto=format&auto=compress&w=1600 1600w, https://images.unsplash.com/photo-1553514029-1318c9127859?cs=tinysrgb&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM5NDAxMTk&ixlib=rb-1.2.1&auto=format&auto=compress&w=1200 1200w, https://images.unsplash.com/photo-1553514029-1318c9127859?cs=tinysrgb&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM5NDAxMTk&ixlib=rb-1.2.1&auto=format&auto=compress&w=800 800w, https://images.unsplash.com/photo-1553514029-1318c9127859?cs=tinysrgb&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM5NDAxMTk&ixlib=rb-1.2.1&auto=format&auto=compress&w=400 400w" alt="" />
      </div>
      <div class="painted">
        <img src="https://assets.codepen.io/9632/S6g8rNmQ_400x400.jpg" alt="" />
      </div>

</main>





  <style lang='scss'>
main{
width: 80vw;
position: relative;
margin: 0 auto;
}

$dot-size: 0.25em;  // 1
$line-color: #333;       // 2
$line-contrast: 2000%;    // 3
$photo-brightness: 80%;  // 4
$photo-contrast: 150%;   // 5
$photo-blur: 2px;        // 6
$blend-mode: hard-light; // 7

.canvas {
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
  filter: contrast($line-contrast);
  overflow: hidden;
}

.canvas::before {
  content: '';
   position: absolute;
  top: -50%; // have to scale the halftone layer up since we're rotating it
  left: -50%;
  bottom: -50%;
  right: -50%;
  background: radial-gradient(circle at center, $line-color, #fff);
  background-size: $dot-size $dot-size;
  transform: rotate(20deg);
}

.canvas img {
//   position: absolute;
//   top: 0;
//   left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  mix-blend-mode: $blend-mode;
  filter:
    grayscale(1) 
    brightness($photo-brightness) 
    contrast($photo-contrast) 
    blur($photo-blur);
}




//OIL PAINTING





.painted {
    --color-primary: hsl(0 0% 15%);
  --color-accent: hsl(16.1 5% 55.5%);
  --color-tertiary: aqua;
  background: repeating-radial-gradient(
    circle at center,
    var(--color-primary),
    var(--color-accent)
  );
  background-size: 5px;
}

.painted img {
  filter: blur(4px) contrast(3000%) grayscale(1);
  mix-blend-mode: screen;
  width: 100%;
}
  </style>
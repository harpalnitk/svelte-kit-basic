<main>
    <div class="container">
        <div class="content">
          <h1>Hits</h1>
          <p>in Spatial Audio</p>
        </div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
</main>

<style lang='scss'>
main {
  background-color: #25272c;
  display: grid;
  place-items: center;
  height: 100vh;
}

.container {
  background: #eb5bec;
  border-radius: 16px;
  display: grid;
  height: 385px;
  overflow: hidden;
  place-items: center;
  position: relative;
  width: 315px;
}
.container::after {
  background-image: url("https://assets.codepen.io/9632/dolby-atmos.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50px;
  content: "";
  height: 100%;
  position: absolute;
  width: 100%;
}

.content {
  color: #fff;
  font-family: system-ui;
  position: relative;
  text-align: center;
  top: -6rem;
  z-index: 2;
}
.content h1 {
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
}
.content p {
  margin: 0;
}

.box {
  --delay: 1s;
  animation: grow 10s linear infinite;
  animation-delay: var(--delay);
  background: #471e45;
  height: 100px;
  opacity: 0.5;
  position: absolute;
  width: 100px;
}
.box:nth-child(2) {
  --delay: 2s;
}
.box:nth-child(3) {
  --delay: 3s;
}
.box:nth-child(4) {
  --delay: 4s;
}
.box:nth-child(5) {
  --delay: 5s;
}
.box:nth-child(6) {
  --delay: 6s;
}
.box:nth-child(7) {
  --delay: 7s;
}
.box:nth-child(8) {
  --delay: 8s;
}
.box:nth-child(9) {
  --delay: 9s;
}
.box:nth-child(10) {
  --delay: 10s;
}

@keyframes grow {
  from {
    opacity: 0.5;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(3.85);
  }
}
</style>
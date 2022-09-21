<script>
import { connectFirestoreEmulator } from "firebase/firestore";

import { onMount } from "svelte";
 
let day= new Date();
let startPosition;
let endPosition;
      

setInterval(()=>{
     day = new Date();
});




 $: secondsAngle = day.getSeconds() * 6; //We take 60 seconds and multiply it by 6, which happens to be 360, the perfect number of angles in a full circle
 $: minsAngle = day.getMinutes() * 6 + secondsAngle / 60; //Same as seconds, but now we add the seconds angle and divide it by 60 to increase the angle just a little bit within the minute for a more accurate result.
 $: hourAngle = ((day.getHours() % 12) / 12) * 360 + minsAngle / 12;//First, we calculate the remainder of the hour and divide it by 12. Then we divide that remainder by 12 again to get a decimal value we can multiply by 360. For example, when we’re at the 23rd hour, 23 / 12 = remain 11. Divide this by 12 and we get 0.916 which then gets multiplied by 360 for a grand total of 330. Here, we will do the same thing we did with the minutes and add the minutes angle, divided by 12, for a more accurate result


//  let startPosition = minsAngle;
// let endPosition = hourAngle - minsAngle;

//It looks like we could be done at this point, 
// but there is a catch! This calculation works fine
//  as long as the minutes hand has a smaller angle 
//  than the hours hand. Our conic gradient will get
//   messy the moment when the minutes hand has moved 
//   past it. To fix this, we will use a negative value
//    as a starting point. 

$: (minsAngle > hourAngle) ? startPosition = minsAngle - 360 : startPosition = minsAngle;
$: (minsAngle > hourAngle) ? endPosition = hourAngle - startPosition : endPosition = hourAngle - minsAngle;
</script>

<main class='flex-center'>
    <h3>Basic</h3>
    <section class='basic'>
        <main>
            <h1>作る</h1>
<!-- just for fun, this is japanese for "create, in a sense of making, building,  establishing" -->
        </main>
    </section>
    <h3>Basic Clock</h3>
    <section class="basic-clock">
        <div class="clock">
            <div class="hand second-hand" style='transform: rotate({secondsAngle}deg);'></div>
            <div class="hand minute-hand" style='transform: rotate({minsAngle}deg);'></div>
            <div class="hand hour-hand" style='transform: rotate({hourAngle}deg);'></div>
          </div>
    </section>
    <h3>Basic Clock With Conic Gradient</h3>
    <section class="basic-clock-gradient">
        <div class="clock" style="background:conic-gradient(
            from {startPosition}deg,
            rgb(255 255 255) 2deg,
            rgb(0 0 0 / 0.5) {endPosition}deg,
            rgb(255 255 255) 2deg,
            rgb(0 0 0 / 0.7)
          );">
            <div class="hand second-hand" style='transform: rotate({secondsAngle}deg);'></div>
            <div class="hand minute-hand" style='transform: rotate({minsAngle}deg);'></div>
            <div class="hand hour-hand" style='transform: rotate({hourAngle}deg);'></div>
          </div>
    </section>
    <h3>Basic Clock With Conic Gradient Advanced</h3>
    <section class="basic-clock-gradient-advanced">
        <div class="clock" style="background:conic-gradient(from {startPosition}deg,rgba(255,255,255,0.5) 2deg,rgba(0,0,0,0.5) {endPosition}deg,rgba(255,255,255,0.7) 2deg,rgba(0,0,0,0.7));">
            <div class="hand second-hand" style='transform: rotate({secondsAngle}deg);'></div>
            <div class="hand minute-hand" style='transform: rotate({minsAngle}deg);'></div>
            <div class="hand hour-hand" style='transform: rotate({hourAngle}deg);'></div>
            <ul>
                <li><span>&bull;</span></li>
                <li><span>&bull;</span></li>
                <li><span>3</span></li>
                <li><span>&bull;</span></li>
                <li><span>&bull;</span></li>
                <li><span>6</span></li>
                <li><span>&bull;</span></li>
                <li><span>&bull;</span></li>
                <li><span>9</span></li>
                <li><span>&bull;</span></li>
                <li><span>&bull;</span></li>
                <li><span>12</span></li>
              </ul>  
        </div>
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

        .basic{
            main {
  width: 50vw;
  min-height: 50vh;
  background: conic-gradient(#fff 5deg, #000 30deg, #fff 5deg, #000);
  background-position: 0 0;
  background-size: 100%;
  color: #fff;
  font-size: 3rem;
  font-family: "Roboto Mono", monospace;
}

h1 {
  padding: 2rem;
  margin: 0;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
}
        }

        .basic-clock{
            .clock {
  /* general clock vars */
  --hour-hand-color: #000;
  --hour-hand-degrees: 0deg;
  --minute-hand-color: #000;
  --minute-hand-degrees: 0deg;
  --second-hand-color: hotpink;
  --second-hand-degrees: 0deg;

  position: relative;
  min-width: 320px;
  width: 25vw;
  height: 25vw;
  min-height: 320px;
  border-radius: 50%;
  margin: 0 auto;
  border: 7px solid #000;
}

/* clock hands */
.hand {
  position: absolute;
  left: 50%;
  bottom: 50%;
  height: 45%;
  width: 4px;
  margin-left: -2px;
  background: var(--second-hand-color);
  border-radius: 6px;
  transform-origin: bottom center;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
.second-hand {
  //transform: rotate(var(--second-hand-degrees));
}
.hour-hand {
  height: 35%;
  border-radius: 40px;
  background-color: var(--hour-hand-color);
  //transform: rotate(var(--hour-hand-degrees));
}
.minute-hand {
  height: 50%;
  background: var(--minute-hand-color);
  //transform: rotate(var(--minute-hand-degrees));
} 
        }

        .basic-clock-gradient{
            .clock {
                  /* general clock vars */
  --hour-hand-color: #000;
  --minute-hand-color: #000;
  --second-hand-color: hotpink;
  /* conic gradient vars */
//   --start: 0deg;
//   --end: 0deg;

  position: relative;
  min-width: 320px;
  width: 25vw;
  height: 25vw;
  min-height: 320px;
  border-radius: 50%;
  margin: 0 auto;
  border: 7px solid #000;
//   background: 
//     conic-gradient(
//       from var(--start),
//       rgb(255 255 255) 2deg,
//       rgb(0 0 0 / 0.5) var(--end),
//       rgb(255 255 255) 2deg,
//       rgb(0 0 0 / 0.7)
//   );
}

/* clock hands */
.hand {
  position: absolute;
  left: 50%;
  bottom: 50%;
  height: 45%;
  width: 4px;
  margin-left: -2px;
  background: var(--second-hand-color);
  border-radius: 6px;
  transform-origin: bottom center;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
.second-hand {
  //transform: rotate(var(--second-hand-degrees));
}
.hour-hand {
  height: 35%;
  border-radius: 40px;
  background-color: var(--hour-hand-color);
  //transform: rotate(var(--hour-hand-degrees));
}
.minute-hand {
  height: 50%;
  background: var(--minute-hand-color);
  //transform: rotate(var(--minute-hand-degrees));
} 
        }


        .basic-clock-gradient-advanced{
            position: relative;
            display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background: radial-gradient(#6e7dab 70%, transparent 30%),
    radial-gradient(#6e7dab 70%, transparent 30%), #5762d5;
  background-size: 2vw 2vw;
            
  .clock {
                  /* general clock vars */
  --hour-hand-color: #59c9a5;
  --minute-hand-color:  #56e39f;
  --second-hand-color:  #c9dfec;
  --numbers-color: #153131;
  --bullets-color: #52489c;
  position: relative;
  min-width: 320px;
  width: 25vw;
  height: 25vw;
  min-height: 320px;
  border-radius: 50%;
  margin: 0 auto;
  border: 7px solid #92d5e6;
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.5),
    inset -4px -4px 10px rgba(67, 67, 67, 0.5), 4px 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  

}

.clock::before {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(29, 235, 214, 0.3) 80%,
    rgba(41, 139, 142, 0.9) 100%
  );
  content: "";
  z-index: 0;
}

/* clock hands */
.hand {
  position: absolute;
  left: 50%;
  bottom: 50%;
  height: 45%;
  width: 4px;
  margin-left: -2px;
  background: var(--second-hand-color);
  border-radius: 6px;
  transform-origin: bottom center;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
.second-hand {
  //transform: rotate(var(--second-hand-degrees));
}
.hour-hand {
  height: 35%;
  width: 5px;
  border-radius: 40px;
  background-color: var(--hour-hand-color);
  //transform: rotate(var(--hour-hand-degrees));
}
.minute-hand {
  height: 50%;
  background: var(--minute-hand-color);
  //transform: rotate(var(--minute-hand-degrees));
} 

/* Clock indexes */

.clock ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.clock ul li {
  position: absolute;
  width: 20px;
  height: 20px;
  font-family: "Georgia", Times, serif;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: var(--bullets-color);
}

.clock ul li:nth-child(1) {
  top: 7.5%;
  right: 23%;
}

.clock ul li:nth-child(2) {
  top: 25.5%;
  right: 6.75%;
}

.clock ul li:nth-child(3) {
  top: calc(50% - 13px);
  right: 2%;
  font-size: 26px;
  color: var(--numbers-color);
}

.clock ul li:nth-child(4) {
  top: 70%;
  right: 7%;
}

.clock ul li:nth-child(5) {
  top: 87%;
  right: 23.5%;
}

.clock ul li:nth-child(6) {
  top: calc(99% - 26px);
  right: calc(50% - 10px);
  font-size: 26px;
  color: var(--numbers-color);
}

.clock ul li:nth-child(7) {
  top: 86.4%;
  left: 23.3%;
}

.clock ul li:nth-child(8) {
  top: 70%;
  left: 7%;
}

.clock ul li:nth-child(9) {
  top: calc(50% - 13px);
  left: 2%;
  font-size: 26px;
  color: var(--numbers-color);
}

.clock ul li:nth-child(10) {
  top: 24.5%;
  left: 6.5%;
}

.clock ul li:nth-child(11) {
  top: 7%;
  left: 23.5%;
}

.clock ul li:nth-child(12) {
  top: 2%;
  right: calc(50% - 7px);
  font-size: 26px;
  color: var(--numbers-color);
}
        }
        
    </style>
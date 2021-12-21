<script>
    	import { onMount } from 'svelte';

/**COLORS*/
// Warning occurs at 10s
const WARNING_THRESHOLD = 10;
// Alert occurs at 5s
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};
const FULL_DASH_ARRAY = 283;//Length = 2πr = 2 * π * 45 = 282,6
let remainingPathColor = COLOR_CODES.info.color;



    let wrapper;
        let app1,app2,app3;
// Start with an initial value of 20 seconds
const TIME_LIMIT = 20;

// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;



    onMount(() => {
    
        app1.innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
    </g>
  </svg>
  <span>
    <!-- Remaining time label -->
  </span>
</div>
`;

app2.innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
    </g>
  </svg>
  <span id="base-timer-label1" class="base-timer__label">
    ${formatTime(timeLeft)}
  </span>
</div>
`;
/**To visualize time passing, we need to
 *  add a second layer to our ring that
 *  handles the animation. What we’re 
 * doing is essentially stacking a new
 *  green ring on top of the original
 *  gray ring so that the green ring
 *  animates to reveal the gray ring as
 *  time passes, like a progress bar.*/
app3.innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
      </g>
  </svg>
  <span id="base-timer-label2" class="base-timer__label">
    ${formatTime(timeLeft)}
  </span>
</div>
`;

/**To animate the length of the remaining time line
 *  we are going to use the stroke-dasharray property.
 *  Chris explains how it’s used to create the 
 * illusion of an element “drawing” itself
 * https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
 * See the picture in above article
 * 
 * The name dasharray suggests that we can set multiple
 *  values as an array. Let’s see how it will 
 * behave if we set two numbers instead of one
 *  in this case, those values are 10 and 30.
 * 
 * That sets the first section (remaining time) 
 * length to 10 and the second section (passed
 *  time) to 30. We can use that in our 
 * timer with a little trick. What we need 
 * initially is for the ring to cover the
 *  full length of the circle, meaning the 
 * remaining time equals the length of our ring.
 * Length = 2πr = 2 * π * 45 = 282,6
 * 
 * That’s the value we want to use when the ring initially mounted. Let’s see how it looks.
 * 
 * stroke-dasharray: 283 283
 * 
 * OK, the first value in the array is our 
 * remaining time, and the second marks how
 *  much time has passed. What we need to do 
 * now is to manipulate the first value. Let’s
 *  see below what we can expect when we 
 * change the first value.
 * */


  //Start timer immediately on load
  startTimer();
        });


      






 function formatTime(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);
  
  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;
  
  // If the value of seconds is less than 10, then display seconds with a leading zero
  let var_seconds = seconds + '';
  if (seconds < 10) {
    var_seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${var_seconds}`;
}



/**Let’s implement a method called startTimer that will:

Set counter interval
Increment the timePassed value each second
Recompute the new value of timeLeft
Update the label value in the template
We also need to keep the reference to 
that interval object to clear it when needed
 — that’s why we will create a timerInterval variable.*/
 let timerInterval = null;
 function startTimer() {
  timerInterval = setInterval(() => {
    
    // The amount of time passed increments by one
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    if (timeLeft === 0) {
      onTimesUp();
    }
    // The time left label is updated
    document.getElementById("base-timer-label1").innerHTML = formatTime(timeLeft);
    document.getElementById("base-timer-label2").innerHTML = formatTime(timeLeft);
    setCircleDasharray(); 
    setRemainingPathColor(timeLeft); 
}, 1000);
}
function onTimesUp() {
  clearInterval(timerInterval);
}

/**
 * We will create two methods, one responsible 
 * for calculating what fraction of the initial
 *  time is left, and one responsible for
 *  calculating the stroke-dasharray value 
 * and updating the <path> element that
 *  represents our remaining time.
*/
function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
  //When we reach 0 a small piece of the ring is still visible.
  //This is due to the animation’s duration being set
//    to one second. When the value of remaining time
//     is set to zero, it still takes one second to
//      actually animate the ring to zero. We can 
//      get rid of that by reducing the length of
//       the ring gradually during the countdown.
//        We do that in our calculateTimeFraction method.
return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
    
// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  //   283 283      to       0 283
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

//CHANGING COLORS
function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;

  // If the remaining time is less than or equal to 5, remove the "warning" class and apply the "alert" class.
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);

  // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}
</script>
<main class='flex-center' bind:this={wrapper}>
    <h3>Basic SVG App-1</h3>
    <section class='app1'>
        <div id="app1" bind:this="{app1}"></div>
    </section>
    <h3>Basic SVG With Timer</h3>
    <section class='app2'>
        <div id="app2" bind:this="{app2}"></div>
    </section>
    <h3>Basic SVG With Green Ring on Top of Grey Ring</h3>
    <section class='app3'>
        <div id="app3" bind:this="{app3}"></div>
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


        // COUNTDOWNTIMER CSS
        /* Sets the containers height and width */
:global(.base-timer) {
  position: relative;
  height: 300px;
  width: 300px;
}

/* Removes SVG styling that would hide the time label */
:global(.base-timer__circle) {
  fill: none;
  stroke: none;
}

/* The SVG path that displays the timer's progress */
:global(.base-timer__path-elapsed) {
  stroke-width: 7px;
  stroke: grey;
}

// CSS FOR TIME INSIDE THE RING
:global(.base-timer__label) {
  position: absolute;
  
  /* Size should match the parent container */
  width: 300px;
  height: 300px;
  
  /* Keep the label aligned to the top */
  top: 0;
  
  /* Create a flexible box that centers content vertically and horizontally */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Sort of an arbitrary number; adjust to your liking */
  font-size: 48px;
}

/**Finally, let’s add few styles to make
 the circular path look like our
  original gray ring. The important
   thing here is to make sure the 
   stroke-width is the same size as 
   the original ring and that the duration
    of the transition is set to one 
    second so that it animates smoothly
     and corresponds with the time 
     remaining in the time label.*/
     :global(.base-timer__path-remaining) {
  /* Just as thick as the original ring */
  stroke-width: 7px;

  /* Rounds the line endings to create a seamless circle */
  stroke-linecap: round;

  /* Makes sure the animation starts at the top of the circle */
  transform: rotate(90deg);
  transform-origin: center;

  /* One second aligns with the speed of the countdown timer */
  transition: 1s linear all;

  /* Allows the ring to change color when the color value updates */
  stroke: currentColor;
}
:global(.base-timer__path-remaining.green) {
  color: rgb(65, 184, 131);
}

:global(.base-timer__path-remaining.orange) {
  color: orange;
}

:global(.base-timer__path-remaining.red) {
  color: red;
}

:global(.base-timer__svg) {
  /* Flips the svg and makes the animation to move left-to-right */
  transform: scaleX(-1);
}       
    </style>
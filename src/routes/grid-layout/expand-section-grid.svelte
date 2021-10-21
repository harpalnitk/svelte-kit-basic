<script>

import { onMount } from 'svelte';
import { fade, fly } from 'svelte/transition';


let mainGrid;
let cards= [
    {id: 1, title:'Fullwidth', text:'This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.', link :'inline-link'},
    {id: 2, title:'Fullwidth', text:'This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.', link :'inline-link'},
    {id: 3, title:'Fullwidth', text:'This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.', link :'inline-link'},
    {id: 4, title:'Fullwidth', text:'This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.', link :'inline-link'},
    {id: 5, title:'Fullwidth', text:'This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.', link :'inline-link'},
    {id: 6, title:'Fullwidth', text:'This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.', link :'inline-link'},
    {id: 7, title:'Fullwidth', text:'This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.', link :'inline-link'},
    {id: 8, title:'Fullwidth', text:'This grid item needs to stretch the full width of the page, and force other grid items to reflow around it, whilst remaining "visually connected" to the preceeding grid item.', link :'inline-link'},
];
onMount(() => {
    //!TODO DO THIS IN SVELTE STYLE 
    const quickViewButtons = mainGrid.querySelectorAll('[data-quick-view');
    const closeButtons = mainGrid.querySelectorAll('[data-close');
    const fullwidthCards = mainGrid.querySelectorAll('.fullwidth');
    let trigger;
    quickViewButtons.forEach(quickView => {
    quickView.addEventListener('click', (e) => {
        // Close any other fullwidth cards first.
        fullwidthCards.forEach(fullwidth => {
            if (!fullwidth.classList.contains('is-hidden')) {
                fullwidth.removeAttribute('tabIndex');
                fullwidth.classList.toggle('is-hidden');
                fullwidth.previousElementSibling.classList.toggle('is-selected');
            }
        });

        // Now open the related fullwidth card, and set keyboard focus.
        e.target.parentElement.classList.toggle('is-selected');
        e.target.parentElement.nextElementSibling.classList.toggle('is-hidden');
        e.target.parentElement.nextElementSibling.setAttribute('tabIndex', '-1');
        e.target.parentElement.nextElementSibling.focus();
    });
});

closeButtons.forEach(close => {
    close.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('is-hidden');
        e.target.parentElement.removeAttribute('tabIndex');
        e.target.parentElement.previousElementSibling.classList.toggle('is-selected');

        trigger = e.target.parentElement.previousElementSibling.querySelector('[data-quick-view');
        // Return keyboard focus to the "trigger" button.
        trigger.focus();
    });
});
});

   

</script>

<h1>Playing with CSS Grid... to "inject" a fullwidth grid item into a grid whose columns are <i>auto-arranged</i></h1>
<p>Imagine a grid of product cards, where clicking on a "quick view" button "injects" a new card that is expanded full width of the entire grid, immediately below the card that was clicked (thereby allowing a visual "connection" between the two cards), and is completely responsive.</p>
<ul>
    <li>Usually, "quick views" are rendered as popups or overlays, but in this case, an "inline" solution is required.</li>
    <li>This mock-up requires very little CSS code to achieve it, and <strong>zero media queries</strong>.</li>
    <li>In reality, the "injected" card will probably be fetched via JavaScript and placed in the correct place in the DOM. However, for demo purposes, I've directly added the fullwidth cards in their correct positions in the DOM, and I'm simply toggling their visibility.</li>
</ul>

<h2>Accessibility considerations</h2>
<ul>
    <li>HTML source order is preserved for the cards, providing a good natural tab order.</li>
    <li>The whole grid is wrapped in an <code>aria-live</code> region so that DOM changes are announced to screen readers.</li>
    <li>Focus management ensures the "injected" card receives keyboard focus, and on closing the card, keyboard focus is returned to the button that originally triggered the card's visibility.</li>
</ul>

<div role="region" aria-live="polite">
    <ul class="grid" bind:this={mainGrid}>
{#each cards as card}
<li>
    <p>{card.id}</p>
    <button type="button"  data-quick-view>View More {card.id}</button>
</li>
<li class="fullwidth is-hidden" in:fly="{{ y: 200, duration: 2000 }}" out:fade>
    <button type="button" data-close>Close {card.id}</button>
    <p>Fullwidth {card.id}</p>
    <p>{card.title}</p>
  <p>Test <a href="{card.link}">{card.link}-{card.id}</a>.</p>
</li>
{/each}

      
    </ul>
</div>

<style>
    ul[class] {
    margin: 0;
    padding: 0;
}

ul[class] li {
    list-style: none;
}

ul[class] li > * {
    margin: 1rem;
}

:focus {
    box-shadow: 0 0 0 0.25rem rebeccapurple;
    outline: 0;
}

/* [1] 'auto-fit' grid columns, so no media queries required. */
/* [2] 'dense' packing fills in holes earlier in the grid. */
.grid {
    display: grid;
    gap: 1rem;
    grid-auto-flow: dense; /* [2] */
    grid-template-columns: repeat(auto-fit, 20rem); /* [1] */
    justify-content: center;
}

.grid > * {
    align-items: flex-start;
    background: #eee;
    display: flex;
    flex-direction: column;
    height: 100%;
}

/* [3] Make fullwidth card span all grid columns. */
.fullwidth {
    grid-column: 1 / -1;
    transition: all 0.5s;
}

.is-hidden {
    display: none;
    opacity: 0;
}


.fullwidth, .is-selected {
    background: wheat;
    opacity: 1;
   
}
</style>
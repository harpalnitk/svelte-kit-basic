<script>
      import { onMount } from "svelte";

let mainContent;
let htmlContent;

onMount(() => {
    htmlContent = mainContent.innerHTML;
});


const addContent =()=>{
    mainContent.innerHTML += htmlContent;
}
const removeContent =()=>{
    mainContent.querySelectorAll('p').forEach((el, i) => {
    if (i > 3) el.remove();
  });
}
</script>
<div class="container">
    <header>Header</header>
    <main bind:this={mainContent}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem vel cumque quis animi nisi, odit totam laborum quam molestias sed quidem, dolorum deleniti quae possimus obcaecati eaque praesentium alias! Aperiam.</p>
      <p>Blanditiis maxime odit expedita modi a itaque? Placeat expedita nam, aut ea odit dolores est optio ut odio pariatur! Similique pariatur perferendis quaerat sequi. Eligendi qui illo nesciunt voluptates facilis!</p>
      <p>Reiciendis rem inventore asperiores sapiente cupiditate officia facilis earum accusantium deserunt, incidunt molestias! Fuga fugiat eveniet explicabo. Eveniet soluta voluptates saepe minima veniam illum error atque quibusdam, veritatis cupiditate culpa.</p>
      <p>Voluptatum eligendi totam, beatae ut ea, minus aut voluptate atque eaque maiores officiis praesentium aperiam impedit consectetur vero quia at nostrum? Similique dolorem cupiditate quis veniam! Soluta assumenda voluptatum delectus.</p>
    </main>
    
    <footer>
      Footer 
      - <a role="button" on:click="{addContent}">ADD CONTENT</a>
      - <a role="button" on:click="{removeContent}">REMOVE CONTENT</a>
    </footer>
</div>



<style>
    .container {
min-height: 100vh;
  padding: 2rem;
  width: 80vw;
  margin: 0 auto;
}

.container {
  line-height: 1.5;
  font-family: sans-serif;
}

/* 
That’s not quite what I’m talking about here. “Sticky footers
 were a UI concept before position: sticky existed 
 and they mean something slightly different.
  The idea is that they stick to the bottom 
  of the screen, even when the content of the 
  page isn’t enough to push them there. But if
   there is enough content, they are happily pushed down. */
.container > footer {
  position: sticky;
  top: 100vh;
}

main {
  padding: 0 20px;
}

header, footer {
  padding: 20px;
  background-color: #eee;
}

a{
    display: inline-block;
    cursor: pointer;
    padding: 1rem 2rem;
    background: linear-gradient(to right, orangered 0%, limegreen 50%);
    text-decoration: none;
    transition: 0.5s;
}
a:hover{
    transform: scale(0.95);
}
</style>
<script>
  
    import Bar from './Bar/+page.svelte';

    const barArray = [
      {title: 'HTML', percent: 90, color:'#04AA6D', delTime: 0},
      {title: 'CSS', percent: 80, color:'#2196F3', delTime: 500},
      {title: 'Javascript', percent: 65, color:'#f44336', delTime: 1000},
      {title: 'PHP', percent: 60, color:'#808080', delTime: 1500},
      {title: 'Angular', percent: 100, color:'darkorange', delTime: 2000},
      {title: 'PHP', percent: 40, color:'rebeccapurple', delTime: 2500}
    ];
    
</script>

<div class="page-container">
    <section>
      {#each barArray as {title, percent, color, delTime}}
      <Bar {title} {percent} {color} {delTime}/>
      {/each}
    </section>
    </div>

    <style>
    .page-container {
		/* background: #f0f0f0; */
		margin: 1rem auto 0;
		/* margin-top: ; */
		text-align: center;
		max-width: 768px;
	}

    </style>
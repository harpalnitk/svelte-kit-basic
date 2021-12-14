
<main>
    <div class="Stars" style="--rating: 2.5;" aria-label="Rating of this product is 2.3 out of 5."></div>
</main>

<style lang='scss'>
    main {
  --star-size: 60px;
  --star-color: #fff;
  --star-background: #fc0;
}

.Stars {
  --percent: calc(var(--rating) / 5 * 100%);
  
  display: inline-block;
  font-size: var(--star-size);
   font-family: Times; /* make sure ★ appears correctly */
  line-height: 1;
  
  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

// Just to make a preview more beautifull

main {
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}


</style>
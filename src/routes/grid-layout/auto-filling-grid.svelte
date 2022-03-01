<script>
    let grid_column_count = 8;
    let grid_item_min_width = 200;
    let grid_layout_gap = 10;
</script>
<main>
    <div class="controls">
        <label>Max Columns: <input class="max-cols" type="number" bind:value={grid_column_count}></label>
        <label>Min Grid Cell Width: <input class="max-width" type="number" step="50" bind:value={grid_item_min_width}> px</label>
        <label>Grid layout Gap: <input class="max-width" type="number" step="1" bind:value={grid_layout_gap}> px</label>
    </div>
    <div class="expander">Drag me wider</div>
    <div class="grid-container" style='--grid-column-count:{grid_column_count};
    --grid-item--min-width:{grid_item_min_width}px;
    --grid-layout-gap:{grid_layout_gap}px'>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
</main>

<style>
    .grid-container {
  /**
   * User input values.
   */
  /* --grid-layout-gap: 10px; */
  /* --grid-column-count: 8; This gets overridden by an inline style. */
  /* --grid-item--min-width: 200px; This gets overridden by an inline style. */
  
  /**
   * Calculated values.
   */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--grid-layout-gap);
}



/*
 Unrelated styling
*/

* {
  box-sizing: border-box;
  font-family: sans-serif;
}
.expander {
  float: left;
  background: pink;
  height: 200px;
  min-width: 100px;
  margin-right: 10px;
  padding: 5px;
  resize: both;
  overflow: auto;
}
.controls {
  display: flex;
  gap: 20px;
  background: #eee;
  padding: 10px;
  margin: 20px 0;
}

input {
  font-size: 20px;
  width: 70px;
  padding: 5px;
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  background: lightblue;
  font-size: 13px
}
</style>
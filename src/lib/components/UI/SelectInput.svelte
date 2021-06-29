<script>
    export let selectedVal;
    export let items;
    export let selectName;
</script>
<select name="menu" id="menu" class="menu"
bind:value={selectedVal}>
    <option value="" disabled selected>Select a {selectName}</option>
    <option value="all">Show all {selectName}s</option>
    {#each items as item}
        <option value={item}>{item}</option>
    {/each}
</select>

<style lang="scss">
    @import '../../../styles/vars';
    	select {
  padding: 10px;
  font-size: 17px;
  border: 1px solid $text-bg-primary;
  float: left;
  width: 100%;
  background: $text-bg-primary;
  &:focus{
    border: 1px solid $secondary-color;
    box-shadow: 0 0 3px $secondary-color;
    outline-offset: 0px;
    outline: none;
  }
	}
</style>


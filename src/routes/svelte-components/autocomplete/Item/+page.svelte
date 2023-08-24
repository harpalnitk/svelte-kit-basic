<script>
    export let itemName;
    export let highlighted;
</script>

<li class='autocomplete-items' class:autocomplete-active={highlighted} on:click>{@html itemName}</li>


<style lang="scss">
  @import '../../../../styles/vars';
    li.autocomplete-items {
list-style: none;
border: 1px solid #d4d4d4;
margin: 0;
padding: 10px;
cursor: pointer;
background-color: #fff;
}

li.autocomplete-items:hover {
  /*when hovering an item:*/
  background-color: #e9e9e9;
}
li.autocomplete-items:active {
  /*when navigating through the items using the arrow keys:*/
  background-color: $primary-color !important;
  color: #ffffff;
}

li.autocomplete-active {
  /*when navigating through the items using the arrow keys:*/
  background-color: $primary-color !important;
  color: #ffffff;
}
</style>
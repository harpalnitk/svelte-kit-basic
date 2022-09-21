<script>
    
    //udemy-ng-http    project on firebase used
    // Your web app's Firebase configuration
    //   var firebaseConfig = {
    //     apiKey: "AIzaSyAano_N5ctD2HljyDtEH_8lV2DCcC7G4vM",
    //     authDomain: "udemy-ng-http-59d8a.firebaseapp.com",
    //     databaseURL: "https://udemy-ng-http-59d8a.firebaseio.com",
    //     projectId: "udemy-ng-http-59d8a",
    //     storageBucket: "udemy-ng-http-59d8a.appspot.com",
    //     messagingSenderId: "361151080377",
    //     appId: "1:361151080377:web:54be956a74769626a53868"
    //   };
    //https://udemy-ng-http-59d8a.firebaseio.com/
  
    import { onMount } from 'svelte';
    import hobbyStore from './http-store.js';
  
    let hobbies = [];
    let hobbyInput;
    let isLoading = true;
    let getHobbies;
    onMount(() => {
  
    getHobbies = fetch('https://udemy-ng-http-59d8a.firebaseio.com/hobbies.json')
      .then((res) => {
        isLoading = false;
        if (!res.ok) {
          throw new Error('Failed');
        }
        // console.log(res);
        return res.json();
      })
      .then((jsonData) => {
        //console.log(jsonData);
        hobbies = Object.values(jsonData);
        let keys = Object.keys(jsonData);
        console.log(keys);
        for (let key in jsonData) {
          console.log(`Key: ${key} Data: ${jsonData[key]}`);
        }
        hobbyStore.setHobbies(hobbies);
        return hobbies;
      })
      .catch((err) => {
        isLoading = false;
        console.log(err);
      });
    });
  
    //FETCHING DATA: can be fetched directly but
    //should be done in onMount
    // fetch('https://udemy-ng-http-59d8a.firebaseio.com/hobbies.json')
    // .then((res) => {
    //   isLoading = false;
    //   if (!res.ok) {
    //     throw new Error('Failed');
    //   }
    //   // console.log(res);
    //   return res.json();
    // })
    // .then((jsonData) => {
    //   //console.log(jsonData);
    //   hobbies = Object.values(jsonData);
    //   let keys = Object.keys(jsonData);
    //   console.log(keys);
    //   for(let key in jsonData){
    //     console.log(`Key: ${key} Data: ${jsonData[key]}`);
    //   }
    // })
    // .catch((err) => {
    //   isLoading = false;
    //   console.log(err);
    // });
    function addHobby() {
      //without store
      hobbies = [...hobbies, hobbyInput.value];
      //with store
      hobbyStore.addHobby(hobbyInput.value);
      //fetch is built in javascript function
      isLoading = true;
      fetch('https://udemy-ng-http-59d8a.firebaseio.com/hobbies.json', {
        method: 'POST',
        body: JSON.stringify(hobbyInput.value),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          isLoading = false;
          if (!res.ok) {
            throw new Error('Failed');
          }
          console.log(res);
        })
        .catch((err) => {
          isLoading = false;
          console.log(err);
        });
    }
  </script>



<section>
    <label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>

<!-- {#if isLoading}
  <p>Loading...</p>
{:else}
  <ul>
    {#each hobbies as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
{/if} -->
{#await getHobbies}
  <p>Loading...</p>
{:then hobbyData}
  <ul>
    <!-- {#each hobbyData as hobby} -->
    {#each $hobbyStore as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
{:catch error}
  <p>{error.message}</p>
{/await}

</section>



<style lang="scss">
	@import '../../../styles/vars';

  
    </style>
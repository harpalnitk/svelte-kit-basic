<script>

import { fade } from 'svelte/transition';
	
	let password = "Select Password length";
	let menuSel = "8";
	$: pwLength = Number(menuSel);

const charGroups= [
    {name:'lowercase', min:97, max: 123},
    {name:'uppercase', min:65, max: 91},
    {name:'numbers', min:48, max: 58},
    {name:'symbols', min:33, max: 43},

];
const makeRandomChar = ()=>{
    let charType = Math.floor(Math.random() * charGroups.length); // Random number between 0 to 4
    let low = charGroups[charType].min;
    let high = charGroups[charType].max;
    let number = Math.floor(Math.random() * (high-low) + low);
    return number;
};

const makeRandomPw = (codelength) => {
		let code = "";
		for(let i = 0; i <= codelength; i++) {
			let char = String.fromCharCode(makeRandomChar());     
			code += char;
		}  
		password = code;
	}
    let pw;
	const copyCode = () => {
    //let pw = document.querySelector('#code');
    pw.select();
	pw.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
  };	

    //console.log(String.fromCharCode(90));
</script>
<secton id="pw-cont" transition:fade={{ duration: 200 }}>
    <!-- The Close Icon -->
 <span class="close" on:click>&times;</span>
   
   <!-- Password Display -->
   <input type="text" id="code" bind:this={pw} readonly bind:value={password} />
   
   <!-- Menu -->
   <select name="pw-length" 
                   id="pw-length-selector" 
                   bind:value={menuSel}>
       <option value="8">8 characters</option>
       <option value="12">12 characters</option>
       <option value="15">15 characters</option>
       <option value="20">20 characters</option>
       <option value="25">25 characters</option>
   </select>
   
   <!-- Buttons to Make and Copy PW -->
   <div>
       <button id="code-btn" on:click={() => makeRandomPw(pwLength)}>Make Password</button>
       <button id="copy-btn" on:click={copyCode}>Copy</button>
   </div>
</secton>

<style>
   #pw-cont {
       width: 90%;
       height: auto;
       position: absolute;
       top: 5%;
   left: 50%;
   transform: translate(-50%, 10%); /* center modal */
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: flex-start;
       background-color: #ddd;
       box-shadow: 0 0 15px 1px black;
   }

   input#code {
       width: 85%;
       height: 3rem;
       margin-top: 1.5rem;
       padding: 2rem;
       font-size: 1.4rem;
       font-weight: bold;
       border: 1px solid black;
       text-align: center;
       overflow: auto;
   }

   select#pw-length-selector{
    width: 65%;
    height: 3rem;
       font-size: 1.3rem;
       margin: 0 0 20px 0;
       cursor: pointer;
   }

   button {
       width: auto;
       padding: .8rem;
       font-size: 1.3rem;
       background-color: #F2B705;
       color: black;
       cursor: pointer;
   }
   
   #copy-btn {
       background-color: #F24405;
       color: white;
   }


   
   /* The Close Button */
   .close {
       position: absolute;
       bottom: 1px;
       right: 5px;
       color: rgba(41, 34, 34, 0.774);
       font-size: 3rem;
       font-weight: bold;
       transition: 0.3s;
   }

   .close:hover,
   .close:focus {
       color: #bbb;
       text-decoration: none;
       cursor: pointer;
   }

</style>
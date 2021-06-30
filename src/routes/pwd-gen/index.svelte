<script>
    import PasswordGen from '$lib/pwd-gen/PasswordGen.svelte';
    import RegForm from '$lib/pwd-gen/RegForm.svelte';
    let modalShowing = false;
</script>
<div class="page-container">
	<h1>Password Generator</h1>
    <section>
        <RegForm on:showPwdGenModal={()=>modalShowing= true}/>
        {#if modalShowing}
        <PasswordGen on:click={()=> modalShowing= false}/>
        {/if}

    </section>
    </div>

    <style lang="scss">
        @import '../../styles/vars';
    
        .page-container {
            /* background: #f0f0f0; */
            margin: 1rem auto 0;
            padding: 2rem;
            h1 {
                text-align: center;
                margin-bottom: 1rem 0;
            }
            max-width: 768px;
            position: relative;
        }
    </style>
    
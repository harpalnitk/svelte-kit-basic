<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='SVG Animation'></BasicPage>


<main>
<div class="container">
    <div class="icon heart">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
            <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
            </svg>
    </div>
    <div class="icon star">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
            </svg>
    </div>
    <div class="icon moon">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 23 28">
            <path d="M19.719 20.359c-0.562 0.094-1.141 0.141-1.719 0.141-5.797 0-10.5-4.703-10.5-10.5 0-1.984 0.578-3.922 1.625-5.578-4.156 1.234-7.125 5.047-7.125 9.578 0 5.516 4.484 10 10 10 3.016 0 5.844-1.375 7.719-3.641zM22.891 19.031c-1.953 4.234-6.234 6.969-10.891 6.969-6.609 0-12-5.391-12-12 0-6.484 5.078-11.75 11.547-11.984 0.438-0.016 0.797 0.234 0.953 0.609 0.172 0.391 0.063 0.844-0.234 1.125-1.781 1.625-2.766 3.844-2.766 6.25 0 4.688 3.813 8.5 8.5 8.5 1.234 0 2.422-0.266 3.563-0.797 0.391-0.172 0.828-0.094 1.125 0.203s0.375 0.75 0.203 1.125z"></path>
            </svg>
    </div>
</div>
</main>



<style lang="scss">
	@import '../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #06181f;
}
.container {
    position: relative;
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container .icon{
    width: 200px;
}

.container .icon path{
    fill: transparent;
    stroke-width: 1;
    stroke: #31e8ff;
}

</style>
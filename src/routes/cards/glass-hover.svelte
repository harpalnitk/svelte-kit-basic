<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>
<BasicPage title='Glassmorphism Hover Effect card' path='/cards'></BasicPage>


<main>
    <h1>Meet The Team</h1>
    <div class="main-card">
        <div class="front-card">
            <div class="card">
                <div class="card-body">
                    <p><img src="/img/profile/profile-1.jpg" alt="profile-img" class='profile-img'></p>
                    <h4 class='card-title'>Profile 1</h4>
                    <p class='card-text'>This is the basic card with image on top, title, description with flip and zoom animation.</p>
                </div>
            </div>
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
}
main{
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, #19bdbd,#ff05d5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1
{color: white;
font-family: cursive serif;
margin-top: 5%;
}
.main-card{
    position: relative;
}
.card{
    min-height: 250px;
}
.profile-img{
   width: 130px;
   height: 130px;
   border-radius: 50%; 
}
.front-card{
text-align: center;
padding: 10px;
}
</style>
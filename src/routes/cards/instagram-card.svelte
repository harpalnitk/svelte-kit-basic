<script>
    import BasicPage from '$lib/components/UI/BasicPage.svelte';
    let like = false;
</script>
<BasicPage title='Instagram Post Card Clone' path='/cards'></BasicPage>


<main>
<div class="card">
<div class="top">
    <div class="userDetails">
        <div class="profile_img">
            <img src="/img/misc/instagram-card/logo.jpg" class='cover' alt="profile-img">
        </div>
        <h3>online_tutorials<br><span>Jammu, J&K</span></h3>
    </div>
    <div>
        <img src="/img/misc/instagram-card/dot.png" alt="dots" class='dot'></div>
</div>
<div class="imgBx">
    <img src="/img/misc/instagram-card/bg.jpg" class='cover' alt="background_img">
</div>
<div class="actionBtns">
    <div class="left">
        <img src={like ? "/img/misc/instagram-card/heart_red.png" : "/img/misc/instagram-card/heart.png"} class='heart' alt="heart_action_button"
        on:click="{()=>{like = !like}}">
        <img src="/img/misc/instagram-card/comment.png"  alt="comment_action_button">
        <img src="/img/misc/instagram-card/share.png"  alt="share_action_button">
    </div>
    <div class="right">
        <img src="/img/misc/instagram-card/bookmark.png"  alt="bookmark_action_button">
    </div>
</div>
<h4 class="likes">3,684 likes</h4>
<h4 class='message'><b>online_tutorials</b> Thanks for your love and support <span>#cards</span><span>#html</span> <span>#css</span></h4>
<h4 class="comments">View all 245 comments</h4>
<div class="addComments">
    <div class="userImg">
        <img src="/img/misc/instagram-card/user.jpg" class='cover' alt="user_image">
    </div>
    <input type="text" class="text" placeholder="Add a comment...">
</div>
<h5 class="postTime">4 hours ago</h5>
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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #fff;
}
.card{
    position: relative;
    width: 360px;
    min-height: 400px;
    background: #fff;
    box-shadow: 15px 15px 60px rgba(0,0,0,0.15);
    padding: 20px;
}
.card .top{
   display: flex;
   justify-content: space-between; 
   align-items: center;
}
.card .top .userDetails{
    display: flex;
    align-items: center;
}
.card .top .userDetails .profile_img{
position: relative;
width: 36px;
height: 36px;
border-radius: 50%;
overflow: hidden;
margin-right: 8px;
}
.cover{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
}
.card .top .userDetails h3{
    font-size: 16px;
    color: #4d4d4f;
    font-weight: 500;
    line-height: 1em;
}
.card .top .userDetails h3 span{
    font-size: 0.75em;

}
.dot{
    transform: scale(0.6);
    cursor: pointer;
}
.imgBx{
    position: relative;
    width: 100%;
    height: 320px;
    margin: 10px 0 15px;
}
.actionBtns{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.actionBtns img{
   max-width: 24px;
   cursor: pointer;
}
.actionBtns .left img{
margin-right: 8px;
}
.likes{
font-weight: 500;
margin-top: 5px;
font-size: 16px;
color: #4d4d4f;
}
.message{
   font-weight: 400;
   margin-top: 5px;
   color: #777;
   line-height: 1.5em;
}
.message b{ 
    color: #262626;
}
.message span{
   cursor: pointer;
    color: #1d92ff;
} 
.comments{
    font-weight: 10px;
    font-weight: 400;
    color: #999;
}
.addComments{
   display: flex;
   align-items: center;
   margin-top: 10px; 
}
.addComments .userImg{
position: relative;
min-width: 30px;
height: 30px;
border-radius: 50%;
overflow: hidden;
margin-right: 8px;
}
.text{
    width: 100%;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    color: #262626;
}
.text::placeholder{
    color: #777;
}
.postTime{
    margin-top: 10px;
    font-weight: 500;
    color: #777;
}
</style>
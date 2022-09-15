<script> 
let activeIndex = 0
let currentUserId = '1';
let dummyMessagesArray = [
        {id:1,msg:'Hi',userId:'1',time:'04:42'},
        {id:2,msg:'Hello how are you',userId:'2',time:'04:42'},
        {id:3,msg:'let\'s go out for lunch today',userId:'1',time:'04:42'},
        {id:4,msg:'No not today. Lets plan for tomorrow',userId:'2',time:'04:42'},
        {id:5,msg:'oK at what time tomorrow',userId:'1',time:'04:43'},
        {id:6,msg:'7:00 pm',userId:'2',time:'04:43'},
        {id:7,msg:'ok done',userId:'1',time:'04:43'},
        {id:8,msg:'but be at time',userId:'2',time:'04:43'},
        {id:9,msg:'sure!!',userId:'1',time:'04:44'},
    ];
    let dummyMessagesArray2 = [
        {id:1,msg:'Hi',userId:'1',time:'04:42'},
        {id:2,msg:'Are you fine',userId:'1',time:'04:42'},
        {id:3,msg:'I heard you injured yourself',userId:'1',time:'04:42'},
        {id:4,msg:'No I am absolutely fine',userId:'2',time:'04:42'},
        {id:5,msg:'It was a minor accident',userId:'2',time:'04:43'},
        {id:6,msg:'Thank GOD',userId:'1',time:'04:43'},
        {id:7,msg:'I was worried',userId:'1',time:'04:43'},
        {id:8,msg:'Thanks',userId:'2',time:'04:43'},
        {id:9,msg:'I pray to GOD for your seedy recovery and good health. May GOD Bless you',userId:'1',time:'04:44'},
    ];
$:console.log('activeIndex', activeIndex);   
let chatlist=[
    {id:1,imgUrl:'img1.jpg',name:'Harpal Singh',messages:dummyMessagesArray, time:'04:44',new:3},
    {id:2,imgUrl:'img2.jpg',name:'Hazel Kour',messages:dummyMessagesArray2, time:'03:28',new:13},
    {id:3,imgUrl:'img3.jpg',name:'Satinder Kour',messages:dummyMessagesArray, time:'11:55',new:0},
    {id:4,imgUrl:'img4.jpg',name:'Heeranya Kour',messages:dummyMessagesArray2, time:'06:30',new:0},
    {id:5,imgUrl:'img5.jpg',name:'Narinder Singh',messages:dummyMessagesArray, time:'07:59',new:2},
    {id:6,imgUrl:'img6.jpg',name:'Mickey',messages:dummyMessagesArray, time:'01:23',new:1},
    {id:7,imgUrl:'img7.jpg',name:'Monu Singh',messages:dummyMessagesArray2, time:'12:40',new:500},
    {id:8,imgUrl:'img8.jpg',name:'Kingpal',messages:dummyMessagesArray, time:'00:20',new:26},
    {id:9,imgUrl:'img9.jpg',name:'Samar Veer Singh',messages:dummyMessagesArray2, time:'10:01',new:6},
]
</script>
<main class="flex-center">
	<div class="container">
		<div class="leftSide">
			<div class="header">
				<div class="userimg">
					<img src="/img/web-pages/whatsapp-web/user.jpg" alt="user-img" class="cover" />
				</div>
				<ul class="nav_icons">
					<li><i class="fas fa-circle-notch"></i></li>
					<li><i class="fas fa-comment-alt"></i></li>
					<li><i class="fas fa-ellipsis-v"></i></li>
					<!-- 3 vertical line dots &#9479; -->
					<!-- headphones &#127908; -->
				</ul>
			</div>
			<!--Search-->
            <div class="search_chat">
                <div>
                    <input type="text" placeholder="Search or start new chat">
                     <!-- <i class='fas fa-search'></i> -->
                     <span class='search-icon'>&#128269;</span>
                </div>
            </div>
            <!--Chat List-->
            <div class="chatlist">
                {#each chatlist as chat,index}
                <div class="block" class:active={index == activeIndex} on:click={()=> {activeIndex = index; chat.new=0;}} class:unread={chat.new && (chat.new) > 0}>
                    <div class="imgbx">
                        <img src="/img/web-pages/whatsapp-web/{chat.imgUrl}" alt="chat-{chat.id}" class='cover'>
                    </div>
                    <div class="details">
                        <div class="listHead">
                         <h4>{chat.name}</h4>
                         <p class="time">{chat.time}</p>
                        </div>
                        <div class="message_p">
                            <p>{chat.messages[chat.messages.length-1].msg}</p>
                            {#if chat.new && (chat.new) > 0}
                                <b>{chat.new}</b>
                            {/if}
                        </div>
                    </div>
                </div>
                {/each}

            </div>
		</div>

		<div class="rightSide">
            <div class="header">
<div class="imgText">
    <div class="userimg">
        <img src="/img/web-pages/whatsapp-web/{chatlist[activeIndex].imgUrl}" alt="user-img" class="cover" />
    </div>
    <h4>Harpal Singh<br><span>Online</span></h4>
</div>
				<ul class="nav_icons">
					
					<li><i class="fas fa-search"></i></li>
					<li><i class="fas fa-ellipsis-v"></i></li>
	
				</ul>
            </div>
            <!--Chat Box-->
<div class="chatBox">
    {#each chatlist[activeIndex].messages as msg}
    <div class="message my_message" class:my_message={currentUserId == msg.userId} class:frnd_message={!(currentUserId == msg.userId)}>
        <p>{msg.msg}<br><span>{msg.time}</span></p>
    </div> 
    {/each}
</div>
<!--Chat Input-->
<div class="chatbox_input">
    <i class="far fa-smile"></i>
    <!--Smiley  <span>&#128578;</span> -->
    <i class="fas fa-paperclip"></i>
    <input type="text" placeholder="Type a message">
    <i class="fas fa-microphone"></i>
</div>
</div>
        </div>

</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
	main {
		font-family: 'Open Sans', sans-serif;
		min-height: 100vh;
		background: linear-gradient(#009688 0%, #009688 130px, #d9dbd5 130px, #d9dbd5 100%);
	}
    i{
        color: #51585c;
    }
	.container {
        --header-height: 60px;
        --search-height:50px;
        --chat-input-box-height:60px;
		position: relative;
		width: 1300px;
		max-width: 100%;
		height: calc(100vh - 40px);
		background: #fff;
		box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.06);
		display: flex;
	}
	.container .leftSide {

		position: relative;
		flex: 30%;
		background: #fff;
		border-right: 1px solid rgba(0, 0, 0, 0.06);
	}
	.container .rightSide {
		position: relative;
		flex: 70%;
		background: #e5ddd5;
	}
	.container .rightSide::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url('/img/web-pages/whatsapp-web/pattern.png');
		opacity: 0.06;
	}
	.header {
		position: relative;
		width: 100%;
		height: var(--header-height);
		background: #ededed;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 15px;
	}
	.userimg {
		position: relative;
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 50%;
	}
	.cover{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.nav_icons {
		display: flex;
	}
	.nav_icons li {
		display: flex;
		list-style: none;
		cursor: pointer;
		color: #51585c;
		font-size: 1.5em;
		margin-left: 22px;
	}
    .search_chat{
      position: relative;
      width: 100%;
      height: var(--search-height);
      background: #f6f6f6;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .search_chat div{
        width: 100%;
        padding: 0 5px;
    }
    .search_chat div input{
        width: 100%;
        outline: none;
        border: none;
        background: #fff;
        padding: 6px;
        height: 38px;
        border-radius: 30px;
        font-size: 14px;
        padding-left: 40px;
    }
    .search_chat div input::placeholder{
        color: #bbb;
    }
    .search_chat div span{
        position: absolute;
        left: 15px;
        top: 14px;
        font-size: 1.2em;
       
    }

    .chatlist{
        position: relative;
        height: calc(100% - var(--header-height) - var(--search-height));
        overflow-y: auto;
    }
    .chatlist .block{
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid rgba(0,0,0,0.06); 
      cursor: pointer; 
    }
    .chatlist .block.active{
        background: #ebebeb;
    }
    .chatlist .block:hover{
        background: #f5f5f5;
    }
    .chatlist .block .imgbx{
        position: relative;
        min-width: 45px;
        height: 45px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 10px;
    }
    .chatlist .block .details{
        position: relative;
        width: 100%;
    }
    .chatlist .block .details .listHead{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    .chatlist .block .details .listHead h4{
        font-size: 1.1em;
        font-weight: 600;
        color: #111;
    }
    .chatlist .block .details .listHead .time{
font-size: 0.75em;
color: #aaa;
    }
    .chatlist .block.active .details .listHead .time{
        color: #111;
    }
    .chatlist .block.unread .details .listHead .time{
        color: #06d755;
    }
    .message_p{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .message_p p{
        color: #aaa;
        display: -webkit-box;
        -webkit-line-clamp:1;
        font-size: 0.9em;
        -webkit-box-orient:vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .message_p b{
        background: #06d755;
        color: #fff;
        min-width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75em;
    }
    .imgText{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;  
    }
    .imgText h4{
        font-weight: 500;
        line-height: 1.2em;
        margin-left: 15px;
    }
    .imgText h4 span{
        font-size: 0.8em;
        color:#555;

    }

    // Chat Box CSS
    .chatBox{
position: relative;
width: 100%;
height: calc(100% - var(--header-height) - var(--chat-input-box-height));
    padding: 50px;
    overflow-y: auto;
    }
    .message{
        position: relative;
        display: flex;
        width: 100%;
        margin: 5px 0;
    }
    .message p{
        position: relative;
        right: 0;
        text-align: right;
        max-width: 65%;
        padding: 12px;
        background: #dcf8c6;
        border-radius: 10px;
        font-size: 0.9em;
    }
    .message p::before{
        content: '';
        position: absolute;
        top: 0;
        right: -12px;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg,#dcf8c6 0%,#dcf8c6 50%,transparent 50%, transparent);
    }
    .message p span{
        display: block;
        margin-top: 5px;
        font-size: 0.85em;
        opacity: 0.5;

    }
    .my_message{
        justify-content: flex-end;
    }
    .frnd_message{
        justify-content: flex-start;
    }
    .frnd_message p{
        background: #fff;
        text-align: left;
    }
    .message.frnd_message p::before{
        content: '';
        position: absolute;
        top: 0;
        left: -12px;
        width: 20px;
        height: 20px;
        background: linear-gradient(225deg,#fff 0%,#fff 50%,transparent 50%, transparent);
    }
    .chatbox_input{
        position: relative;
        width: 100%;
        height: var(--chat-input-box-height);
        background: #f0f0f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .chatbox_input i{
        cursor: pointer;
        font-size: 1.8em;
        color: #51585c;
    }
    .chatbox_input i:nth-child(1), .chatbox_input i:last-child{
        margin-right: 15px;
    }
    .chatbox_input input{
     position: relative;
     width: 90%;
     margin: 0 20px;
     padding: 10px 20px;
     border: none;
     outline: none;
     border-radius: 30px;
     font-size: 1em;

    }
</style>

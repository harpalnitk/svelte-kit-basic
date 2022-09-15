<script>
  
</script>


<main>
<div class="rating">
    <input type="radio" name='star' id='star1'>
    <label for="star1">
        <!-- <img src="/img/smileys/5.png" alt=""> -->
        <span>&#129321;</span>
        <h4>Loved It</h4>
    </label>
    <input type="radio" name='star' id='star2'>
    <label for="star2">
        <!-- <img src="/img/smileys/4.png" alt=""> -->
        <span>&#128525;</span>
        <h4>Liked It</h4>
    </label>
    <input type="radio" name='star' id='star3' checked="checked">
    <label for="star3">
        <!-- <img src="/img/smileys/3.png" alt=""> -->
        <span>&#128528;</span>
        <h4>It's Ok</h4>
    </label>
    <input type="radio" name='star' id='star4'>
    <label for="star4">
        <!-- <img src="/img/smileys/2.png" alt=""> -->
        <span>&#128542;</span>
        <h4>Disliked It</h4>
    </label>
    <input type="radio" name='star' id='star5'>
    <label for="star5">
        <!-- <img src="/img/smileys/1.png" alt=""> -->
        <span>&#128544;</span>
        <h4>Hated It</h4>
    </label>
    <h2 class="text">Do you like it?</h2>
</div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
    main{
    min-height: 100vh;
    position: relative;
    width: min(70rem, 90vw);
    margin: 0 auto;
    // background: linear-gradient(#dE685E, #EE786E);
    display: grid;
    place-content: center;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #20152d;
}
.rating{
    position: relative;
    display: flex;
    flex-direction: row-reverse;
}
.rating input{
    display: none;
}
.rating label{
    position: relative;
    width: 0;
    height: 100px;
    cursor: pointer;
    transition: 0.5s;
    filter: grayscale(1);
    text-align: center;
    opacity: 0;
    margin-right: 5px;
}
// .rating label img{
// height: 128px;
// width: 160px;
// }
.rating label span{
font-size: 60px;
}
.rating:hover label{
    width: 100px;
    opacity: 0.2;
}
.rating input:hover + label,
.rating input:checked + label{
    filter: grayscale(0);
    opacity: 1;
    width: 80px;
}
.rating label h4{
    color: #fff;
    font-size: 20px;
    padding-top: 10px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    transform: translateY(-50px) scale(0);
    transition: 0.5s;
}
.rating input:hover + label h4,
.rating input:checked + label h4{
opacity: 1;
transform: translateY(0) scale(1);
}
.text{
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    white-space: nowrap;
    font-size: 36px;
}
</style>
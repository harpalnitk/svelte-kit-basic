<main>
    <form action="/concepts/forms/submit" method='POST'>
        <label for="name">Name<input type="text" name='name'></label>
        
        <label for="email">Email<input id='email' type="email" name='email'></label>
       
        <button type="submit">Sign Up!</button>
    </form>
</main>
<style lang='scss'>
form{
    padding: 2em;
}
label{
    display: block;
    margin-bottom: 2em;
}
input{
    margin-left: 0.5em;
}
</style>
<main>
    <h3>For centering a h1 block element with underline</h3>
    <section>
        <!-- Have you ever needed a way to center a headline and 
            add a custom underline only for the 
            content and not the whole element?

We can do that by wrapping the heading content 
in a span and then applying the underline on it.

<h1><span>Headline content</span></h1>

h1 span {
   box-shadow: inset 0 -6px 0 0 lightgrey; 
}

With fit-content, this is no longer needed.

-->
        <h1>A heading, block-element, with a box-shadow</h1>
    </section>
    <section class='figure'>

        <!-- Figure And Image
Within an article body, we might need to have a <figure> 
    take its content width, and not exceed that 
    if it’s too large.

Using fit-content is perfect for that. -->
        <div class="wrapper">
            <figure>
              <img class="c-card__media" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/182774/blueberry-cheesecake-x.png" alt="">
              <figcaption>A photo for a blueberry cheesecake which sounds very delicious.</figcaption>
            </figure>
          </div>
    </section>
  
</main>

<style lang='scss'>
        main{
            min-height: 100vh;
            background: #f8f8f8;
            flex-direction: column;
            h3{
                font-weight: 700;
                font-size: 2em;
                margin-bottom: 1rem;
            }
        }
        section{
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    h1 {
  font-size: 2rem;
  width: fit-content;
  margin: 2rem auto;
  box-shadow: inset 0 -6px 0 0 lightgrey;
}

.figure{
    .wrapper {
  max-width: 800px;
  padding: 0 1rem;
  margin: 0 auto;
}

figure {
  width: fit-content;
  margin: 0 auto;
  background: #e2deed;
  padding: 1rem;
  border-radius: 5px;
}

figcaption {
  margin-top: 0.5rem;
}

img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}
}
</style>
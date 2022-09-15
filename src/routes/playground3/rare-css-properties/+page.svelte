<main class='flex-center'>
    <h3>Column Count</h3>
    <section class='column-count'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sapiente provident necessitatibus, voluptatibus reprehenderit, tempore nemo expedita sequi dolorem doloremque quos. Tempore consectetur voluptatum incidunt sequi ad, aspernatur tempora fuga doloremque odio eaque iste in tenetur laboriosam hic dolorem. Non quaerat culpa minima, cupiditate porro beatae et sed doloremque perferendis quidem eum consequuntur necessitatibus explicabo. Consequatur tenetur nisi dolore itaque beatae omnis harum enim sapiente illo fugiat! Culpa esse fuga natus ut rerum explicabo enim accusamus est earum, asperiores ipsum provident minima, consequatur excepturi deleniti sequi architecto similique error expedita repellat nam quas ad labore nulla. Laborum quos quisquam facere exercitationem nesciunt, aliquid distinctio ipsum enim, atque tenetur maxime dolore aut sapiente repellendus necessitatibus natus? Praesentium aspernatur ea at eius perferendis ipsa aliquid necessitatibus sit ut magni perspiciatis repellat quis et, expedita dicta ducimus illum natus laboriosam dolor asperiores nam totam quam itaque! Perferendis voluptatum nesciunt vel aut maxime autem deleniti quas numquam? Ipsa recusandae qui excepturi quis, nesciunt ullam temporibus aliquid cupiditate architecto earum ipsam accusantium mollitia nihil sequi aut deserunt facere soluta eaque! Nesciunt, quos ipsum. Optio rerum distinctio consectetur laborum deleniti vero quisquam quam molestias debitis mollitia expedita suscipit, ab sapiente neque fugit quaerat quas beatae esse voluptas vel sint reprehenderit at ullam eum. Pariatur cumque nam natus distinctio odio, maxime dicta cupiditate ratione tempora corporis adipisci quibusdam. Officiis ducimus corrupti ipsa possimus vel vero, repudiandae porro excepturi quia harum in non, debitis delectus. Vitae in, cum doloribus veniam eos quaerat inventore eaque dignissimos reprehenderit blanditiis nisi.</p>
    </section>
    <h3>ch size</h3>
    <section class="ch">
        <div class="card">01</div>
        <div class="card">02</div>
        <div class="card">03</div>
    </section>
    <h3>CSS Counters</h3>
    <section class="counter">
<p>Lorem ipsum dolor sit amet consectetur </p>
<p>Voluptatum temporibus  architecto ad accusantium!</p>
<p>Consectetur nostrum consequatur provident. Optio, nobis?</p>
<p>Eum accusamu dignissimos. Doloremque, facere!</p>
<p>Corrupti necessitatibu deleniti sequi nisi?</p>
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
        .column-count{
            p{
                column-count: 3;
            }
        }
        .ch{
            .card{
                // width: 40px;
                width: 3ch;
                font-size: 4vw;
                color: #fff;
                background: darkcyan;
                margin: 20px;
                padding: 1rem;
            }
        }
        .counter{
            counter-reset: anyName;
            display: flex;
            flex-direction: column;
            p::before{
                counter-increment: anyName;
                content:counter(anyName) ".) ";
            }
        }
        
    </style>
<main class='flex-center'>
    <h3>Basic</h3>
    <section class='basic'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis repellendus porro dolorum aperiam consequatur hic a temporibus esse dicta nemo ullam incidunt vero aliquid, culpa illo voluptas cupiditate inventore!</p>

<div id="cover"></div>
    </section>
    <h3>Basic</h3>
    <section class='with-animation'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reiciendis repellendus porro dolorum aperiam consequatur hic a temporibus esse dicta nemo ullam incidunt vero aliquid, culpa illo voluptas cupiditate inventore!</p>

<div id="cover"></div>
    </section>

    <section class="with-mask">
        <div></div>
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

        .basic{
            position: relative;
            p {
  max-width: 320px;
}

#cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
    45deg,
    #ff8a00,
    #ff8a00 10px,
    transparent 10px,
    transparent 20px
  );
}
        }
  @property --start {
  syntax: "<length>";
  inherits: false;
  initial-value: 10px;
}
        .with-animation{
            position: relative;

#cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
    45deg,
    #ff8a00,
    #ff8a00 var(--start),
    transparent var(--start),
    transparent var(--end, 20px)
  );
  animation: cover 5s linear infinite;
}
@keyframes cover {
  to {
    --start: 20px;
  }
}
        }


        .with-mask{
            min-height: 80vh;
            position: relative;
            &::before {
  content:"";
  position:absolute;
  inset:0 -50%;
  background:#ff8a00;
  transform:skewX(45deg);
  -webkit-mask:
     linear-gradient(90deg,#0000 50%,#000 0) 0,
     linear-gradient(90deg,#0000 50%,#000 0) 0;
  -webkit-mask-size:200px 100%;
  -webkit-mask-composite:xor;
          mask-composite:exclude;
  animation:p 2s linear infinite alternate;
}

@keyframes p{
  to {-webkit-mask-position:100px,0}
}


  background:url('data:image/svg+xml,%3Csvg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z" fill="white" fill-rule="evenodd"/%3E%3C/svg%3E') red;

        }
        
    </style>
<script>
        import { onMount } from "svelte";

    let rgbValue = '#00FF00';
    let rgbAlphaValue='';

    let hslAlphaValue;
    let hslValue;

    let namedColor;
    let namedColorAlpha;

    let borderColor;
    let borderColorAlpha;

onMount(() => {
    if (CSS.paintWorklet) {  
        try {
            //We add the paint worklet using CSS.paintWorklet.addModule('your_js_file')
            CSS.paintWorklet.addModule('../js/paint/css-color-use.js'); 
            console.log('Js file loaded');
        } catch (error) {
            console.log('Error',error);
        }            
    
}});

</script>

<main class='flex-center'>
    <h3>Use of CSS Color in Card</h3>
    <section class='flex-center'>
        <div class="card card-without-alpha"></div>
        
    </section>
    <h3>CArd With Alpha</h3>
    <section class='flex-center'>
        <div class="card card-with-alpha"></div>
        
    </section>

    </main>

    <main class="flex-center examples">
        <h3>RGB</h3>
        <section class='rgb'>
            <div class="demo">
              <div id="rbg" style="--bg-color:{rgbValue};--bg-alpha:{rgbAlphaValue}">Testing RGB</div>
            </div>
            <fieldset>
              <legend>Adjust background</legend>
              <div>
                <label for="color1">Color</label>
                <input id="color1" type="color" bind:value="{rgbValue}">
              </div>
              <div>
                <label for="alpha1">Alpha</label>
                <input id="alpha1" type="range" bind:value="{rgbAlphaValue}" min="0" max="1" step="0.1">
              </div>
            </fieldset>
          </section>
          <h3>HSL</h3>
          <section>
           
            <div class="demo">
              <div id="hsl" style='--h:{hslValue};--bg-alpha:{hslAlphaValue}'>Testing HSL</div>
            </div>
            <fieldset>
              <legend>Adjust background</legend>
              <div>
                <label for="h">Hue</label>
                <input id="h" type="range" bind:value="{hslValue}" min="0" max="360" >
              </div>
              <div>
                <label for="alpha2">Alpha</label>
                <input id="alpha2" type="range" bind:value="{hslAlphaValue}" min="0" max="1" step="0.1">
              </div>
            </fieldset>
          </section>
          <h3>Named colors</h3>
          <section>
          
          
            <div class="demo">
              <div id="named" style='--bg-color:{namedColor};--bg-alpha:{namedColorAlpha}'>Testing HSL</div>
            </div>
            <fieldset>
              <legend>Named color</legend>
              <div>
                <label for="color-select">Color</label>
                <select id="color-select" bind:value="{namedColor}">
                  <option value="red">red</option>
                  <option value="blue">blue</option>
                  <option value="goldenrod">goldenrod</option>
                  <option value="tomato">tomato</option>
                  <option value="yellow">yellow</option>
                  <option value="rebeccapurple">rebeccapurple</option>
                </select>
              </div>
              <div>
                <label for="alpha3">Alpha</label>
                <input id="alpha3" type="range" bind:value="{namedColorAlpha}" min="0" max="1" step="0.1" >
              </div>
            </fieldset>
          </section>
          <h3>Borders</h3>
          <section>
            
            <div class="demo">
              <div id="borders" style='--bg-color:{borderColor};--bg-alpha:{borderColorAlpha}'>Testing Borders</div>
            </div>
            <fieldset>
              <legend>Adjust background</legend>
              <div>
                <label for="color4">Color</label>
                <input id="color4" type="color" bind:value="{borderColor}">
              </div>
              <div>
                <label for="alpha4">Alpha</label>
                <input id="alpha4" type="range" bind:value="{borderColorAlpha}"  min="0" max="1" step="0.1">
              </div>
            </fieldset>
          </section>
    </main>
    <style lang='scss'>
        main{
            --color-1-hsl: 200deg 15% 73%;
           --color-1: hsl(var(--color-1-hsl));


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
        }
        .card{
            height: 400px;
             width: 300px;
             border: 1px solid grey;
           
        }
        .card-without-alpha{
            background: var(--color-1);
        }

        .card-with-alpha{
            background: hsl(var( --color-1-hsl) / 0.5);
            // background: hsl(from var(--color-1) h s l / 0.5);
        }

        .examples{
            .demo{
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAABZJREFUCB1jYMACpk+f/h9DmG6CQJsB2bIQmai3jpsAAAAASUVORK5CYII=);
            background-repeat: repeat;

  div {
    height: 5rem;
  }
        }

        #rbg {
  --bg-alpha: 0.4;
  --bg-color: #00ff00;
  background: paint(alpha);
}
#hsl {
  --h: 255;
  --bg-alpha: 0.4;
  --bg-color: hsl(var(--h) 94% 43%);
  background: paint(alpha);
}

#named {
  --bg-alpha: 0.4;
  --bg-color: red;
  background: paint(alpha);
}

#borders {
  --bg-alpha: 0.4;
  --bg-color: blue;
  border-width: 10px;
  border-style: solid;
  border-image-source: paint(alpha);
  border-image-repeat: repeat;
  border-image-slice: 1%;
}
        }

 
        
    </style>
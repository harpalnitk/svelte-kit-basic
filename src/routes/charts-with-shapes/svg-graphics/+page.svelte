<script>
   

    let darkColor = '#635bff';
    let lightColor = '#80e9ff';
 function svgClickFunction(){
     const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
     const rando= ()=> colors[Math.floor(Math.random()*colors.length)];
     darkColor = rando();
     lightColor = rando();
 }
</script>


<main>
    <div class="svg-div" >
        <!--  <svg viewBox="0 0 100 100"> -->
        <!-- x, y here is in percentage -->
        <!-- <rect x="10" y="10" width="20" height="20"/>
      <circle cx="50" cy="50" r="5"/>
          </svg> -->
      
      
          <!-- 
      https://www.figma.com/  website for downloading tool for designing SVGs-->
      
          <svg on:click={svgClickFunction} style="--dark-color:{darkColor};--light-color: {lightColor};" width="60" height="50" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Triangles" clip-path="url(#clip0)">
              <g id="darkGroup">
              <path id="dark1" d="M40 51.768C41.3333 52.5378 41.3333 54.4623 40 55.2321L13.75 70.3875C12.4167 71.1573 10.75 70.195 10.75 68.6554L10.75 38.3445C10.75 36.8049 12.4167 35.8427 13.75 36.6125L40 51.768Z" />
              <path id="dark2" d="M41 51.768C42.3333 52.5378 42.3333 54.4623 41 55.2321L14.75 70.3875C13.4167 71.1573 11.75 70.195 11.75 68.6554L11.75 38.3445C11.75 36.8049 13.4167 35.8427 14.75 36.6125L41 51.768Z" fill-opacity="0.7"/>
              </g>
              <g id="lightGroup">
              <path id="light1" d="M62 51.768C63.3333 52.5378 63.3333 54.4623 62 55.2321L35.75 70.3875C34.4167 71.1573 32.75 70.195 32.75 68.6554L32.75 38.3445C32.75 36.8049 34.4167 35.8427 35.75 36.6125L62 51.768Z"/>
              </g>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="120" height="100" fill="white"/>
              </clipPath>
              </defs>
              </svg>
      </div>
      
</main>


<style lang="scss">
	@import '../../../styles/vars';
    .svg-div {
      display: flex;
      justify-content: center;
      align-items: center;
    border: 1px solid red;
    // padding: 1rem;
    // margin: 1rem;
    margin-top: 5rem;
    /* background-color: #ccc; */
   
    
    svg {
      cursor: pointer;
      #darkGroup {
        fill: var(--dark-color);
      }
      #lightGroup {
        fill: var(--light-color);
      }
      #dark1,
      #dark2,
      #light1 {
        transition: all 1s ease;
      }
      #dark2 {
        transform: translateX(-100%);
      }
      &:hover {
        #light1 {
          transform: translateX(20%);
        }
        #dark1 {
          transform: translateX(40%);
          opacity: 0;
        }
        #dark2 {
          transform: translateX(20%);
        }
      }
    }
  }
  
    </style>
<main>
    <section class='flex-center'>
        <div class="blob">
            <!-- //blob from website https://blobs.app/ -->
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(254, 0, 242);"></stop>
                    <stop offset="100%" style="stop-color: rgb(251, 2, 128);"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#gradient)">
                    <animate attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="M403,310.5Q394,371,341.5,420Q289,469,210.5,462Q132,455,89,389.5Q46,324,61.5,255.5Q77,187,102.5,113Q128,39,205.5,49.5Q283,60,354.5,81Q426,102,419,176Q412,250,403,310.5Z;
                    M406.5,318Q412,386,351.5,434.5Q291,483,229.5,437.5Q168,392,132.5,349Q97,306,88.5,247Q80,188,123.5,147Q167,106,229.5,58Q292,10,335,76.5Q378,143,389.5,196.5Q401,250,406.5,318Z;
                    M420.5,302.5Q375,355,330.5,404.5Q286,454,229.5,418.5Q173,383,105.5,355Q38,327,59,257.5Q80,188,106,117Q132,46,212,29Q292,12,348,66.5Q404,121,435,185.5Q466,250,420.5,302.5Z;
                    M416,313.5Q402,377,341.5,400Q281,423,215.5,423Q150,423,124.5,364Q99,305,80,243Q61,181,97,114Q133,47,207.5,58Q282,69,342.5,95.5Q403,122,416.5,186Q430,250,416,313.5Z;
                    M403,310.5Q394,371,341.5,420Q289,469,210.5,462Q132,455,89,389.5Q46,324,61.5,255.5Q77,187,102.5,113Q128,39,205.5,49.5Q283,60,354.5,81Q426,102,419,176Q412,250,403,310.5Z;">
               <!-- add first and last value same for loop animation -->
                </animate>
                </path>
              </svg>
        </div>


        <!-- To add glow effects -->
        <div class="blob">
            <!-- //blob from website https://blobs.app/ -->
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: rgb(254, 0, 242);"></stop>
                    <stop offset="100%" style="stop-color: rgb(251, 2, 128);"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#gradient)">
                    <animate attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="M403,310.5Q394,371,341.5,420Q289,469,210.5,462Q132,455,89,389.5Q46,324,61.5,255.5Q77,187,102.5,113Q128,39,205.5,49.5Q283,60,354.5,81Q426,102,419,176Q412,250,403,310.5Z;
                    M406.5,318Q412,386,351.5,434.5Q291,483,229.5,437.5Q168,392,132.5,349Q97,306,88.5,247Q80,188,123.5,147Q167,106,229.5,58Q292,10,335,76.5Q378,143,389.5,196.5Q401,250,406.5,318Z;
                    M420.5,302.5Q375,355,330.5,404.5Q286,454,229.5,418.5Q173,383,105.5,355Q38,327,59,257.5Q80,188,106,117Q132,46,212,29Q292,12,348,66.5Q404,121,435,185.5Q466,250,420.5,302.5Z;
                    M416,313.5Q402,377,341.5,400Q281,423,215.5,423Q150,423,124.5,364Q99,305,80,243Q61,181,97,114Q133,47,207.5,58Q282,69,342.5,95.5Q403,122,416.5,186Q430,250,416,313.5Z;
                    M403,310.5Q394,371,341.5,420Q289,469,210.5,462Q132,455,89,389.5Q46,324,61.5,255.5Q77,187,102.5,113Q128,39,205.5,49.5Q283,60,354.5,81Q426,102,419,176Q412,250,403,310.5Z;">
               <!-- add first and last value same for loop animation -->
                </animate>
                </path>
              </svg>
        </div>
    </section>
</main>

<style>
section{
    position: relative;
    min-height: 100vh;
    background: #250821;
}
.blob{
    position: absolute;
    width: 500px;
    height: 500px;
    /* background: #fff; */
}
.blob:nth-child(2){
    filter: blur(50px);
}
</style>
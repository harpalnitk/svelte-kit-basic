<main class="flex-center">
<label>
    <input type="checkbox">
    <div class="icon">
        <div class="shadow"></div>
        <div class="iconBox">
            <i class="fa fa-power-off" aria-hidden="true"></i>
        </div>
    </div>
</label>
</main>

<style>
    main{
        min-height: 100vh;
        background: #cfd1e1;
        overflow: hidden;

    }
    label{
        position: relative;
        width: 120px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background: #777; */
        cursor: pointer;
    }
    label::before{
        content: '';
        position: absolute;
        width: 60%;
        height: 4px;
        background: #444;
        border-radius: 4px;
    }
    label input[type=checkbox] {
        position: absolute;
        -webkit-appearance: none;
		outline: none;
    }
    .icon{
        position: absolute;
        left: 0;
        width: 60px;
        height: 100%;
        /* background: #f00; */
        transition: 0.5s; 
    }
    label input:checked[type='checkbox'] ~ .icon{
      left:60px;  
    }
    .icon::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      background: linear-gradient(#fff,#fff,#e3e3e3);
      filter: blur(1px);
      z-index: 1;
      }
      .icon::after{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 100%;
      background: #9d9d9d;
      filter: blur(1px);
      }
      .shadow{
          position: absolute;
          top: 30px;
          left: -12px;
          /* top left calculated by trial and error */
          width: 84.85px; /* diagonal of a square of side 60px */
          height: 300px;
          background: linear-gradient(180deg, rgba(0,0,0,0.1),transparent,transparent);
      transform-origin: top;
      transform: rotate(315deg);
      pointer-events: none;
        }
      .iconBox{
         position: relative;
         width: 100%;
         height: 100%;
         background: linear-gradient(#dbdae1,#a3aaba); 
         box-shadow: 5px 5px 5px rgba(0,0,0,0.1),
         15px 15px 15px rgba(0,0,0,0.1),
         20px 20px 20px rgba(0,0,0,0.1),
         30px 30px 30px rgba(0,0,0,0.1),
         inset 1px 1px 2px #fff;
         display: flex;
         justify-content: center;
         align-items: center;
      }
      .iconBox i{
          color: #555;
          font-size: 1.5rem;
          /* -webkit-text-stroke: .2px; */
          transition: 0.5s;
      }
      label input:checked[type='checkbox'] ~ .icon .iconBox i{
          color: #00ffe2;
          filter: drop-shadow(0 0 15px #00ffe2);
      }
</style>
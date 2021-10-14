<script>
    

    </script>

  
        <a href="read-more" ><span>Read More</span></a>
        <a href="read-more" ><span>Read More</span></a>
    

    
    <style lang="scss">
        @import '../../../styles/vars';
        a {
          position: relative;
          width: 300px;
          height: 75px;
          margin: 10px 0;
          font-size: 24px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          transition: 0.5s;
          color: #000;

        }
        a:hover{
            color: #fff;
        }
        a::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: url(/img/misc/btn-bg1.png);
            background-size: cover;
            transform-origin: left;
            transition: 0.5s;
        }
        a:nth-child(2):before{
            background: url(/img/misc/btn-bg2.png);
        }
        a:hover::before{
width: 100%;
        }
         a span{
             position: relative;
             z-index: 1;
         }
        </style>
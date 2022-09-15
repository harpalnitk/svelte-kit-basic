<main>
    <section>
        <h1>Resize the below div!</h1>
    
      
    
        <div class="wrapper-1">
          <div class="box-1">
            <div class="float-1"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci. Pellentesque gravida urna sit amet nulla suscipit, at venenatis lorem dignissim. Morbi quis nunc eu velit condimentum ornare. Curabitur finibus tincidunt ullamcorper. Pellentesque tincidunt et odio vitae tempus. Praesent ac erat ut eros venenatis pulvinar. Pellentesque eu dapibus dui. Ut semper sed enim ut vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae elit eget velit porttitor consequat nec sed turpis. Proin libero nisl, egestas hendrerit vulputate et, lobortis non nulla. Aenean dui libero, dictum vel nibh eget, tristique egestas enim.
          </div>
        </div>
    </section>
    
    
    <section>
        <h1>Resize the below div!</h1>
    
        <div class="wrapper-2">
          <div class="box-2">
            <div class="float2"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
            <div class="float2"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci. Pellentesque gravida urna sit amet nulla suscipit, at venenatis lorem dignissim. Morbi quis nunc eu velit condimentum ornare. Curabitur finibus tincidunt ullamcorper. Pellentesque tincidunt et odio vitae tempus. Praesent ac erat ut eros venenatis pulvinar. Pellentesque eu dapibus dui. Ut semper sed enim ut vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae elit eget velit porttitor consequat nec sed turpis. Proin libero nisl, egestas hendrerit vulputate et, lobortis non nulla. Aenean dui libero, dictum vel nibh eget, tristique egestas enim.
          </div>
        </div>
    </section>
    
    <section>
        <h1>Resize the below div!</h1>
    
    <div class="wrapper-3">
      <div class="box-3">
        <img src="https://picsum.photos/id/1/100/100"  alt=''> 
        <img src="https://picsum.photos/id/1/100/100" alt=''>
        <div class="float3"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
        <div class="float3"><img src="https://picsum.photos/id/1/100/100" alt=''></div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui quis orci ultricies aliquet nec sed enim. Mauris id rutrum nulla, et ornare leo. Donec aliquet malesuada tellus, eu laoreet lectus tincidunt ut. Quisque lacus magna, interdum eu urna ac, aliquet gravida orci. Pellentesque gravida urna sit amet nulla suscipit, at venenatis lorem dignissim. Morbi quis nunc eu velit condimentum ornare. Curabitur finibus tincidunt ullamcorper. Pellentesque tincidunt et odio vitae tempus. Praesent ac erat ut eros venenatis pulvinar. Pellentesque eu dapibus dui. Ut semper sed enim ut vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae elit eget velit porttitor consequat nec sed turpis. Proin libero nisl, egestas hendrerit vulputate et, lobortis non nulla. Aenean dui libero, dictum vel nibh eget, tristique egestas enim.
      </div>
    </div>
    </section>
</main>


<style>
     /*CSS FOR IMAGE ALONGWITH TEXT IN A BOX*/

	section {
		margin: 5rem 0;
	}

/* FIRST////////////////////////////////////////////////////////// */

    .wrapper-1 {
        /*Flexbox allows us to rely on the default stretch alignment to be able to later use height: 100%*/
    display:flex;
    border:1px solid;
    overflow: hidden;
    resize: horizontal;
    margin-bottom:100px;
}

/*The .box within the .wrapper is our flex item.
 We don’t need any particular CSS applied to the
  box. It defines the height of the wrapper and, at
   the same time, is stretched to the same height. This
    behavior will give us a “reference height” that can 
    be used by the child elements.*/
.box-1 {
    text-align:justify;
    font-size:20px;
}
/*Our .float element will take the entire height
 next to the text content, thanks to the height 
 calculation we detailed above. Inside this element 
 we push the image to the bottom using flexbox alignment.*/
.float-1 {
    float:right;
    height:100%;
    margin-left:15px;
    display:flex;
    align-items:flex-end;
    /*The shape-outside CSS property defines a shape—which may be 
    non-rectangular—around which adjacent inline content should wrap.
     By default, inline content wraps around its margin box; shape-outside
      provides a way to customize this wrapping, making it possible 
      to wrap text around complex objects rather than simple boxes.

In other words, shape-outside sets the way content
 flows around an element’s bounding box.*/

    shape-outside:inset(calc(100% - 100px) 0 0); 
    /* inset: 5px 15px 10px; /* top left/right bottom ; 
    The inset CSS property is a shorthand that corresponds
     to the top, right, bottom, and/or left properties.*/


     /*TP PLACE IMAGE IN CENTER USE
         justify-content:center;
    shape-outside:inset(calc(50% - 50px) 0 );
    
    */
    
    
    /*It takes a number of values. One of those is the inset() 
    function which, again, according to MDN:

Defines an inset rectangle. When all of the first four 
arguments are supplied they represent the top, right, bottom
and left offsets from the reference box inward that define 
the positions of the edges of the inset rectangle.

So, with shape-outside: inset(calc(100% - X) 0 0) we can
 create an inset rectangle that starts exactly at the top
  of the image. And the top is equal to 100% - X, where X 
  is the image height and 100% is the height of the .float
   element. This allows the text to wrap within the free
    space on the top of the image. This is responsive,
     plus we can easily switch between left and right
      (by adjusting the float property)


That’s it! The only major caveat is that you need to know the image height.*/
}


/*CSS FOR SECOND BOX*/

.wrapper-2 {
    display:flex;
    border:1px solid;
    overflow: hidden;
    resize: horizontal;
    margin-bottom:100px;
}
.box-2 {
    text-align:justify;
    font-size:20px;
}
.float2 {
    float:left;
    height:100%;
    margin-right:15px;
    display:flex;
    align-items:flex-end;
    shape-outside:inset(calc(100% - 100px) 0 0);
}
.float2 ~ .float2 {
    float:right;
    margin-left:15px;
    margin-right:0;
}

/*CSS FOR THIRD BOX*/

.wrapper-3 {
    max-width:800px;
    display:flex;
    border:1px solid;
    overflow:hidden;
    resize: horizontal;
    margin-bottom:100px;
}
.box-3 {
    text-align:justify;
    font-size:20px;
    padding-bottom: 80px;
}
.float3 {
    float:left;
    height:115%;
    margin-right: 15px;
    margin-left: -110px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    shape-outside:inset(calc(100% - 100px) 0 0);
}
.float3 ~ .float3 {
    float:right;
    margin-right: -110px;
    margin-left: 15px;
}
img {
  float:left;
    margin-right: 10px;
}
img ~ img {
  float:right;
    margin-right: 0;
    margin-left: 10px;
}
.float3  img {
  margin:0;
}
</style>
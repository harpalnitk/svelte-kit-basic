<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
	const productList = [
		{ id: 1, url: '1.jpg', name: 'Rayon a-line Dress', rating:3 },
		{ id: 2, url: '2.jpg', name: 'Analog Black man Watch',  rating:2},
		{ id: 3, url: '3.jpg', name: `Men's Regular Fit Shirt`,rating:5 },
		{ id: 4, url: '4.jpg', name: `Women's Handbag` ,rating:1},
		{ id: 5, url: '5.jpg', name: `Women's Relaxed Fit Jeans`, rating:4 },
		{ id: 6, url: '6.jpg', name: 'Round Neck Printed Top', rating:4 },
		{ id: 7, url: '7.jpg', name: 'Men Running Shoe' , rating:5},
		{ id: 8, url: '8.jpg', name: 'Men Pullover Sweater', rating:3 }
	];
</script>

<BasicPage title="E-Commerce Products Cards  Page" path="/web-pages" />

<main>
	<div class="container">
		{#each productList as product}
			<div class="card">
				<div class="imgBx">
					<img src="/img/web-pages/e-commerce/{product.url}" alt="image-1" />
				<ul class="action">
                    <li>
                        <i class="fas fa-heart"></i>
                        <span>Add to Wishlist</span>
                    </li>
                    <li>
                        <i class="fas fa-shopping-cart"></i>
                    <span>Add to Cart</span>
                    </li>
                    <li>
                        <i class="far fa-eye"></i>
                    <span>View Details</span>
                    </li>
                </ul>
                </div>
				<div class="content">
					<div class="productName">
						<h3>{product.name}</h3>
					</div>
					<div class="price_rating">
						<h2>$13.45</h2>
						<div class="rating">
                            <!-- THIS WILL ALSO WORK 
                                {#each Array(3) as _, i}
                            <li>{i + 1}</li>
                        {/each} -->

                            {#each {length: product.rating} as _, i}
                            <i class="fas fa-star" />
                            {/each}
                            {#each {length: 5 - product.rating} as _, i}
                            <i class="fas grey fa-star" />
                            {/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>

<style lang="scss">
	@import '../../styles/vars';
	main {
		min-height: 100vh;
		position: relative;
		width: min(70rem, 90vw);
		margin: 0 auto;
	}
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 70vh;
        background: #dcdcdc;
    }
    .container{
        position: relative;
        width: 1200px;
        display: grid;
        //grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
        //in above setting in one column mode image doesnt fit in card
        grid-template-columns: repeat(auto-fit, 250px);
        justify-content: space-evenly;
        gap: 20px;  
        padding: 20px;  
    }
        .container .card{
            width: 100%;
            background: #fff;
}
.container .card .imgBx{
    position: relative;
    width: 100%;
    height: 310px;
    overflow: hidden;
}
.container .card .imgBx img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease-in-out;
    transform-origin: right;
}
.action{
    position: absolute;
    top: 10px;
    right: 10px;
}
.action li{
    position: relative;
    list-style: none;
    width: 40px;
    height: 40px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
    cursor: pointer;
    transform: translateX(60px);
    transition: transform 0.5s;
}
.container .card:hover .action li{
    transform: translateX(0px);
}
.action li:nth-child(2){
    transition-delay: 0.15s;
}
.action li:nth-child(3){
    transition-delay: 0.3s;
}
.action li:hover{
    background: #ff2020;
    color: #fff;

}
.action li span{
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%) translateX(-20px);
    white-space: nowrap;
    padding: 4px 40px;
    background: #fff;
    color: #333;
    font-weight: 500;
    font-size: 12px;
    border-radius: 4px;
    pointer-events: none;
    opacity: 0;
    transition: 0.5s;
}
.action li:hover span{
    opacity: 1;
    transform: translateY(-50%) translateX(0px);
}
.action li span::before{
    content: '';
    position: absolute;
    top: 50%;
    right: -4px;
    width: 8px;
    height: 8px;
    background: #fff;
    transform: translateY(-50%) rotate(45deg);
}
.container .card:hover .imgBx img{
transform: scale(1.5);
}
.container .card .content{
    padding: 10px;
}
.container .card .content .productName h3{
font-size: 18px;
font-weight: 500;
color: #333;
margin: 5px 0;
}
.container .card .content .price_rating{
display: flex;
justify-content: space-between;
align-items: center;
}
.container .card .content .price_rating h2{
    font-size: 20px;
    color: #ff2020;
    cursor: pointer;
}
.container .card .content .price_rating .fas{
color: #ffd513;
cursor: pointer;
}
.container .card .content .price_rating .fas.grey{
color: #ccc;
}
</style>

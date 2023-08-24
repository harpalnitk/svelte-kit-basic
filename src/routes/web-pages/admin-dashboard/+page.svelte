<script>
	import Charts from '$lib/components/Charts.svelte';


	//CHARTS INPUT DATA
	//CHART1
	    // Chart data Input Variables
	 let type = 'polarArea';
     let labels = ['Facebook', 'Youtube', 'Amazon'];
     let label = 'Traffic Source';
     let data = [1200, 1950, 3000];
     let backgroundColor = ['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)'];

	 	//CHART2
	    // Chart data Input Variables
		let type1 = 'bar';
     let labels1 = ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
     let label1 = 'Earnings';
     let data1 = [1200, 1900, 3000, 500, 2200, 3100,1090,1450,400,700,900,1200];
     let backgroundColor1 = ['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
	 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)','rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
	 'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'];
	
	let toggle = false;
	let selected = 0;
	const navigationList = [
		{ id: 1, name: 'Brand Name', icon: 'fab fa-apple', url: 'home' },
		{ id: 2, name: 'Dashboard', icon: 'fas fa-home', url: 'dashboard' },
		{ id: 3, name: 'Customers', icon: 'fas fa-users', url: 'customers' },
		{ id: 4, name: 'Message', icon: 'fas fa-comment-alt', url: 'message' },
		{ id: 5, name: 'Help', icon: 'fas fa-question-circle', url: 'help' },
		{ id: 6, name: 'Settings', icon: 'fas fa-cog', url: 'settings' },
		{ id: 7, name: 'Password', icon: 'fas fa-lock', url: 'password' },
		{ id: 8, name: 'Sign Out', icon: 'fas fa-sign-out-alt', url: 'signout' }
	];

	const cards = [
		{ id: 1, name: 'Daily Views', number: '1042', iconClass: 'fas fa-eye' },
		{ id: 2, name: 'Sales', number: '80', iconClass: 'fas fa-shopping-cart' },
		{ id: 3, name: 'Comments', number: '208', iconClass: 'fas fa-comments' },
		{ id: 4, name: 'Earning', number: '$6042', iconClass: 'fas fa-dollar-sign' }
	];
	const recentOrders = [
		{ id: 1, name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered', class: 'delivered' },
		{ id: 2, name: 'Window Cooler', price: '$110', payment: 'Due', status: 'Pending', class: 'pending' },
		{ id: 3, name: 'Speakers', price: '$620', payment: 'Paid', status: 'Return', class: 'return' },
		{ id: 4, name: 'HP Laptop', price: '$6000', payment: 'Due', status: 'In Progress', class: 'inprogress' },
        { id: 5, name: 'Star Refrigerator', price: '$1200', payment: 'Paid', status: 'Delivered', class: 'delivered' },
		{ id: 6, name: 'Window Cooler', price: '$110', payment: 'Due', status: 'Pending', class: 'pending' },
		{ id: 7, name: 'Speakers', price: '$620', payment: 'Paid', status: 'Return', class: 'return' },
		{ id: 8, name: 'HP Laptop', price: '$6000', payment: 'Due', status: 'In Progress', class: 'inprogress' },
        { id: 9, name: 'Apple Watch', price: '$680', payment: 'Paid', status: 'Return', class: 'return' },
        { id: 10, name: 'Apple Phone', price: '$1680', payment: 'Paid', status: 'Delivered', class: 'delivered' },

	];

    const users = [
        { id:1, name: 'David', imgUrl: '/img/avatar/avatar-1.jpg', country: 'Italy'},
        { id:2, name: 'Mohammad', imgUrl: '/img/avatar/avatar-2.jpg', country: 'India'},
        { id:3, name: 'Amelia', imgUrl: '/img/avatar/avatar-3.png', country: 'France'},
        { id:4, name: 'Olivia', imgUrl: '/img/avatar/avatar-4.png', country: 'USA'},
        { id:5, name: 'Amit', imgUrl: '/img/avatar/avatar-5.png', country: 'Japan'},
        { id:6, name: 'Ashraf', imgUrl: '/img/avatar/avatar-1.jpg', country: 'Iran'},
        { id:7, name: 'Diana', imgUrl: '/img/avatar/avatar-2.jpg', country: 'Malaysia'},
        { id:8, name: 'Robert', imgUrl: '/img/avatar/avatar-3.png', country: 'UK'},

    ];
</script>





<main>
	<div class="container">
		<div class="navigation" class:active={toggle}>
			<ul>
				{#each navigationList as item, i}
					{#if i === 0}
						<li>
							<a href={item.url}>
								<span class="icon"><i class={item.icon} /></span>
								<span class="title"><h2>{item.name}</h2></span>
							</a>
						</li>
					{:else}
						<li  on:mouseenter={()=>selected = i+1} class:selected={selected=== (i+1)}>
							<a href={item.url}>
								<span class="icon"><i class={item.icon} /></span>
								<span class="title">{item.name}</span>
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
		<div class="main" class:active={toggle}>
			<div class="topbar">
				<div class="toggle" class:active={toggle} on:click={() => (toggle = !toggle)}>
					<i class="fas fa-bars" />
				</div>
				<div class="search">
					<label>
						<input type="text" placeholder="search here" />
						<i class="fas fa-search" />
					</label>
				</div>
				<div class="user">
					<img src="/img/profile/profile-1.jpg" alt="" />
				</div>
			</div>
			<div class="cardBox">
				{#each cards as card}
					<div class="card">
						<div>
							<div class="numbers">{card.number}</div>
							<div class="cardName">{card.name}</div>
						</div>
						<div class="iconBox">
							<i class={card.iconClass} />
						</div>
					</div>
				{/each}
			</div>
			<!-- CHARTS ADDED HERE -->
			<div class="graphBox">
				<div class="box">
					<Charts {type} {labels} {label} {data} {backgroundColor}/>
				</div>
				<div class="box">
					<Charts type={type1} labels={labels1} label={label1} data={data1} backgroundColor={backgroundColor1}/>
				</div>
			</div>
			
			<div class="details">
				<div class="recentOrders">
					<div class="cardHeader">
						<h2>Recent Orders</h2>
						<a href="viewAll" class="btn">View All</a>
                    </div>
						<table>
							<thead>
								<tr>
									<td>Name</td>
									<td>Price</td>
									<td>Payment</td>
									<td>Status</td>
								</tr>
							</thead>
							<tbody>
								{#each recentOrders as order}
									<tr>
										<td>{order.name}</td>
										<td>{order.price}</td>
										<td>{order.payment}</td>
										<td><span class="status {order.class}">{order.status}</span></td>
									</tr>
								{/each}
							</tbody>
						</table>
					
				</div>
				<div class="recentCustomers">
					<div class="cardHeader">
						<h2>Recent Customers</h2>
						<a href="viewAll" class="btn">View All</a>
					</div>
                    <table>
                        <tbody>
                            {#each users as user}
                            <tr>
                                <td width="60px">
                                    <div class="imgBx"><img src="{user.imgUrl}" alt="{user.name}">
                                    </div>
                                </td>
                                <td><h4>{user.name}<br><span>{user.country}</span></h4></td>
                            </tr>
                            {/each}

                        </tbody>
                    </table>
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	@import '../../../styles/vars';
	main {
		overflow-x: hidden;
	}
	.container {
		--white: #fff;
		--clr-primary:#003147;
		--clr-secondary:#03a9f4;
		// position: relative;
		width: 100%;
	}
	.navigation {
		position: fixed;
		width: 300px;
		height: 100%;
		background: var(--clr-primary);
		transition: 0.5s;
		overflow: hidden;
	}
	.navigation.active {
		width: 60px;
	}
	.navigation ul {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	.navigation ul li {
		position: relative;
		width: 100%;
		list-style: none;
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
	}
	.navigation ul li:hover,
	.navigation ul li.selected {
		background: var(--white);
	}
	.navigation ul li:nth-child(1) {
		margin-bottom: 20px;
	}
	.navigation ul li:nth-child(1):hover {
		background: transparent;
	}
	.navigation ul li a {
		position: relative;
		display: flex;
		width: 100%;
		text-decoration: none;
		color: var(--white);
	}
	.navigation ul li:not(:first-child):hover a,
	.navigation ul li:not(:first-child).selected a {
		color: var(--clr-primary);
	}
	.navigation ul li a .icon {
		position: relative;
		display: block;
		min-width: 60px;
		height: 60px;
		line-height: 60px;
		text-align: center;
	}
	.navigation ul li a .icon .fas,
	.navigation ul li a .icon .fab {
		//color: #fff;
		font-size: 24px;
	}
	.navigation ul li a .title {
		position: relative;
		display: block;
		padding: 0 10px;
		height: 60px;
		line-height: 60px;
		white-space: nowrap;
	}
/**CURVE OUTSIDE ON HOVER*/

.navigation ul li:not(:first-child):hover a::before,
.navigation ul li:not(:first-child).selected a::before{
content: '';
position: absolute;
right: 0;
top: -50px;
width: 50px;
height: 50px;
background: transaprent;
border-radius: 50%;
box-shadow: 35px 35px 0 10px var(--white);
pointer-events: none;
}
.navigation ul li:not(:first-child):hover a::after,
.navigation ul li:not(:first-child).selected a::after{
content: '';
position: absolute;
right: 0;
bottom: -50px;
width: 50px;
height: 50px;
background: transaprent;
border-radius: 50%;
box-shadow: 35px -35px 0 10px var(--white);
pointer-events: none;
}


	//SECOND COLUMN MAIN CSS
	.main {
		position: absolute;
		width: calc(100% - 300px);
		left: 300px;
		min-height: 100vh;
		background: #f5f5f5;
		transition: 0.5s;
	}
	.main.active {
		width: calc(100% - 60px);
		left: 60px;
	}
	.main .topbar {
		width: 100%;
		background: #fff;
		height: 60px;
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.toggle {
		position: relative;
		width: 60px;
		height: 60px;
		cursor: pointer;
	}
	.toggle .fas {
		//   content: '';
		//   font-family: fontAwesome;
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		line-height: 60px;
		font-size: 24px;
		text-align: center;
		color: #111;
	}
	.search {
		position: relative;
		width: 400px;
		margin: 0 10px;
	}
	.search label {
		position: relative;
		width: 100%;
	}
	.search label input {
		width: 100%;
		height: 40px;
		border-radius: 40px;
		padding: 5px 20px;
		padding-left: 35px;
		outline: none;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}
	.search label .fas {
		position: absolute;
		left: 15px;
		top: 2px;
	}
	.user {
		position: relative;
		min-width: 50px;
		width: 50px;
		height: 50px;
		border-radius: 50px;
		overflow: hidden;
		cursor: pointer;
	}
	.user img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.cardBox {
		position: relative;
		width: 100%;
		padding: 20px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
	}
	.cardBox .card {
		position: relative;
		background: #fff;
		padding: 20px;
		display: flex;
		justify-content: space-between;
		cursor: pointer;
	}
	.cardBox .card:hover {
     background: var(--clr-secondary);
	}
	.cardBox .card:hover .numbers,
	.cardBox .card:hover .cardName,
	.cardBox .card:hover .iconBox{
     color: var(--white);
	}

	.cardBox .card .numbers {
		position: relative;
		font-size: 2em;
		font-weight: 500;
	}
	.cardBox .card .cardName {
		color: #999;
	}
	.cardBox .card .iconBox {
		font-size: 2.5em;
		color: var(--clr-secondary);
	}

// charts

.graphBox{
	position: relative;
	width: 100%;
	padding: 20px;
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 30px;
	min-height: 200px;
}
.graphBox .box{
	position: relative;
	background: #fff;
	padding: 20px;
	width: 100%;
	box-shadow: 0 7px 25px rgba(0,0,0,0.08);
	border-radius: 20px;
	
}

    .details{
        position: relative;
        width: 100%;
        padding: 20px;
        padding-top: 0;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
    }
    .details .recentOrders{
position: relative;
min-height: 530px;
background: #fff;
padding: 20px;
    }
    .cardHeader{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .cardHeader h2{
        font-weight: 600;
    }
    .btn{
        position: relative;
        padding: 5px 10px;
        background: var(--clr-secondary);
        color: #fff;
        text-decoration: none;
        border-radius: 6px;

    }
    .details table{
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
    }
    .details table thead td{
font-weight: 600;
    }
    .details .recentOrders table tr{
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    .details .recentOrders table tr:last-child{
        border-bottom: none;
    }
    .details .recentOrders table tbody tr:hover{
        background: var(--clr-secondary);
        color: #fff;
    }
    .details .recentOrders table tr td{
        padding: 9px 5px;
    }
    .details .recentOrders table tr td:last-child{
text-align: right;
    }
    .details .recentOrders table tr td:nth-child(2){
text-align: right;
padding-right: 20px;
    }
    .details .recentOrders table tr td:nth-child(3){
        text-align: center;
    }
    .status{
        position: relative;
        padding: 2px 4px;
        color: #fff;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 1px;
    }
    .delivered{
background: #8de02c;
    }
    .pending{
background: #f9ca3f;
    }
    .return{
        background: #f00;
    }
    .inprogress{
background: #179c5e;
    }
  .details .recentCustomers{
      position: relative;
      min-height: 530px;
      background: #fff;
      padding: 20px;
  }
  .details .recentCustomers .imgBx{
position: relative;
width: 40px;
height: 40px;
border-radius: 50%;
overflow: hidden;
  }
  .details .recentCustomers .imgBx img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  .details .recentCustomers table tr:hover,
  .details .recentCustomers table tr:hover td h4 span{
background: var(--clr-secondary);
color: #fff;
  }
  .details .recentCustomers table tr td{
      padding: 7px 10px;
  }
  .details .recentCustomers table tr td h4{
font-size: 16px;
font-weight: 500;
line-height: 1.2em;
  }
  .details .recentCustomers table tr td h4 span{
font-size: 14px;
color: #999;
  }

//   CODE FOR RESPONSIVE WEBSITE NOW
  @media(max-width:991px){
      .navigation{
          left: -300px;
      }
      .navigation.active{
left: 0;
width: 300px;
      }
      .main{
          width: 100%;
          left: 0;
      }
      .main.active {
		width: calc(100% - 300px);
		left: 300px;
	}

    .cardBox{
        grid-template-columns: repeat(2, 1fr);
    }
	.graphBox{
		grid-template-columns: 1fr;
		height: auto;
	}
  }
  @media(max-width:768px){
.details{
    grid-template-columns: 1fr;
}
.cardHeader h2{
    font-weight: 600;
    font-size: 18px;
}
  }
  @media(max-width:480px){
    .cardBox{
        grid-template-columns: repeat(1, 1fr);
    }
    .details .recentOrders {
        overflow-x: auto;
    }
    .details .recentOrders table{
width: 600px;
    }
    .navigation{
        width: 100%;
        left: -100%;
        z-index: 1000;
    }
    .navigation.active{
        width: 100%;
        left: 0;
    }

    .toggle.active{
        z-index: 10000;
        position: fixed;
        right: 0;
        left:initial;
    }
    .toggle.active .fas{
        color: #fff;
       
    }
    .main,
    .main.active{
        width: 100%;
        left: 0;
    }
  }
</style>

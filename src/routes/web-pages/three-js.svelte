<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

	let innerWidth;
	let innerHeight;
	let canvas;

	let scene;
	let camera;
	let renderer;
	let torus;
	let controls;
    let pointLight;
    let moon;
    let jeff;

	onMount(() => {
		drawCanvas();
	});

	const drawCanvas = () => {
		//import from three-js npm module

		// 1. Scene : A scene is like a container that holds all our objects
		scene = new THREE.Scene();
		// 2. Camera : Inside scene we need a camera
		// there are many camera types but most cmmon is perspective camera
		// which is designed to mimic what human eyeballs will see
		camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
		// first argument is field view which is the amount of world which is visible based on full 360 deg view
		// second argument is aspect ratio
		// last two arguments are view frustrum to control which objects are visible relative to the camera itself
		//0.1 and 1000 means we can see pretty much everything from the camera lens
		// 3. Renderer
		renderer = new THREE.WebGLRenderer({
			canvas: canvas
		});
		// renderer to render out the actual graphics
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(innerWidth, innerHeight);
		camera.position.setZ(30); // camera moved on z-index to 30
        camera.position.setX(-3);
		renderer.render(scene, camera);

		//ADD AN OBJECT
        addTorus();


		//LIGHTINING
addLight();
//ADD LIGHT HELPERS:- help us to see where point light is on the screen
//addLightHelpers();





        // Add 200 stars to the scene
		Array(200).fill().forEach(addStar);
		// add image background to scene
        addBackground();
		//Texture can also be added to individual materials which is complex topic called texture mapping
		// texture mapping is taking two dimensional pixels and mapping them to three dimensional geometry
		addAvatar();
		addMoon();
        		//to actuall see it
		// renderer.render(scene, camera); // we need not call this method again and again
		//so we create an animate function with infinite loop which calls render
		animate();
	}; // end of drawcanvas function

	const animate = () => {
		requestAnimationFrame(animate);

		// on every animation frame we will change the
		//co-ordinates of our torus
		torus.rotation.x += 0.01;
		torus.rotation.y += 0.005;
		torus.rotation.z += 0.01;
		//The above three lines will move the static shape object
        controls = new OrbitControls(camera, renderer.domElement);
		// it will listen to domelements on mouse and update the
		//camera position accordingly
		controls.update();
		renderer.render(scene, camera);
	};
    const addTorus = ()=>{
        		//3 steps 1. geometry (the x,y,z points that make up a shape)
		//threejs has build in geometry objects like box, sphere,cone,cylinder
		const geometry = new THREE.TorusGeometry(10, 3, 16, 100); // A big ring like object
		//2. material to give color or texture; think of it as a wrapping paper for an object
		// there are built in materials in threejs
		//const material = new THREE.MeshBasicMaterial({color: 0XFF6347, wireframe: true});

		const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
		// meshbasicmaterial changed to meshstandard material which will react to light bouncing off it

		//3. third steps is to create a mesh by combining geometry and material
		torus = new THREE.Mesh(geometry, material);

		scene.add(torus);
    }
    const addBackground = ()=>{
        const spaceTexture = new THREE.TextureLoader().load('/img/web-pages/three-js/space.jpg');
		//in the load() a callback function can also be passed to show a loading
		//indicator during the time image loads
		scene.background = spaceTexture;
    }

	const addStar = () => {
		const geometry = new THREE.SphereGeometry(0.25, 24, 24); //0.25 is radius
		const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
		const star = new THREE.Mesh(geometry, material);
		//generate random co-ordinates for the stars
		const [x, y, z] = Array(3)
			.fill()
			.map(() => THREE.MathUtils.randFloatSpread(100));
		//randFloatSpread generates random number between -100 to 100
		star.position.set(x, y, z);
		scene.add(star);
	};

	const addAvatar = () => {
		//AVATAR
		const jeffTexture = new THREE.TextureLoader().load('/img/web-pages/three-js/jeff.png');
		 jeff = new THREE.Mesh(
			new THREE.BoxGeometry(3, 3, 3),
			new THREE.MeshBasicMaterial({ map: jeffTexture })
		);
		scene.add(jeff);
	};

	const addMoon = () => {
		//We can combine multiple maps to create a more complex object
		//MOON
		const moonTexture = new THREE.TextureLoader().load('/img/web-pages/three-js/moon.jpg');
		const normalTexture = new THREE.TextureLoader().load('/img/web-pages/three-js/normal.jpg');
		 moon = new THREE.Mesh(
			new THREE.SphereGeometry(3, 32, 32),
			//we can give it the appearance of having some depth by adding a normal map to it
			new THREE.MeshBasicMaterial({
				map: moonTexture,
				normalMap: normalTexture
			})
		);
    	// Move the moon object initially so that on scrolling we can animate it
		moon.position.z = 30;
		moon.position.setX(-10); // bot = and set can be used for setting co-ordinates
		scene.add(moon);
	};
    const addLight = ()=>{
        		//many different type of lightining option to choose in threejs
		//but simple one is pointLight
		 pointLight = new THREE.PointLight(0xffffff); // 0x means it is hexadecimal value
		//pointLight.position.set(5,5,5); //set x,y,z, of light to position it to center
		pointLight.position.set(5, 5, 5);
		// scene.add(pointLight);
		// ambientlight is like a plug light and will light up everything in the room
		const ambientLight = new THREE.AmbientLight(0xffffff);
		scene.add(pointLight, ambientLight);
    }

    const addLightHelpers = ()=>{
		//lightHelpers shows us the position of light in the page
		const lightHelper = new THREE.PointLightHelper(pointLight);
		scene.add(lightHelper);
		//grid helper drawas a 2-dimensional grid on the screen
		const gridHelper = new THREE.GridHelper(200, 50);
		//we get a line in the middle of screen with the above line of code because our
		//current perspective is perfectly levelled with the grid
		//we can make the scene more interactive by adding orbit controls to it
		//which will allow us to move around the scene
		scene.add(gridHelper);
    }

    const moveCamera = ()=>{
const t = document.body.getBoundingClientRect().top;

       moon.rotation.x += 0.05;
       moon.rotation.y += 0.075;
       moon.rotation.z += 0.05;

       jeff.rotation.y += 0.01;
       jeff.rotation.z += 0.01;

       camera.position.z = t * -0.01;
       camera.position.x = t * -0.0002;
       camera.rotation.y = t * -0.0002;
    }
 

</script>

<svelte:window bind:innerWidth bind:innerHeight on:scroll|passive={moveCamera}/>

<canvas id="bg" bind:this={canvas} />

<!-- //a lot of content to enable scrolling on the web-pages
// all the content is just dummy -->
<main>
	<header>
		<h1>Jeff Delaney</h1>
		<p>🚀 Welcome to my website!</p>
	</header>

	<blockquote>
		<p>I like making stuff and putting it on the internet</p>
	</blockquote>

	<section>
		<h2>📜 Manifesto</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</section>

	<section class="light">
		<h2>👩🏽‍🚀 Projects</h2>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<h2>🏆 Accomplishments</h2>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</section>

	<blockquote>
		<p>The best way out is always through <br />-Robert Frost</p>
	</blockquote>

	<section class="left">
		<h2>🌮 Work History</h2>

		<h3>McDonalds</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<h3>Burger King</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<h3>Taco Bell</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</section>

	<blockquote>
		<p>Thanks for watching!</p>
	</blockquote>
</main>

<style lang="scss">
	@import '../../styles/vars';
	canvas {
		position: fixed;
		top: 0;
		left: 0;
	}
    main{
        --dark-bg: rgba(15, 15, 15, 0.95);
  --spacing: 350px;

  font-family: brandon-grotesque, sans-serif;
  font-weight: 400;
  font-style: normal;
    }
	main {
		position: absolute; // important that parent element has absolute position
        width: 100vw;
       color: white;
  z-index: 99;
  width: 100%;
  margin: 0px auto;
  padding: 120px 0px;
  
  display: grid;
  grid-template-columns: repeat(12, 1fr);
    }
    h1, h2, h3, blockquote {
  font-family: elevon, sans-serif;
  font-weight: 700;
  font-style: normal;
}
header {
    background: var(--dark-bg);
    grid-column: 2 / span 5;
    font-size: 2.5rem;
    padding: 2rem;
    margin-bottom: var(--spacing);
  }

  section {
    grid-column: 2 / 8;
    padding: 1rem;
    background: var(--dark-bg);
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: var(--spacing);
  }

  blockquote {
    margin: 0;
    padding: 0;
    grid-column: 2 / span 9;
    margin-bottom: var(--spacing);
  }

  blockquote p {
    color: black;
    background-color: white;
    font-size: 4rem;
    display: inline;
    line-height: 1;
  }

  .left {
    grid-column: 6 / 12;
  }
</style>

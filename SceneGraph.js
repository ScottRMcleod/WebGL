sceneGraph();
function sceneGraph()
{
// defines the cammera's postion in the scene its target and how long the range is before it starts clipping the objects displayed in the scene
	var renderer,camera,scene,plane,cube,sphere,light,cylinder,cone,keyboard;
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	
	//sets up the cammera for the scene
	camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight, 1, 800);

	camera.position.y = -400;
	camera.position.z = 400;
	camera.rotation.x = .70;

	//creates a scene object so you can present your objects
	scene = new THREE.Scene();
	
	plane = new THREE.Mesh(new THREE.PlaneGeometry(800,600), new THREE.MeshLambertMaterial({color: 'grey',}));
	cube = new THREE.Mesh(new THREE.CubeGeometry(100,100,100), new THREE.MeshLambertMaterial({color: 'green',}));
	cylinder = new THREE.Mesh(new THREE.CylinderGeometry(100,100,200,30,30),  new THREE.MeshLambertMaterial({color: 'red',}));
	cone = new THREE.Mesh(new THREE.CylinderGeometry(0,100,200,30,30),  new THREE.MeshLambertMaterial({color: 'pink',}));
	sphere = new THREE.Mesh(new THREE.SphereGeometry(100,100,100), new THREE.MeshLambertMaterial({color: 'blue',}));
	
	//sets the lighting color and the direction
	light = new THREE.DirectionalLight('white',1);
	light.position.set(0,-400,400).normalize();

	//sets the default postion of the plane, cube,sphere,cylinder and thier rotation points
	plane.position.z = -100;
	cube.rotation.z += 0.01;
	sphere.position.x = -200;
	cylinder.position.x = 200;
	cylinder.rotation.x = 45;
	cone.position.y = 150;
	cone.rotation.x = 45;
	
	scene.add(plane);
	scene.add(cube);
	//scene.add(pyramid);
	scene.add(cylinder);
	scene.add(cone);
	scene.add(sphere);
	scene.add(light);
	//renders the scene
	renderer.render(scene,camera);	 
}

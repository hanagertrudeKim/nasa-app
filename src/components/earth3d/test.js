// import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';

// let scene = new THREE.Scene();
// let renderer = new THREE.WebGLRenderer({
//   canvas : document.querySelector('#canvas'),
//   antialias : true
// });
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.setSize( window.innerWidth, window.innerHeight );

// let camera = new THREE.PerspectiveCamera(30, 1);
// camera.position.set(0,0,5);

// scene.background = new THREE.Color('white');
// let light = new THREE.AmbientLight(0xffffff, 3);
// scene.add(light);

// let loader = new GLTFLoader();
// loader.load('./planet/scene.gltf', function(gltf){
//   scene.add(gltf.scene);
//   renderer.render(scene, camera);
//   function animate(){
//     requestAnimationFrame(animate)
//     gltf.scene.rotation.y -= 0.005;
//     renderer.render(scene, camera);
//   }
//   animate();
// });

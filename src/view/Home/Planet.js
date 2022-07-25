/*import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';


const Planet = () => {
  let scene = new THREE.Scene()
  let rederer = new THREE.WebGL1Renderer({
    canvas : document.querySelector("canvas")
  });

  let camera = new THREE.PerspectiveCamera(30, 1);

  let loader = new GLTFLoader();
  loader.load('../../assets/3d/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    rederer.render(scene, camera);
  });

  return (
  <canvas id="canvas" width="300" height="300" ></canvas>
  )
} 

export default Planet;*/
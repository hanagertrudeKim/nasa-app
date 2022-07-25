import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



const Planet = () => {
  let scene = new THREE.Scene();
  let renderer = new THREE.WebGL1Renderer({
    canvas : document.querySelector('#canvas'),
    antialias : true
  });
  renderer.outputEncoding = THREE.sRGBEncoding;

  let camera = new THREE.PerspectiveCamera(30, 1);
  camera.position.set(0,0,5);

  scene.background = new THREE.Color('white');
  let light = new THREE.DirectionalLight(0xffff00, 10);
  scene.add(light);

  let loader = new GLTFLoader();
  loader.load("../../assets/3d/planet/scene.gltf", function(gltf){
    scene.add(gltf.scene);
    renderer.render(scene, camera);
    function animate() {
      requestAnimationFrame(animate)
      gltf.scene.rotation.y += 0.001;
      renderer.render(scene,camera);
    }
    animate()
  });

  renderer.render(scene)

  const styles = {}

  return (
    <canvas id="canvas" style={styles}></canvas>
  )
}

export default Planet;
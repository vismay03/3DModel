
import * as THREE from "./three.module.js";
import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x404040, 100); // soft white light
scene.add(light);


var l = new THREE.PointLight(0x4c4c4c, 100);
l.position.set(0, 300, 500);
scene.add(l);

var l2 = new THREE.PointLight(0x4c4c4c, 100);
l2.position.set(500, 100, 0);
scene.add(l2);

var l3 = new THREE.PointLight(0x4c4c4c, 100);
l3.position.set(0, 100, -200);
scene.add(l3);

var l4 = new THREE.PointLight(0x4c4c4c, 100);
l4.position.set(-300, 300, 0);
scene.add(l4);

scene.background = new THREE.Color(0x385170);
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 80;
camera.position.y = 0;
camera.position.z = 100

const loader = new GLTFLoader();


var dirL = new THREE.DirectionalLight(0xffffff, 100)
dirL.position.set(0, 1, 0)
dirL.castShadow = true;
scene.add(dirL)


const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', renderer);

loader.load('./free_porsche_911_carrera_4s/scene.gltf', function(gltf) {
  var car = gltf.scene.children[0];
  car.scale.set(40, 40, 40);
  scene.add(gltf.scene)
})

function animate() {

  
  renderer.render(scene,camera) ;
   requestAnimationFrame(animate);
}

animate()


import * as THREE from 'three';

const scene = new THREE.Scene();
const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;   
const camera = new THREE.PerspectiveCamera(
    fov,
    aspect,
    near,
    far
);

const text = document.getElementById('c');

// const renderer = new THREE.CSS2Renderer();
// const renderer = new THREE.CSS3DRenderer();

const renderer = new THREE.WebGLRenderer( { antialias: true, canvas: text } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Text


//Light
const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 5, 5, 5 ).normalize();
scene.add( light );

function animate() {

    requestAnimationFrame( animate );

    textMesh.rotation.x += 0.01;
    textMesh.rotation.y += 0.01;

    renderer.render( scene, camera );

}

animate();

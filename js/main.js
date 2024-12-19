// main.js
import { initScene } from './scene.js';
import { loadChessBoard } from './modelLoader.js';
import { initLights } from './lights.js';
import { initControls } from './controls.js';

let camera, scene, renderer, controls;

function init() {
    // Get canvas
    const canvas = document.getElementById('canvas');
    
    // Initialize scene, camera, and renderer
    const sceneObjects = initScene(canvas);
    scene = sceneObjects.scene;
    camera = sceneObjects.camera;
    renderer = sceneObjects.renderer;
    
    // Add lights
    const lights = initLights();
    lights.forEach(light => scene.add(light));
    
    // Initialize controls
    controls = initControls(camera, renderer.domElement);
    
    // Load chess board model
    loadChessBoard().then(model => {
        scene.add(model);
    });
    
    // Start animation loop
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Handle window resizing
function onWindowResize() {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
}

window.addEventListener('resize', onWindowResize);

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', init);
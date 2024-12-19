// scene.js
import * as THREE from 'three';

export function initScene(canvas) {
    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);  // Medium gray background like in the reference
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
        45, // Field of view
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Enable high-quality rendering
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    return { scene, camera, renderer };
}
import * as THREE from 'three';
// lights.js
export function initLights() {
    const lights = [];
    
    // Ambient light for subtle base illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    lights.push(ambientLight);
    
    // Main directional light (key light)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(5, 10, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 50;
    keyLight.shadow.bias = -0.0001;
    lights.push(keyLight);

    // Fill light for softer shadows
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    fillLight.position.set(-5, 5, -5);
    lights.push(fillLight);
    
    // Rim light for edge highlights
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, -5, -5);
    lights.push(rimLight);
    
    return lights;
}
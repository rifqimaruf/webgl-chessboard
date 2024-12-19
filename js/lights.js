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

    // Hemisphere light for natural outdoor effect
    const hemiLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 0.6);
    hemiLight.position.set(0, 50, 0);
    lights.push(hemiLight);

    // Spotlights for focused illumination
    const spotlight1 = new THREE.SpotLight(0xffffff, 0.8);
    spotlight1.position.set(10, 20, 10);
    spotlight1.angle = Math.PI / 6;
    spotlight1.penumbra = 0.2;
    spotlight1.decay = 2;
    spotlight1.distance = 50;
    spotlight1.castShadow = true;
    lights.push(spotlight1);

    const spotlight2 = new THREE.SpotLight(0xffaa00, 0.5);
    spotlight2.position.set(-10, 15, -10);
    spotlight2.angle = Math.PI / 8;
    spotlight2.penumbra = 0.3;
    spotlight2.decay = 2;
    spotlight2.distance = 50;
    spotlight2.castShadow = true;
    lights.push(spotlight2);

    // Point light for localized illumination
    const pointLight = new THREE.PointLight(0xff0000, 0.5, 30, 2);
    pointLight.position.set(0, 5, 0);
    lights.push(pointLight);

    return lights;
}

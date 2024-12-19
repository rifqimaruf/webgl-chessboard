// controls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function initControls(camera, domElement) {
    const controls = new OrbitControls(camera, domElement);
    
    // Configure controls
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    controls.minDistance = 3;
    controls.maxDistance = 10;
    
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;
    
    controls.enablePan = true;
    controls.enableZoom = true;
    
    // Enable auto-rotation
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0; // Rotation speed (default is 2.0)
    
    return controls;
}
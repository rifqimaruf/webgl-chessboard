import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function initControls(camera, domElement, model) {
    const controls = new OrbitControls(camera, domElement);

    // Configure controls
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.zoomSpeed = 0.3; // Slow down zooming for smoother experience

    controls.minDistance = 5;
    controls.maxDistance = 15; 

    controls.minPolarAngle = 0.01; 
    // controls.maxPolarAngle = Math.PI / 2.5;

    controls.enablePan = true;
    controls.enableZoom = true;

    // Enable auto-rotation
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    // Center the model on the axes
    if (model) {
        const boundingBox = new THREE.Box3().setFromObject(model);
        const center = boundingBox.getCenter(new THREE.Vector3());
        model.position.sub(center);
    }

    // Adjust camera position to be farther away
    camera.position.set(8, 2, 8); 
    camera.lookAt(0, 0, 0);

    return controls;
}

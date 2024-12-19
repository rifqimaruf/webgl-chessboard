// scene.js
import * as THREE from 'three';

export function initScene(canvas) {
    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);  

    // Add fog for atmospheric effect
    scene.fog = new THREE.Fog(0x808080, 10, 50);

    // Create camera
    const camera = new THREE.PerspectiveCamera(
        45, 
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

    // Add ground plane
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x606060 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    scene.add(ground);


    // Add grid helper
    const gridHelper = new THREE.GridHelper(100, 50);
    gridHelper.position.y = -0.49;
    scene.add(gridHelper);

    // Add axes helper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    return { scene, camera, renderer };
}

// modelLoader.js
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

export async function loadChessBoard() {
    return new Promise((resolve, reject) => {
        // Create material loader
        const mtlLoader = new MTLLoader();
        mtlLoader.setPath('./assets/');
        
        // Load materials first
        mtlLoader.load('chessboard.mtl', (materials) => {
            materials.preload();
            
            // Create object loader
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('./assets/');
            
            // Load the object
            objLoader.load(
                'chessboard.obj',
                (object) => {
                    // Setup the loaded object
                    object.scale.set(1, 1, 1);
                    object.position.set(0, 0, 0);
                    
                    // Enable shadows
                    object.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    
                    resolve(object);
                },
                // Progress callback
                (xhr) => {
                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },
                // Error callback
                (error) => {
                    console.error('Error loading model:', error);
                    reject(error);
                }
            );
        });
    });
}
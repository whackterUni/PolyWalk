'use client'
// Import necessary dependencies and types
import { FC, useEffect, useRef, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stats, ContactShadows } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import * as THREE from 'three';
import { AmbientLight } from 'three';

interface ProductModelProps {
  productData: {
    model: string;
  };
}

export const ProductModel: FC<ProductModelProps> = ({ productData }) => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const gltfRef = useRef<THREE.Group | undefined>(undefined);

  useEffect(() => {
    const fetchAndLoadModel = async () => {
      try {
        const response = await fetch(productData.model);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const gltf = await new Promise<THREE.Group>((resolve) => {
          const loader = new GLTFLoader();
          loader.load(url, (loadedGltf) => {
            resolve(loadedGltf.scene);
          });
        });

        gltfRef.current = gltf;

        // Access materials and textures here if needed
        if (gltfRef.current) {
          console.log(gltfRef.current)
          gltfRef.current.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              const materials = child.material;

              // Now you can use 'materials' to access the materials of the loaded object
              console.log('Materials:', materials);
            }
          });
        }

        // Set the modelLoaded state to trigger a re-render
        setModelLoaded(true);
      } catch (error) {
        console.error('Error fetching or loading the model:', error);
      }
    };

    fetchAndLoadModel();
  }, [productData.model]);

  const Scene = () => {
    if (modelLoaded && gltfRef.current) {
      return <primitive object={gltfRef.current} scale={0.5} />;
    } else {
      return null;
    }
  };

  return (
    <Canvas shadows camera={{ position: [12, 5, 12] }}>
      <Suspense fallback={null}>
          <ambientLight intensity={10} />
          <spotLight position={[10, 10, 10]} angle={0.15} castShadow />
          <Scene/>
          <OrbitControls enablePan={true} enableZoom={true} maxDistance={18} maxZoom={30}/>
          <ContactShadows position={[0, -2, 0]} opacity={0.75} scale={20} blur={4} far={2} />
          <Environment preset='studio' blur={0}/>
        <Stats/>
      </Suspense>
    </Canvas>
  );
};


// function Env() {
//   const { blur } = useControls({
//     blur: { value: 0.65, min: 0, max: 1 },
//     // options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
//   })
//   return <Environment preset='studio' background blur={blur} />
// }
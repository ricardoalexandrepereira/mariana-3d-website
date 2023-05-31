import { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intenisty={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
      position={[-20,50,10]} 
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene} 
      scale={isMobile ? 0.9 : 1.95}
      position={isMobile ? [0, -2, -2.2] : [0, -4.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const computerCanvas = () => {

/* check if we are in mobile device then change the with of the model */
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    //add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    //set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to hundle changes to the media query
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches)
    }

    // add the callback function as a listener for changes to the media query 
    mediaQuery.addEventListener("change",handleMediaQueryChange)

    //remove the listener when the component is unmouted
    return ()=>{
      mediaQuery.removeEventListener("change",handleMediaQueryChange)
    }
   
  },[])
/* check if we are in mobile device then change the with of the model */
  

return (
    <Canvas
      /* frameLoop="demand" */
      shadows
      camera={{ position: [50, 10, 5], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all/>
    </Canvas>
  );
};

export default computerCanvas;

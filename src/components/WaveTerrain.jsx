import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const WaveTerrain = ({ darkMode = false }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animationFrameRef = useRef(null);
  const materialRef = useRef(null);
  const starsMaterialRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Update colors when darkMode changes
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.setHex(darkMode ? 0x60A5FA : 0x3B82F6);
      materialRef.current.opacity = darkMode ? 0.7 : 0.5;
    }
    if (starsMaterialRef.current) {
      starsMaterialRef.current.color.setHex(darkMode ? 0xA78BFA : 0x8B5CF6);
      starsMaterialRef.current.opacity = darkMode ? 0.9 : 0.6;
    }
  }, [darkMode]);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background
    scene.fog = new THREE.Fog(0x000000, 50, 200);

    // Camera setup
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 30, 50);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    mountRef.current.appendChild(renderer.domElement);

    // Geometry setup - adjust segments based on device
    const segments = isMobile ? 25 : 50;
    const geometry = new THREE.PlaneGeometry(100, 100, segments, segments);
    
    // Store original positions for animation
    const positions = geometry.attributes.position;
    const originalPositions = positions.array.slice();

    // Material with wireframe and gradient colors
    const material = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x60A5FA : 0x3B82F6,
      wireframe: true,
      transparent: true,
      opacity: darkMode ? 0.7 : 0.5,
    });
    materialRef.current = material;

    // Create mesh
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 3; // Angle the plane
    scene.add(plane);

    // Add stars/particles for depth
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = isMobile ? 500 : 1000;
    const starsPositions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      starsPositions[i] = (Math.random() - 0.5) * 200;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: darkMode ? 0xA78BFA : 0x8B5CF6,
      size: 0.5,
      transparent: true,
      opacity: darkMode ? 0.9 : 0.6,
    });
    starsMaterialRef.current = starsMaterial;
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation variables
    let time = 0;
    const amplitude = 3;
    const speed = 0.5;
    let lastTime = performance.now();
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    // Animation function
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        time += deltaTime * 0.001 * speed;

        // Update wave vertices
        for (let i = 0; i < positions.count; i++) {
          const x = originalPositions[i * 3];
          const y = originalPositions[i * 3 + 1];
          
          // Create flowing wave effect using sine and cosine
          const wave1 = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time * 0.7);
          const wave2 = Math.sin(x * 0.15 + time * 1.3) * Math.cos(y * 0.15 + time * 0.5);
          const wave3 = Math.sin((x + y) * 0.05 + time * 0.8);
          
          positions.array[i * 3 + 2] = (wave1 + wave2 * 0.5 + wave3 * 0.3) * amplitude;
        }

        positions.needsUpdate = true;

        // Rotate stars slowly
        stars.rotation.y += 0.0005;

        // Update camera position slightly for dynamic feel
        camera.position.x = Math.sin(time * 0.1) * 5;
        camera.position.z = 50 + Math.cos(time * 0.1) * 5;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
        lastTime = currentTime - (deltaTime % frameInterval);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Store scene reference for cleanup
    sceneRef.current = { scene, renderer, geometry, material, plane, stars };

    // Store references for cleanup
    const mountElement = mountRef.current;
    const rendererElement = renderer.domElement;

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (mountElement && rendererElement && mountElement.contains(rendererElement)) {
        mountElement.removeChild(rendererElement);
      }

      // Dispose of Three.js resources
      geometry.dispose();
      material.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <div
      ref={mountRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default WaveTerrain;

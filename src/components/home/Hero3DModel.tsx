import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

type ModelShape = 'icosahedron' | 'torusknot' | 'octahedron';

export const Hero3DModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentShape, setCurrentShape] = useState<ModelShape>('icosahedron');
  const { isDark } = useTheme();
  const shapeRef = useRef<ModelShape>('icosahedron');
  shapeRef.current = currentShape;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    // Group to hold all 3D objects
    const group = new THREE.Group();
    scene.add(group);

    // Helper to build wireframe & nodes
    let meshGroup = new THREE.Group();
    group.add(meshGroup);

    const createGeometries = (shape: ModelShape) => {
      // Clear previous
      while (meshGroup.children.length > 0) {
        const obj = meshGroup.children[0];
        meshGroup.remove(obj);
        if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
      }

      let baseGeo: THREE.BufferGeometry;
      if (shape === 'torusknot') {
        baseGeo = new THREE.TorusKnotGeometry(1.6, 0.45, 100, 16);
      } else if (shape === 'octahedron') {
        baseGeo = new THREE.OctahedronGeometry(2.2, 2);
      } else {
        baseGeo = new THREE.IcosahedronGeometry(2.2, 1);
      }

      // Outer wireframe lines
      const edges = new THREE.EdgesGeometry(baseGeo);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: isDark ? 0xf8fafc : 0x181825,
        transparent: true,
        opacity: isDark ? 0.28 : 0.18,
        linewidth: 1,
      });
      const wireframe = new THREE.LineSegments(edges, lineMaterial);
      meshGroup.add(wireframe);

      // Vertex dots (particles at vertices)
      const pointsMat = new THREE.PointsMaterial({
        color: 0xf69251, // Tangerine accent
        size: 0.08,
        transparent: true,
        opacity: 0.75,
      });
      const points = new THREE.Points(baseGeo, pointsMat);
      meshGroup.add(points);

      // Inner subtle concentric wireframe
      let innerGeo: THREE.BufferGeometry;
      if (shape === 'torusknot') {
        innerGeo = new THREE.TorusKnotGeometry(0.8, 0.2, 60, 12);
      } else {
        innerGeo = new THREE.IcosahedronGeometry(1.2, 0);
      }
      const innerEdges = new THREE.EdgesGeometry(innerGeo);
      const innerLineMat = new THREE.LineBasicMaterial({
        color: isDark ? 0x94a3b8 : 0x8b8b8b,
        transparent: true,
        opacity: isDark ? 0.2 : 0.12,
      });
      const innerWireframe = new THREE.LineSegments(innerEdges, innerLineMat);
      meshGroup.add(innerWireframe);
    };

    createGeometries(currentShape);

    // Surrounding floating particle dust
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: isDark ? 0x94a3b8 : 0x484758,
      size: 0.04,
      transparent: true,
      opacity: isDark ? 0.45 : 0.35,
    });
    const dust = new THREE.Points(particleGeo, particleMat);
    scene.add(dust);

    // Mouse movement state
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.7;
      targetY = y * 0.5;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        group.rotation.y += deltaX * 0.008;
        group.rotation.x += deltaY * 0.008;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Resize handling
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Ambient idle rotation
      if (!isDragging) {
        group.rotation.y += (targetX - group.rotation.y * 0.3) * 0.03 + 0.003;
        group.rotation.x += (targetY - group.rotation.x * 0.3) * 0.03;
      }

      // Gentle floating oscillation
      group.position.y = Math.sin(elapsedTime * 0.8) * 0.15;

      // Dust slow spin
      dust.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Watch for shape changes
    const checkShapeInterval = setInterval(() => {
      if (shapeRef.current !== currentShape) {
        createGeometries(shapeRef.current);
      }
    }, 100);

    return () => {
      clearInterval(checkShapeInterval);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [currentShape, isDark]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full max-w-[1200px] pointer-events-auto cursor-grab active:cursor-grabbing opacity-85 transition-opacity"
        style={{ touchAction: 'none' }}
      />

      {/* Discreet 3D Shape Switcher (Top Right of Hero Background) */}
      <div className="absolute top-8 right-6 sm:right-12 pointer-events-auto flex items-center gap-1 bg-white dark:bg-[#16171f]/70 backdrop-blur-md border border-[#e5e5e5] dark:border-[#272835] px-2 py-1 rounded-full shadow-xs text-[11px] font-mono text-[#636363] dark:text-[#94a3b8]">
        <span className="text-[10px] text-[#949494] px-1 hidden sm:inline">3D MODEL:</span>
        <button
          onClick={() => setCurrentShape('icosahedron')}
          className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
            currentShape === 'icosahedron' ? 'bg-[#181825] text-white dark:bg-[#f69251] dark:text-[#0b0c0e] font-medium' : 'hover:text-black dark:hover:text-white'
          }`}
        >
          Geodesic
        </button>
        <button
          onClick={() => setCurrentShape('torusknot')}
          className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
            currentShape === 'torusknot' ? 'bg-[#181825] text-white dark:bg-[#f69251] dark:text-[#0b0c0e] font-medium' : 'hover:text-black dark:hover:text-white'
          }`}
        >
          Torus
        </button>
        <button
          onClick={() => setCurrentShape('octahedron')}
          className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
            currentShape === 'octahedron' ? 'bg-[#181825] text-white dark:bg-[#f69251] dark:text-[#0b0c0e] font-medium' : 'hover:text-black dark:hover:text-white'
          }`}
        >
          Lattice
        </button>
      </div>

      {/* Radial soft fade mask so model sits smoothly behind text */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#f7f7f7]/40 to-[#f7f7f7] dark:via-[#0b0c0e]/40 dark:to-[#0b0c0e] pointer-events-none"></div>
    </div>
  );
};
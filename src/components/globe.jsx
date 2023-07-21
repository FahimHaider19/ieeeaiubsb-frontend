"use client"
import dynamic from 'next/dynamic';
import { FC, useEffect, useState, useRef } from 'react';
import ReactGlobe from 'react-globe.gl';
// import { type GlobeMethods } from 'react-globe.gl';
// const ReactGlobe = dynamic(() => import('react-globe.gl'), { ssr: false });

// let ReactGlobe = (props: any) => null;
// if (typeof window !== 'undefined') ReactGlobe = require('react-globe.gl').default;

const checkWidth = (newWidth) => {
  if (newWidth === undefined) {
    return 1000;
  }
  if (newWidth < 1000) {
    return newWidth;
  } else if (newWidth < 1500) {
    return newWidth * 0.8;
  } else if (newWidth < 2000) {
    return newWidth * 0.6;
  }
};

className Data {
  color = ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)];
}

const World = () => {
  const globRef = useRef < GlobeMethods | undefined > (undefined);
  const [width, setWidth] = useState(() => checkWidth(typeof window !== 'undefined' ? window.innerWidth : 0));

  useEffect(() => {
    const handleResize = () => setWidth(checkWidth(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    // Auto-rotate
    if (globRef?.current) {
      // @ts-ignore
      globRef.current.controls().autoRotate = true;
      // @ts-ignore
      globRef.current.controls().autoRotateSpeed = 1;
    }
  }, []);
  // Random Arcs
  const A = 30;
  const arcsData = Array({ length: A }).map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ['#0078FF', '#17D7EF', '#F2F2F2', '#1F1F1F'][Math.round(Math.random() * 2)],
      ['#0078FF', '#17D7EF', '#F2F2F2', '#1F1F1F'][Math.round(Math.random() * 2)],
    ],
  }));
  // City Locations
  const cRadius = 0.55;
  const cSize = 0.0075;
  const gData = [
    // Gianfranco
    new Data(55.1, -118.47, cSize, cRadius, 'Grande Prairie'),
    new Data(52.52, 13.41, cSize, cRadius, 'Berlin'),
    new Data(-13.31, -71.58, cSize, cRadius, 'Cusco'),
    // Michael
    new Data(3.14, 101.69, cSize, cRadius, 'Kuala Lumpur'),
    // Israel Lopez
    new Data(27.29, -99.3, cSize, cRadius, 'Nuevo Laredo'),
    new Data(-12.04, -77.03, cSize, cRadius, 'Lima'),
    new Data(-14.04, -75.44, cSize, cRadius, 'Ica'),
    new Data(-33.4724728, -70.9100195, cSize, cRadius, 'Santiago'),
  ];

  return (
    <ReactGlobe
      globeImageUrl={'/images/world.jpg'}
      bumpImageUrl={'/images/topology.png'}
      atmosphereAltitude={0.125}
      // Tag required for globe rotation
      ref={globRef}
      // Tags required for places display
      pointsData={gData}
      pointAltitude='size'
      pointColor='color'
      pointRadius='radius'
      pointLabel='label'
      // Tags required for arcs display
      arcsData={arcsData}
      arcColor={'color'}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 6000 + 1000}
      backgroundColor={'#000100'}
      width={width}
      height={width}
    />
  );
};

export default World;

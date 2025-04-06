// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
// import './index.scss'
// import { useEffect, useRef } from 'react';


// const NeonCursor = () => {

//     const appRef = useRef(null);

//     useEffect(()=> {
//         if(appRef.current){
//         neonCursor({
//             el: document.getElementById('app'),
//             shaderPoints: 16,
//             curvePoints: 80,
//             curveLerp: 0.5,
//             radius1: 5,
//             radius2: 30,
//             velocityTreshold: 10,
//             sleepRadiusX: 100,
//             sleepRadiusY: 100,
//             sleepTimeCoefX: 0.0025,
//             sleepTimeCoefY: 0.0025
//         });
//         }
//         return () => {

//         }
//     }, []);
   
//      return <div ref={appRef} style={{ width: '100%', height: '100%' }} />;
// };

// export default NeonCursor;
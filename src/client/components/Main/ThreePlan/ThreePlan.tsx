// @ts-nocheck
import React from 'react'
import { useParams } from 'react-router-dom';
import { IParamsProps } from '../../app';
import * as THREE from '../../../threejs.js/three.module';
import { Interaction } from '../../../threejs.js/three.interaction.module';

// import Stats from '../../../threejs.js/jsm/libs/stats.module';
import { GUI } from '../../../threejs.js/jsm/libs/dat.gui.module';
import { OrbitControls } from '../../../threejs.js/jsm/controls/OrbitControls';
import { SVGLoader } from '../../../threejs.js/jsm/loaders/SVGLoader';

const ThreePlan: React.FC  = () => {
  const { floorIndex } = useParams<IParamsProps>();
  const containerRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    alert('3d режим в альфа версии, работает не стабильно и в данный момент служит для ознакомления');
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    let renderer, stats, scene, camera, gui, guiData, mouse;

    init();
    animate();

    
    function init() {

      const container = containerRef.current;

      //
      mouse = new THREE.Vector3();

      camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.set( 0, 0, 200 );

      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      container.appendChild( renderer.domElement );

      const controls = new OrbitControls( camera, renderer.domElement );
      controls.screenSpacePanning = true;

      // stats = new Stats();
      // container.appendChild( stats.dom );

      window.addEventListener( 'resize', onWindowResize );

      guiData = {
        currentURL: `/img/levels/level${floorIndex}.svg`,
        drawFillShapes: true,
        drawStrokes: true,
        fillShapesWireframe: false,
        strokesWireframe: false
      };

      loadSVG( guiData.currentURL );
      // createGUI();
    }

    function createGUI() {

      if ( gui ) gui.destroy();

      gui = new GUI( { width: 350 } );

      gui.add( guiData, 'currentURL', {

        "office": `/img/levels/level${floorIndex}.svg`

      } ).name( 'SVG File' ).onChange( update );

      gui.add( guiData, 'drawStrokes' ).name( 'Draw strokes' ).onChange( update );

      gui.add( guiData, 'drawFillShapes' ).name( 'Draw fill shapes' ).onChange( update );

      gui.add( guiData, 'strokesWireframe' ).name( 'Wireframe strokes' ).onChange( update );

      gui.add( guiData, 'fillShapesWireframe' ).name( 'Wireframe fill shapes' ).onChange( update );

      function update() {

        loadSVG( guiData.currentURL );

      }

    }

    function loadSVG( url ) {

      scene = new THREE.Scene();
      scene.background = new THREE.Color( 0xffffff );

      //
      const interaction = new Interaction(renderer, scene, camera);
      // const helper = new THREE.GridHelper( 160, 10 );
      // helper.rotation.x = Math.PI / 2;

      // scene.add( helper );

      //
      // scene.on('touchstart', ev => {
      //   console.log(ev);
      // })
      // scene.on('touchmove', ev => {
      //   console.log(ev);
      // })

      const loader = new SVGLoader();

      loader.load( url, function ( data ) {
        const paths = data.paths;

        const group = new THREE.Group();
        group.scale.multiplyScalar( 0.25 );
        group.position.x = - 105;
        group.position.y = 70;
        group.scale.y *= - 1;

        for ( let i = 0; i < paths.length; i ++ ) {

          const path = paths[ i ];

          const fillColor = path.userData.style.fill;

          const isWall = /walls/.test(path.userData.node.parentNode.id);

          if ( guiData.drawFillShapes && fillColor !== undefined && fillColor !== 'none' ) {

            const material = new THREE.MeshBasicMaterial( {
              color: new THREE.Color().setStyle( fillColor ),
              opacity: path.userData.style.fillOpacity,
              transparent: path.userData.style.fillOpacity < 1,
              side: THREE.DoubleSide,
              depthWrite: false,
              wireframe: guiData.fillShapesWireframe,
              userData: path.userData,
            } );

            const shapes = SVGLoader.createShapes( path );

            for ( let j = 0; j < shapes.length; j ++ ) {

              
              const shape = shapes[ j ];

              const geometry = new THREE.ExtrudeGeometry( shape, {depth: isWall ? 40 : 0, bevelEnabled: false} );
              const mesh = new THREE.Mesh( geometry, material );

              // console.log('mesh', mesh);

              group.add( mesh );
              // mesh.on('click', function(ev) {
              //   // console.log('ev', ev)
              //   if (
              //     ev.target &&
              //     ev.target.material &&
              //     ev.target.material.userData &&
              //     ev.target.material.userData.node &&
              //     ev.target.material.userData.node.id
              //   ){
              //     const mapid = ev.target.material.userData.node.id.match(/place(\d+)/);
              //     console.log('ev.target.material.userData.node.dataset', ev.target.material.userData.node.dataset);

              //     if (mapid && mapid[1]) {
              //       // console.log('ev.target.material.userData.style.fill', ev.target.material.userData.style.fill);
              //       ev.target.material.color.set('red');
              //       // onsole.log(ev.target.material);
              //     }
              //   }});
              // mesh.on('mouseout', function(ev) {
              //   if (
              //     ev.target &&
              //     ev.target.material &&
              //     ev.target.material.userData &&
              //     ev.target.material.userData.node &&
              //     ev.target.material.userData.node.id
              //   ){
              //     const mapid = ev.target.material.userData.node.id.match(/place(\d+)/);
              //     console.log('ev.target.material.userData.node.dataset', ev.target.material.userData.node.dataset);
              //     if (mapid && mapid[1]) {
              //       // console.log('ev.target.material.userData.style.fill', ev.target.material.userData.style.fill);
              //       ev.target.material.color.set(ev.target.material.userData.style.fill);
              //       // onsole.log(ev.target.material);
              //     }
              //   }
              // });
              // mesh.on('mouseover', function(ev) {
              //   if (
              //     ev.target &&
              //     ev.target.material &&
              //     ev.target.material.userData &&
              //     ev.target.material.userData.node &&
              //     ev.target.material.userData.node.id
              //   ){
              //     const mapid = ev.target.material.userData.node.id.match(/place(\d+)/);
              //     console.log('ev.target.material.userData.node.dataset', ev.target.material.userData.node.dataset);
              //     if (mapid && mapid[1]) {
              //       // console.log(ev.target.material);
              //       ev.target.material.color.set('#E8E8E8');
              //     }
              //     // console.log('mapid', mapid);
              //   }
              // });
            }

          }

          const strokeColor = path.userData.style.stroke;

          if ( guiData.drawStrokes && strokeColor !== undefined && strokeColor !== 'none' ) {

            const material = new THREE.MeshBasicMaterial( {
              color: new THREE.Color().setStyle( strokeColor ),
              opacity: path.userData.style.strokeOpacity,
              transparent: path.userData.style.strokeOpacity < 1,
              side: THREE.DoubleSide,
              depthWrite: false,
              wireframe: guiData.strokesWireframe
            } );

            for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

              const subPath = path.subPaths[ j ];

              const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

              if ( geometry ) {

                const mesh = new THREE.Mesh( geometry, material );

                group.add( mesh );

              }

            }

          }

        }
        // group.rotation.set(new THREE.Vector3( 0, 0, Math.PI / 2));

        scene.add( group );

        // console.log('group', group);
      } );

    }

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

      requestAnimationFrame( animate );

      render();
      
      if (stats) {
        stats.update();
      }

    }

    function render() {

      renderer.render( scene, camera );

    }

  }, [containerRef]);

  return (
    <div ref={containerRef} />
  );
};

export { ThreePlan as default };

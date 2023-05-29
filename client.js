import * as THREE from './js/three.module.js'
import { SVGLoader } from './js/SVGLoader.js'




const scene = new THREE.Scene()

//const gridHelper = new THREE.GridHelper(10, 10, 0xFF0000, 0xaec6cf)
//scene.add(gridHelper)


const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000)
checkratio()
function checkratio(){
    if(window.innerHeight > window.innerWidth){
        camera.fov = 50;
        camera.updateProjectionMatrix();
    }else{
        camera.fov = 30;
        camera.updateProjectionMatrix();
    }
}

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let lang = 'en';

var started = 0;
function start() {
  if(started==0) {
    started = 1;
  } else {
    started = 0;
  }
}

var started2 = 0;
function start2() {
  if(started2==0) {
    started2 = 1;
  } else {
    started2 = 0;
  }
}

var started3 = 0;
function start3() {
  if(started3==0) {
    started3 = 1;
  } else {
    started3 = 0;
  }
}

var started4 = 0;
function start4() {
  if(started4==0) {
    started4 = 1;
  } else {
    started4 = 0;
  }
}

var started5 = 0;
function start5() {
  if(started5==0) {
    started5 = 1;
  } else {
    started5 = 0;
  }
}


let scrollPercent = 0

setTimeout(() => {
    document.getElementById('loader6').style.display = "none";
}, "1000")

document.body.onscroll = () => {
    //calculate the current scroll progress as a percentage
    scrollPercent =
        ((document.documentElement.scrollTop || document.body.scrollTop) /
            ((document.documentElement.scrollHeight || document.body.scrollHeight) -
                document.documentElement.clientHeight)) * 1170
    document.getElementById('scrollProgress').innerText =
        'Scroll Progress: ' + Math.round(scrollPercent*0.0855) + '%'
    
      function clearfunc(){
           group.clear()
      }
    
      if( scrollPercent > 515 && started==0) {
        group.visible = false;
        group3.visible = true;
        start();
        
      } else if ( scrollPercent < 515 && started==1 ) {
        group.visible = true;
        group3.visible = false;
        start();
      } 
    
    
      if( scrollPercent > 695 && started2==0) {
        group3.visible = false;
        group4.visible = true;
        group4b.visible = true;
        start2();
        
      } else if ( scrollPercent < 695 && started2==1 ) {
        group3.visible = true;
        group4.visible = false;
        group4b.visible = false;
        start2();     
      }   
    
    
      if( scrollPercent > 775 && started3==0) {
        group4.visible = false;
        group4b.visible = true;
        start3();
        
      } else if ( scrollPercent < 775 && started3==1 ) {
        group4.visible = true;
        group4b.visible = false;
        start3();     
      }
    
    
      if( scrollPercent > 875 && started4==0) {
        group4b.visible = false;
        group5b.visible = true;
        start4();
        
      } else if ( scrollPercent < 875 && started4==1 ) {
        group4b.visible = true;
        group5b.visible = false;
        start4();     
      }
    
    
      if( scrollPercent > 910 && started5==0) {
        group5b.visible = false;
        group6.visible = true;
        group5.visible = true;
        start5();
        
      } else if ( scrollPercent < 910 && started5==1 ) {
        group5b.visible = true;
        group6.visible = false;
        group5.visible = false;
        start5();     
      }  

}

/*sessionStorage.setItem('label', 'value')
sessionStorage.getItem('label')*/





//SVG 
const loader = new SVGLoader();


let svgurl = './SVGs/diagram1_en.svg';
const group = new THREE.Group(); 
loadSVG();

function loadSVG() {
      
	loader.load( svgurl, function ( data ) {
        
					const paths = data.paths;
					group.scale.set(0.007, 0.007, 0.007);
                    group.rotation.x = Math.PI;

					for ( let i = 0; i < paths.length; i ++ ) {

						const path = paths[ i ];

						const fillColor = path.userData.style.fill;
						
                    if ( fillColor !== undefined && fillColor !== 'none' ) {  
							const material = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( fillColor ).convertSRGBToLinear(),
								opacity: path.userData.style.fillOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
							} );

					 const shapes = SVGLoader.createShapes( path );

							for ( let j = 0; j < shapes.length; j ++ ) {

								const shape = shapes[ j ];

								const geometry = new THREE.ShapeGeometry( shape );
								const mesh = new THREE.Mesh( geometry, material );

								group.add( mesh );
							}
				     }   

					 const strokeColor = path.userData.style.stroke;

                     if ( strokeColor !== undefined && strokeColor !== 'none' ) {
                         
//                        const style = SVGLoader.getStrokeStyle( 0.1, 0xFFFFFF ); 
						const material2 = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( strokeColor ).convertSRGBToLinear(),
								opacity: path.userData.style.strokeOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
						} );

							for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

								const subPath = path.subPaths[ j ];

								const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

								if ( geometry ) {

									const mesh = new THREE.Mesh( geometry, material2 );

									group.add( mesh );
								}
							}
                      }
					}

					scene.add( group );
    });
}



let svgurl2 = './SVGs/diagram2_en.svg';
const group2 = new THREE.Group();
loadSVG2();

function loadSVG2() {

                
	loader.load( svgurl2, function ( data ) {

					const paths = data.paths;
					group2.scale.set(0.00042, 0.00042, 0.00042);
					group2.position.set(0, 0, 0);
                    group2.rotation.x = Math.PI/2;

					for ( let i = 0; i < paths.length; i ++ ) {

						const path = paths[ i ];

						const fillColor = path.userData.style.fill;
						
                    if ( fillColor !== undefined && fillColor !== 'none' ) {  
							const material = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( fillColor ).convertSRGBToLinear(),
								opacity: path.userData.style.fillOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
							} );

							const shapes = SVGLoader.createShapes( path );

							for ( let j = 0; j < shapes.length; j ++ ) {

								const shape = shapes[ j ];

								const geometry = new THREE.ShapeGeometry( shape );
								const mesh = new THREE.Mesh( geometry, material );

								group2.add( mesh );

							}

				     }   

						const strokeColor = path.userData.style.stroke;

						
                     if ( strokeColor !== undefined && strokeColor !== 'none' ) {
                         
						const material2 = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( strokeColor ).convertSRGBToLinear(),
								opacity: path.userData.style.strokeOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
						} );

							for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

								const subPath = path.subPaths[ j ];

								const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

								if ( geometry ) {

									const mesh = new THREE.Mesh( geometry, material2 );

									group2.add( mesh );
								}
							}
                      }
					}

					scene.add( group2 );

					render();

    });
}



let svgurl3 = './SVGs/diagram3_en.svg';
const group3 = new THREE.Group(); 
loadSVG3();

function loadSVG3() {
      
	loader.load( svgurl3, function ( data ) {
        
					const paths = data.paths;
					group3.scale.set(0.007, 0.007, 0.007);
                    group3.rotation.x = Math.PI;

					for ( let i = 0; i < paths.length; i ++ ) {

						const path = paths[ i ];

						const fillColor = path.userData.style.fill;
						
                    if ( fillColor !== undefined && fillColor !== 'none' ) {  
							const material = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( fillColor ).convertSRGBToLinear(),
								opacity: path.userData.style.fillOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
							} );

					 const shapes = SVGLoader.createShapes( path );

							for ( let j = 0; j < shapes.length; j ++ ) {

								const shape = shapes[ j ];

								const geometry = new THREE.ShapeGeometry( shape );
								const mesh = new THREE.Mesh( geometry, material );

								group3.add( mesh );
							}
				     }   

					 const strokeColor = path.userData.style.stroke;

                     if ( strokeColor !== undefined && strokeColor !== 'none' ) {
                         
						const material2 = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( strokeColor ).convertSRGBToLinear(),
								opacity: path.userData.style.strokeOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
						} );

							for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

								const subPath = path.subPaths[ j ];

								const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

								if ( geometry ) {

									const mesh = new THREE.Mesh( geometry, material2 );

									group3.add( mesh );
								}
							}
                      }
					}

					scene.add( group3 );
    });
}

group3.visible = false;



let svgurl4 = './SVGs/diagram4_en.svg';
const group4 = new THREE.Group(); 
loadSVG4();

function loadSVG4() {
      
	loader.load( svgurl4, function ( data ) {
        
					const paths = data.paths;
					group4.scale.set(0.0035, 0.0035, 0.0035);
                    group4.rotation.x = Math.PI;

					for ( let i = 0; i < paths.length; i ++ ) {

						const path = paths[ i ];

						const fillColor = path.userData.style.fill;
						
                    if ( fillColor !== undefined && fillColor !== 'none' ) {  
							const material = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( fillColor ).convertSRGBToLinear(),
								opacity: path.userData.style.fillOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
							} );

					 const shapes = SVGLoader.createShapes( path );

							for ( let j = 0; j < shapes.length; j ++ ) {

								const shape = shapes[ j ];

								const geometry = new THREE.ShapeGeometry( shape );
								const mesh = new THREE.Mesh( geometry, material );

								group4.add( mesh );
							}
				     }   

					 const strokeColor = path.userData.style.stroke;

                     if ( strokeColor !== undefined && strokeColor !== 'none' ) {
                         
						const material2 = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( strokeColor ).convertSRGBToLinear(),
								opacity: path.userData.style.strokeOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
						} );

							for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

								const subPath = path.subPaths[ j ];

								const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

								if ( geometry ) {

									const mesh = new THREE.Mesh( geometry, material2 );

									group4.add( mesh );
								}
							}
                      }
					}

					scene.add( group4 );
    });
}

group4.visible = false;





let svgurl4b = './SVGs/diagram4b_en.svg';
const group4b = new THREE.Group(); 
loadSVG4b();

function loadSVG4b() {
      
	loader.load( svgurl4b, function ( data ) {
        
					const paths = data.paths;
					group4b.scale.set(0.0035, 0.0035, 0.0035);
                    group4b.rotation.x = Math.PI;

					for ( let i = 0; i < paths.length; i ++ ) {

						const path = paths[ i ];

						const fillColor = path.userData.style.fill;
						
                    if ( fillColor !== undefined && fillColor !== 'none' ) {  
							const material = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( fillColor ).convertSRGBToLinear(),
								opacity: path.userData.style.fillOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
							} );

					 const shapes = SVGLoader.createShapes( path );

							for ( let j = 0; j < shapes.length; j ++ ) {

								const shape = shapes[ j ];

								const geometry = new THREE.ShapeGeometry( shape );
								const mesh = new THREE.Mesh( geometry, material );

								group4b.add( mesh );
							}
				     }   

					 const strokeColor = path.userData.style.stroke;

                     if ( strokeColor !== undefined && strokeColor !== 'none' ) {
                         
						const material2 = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( strokeColor ).convertSRGBToLinear(),
								opacity: path.userData.style.strokeOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
						} );

							for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

								const subPath = path.subPaths[ j ];

								const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

								if ( geometry ) {

									const mesh = new THREE.Mesh( geometry, material2 );

									group4b.add( mesh );
								}
							}
                      }
					}

					scene.add( group4b );
    });
}

group4b.visible = false;





let svgurl5b = './SVGs/diagram5b_en.svg';
const group5b = new THREE.Group(); 
loadSVG5b();

function loadSVG5b() {
      
	loader.load( svgurl5b, function ( data ) {
        
					const paths = data.paths;
					group5b.scale.set(0.0035, 0.0035, 0.0035);
                    group5b.rotation.x = Math.PI;

					for ( let i = 0; i < paths.length; i ++ ) {

						const path = paths[ i ];

						const fillColor = path.userData.style.fill;
						
                    if ( fillColor !== undefined && fillColor !== 'none' ) {  
							const material = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( fillColor ).convertSRGBToLinear(),
								opacity: path.userData.style.fillOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
							} );

					 const shapes = SVGLoader.createShapes( path );

							for ( let j = 0; j < shapes.length; j ++ ) {

								const shape = shapes[ j ];

								const geometry = new THREE.ShapeGeometry( shape );
								const mesh = new THREE.Mesh( geometry, material );

								group5b.add( mesh );
							}
				     }   

					 const strokeColor = path.userData.style.stroke;

                     if ( strokeColor !== undefined && strokeColor !== 'none' ) {
                         
						const material2 = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( strokeColor ).convertSRGBToLinear(),
								opacity: path.userData.style.strokeOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
						} );

							for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

								const subPath = path.subPaths[ j ];

								const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

								if ( geometry ) {

									const mesh = new THREE.Mesh( geometry, material2 );

									group5b.add( mesh );
								}
							}
                      }
					}

					scene.add( group5b );
    });
}

group5b.visible = false;





let svgurl5 = './SVGs/diagram5_en.svg';
const group5 = new THREE.Group(); 
loadSVG5();

function loadSVG5() {
      
	loader.load( svgurl5, function ( data ) {
        
					const paths = data.paths;
					group5.scale.set(0.0035, 0.0035, 0.0035);
                    group5.rotation.x = Math.PI;

					for ( let i = 0; i < paths.length; i ++ ) {

						const path = paths[ i ];

						const fillColor = path.userData.style.fill;
						
                    if ( fillColor !== undefined && fillColor !== 'none' ) {  
							const material = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( fillColor ).convertSRGBToLinear(),
								opacity: path.userData.style.fillOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
							} );

					 const shapes = SVGLoader.createShapes( path );

							for ( let j = 0; j < shapes.length; j ++ ) {

								const shape = shapes[ j ];

								const geometry = new THREE.ShapeGeometry( shape );
								const mesh = new THREE.Mesh( geometry, material );

								group5.add( mesh );
							}
				     }   

					 const strokeColor = path.userData.style.stroke;

                     if ( strokeColor !== undefined && strokeColor !== 'none' ) {
                         
						const material2 = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( strokeColor ).convertSRGBToLinear(),
								opacity: path.userData.style.strokeOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
						} );

							for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

								const subPath = path.subPaths[ j ];

								const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

								if ( geometry ) {

									const mesh = new THREE.Mesh( geometry, material2 );

									group5.add( mesh );
								}
							}
                      }
					}

					scene.add( group5 );
    });
}

group5.visible = false;





let svgurl6 = './SVGs/diagram6_en.svg';
const group6 = new THREE.Group(); 
loadSVG6();

function loadSVG6() {
      
	loader.load( svgurl6, function ( data ) {
        
					const paths = data.paths;
					group6.scale.set(0.0035, 0.0035, 0.0035);
                    group6.rotation.x = Math.PI;

					for ( let i = 0; i < paths.length; i ++ ) {

						const path = paths[ i ];

						const fillColor = path.userData.style.fill;
						
                    if ( fillColor !== undefined && fillColor !== 'none' ) {  
							const material = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( fillColor ).convertSRGBToLinear(),
								opacity: path.userData.style.fillOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
							} );

					 const shapes = SVGLoader.createShapes( path );

							for ( let j = 0; j < shapes.length; j ++ ) {

								const shape = shapes[ j ];

								const geometry = new THREE.ShapeGeometry( shape );
								const mesh = new THREE.Mesh( geometry, material );

								group6.add( mesh );
							}
				     }   

					 const strokeColor = path.userData.style.stroke;

                     if ( strokeColor !== undefined && strokeColor !== 'none' ) {
                         
						const material2 = new THREE.MeshBasicMaterial( {
								color: new THREE.Color().setStyle( strokeColor ).convertSRGBToLinear(),
								opacity: path.userData.style.strokeOpacity,
								transparent: true,
								side: THREE.DoubleSide,
								depthWrite: false,
								wireframe: false
						} );

							for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

								const subPath = path.subPaths[ j ];

								const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

								if ( geometry ) {

									const mesh = new THREE.Mesh( geometry, material2 );

									group6.add( mesh );
								}
							}
                      }
					}

					scene.add( group6 );
    });
}

group6.visible = false;



    let xsefr = -2.54;
    let ysefr = 31.644;


    /* Liner Interpolation
     * lerp(min, max, ratio)
     * eg,
     * lerp(20, 60, .5)) = 40
     * lerp(-20, 60, .5)) = 20
     * lerp(20, 60, .75)) = 50
     * lerp(-20, -10, .1)) = -.19
     */
    function lerp(x, y, a) {
        return (1 - a) * x + a * y
    }

    // Used to fit the lerps to start and end at specific scrolling percentages
    function scalePercent(start, end) {
        return (scrollPercent - start) / (end - start)
    }

    const animationScripts = []

    //add an animation that flashes the cube through 100 percent of scroll
    animationScripts.push({
        start: 0,
        end: 1150,
        func: () => {
            
        }
    })


    animationScripts.push({
        start: 0,
        end: 50,
        func: () => {
            group2.visible = false;
            
            camera.lookAt(0, 0, 0)
            camera.position.set(0, 0, 5)
            group.position.z = lerp(-200, -200, scalePercent(0, 50))
            group.position.y = lerp(0, 0, scalePercent(0, 50))
            group.position.x = lerp(0, 0, scalePercent(0, 50))
            
            group3.position.z = lerp(-200, -200, scalePercent(0, 50))
            group3.position.y = lerp(0, 0, scalePercent(0, 50))
            group3.position.x = lerp(0, 0, scalePercent(0, 50))

            //console.log(cube.position.z)
        },
    })

    animationScripts.push({
        start: 50,
        end: 100,
        func: () => {
            group2.visible = false;
            
            group.position.z = lerp(-200, -40, scalePercent(50, 100))
            group.position.y = lerp(0, ysefr, scalePercent(50, 100))
            group.position.x = lerp(0, xsefr, scalePercent(50, 100))

            //console.log(cube.position.z)
        },
    })

    animationScripts.push({
        start: 100,
        end: 110,
        func: () => {
            group2.visible = false;
            
            group.position.z = lerp(-40, -40, scalePercent(100, 110))
            group.position.y = lerp(ysefr, ysefr, scalePercent(100, 110))
            group.position.x = lerp(xsefr, xsefr, scalePercent(100, 110))

            //console.log(cube.position.z)
        },
    })

    //add an animation that moves the cube through first 40 percent of scroll
    animationScripts.push({
        start: 110,
        end: 180,
        func: () => {
            group2.visible = false;
            
            group.position.z = lerp(-40, -10, scalePercent(110, 180))
            group.position.y = lerp(ysefr, ysefr, scalePercent(110, 180))
            group.position.x = lerp(xsefr, xsefr, scalePercent(110, 180))

            //console.log(cube.position.z)
        },
    })

    animationScripts.push({
        start: 180,
        end: 190,
        func: () => {
            group2.visible = false;
            
            camera.lookAt(0, 0, 0)
            camera.position.set(0, 0, 5)
            group.position.z = lerp(-10, -10, scalePercent(180, 190))
            group.position.y = lerp(ysefr, ysefr, scalePercent(180, 190))
            group.position.x = lerp(xsefr, xsefr, scalePercent(180, 190))
        },
    })

    animationScripts.push({
        start: 190,
        end: 260,
        func: () => {
            group2.visible = false;
            
            group.position.z = lerp(-10, 0, scalePercent(190, 260))
            group.position.y = lerp(ysefr, ysefr, scalePercent(190, 260))
            group.position.x = lerp(xsefr, xsefr, scalePercent(190, 260))
            
            camera.position.x = lerp(0, 0, scalePercent(190, 260))
            camera.position.y = lerp(0, 0, scalePercent(190, 260))
            camera.position.z = lerp(5, 5, scalePercent(190, 260))
            camera.lookAt(0, 0, 0)
        },
    })

    animationScripts.push({
        start: 260,
        end: 270,
        func: () => {
            group2.visible = false;
            
            
            group.position.z = lerp(0, 0, scalePercent(260, 270))
            group.position.y = lerp(ysefr, ysefr, scalePercent(260, 270))
            group.position.x = lerp(xsefr, xsefr, scalePercent(260, 270))
            
            camera.position.x = lerp(0, 0, scalePercent(260, 270))
            camera.position.y = lerp(0, 0, scalePercent(260, 270))
            camera.position.z = lerp(5, 5, scalePercent(260, 270))
            camera.lookAt(0, 0, 0)
        },
    })

    //add an animation that moves the camera between 60-80 percent of scroll
    animationScripts.push({
        start: 270,
        end: 340,
        func: () => {
    //        camera.lookAt(group.position)
    //        camera.position.set(0, 0, 2)
    //        group.rotation.z = lerp(0, Math.PI, scalePercent(40, 60))
            group2.visible = true;
            
            group.position.z = lerp(0, 0, scalePercent(270, 340))
            group.position.y = lerp(ysefr, ysefr, scalePercent(270, 340))
            group.position.x = lerp(xsefr, xsefr, scalePercent(270, 340))

            camera.position.x = lerp(0, 0, scalePercent(270, 340))
            camera.position.y = lerp(0, 6, scalePercent(270, 340))
            camera.position.z = lerp(5, 0, scalePercent(270, 340))
            camera.lookAt(0, 0, 0)

            //console.log(camera.position.x + " " + camera.position.y)
        },
    })

    //add an animation that auto rotates the cube from 80 percent of scroll
    animationScripts.push({
        start: 340,
        end: 360,
        func: () => {
            group2.visible = true;
            
            camera.position.x = lerp(0, 0, scalePercent(340, 360))
            camera.position.y = lerp(6, 6, scalePercent(340, 360))
            camera.position.z = lerp(0, 0, scalePercent(340, 360))
            camera.lookAt(0, 0, 0)
        },
    })

    animationScripts.push({
        start: 360,
        end: 430,
        func: () => {
            group2.visible = true;
            
            camera.position.x = lerp(0, 0, scalePercent(360, 430))
            camera.position.y = lerp(6, 0, scalePercent(360, 430))
            camera.position.z = lerp(0, 5, scalePercent(360, 430))
            camera.lookAt(0, 0, 0)
        },
    })

    animationScripts.push({
        start: 430,
        end: 440,
        func: () => {
            group2.visible = false;
            
            group.position.z = lerp(0, 0, scalePercent(430, 440))
            group.position.y = lerp(ysefr, ysefr, scalePercent(430, 440))
            group.position.x = lerp(xsefr, xsefr, scalePercent(430, 440))

            camera.position.x = lerp(0, 0, scalePercent(430, 440))
            camera.position.y = lerp(0, 0, scalePercent(430, 440))
            camera.position.z = lerp(5, 5, scalePercent(430, 440))
            camera.lookAt(0, 0, 0)
        },
    })

    animationScripts.push({
        start: 440,
        end: 510,
        func: () => {
            group2.visible = false;
            
            group.position.z = lerp(0, -200, scalePercent(440, 510))
            group.position.y = lerp(ysefr, 0, scalePercent(440, 510))
            group.position.x = lerp(xsefr, 0, scalePercent(440, 510))
            
            camera.position.x = lerp(0, 0, scalePercent(440, 510))
            camera.position.y = lerp(0, 0, scalePercent(440, 510))
            camera.position.z = lerp(5, 5, scalePercent(440, 510))
            camera.lookAt(0, 0, 0)
        },
    })

    animationScripts.push({
        start: 510,
        end: 530,
        func: () => {
            group2.visible = false;
            
            group.position.z = lerp(-200, -200, scalePercent(510, 520))
            group.position.y = lerp(0, 0, scalePercent(510, 520))
            group.position.x = lerp(0, 0, scalePercent(510, 520))
            
            group3.position.z = lerp(-200, -200, scalePercent(510, 520))
            group3.position.y = lerp(0, 0, scalePercent(510, 520))
            group3.position.x = lerp(0, 0, scalePercent(510, 520))
        },
    })
    
    animationScripts.push({
        start: 530,
        end: 600,
        func: () => {
            group2.visible = false;
            
            group3.position.z = lerp(-200, -25, scalePercent(530, 600))
            group3.position.y = lerp(0, ysefr, scalePercent(530, 600))
            group3.position.x = lerp(0, xsefr, scalePercent(530, 600))
        },
    })

    animationScripts.push({
        start: 600,
        end: 610,
        func: () => {
            group2.visible = false;
            
            group3.position.z = lerp(-25, -25, scalePercent(600, 610))
            group3.position.y = lerp(ysefr, ysefr, scalePercent(600, 610))
            group3.position.x = lerp(xsefr, xsefr, scalePercent(600, 610))
        },
    })

    animationScripts.push({
        start: 610,
        end: 680,
        func: () => {
            group2.visible = false;
            
            group3.position.z = lerp(-25, 1.1, scalePercent(610, 680))
            group3.position.y = lerp(ysefr, ysefr, scalePercent(610, 680))
            group3.position.x = lerp(xsefr, xsefr, scalePercent(610, 680))
        },
    })

    animationScripts.push({
        start: 680,
        end: 690,
        func: () => {
            group2.visible = false;
            
            group3.position.z = lerp(1.1, 1.1, scalePercent(680, 690))
            group3.position.y = lerp(ysefr, ysefr, scalePercent(680, 690))
            group3.position.x = lerp(xsefr, xsefr, scalePercent(680, 690))
        },
    })

    animationScripts.push({
        start: 690,
        end: 710,
        func: () => {
            group4.position.z = lerp(1.1, 1.1, scalePercent(690, 710))
            group4.position.y = lerp(ysefr, ysefr, scalePercent(690, 710))
            group4.position.x = lerp(xsefr, xsefr, scalePercent(690, 710))
            
            group4b.position.z = lerp(1.1, 1.1, scalePercent(690, 710))
            group4b.position.y = lerp(ysefr, ysefr, scalePercent(690, 710))
            group4b.position.x = lerp(xsefr, xsefr, scalePercent(690, 710))
        },
    })


    animationScripts.push({
        start: 710,
        end: 780,
        func: () => {
            group4.position.z = lerp(1.1, -33, scalePercent(710, 780))
            group4.position.y = lerp(ysefr, ysefr-8.3, scalePercent(710, 780))
            group4.position.x = lerp(xsefr, xsefr+3, scalePercent(710, 780))
            
            group4b.position.z = lerp(1.1, -33, scalePercent(710, 780))
            group4b.position.y = lerp(ysefr, ysefr-8.3, scalePercent(710, 780))
            group4b.position.x = lerp(xsefr, xsefr+3, scalePercent(710, 780))
        },
    })


    animationScripts.push({
        start: 780,
        end: 800,
        func: () => {
            group4.position.z = lerp(-33, -33, scalePercent(780, 800))
            group4.position.y = lerp(ysefr-8.3, ysefr-8.3, scalePercent(780, 800))
            group4.position.x = lerp(xsefr+3, xsefr+3, scalePercent(780, 800))
            
            group4b.position.z = lerp(-33, -33, scalePercent(780, 800))
            group4b.position.y = lerp(ysefr-8.3, ysefr-8.3, scalePercent(780, 800))
            group4b.position.x = lerp(xsefr+3, xsefr+3, scalePercent(780, 800))
        },
    })

    animationScripts.push({
        start: 800,
        end: 870,
        func: () => {
            group4b.position.z = lerp(-33, 4, scalePercent(800, 870))
            group4b.position.y = lerp(ysefr-8.3, ysefr+0.52, scalePercent(800, 870))
            group4b.position.x = lerp(xsefr+3, xsefr+5.58, scalePercent(800, 870))
            
            camera.position.x = lerp(0, 0, scalePercent(800, 870))
            camera.position.y = lerp(0, 0, scalePercent(800, 870))
            camera.position.z = lerp(5, 5, scalePercent(800, 870))
            camera.lookAt(0, 0, 0)
        },
    })


    animationScripts.push({
        start: 870,
        end: 920,
        func: () => {
            group4b.position.z = lerp(4, 4, scalePercent(870, 920))
            group4b.position.y = lerp(ysefr+0.52, ysefr+0.52, scalePercent(870, 920))
            group4b.position.x = lerp(xsefr+5.58, xsefr+5.58, scalePercent(870, 920))
            
            group5.position.z = lerp(1, 1, scalePercent(870, 920))
            group5.position.y = lerp(0, 0, scalePercent(870, 920))
            group5.position.x = lerp(0, 0, scalePercent(870, 920))
            
            group5b.position.z = lerp(1, 1, scalePercent(870, 920))
            group5b.position.y = lerp(0, 0, scalePercent(870, 920))
            group5b.position.x = lerp(0, 0, scalePercent(870, 920))
            
            group6.position.z = lerp(1, 1, scalePercent(870, 920))
            group6.position.y = lerp(0, 0, scalePercent(870, 920))
            group6.position.x = lerp(0, 0, scalePercent(870, 920))
            
            camera.position.x = lerp(0, 0, scalePercent(870, 920))
            camera.position.y = lerp(0, 0, scalePercent(870, 920))
            camera.position.z = lerp(5, 5, scalePercent(870, 920))
            camera.lookAt(0, 0, 0)
        },
    })



    animationScripts.push({
        start: 920,
        end: 990,
        func: () => {
            group5.position.z = lerp(1, -7, scalePercent(920, 990))
            group5.position.y = lerp(0, 0, scalePercent(920, 990))
            group5.position.x = lerp(0, 0, scalePercent(920, 990))
            
            group6.position.z = lerp(1, -7, scalePercent(920, 990))
            group6.position.y = lerp(0, 0, scalePercent(920, 990))
            group6.position.x = lerp(0, 0, scalePercent(920, 990))
            
            camera.position.x = lerp(0, 0, scalePercent(920, 990))
            camera.position.y = lerp(0, 0, scalePercent(920, 990))
            camera.position.z = lerp(5, 5, scalePercent(920, 990))
            camera.lookAt(0, 0, -7)
        },
    })


    animationScripts.push({
        start: 990,
        end: 1000,
        func: () => {
            group5.position.z = lerp(-7, -7, scalePercent(990, 1000))
            group5.position.y = lerp(0, 0, scalePercent(990, 1000))
            group5.position.x = lerp(0, 0, scalePercent(990, 1000))
            group5.scale.x = lerp(0.0035, 0.0035, scalePercent(990, 1000))
            group5.scale.y = lerp(0.0035, 0.0035, scalePercent(990, 1000))
            
            group6.position.z = lerp(-7, -7, scalePercent(990, 1000))
            group6.position.y = lerp(0, 0, scalePercent(990, 1000))
            group6.position.x = lerp(0, 0, scalePercent(990, 1000))
            group6.scale.x = lerp(0.0035, 0.0035, scalePercent(990, 1000))
            group6.scale.y = lerp(0.0035, 0.0035, scalePercent(990, 1000))
            
            camera.position.x = lerp(0, 0, scalePercent(990, 1000))
            camera.position.y = lerp(0, 0, scalePercent(990, 1000))
            camera.position.z = lerp(5, 5, scalePercent(990, 1000))
            camera.lookAt(0, 0, -7)
        },
    })


    animationScripts.push({
        start: 1000,
        end: 1070,
        func: () => {
            group5.position.z = lerp(-7, -5, scalePercent(1000, 1070))
            group5.position.y = lerp(0, 0, scalePercent(1000, 1070))
            group5.position.x = lerp(0, 0, scalePercent(1000, 1070))
            group5.scale.x = lerp(0.0035, 0.005, scalePercent(1000, 1070))
            group5.scale.y = lerp(0.0035, 0.005, scalePercent(1000, 1070))
            
            group6.position.z = lerp(-7, -9, scalePercent(1000, 1070))
            group6.position.y = lerp(0, 0, scalePercent(1000, 1070))
            group6.position.x = lerp(0, 0, scalePercent(1000, 1070))
            group6.scale.x = lerp(0.0035, 0.0025, scalePercent(1000, 1070))
            group6.scale.y = lerp(0.0035, 0.0025, scalePercent(1000, 1070))
            
            camera.position.x = lerp(0, -10, scalePercent(1000, 1070))
            camera.position.y = lerp(0, 0, scalePercent(1000, 1070))
            camera.position.z = lerp(5, -7, scalePercent(1000, 1070))
            camera.lookAt(0, 0, -7)
        },
    })


    animationScripts.push({
        start: 1070,
        end: 1080,
        func: () => {
            group5.position.z = lerp(-5, -5, scalePercent(1070, 1080))
            group5.position.y = lerp(0, 0, scalePercent(1070, 1080))
            group5.position.x = lerp(0, 0, scalePercent(1070, 1080))
            group5.scale.x = lerp(0.005, 0.005, scalePercent(1070, 1080))
            group5.scale.y = lerp(0.005, 0.005, scalePercent(1070, 1080))
            group5.rotation.y = lerp(0, 0, scalePercent(1070, 1080))
            
            group6.position.z = lerp(-9, -9, scalePercent(1070, 1080))
            group6.position.y = lerp(0, 0, scalePercent(1070, 1080))
            group6.position.x = lerp(0, 0, scalePercent(1070, 1080))
            group6.scale.x = lerp(0.0025, 0.0025, scalePercent(1070, 1080))
            group6.scale.y = lerp(0.0025, 0.0025, scalePercent(1070, 1080))
            group6.rotation.y = lerp(0, 0, scalePercent(1070, 1080))
            group6.rotation.z = lerp(0, 0, scalePercent(1070, 1080))
          
            camera.position.x = lerp(-10, -10, scalePercent(1070, 1080))
            camera.position.y = lerp(0, 0, scalePercent(1070, 1080))
            camera.position.z = lerp(-7, -7, scalePercent(1070, 1080))
            camera.lookAt(0, 0, -7)
        },
    })


    animationScripts.push({
        start: 1080,
        end: 1150,
        func: () => { 
            group5.rotation.y = lerp(0, Math.PI/2, scalePercent(1080, 1150))
            group6.rotation.y = lerp(0, Math.PI/2, scalePercent(1080, 1150))
            group6.rotation.z = lerp(0, Math.PI/4, scalePercent(1080, 1150))
            
            camera.position.x = lerp(-10, -10, scalePercent(1080, 1150))
            camera.position.y = lerp(0, 0, scalePercent(1080, 1150))
            camera.position.z = lerp(-7, -7, scalePercent(1080, 1150))
            camera.lookAt(0, 0, -7)
        },
    })


    animationScripts.push({
        start: 1150,
        end: 1170,
        func: () => { 
            group5.rotation.y = lerp(Math.PI/2, Math.PI/2, scalePercent(1150, 1160))
            group6.rotation.y = lerp(Math.PI/2, Math.PI/2, scalePercent(1150, 1160))
            group6.rotation.z = lerp(Math.PI/4, Math.PI/4, scalePercent(1150, 1160))
        },
    })




    function playScrollAnimations() {
        animationScripts.forEach((a) => {
            if (scrollPercent >= a.start && scrollPercent < a.end) {
                a.func()
            }
        })
    }


    //const stats = Stats()
    //document.body.appendChild(stats.dom)

    function animate() {
        requestAnimationFrame(animate)

        playScrollAnimations()

        render()

    //    stats.update()
    }

    function render() {
        renderer.render(scene, camera)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
    animate()

          








window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    checkratio()
    render()
}





window.addEventListener('scroll', function() {
    document.getElementById("title").style.opacity = 1 - window.pageYOffset / 250;
    document.getElementById("main").style.opacity = 1 - window.pageYOffset / 250;
});





document.getElementById("ar").onclick = function(){
        console.log('ar');
        lang = 'ar';
        group.clear();
        group2.clear();
        group3.clear();
        group4.clear();
        group4b.clear();
        group5b.clear();
    
    
        document.getElementById('loader6').style.display = "block";
        setTimeout(() => {
            document.getElementById('loader6').style.display = "none";
        }, "1000")
    
        svgurl = './SVGs/diagram1_ar.svg';
        svgurl2 = './SVGs/diagram2_ar.svg';
        svgurl3 = './SVGs/diagram3_ar.svg';
        svgurl4 = './SVGs/diagram4_ar.svg';
        svgurl4b = './SVGs/diagram4b_ar.svg';
        svgurl5b = './SVGs/diagram5b_ar.svg';

        loadSVG();
        loadSVG2();
        loadSVG3();
        loadSVG4();
        loadSVG4b();
        loadSVG5b();
    
        document.getElementById("main").innerHTML = '<p id="title" class="title_ar">ترتيب الایجاد<span class="sub"><br>هذه تجربة تفاعلية مستخرجة من سلسلة الصور التي رسمها الشيخ الأكبر محيي الدين ابن العربي فی الباب الواحد والسبعین وثلاثمائة من كتاب الفتوحات المكية، وسماها "صورَ ترتيب الايجاد". وقد قال ابن العربي في بدایة الترتیب ان "موضع صور الاشکال ضیق هنا، لا یتسع لصور ما نريد تشکیلة واحدة، فإنه لو اتّسع کان أبین للناظر فیه.". وهكذا وضع الشيخ العلامات المختلفة في صور لتبیین اتحاد الصور. والهدف من هذه التجربة هو إظهار الصور في نسق واحد وفق أبحاث  <a href="https://www.alikarjooravary.com/home" target="_blank">علي كارجو راوري</a>  في المقالة التالية التي نشرتها مجلة الدراسات الصوفية. <a href="https://drive.google.com/file/d/1k_xrmlNTHfupOqN62BMWAlqGPwFDBcV-/view" target="_blank">(“Mapping the Unseen: Ibn al-‘Arabi’s Maps in al-Futūḥāt al-Makkiyya,” in Journal of Sufi Studies.)</a><br><br>التصميم والترميز:<br> <a href="https://www.sinafakour.com/" target="_blank">سينا فكور</a><br><br>(حرك الفأرة لأسفل)</span></p>';
};

document.getElementById("en").onclick = function(){
        console.log('en');
        lang = 'en';
        group.clear();
        group2.clear();
        group3.clear();
        group4.clear();
        group4b.clear();
        group5b.clear();
        
    
        document.getElementById('loader6').style.display = "block";
        setTimeout(() => {
            document.getElementById('loader6').style.display = "none";
        }, "1000")
    
        svgurl = './SVGs/diagram1_en.svg';
        svgurl2 = './SVGs/diagram2_en.svg';
        svgurl3 = './SVGs/diagram3_en.svg';
        svgurl4 = './SVGs/diagram4_en.svg';
        svgurl4b = './SVGs/diagram4b_en.svg';
        svgurl5b = './SVGs/diagram5b_en.svg';
    
        loadSVG();
        loadSVG2();
        loadSVG3();
        loadSVG4();
        loadSVG4b();
        loadSVG5b();
        
    
        document.getElementById("main").innerHTML = '<p id="title" class="title">Mapping the Unseen<span class="sub"><br>This is an interactive experience of a sequence of images in Chapter 371 of Ibn al-ʿArabī’s The Meccan Openings (al-Futūḥāt al-Makkiyya). He named this sequence “the Order of Coming into Being,” remarking that the images would have been a single composition if he had the space to fit them all. Instead, he used nine full pages, adapting text and image to the constraints of the physical codex to show their interrelationship. This website, an act of interpretation by <a href="https://www.alikarjooravary.com/home" target="_blank">Ali Karjoo-Ravary,</a> is an attempt to show them as a "single composition.” This project is based on Karjoo-Ravary&#39;s research in the following article, published by the Journal of Sufi Studies. <a href="https://drive.google.com/file/d/1k_xrmlNTHfupOqN62BMWAlqGPwFDBcV-/view" target="_blank">(“Mapping the Unseen: Ibn al-‘Arabi’s Maps in al-Futūḥāt al-Makkiyya,” in Journal of Sufi Studies.)</a><br><br>Design and coding:<br><a href="https://www.sinafakour.com/" target="_blank">Sina Fakour</a><br><br>(Scroll Down)</span></p>';
};


let active = false;


document.getElementById("zoomin").onclick = function(){
    
    let toggle = document.querySelector('.zoomin')
    active = !active
    if (active) {
        
        toggle.classList.add('active')
        if(window.innerHeight > window.innerWidth){
            camera.fov = 35;
            camera.updateProjectionMatrix();
        }else{
            camera.fov = 20;
            camera.updateProjectionMatrix();
        };
        
    } else {
        toggle.classList.remove('active')
        if(window.innerHeight > window.innerWidth){
            camera.fov = 50;
            camera.updateProjectionMatrix();
        }else{
            camera.fov = 30;
            camera.updateProjectionMatrix();
        };
    }
     
};






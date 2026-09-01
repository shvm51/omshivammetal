/** Foundry Monolith style: each cast ingot receives direct deterministic transforms from the shared scroll-state source. */
// Design note: physical stack motion with bright silver cast-metal material for the light aluminium hero.
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { applyIngotTransform, type IngotStackItem } from "./stacking";

function createLongCastIngotGeometry() {
  const length=2.48,height=.48,width=.82,topLength=2.14,topWidth=.64;
  const l=length/2,h=height/2,w=width/2,tl=topLength/2,tw=topWidth/2;
  const vertices=new Float32Array([-l,-h,-w,l,-h,-w,l,-h,w,-l,-h,w,-tl,h,-tw,tl,h,-tw,tl,h,tw,-tl,h,tw]);
  const indices=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0];
  const geometry=new THREE.BufferGeometry(); geometry.setAttribute("position",new THREE.BufferAttribute(vertices,3)); geometry.setIndex(indices); geometry.computeVertexNormals(); return geometry;
}
const castIngotGeometry=createLongCastIngotGeometry();

export function Ingot({ item, progress }: { item: IngotStackItem; progress: React.MutableRefObject<number> }) {
  const group=useRef<THREE.Group>(null);
  useFrame(()=>{if(group.current)applyIngotTransform(group.current,item,progress.current);});
  return <group ref={group} position={item.original.position} rotation={item.original.rotation}>
    <mesh geometry={castIngotGeometry} castShadow receiveShadow><meshPhysicalMaterial color={item.id%3===0?"#fbfdfd":"#f1f6f7"} metalness={.88} roughness={.4+(item.id%3)*.02} clearcoat={.04} clearcoatRoughness={.4} reflectivity={.7} emissive="#b9c9cb" emissiveIntensity={.16} /></mesh>
    <mesh position={[0,.243,0]}><boxGeometry args={[1.9,.016,.44]} /><meshStandardMaterial color="#e2ebed" metalness={.78} roughness={.36} /></mesh><mesh position={[0,.254,0]}><boxGeometry args={[.98,.009,.13]} /><meshStandardMaterial color="#fafcfc" metalness={.7} roughness={.3} /></mesh><lineSegments><edgesGeometry args={[castIngotGeometry,22]} /><lineBasicMaterial color="#ffffff" transparent opacity={.3} /></lineSegments>
  </group>;
}

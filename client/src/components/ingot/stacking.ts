/** Foundry Monolith style: deterministic stack math writes directly to mesh transforms for low-allocation, reversible scroll motion. */
import * as THREE from "three";

export type Vec3 = [number, number, number];
export type IngotTransform = { position: Vec3; rotation: Vec3; scale: Vec3 };
export type IngotStackItem = { id: number; layer: number; column: number; depth: number; motionOrder: number; original: IngotTransform };

export const INGOT_DIMENSIONS = { length: 2.48, height: 0.48, width: 0.82 };
export const GROUND_Y = 0;
const CONTACT_GAP = 0.012;
const layerLayout: readonly { x: number; z: number }[][] = [
  [{ x: -2.56, z: 0.24 }, { x: 0, z: 0.24 }, { x: 2.56, z: 0.24 }],
  [{ x: -1.28, z: -0.21 }, { x: 1.28, z: -0.21 }],
  [{ x: -2.56, z: 0.24 }, { x: 0, z: 0.24 }, { x: 2.56, z: 0.24 }],
  [{ x: -1.28, z: -0.21 }, { x: 1.28, z: -0.21 }],
];
const provisional = layerLayout.flatMap((row, layer) => row.map((slot, column) => ({ id: 0, layer, column, depth: slot.z, motionOrder: 0, original: { position: [slot.x, GROUND_Y + INGOT_DIMENSIONS.height / 2 + layer * (INGOT_DIMENSIONS.height + CONTACT_GAP), slot.z] as Vec3, rotation: [0,0,0] as Vec3, scale: [1,1,1] as Vec3 } })));
const sequence = [...provisional].sort((a,b) => b.layer-a.layer || b.column-a.column);
const orderByKey = new Map(sequence.map((item,index) => [`${item.layer}-${item.column}`,index]));
export const STACK_ITEMS: IngotStackItem[] = provisional.map((item,id) => ({ ...item, id, motionOrder: orderByKey.get(`${item.layer}-${item.column}`) ?? 0 }));

const clamp = (value:number) => Math.min(1,Math.max(0,value));
const smooth = (value:number,start:number,end:number) => { const t=clamp((value-start)/(end-start)); return t*t*(3-2*t); };
const mix = (a:number,b:number,t:number) => a+(b-a)*t;

export function applyIngotTransform(object: THREE.Object3D, item: IngotStackItem, progress: number) {
  const { position: original } = item.original;
  let x=original[0], y=original[1], z=original[2], rx=0, ry=0, rz=0;
  const start=.26+item.motionOrder*.022, end=.58+item.motionOrder*.022;
  const lift=smooth(progress,start,end);
  const side=item.column===0?-1:item.column===2?1:item.id%2===0?-1:1;
  const depthDirection=item.depth>=0?1:-1;
  x=mix(x,x+side*(.58+item.layer*.08),lift);
  y=mix(y,y+.34+item.layer*.14+item.motionOrder*.025,lift);
  z=mix(z,z+depthDirection*(.74+item.layer*.12),lift);
  rx=.025*lift; ry=side*.07*lift; rz=depthDirection*.018*lift;
  if(progress>.58){
    const formation=smooth(progress,.58,.76);
    const column=item.motionOrder%4, row=Math.floor(item.motionOrder/4);
    x=mix(x,(column-1.5)*2.15,formation); y=mix(y,1.15+row*.86,formation); z=mix(z,-1.9-row*.45,formation); ry=mix(ry,(column-1.5)*.045,formation); rx=mix(rx,0,formation); rz=mix(rz,0,formation);
  }
  if(progress>.76){
    const reassemble=smooth(progress,.76,.98);
    x=mix(x,original[0],reassemble); y=mix(y,original[1],reassemble); z=mix(z,original[2],reassemble); rx=mix(rx,0,reassemble); ry=mix(ry,0,reassemble); rz=mix(rz,0,reassemble);
  }
  object.position.set(x,y,z); object.rotation.set(rx,ry,rz); object.scale.set(1,1,1);
}

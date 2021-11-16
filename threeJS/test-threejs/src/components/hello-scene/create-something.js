import { 
  Mesh, 
  MeshPhongMaterial, 
  Object3D, 
  PointLight, 
  SphereBufferGeometry 
} from 'three'

// 创建一个球体
const sphere = new SphereBufferGeometry(1, 6, 6)

// 创建太阳
const sunMaterial = new MeshPhongMaterial({ emissive: 0xFFFF00 })
const sunMesh = new Mesh(sphere, sunMaterial)
sunMesh.scale.set(4, 4, 4) // 将球体扩大4倍

// 创建地球
const earthMaterial = new MeshPhongMaterial({ emissive: 0x112244, color: 0x2233FF })
const earthMesh = new Mesh(sphere, earthMaterial)

// 创建月球
const moonMaterial = new MeshPhongMaterial({ emissive: 0x222222, color: 0x888888 })
const moonMesh = new Mesh(sphere, moonMaterial)
moonMesh.scale.set(0.5, 0.5, 0.5)

// 创建一个3D空间装月球
export const moonOribit = new Object3D()
moonOribit.position.x = 2
moonOribit.add(moonMesh)

// 创建一个3D空间装地球
export const earthOribit = new Object3D()
earthOribit.position.x = 10
earthOribit.add(earthMesh)
earthOribit.add(moonOribit)

// 创建一个3D空间装太阳
export const sunOribit = new Object3D()
sunOribit.add(sunMesh)
sunOribit.add(earthOribit)

// 创建光源
export const pointLight = new PointLight(0xFFFFFF, 3)

export default {}

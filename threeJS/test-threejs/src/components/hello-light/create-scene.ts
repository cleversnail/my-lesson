import * as Three from 'three'

export enum MaterialType {
  MESH_PHONE_MATERIAL = 'MESH_PHONE_MATERIAL',
  MESH_STANDARD_MATERIAL = 'MESH_STANDARD_MATERIAL'
}

const createScene: (type?: keyof typeof MaterialType) => Three.Scene = (type = MaterialType.MESH_PHONE_MATERIAL) => {
  const scene = new Three.Scene()
  
  const planeSize = 40
  // 纹理加载器
  const loader = new Three.TextureLoader()
  const texture = loader.load(require('@/assets/imgs/1.jpeg').default)
  texture.wrapS = Three.RepeatWrapping
  texture.wrapT = Three.RepeatWrapping
  texture.magFilter = Three.NearestFilter
  texture.repeat.set(planeSize / 2, planeSize / 2)

  let plantMat: Three.Material
  let cubeMat: Three.Material
  let sphereMat: Three.Material

  // 针对平面光
  switch (type) {
    case MaterialType.MESH_STANDARD_MATERIAL:
      plantMat = new Three.MeshStandardMaterial({
        map: texture,
        side: Three.DoubleSide
      })
      cubeMat = new Three.MeshStandardMaterial({ color: '#8AC' })
      sphereMat = new Three.MeshStandardMaterial({ color: '#CA8' })
      break
    default: 
      plantMat = new Three.MeshPhongMaterial({
        map: texture,
        side: Three.DoubleSide
      })
      cubeMat = new Three.MeshPhongMaterial({ color: '#8AC' })
      sphereMat = new Three.MeshPhongMaterial({ color: '#CA8' })
  }

  const planegeo = new Three.PlaneBufferGeometry(planeSize, planeSize)
  const mesh = new Three.Mesh(planegeo, plantMat)
  mesh.position.x = Math.PI * -0.5
  scene.add(mesh)

  const cubeGeo = new Three.BoxBufferGeometry(4, 4, 4)
  const cubeMesh = new Three.Mesh(cubeGeo, cubeMat)
  cubeMesh.position.set(5, 2.5, 0)
  scene.add(cubeMesh)

  const sphereGeo = new Three.SphereBufferGeometry(3, 32, 16)
  const sphereMesh = new Three.Mesh(sphereGeo, sphereMat)
  sphereMesh.position.set(-4, 5, 0)
  scene.add(sphereMesh)
  return scene

}

export default createScene
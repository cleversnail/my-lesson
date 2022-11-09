<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

const container = ref(null)
// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
// 创建镜头
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 2
// 创建场景
const scene = new THREE.Scene()


// // 立方体
// const geometry = new THREE.BoxGeometry(10, 10, 10)
// // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// // const cube = new THREE.Mesh(geometry, material)
// // scene.add(cube)
// let arr = ['4_l', '4_r', '4_u', '4_d', '4_b', '4_f']
// let boxMaterials = []
// arr.forEach(item => {
//   // 纹理加载
//   let texture = new THREE.TextureLoader().load(`./imgs/living/${item}.jpg`)
//   if (item === '4_u' || item === '4_d') {
//     texture.rotation = Math.PI
//     texture.center = new THREE.Vector2(0.5, 0.5)
//     boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }))
//   } else {
//     boxMaterials.push(new THREE.MeshBasicMaterial({ map: texture }))
//   }
// })
// const cube = new THREE.Mesh(geometry, boxMaterials)
// cube.geometry.scale(1, 1, -1)
// scene.add(cube)



// 球体
const geometry = new THREE.SphereGeometry(5, 32, 32)
const loader = new RGBELoader()
loader.load('./imgs/hdr/living.hdr', (texture) => {
  const material = new THREE.MeshBasicMaterial({ map: texture })
  const cube = new THREE.Mesh(geometry, material)
  cube.geometry.scale(1, 1, -1)
  scene.add(cube)
})




const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

onMounted(() => {
  const controls = new OrbitControls(camera, container.value)
  controls.enableDamping = true
  container.value.appendChild(renderer.domElement)
  render()
})
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.container{
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
}
</style>
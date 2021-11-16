import { useRef, useEffect, useCallback } from 'react'
import './index.css'
import * as Three from 'three'

import myBox from './MyBox'
import myCircle from './MyCircle'
import myWireframe from './my-wireframe'

const meshArr: (Three.Mesh | Three.LineSegments)[] = []

// 创建随机色材料
export const createMaterial = () => { 
  const material = new Three.MeshPhongMaterial({ side: Three.DoubleSide })
  const hue = Math.floor(Math.random() * 100) / 100  // 随机的色相
  const staturation = 1 // 饱和度
  const luminace = 0.5 // 亮度
  material.color.setHSL(hue, staturation, luminace)
  return material
}

const HelloPrimitives = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cameraRef = useRef<Three.PerspectiveCamera | null>(null)
  const rendererRef = useRef<Three.WebGLRenderer | null>(null)

  // 初始化舞台
  const createInit = useCallback(
    () => { 
      // 初始化场景
      const scene = new Three.Scene()
      scene.background = new Three.Color(0xAAAAAA)

      // 初始化镜头
      const camera = new Three.PerspectiveCamera(40, 2, 0.1, 1000)
      camera.position.z = 120
      cameraRef.current = camera

      // 初始化渲染器
      const renderer = new Three.WebGLRenderer({ canvas: canvasRef.current as HTMLCanvasElement})
      rendererRef.current = renderer

      // 添加2束光
      const light1 = new Three.DirectionalLight(0xFFFFFF, 1)
      light1.position.set(-1, 2, 4)
      scene.add(light1)

      const light2 = new Three.DirectionalLight(0xFFFFFF, 1)
      light1.position.set(1, -2, -4)
      scene.add(light2)

      // 获得各个类型的图元实例，集中整合
      const solidPrimitivesArr: Three.BufferGeometry[] = []
      solidPrimitivesArr.push(myBox, myCircle, myWireframe)

      // 将各个图元都添加进网格
      solidPrimitivesArr.map((item) => {
        const material = createMaterial() 
        const mesh = new Three.Mesh(item, material)
        meshArr.push(mesh)
      })

      // 

      // 定义物体在画面中显示的网格布局
      const eachRow = 5 // 每一行显示5个
      const spread = 15 // 行高和列宽

      // 配置每个图元实例，添加到场景中
      meshArr.map((mesh, index) => {
        const row = Math.floor(index / eachRow)
        const column = index % eachRow 

        mesh.position.x = (column - 2) * spread
        mesh.position.y = (2 - row) * spread

        scene.add(mesh)
      })

      // 添加自动旋转
      const render = (time: number) => {
        time = time * 0.001
        meshArr.map(item => {
          item.rotation.x = time
          item.rotation.y = time
        })
        renderer.render(scene, camera)
        window.requestAnimationFrame(render)
      }

      const handleResize = () => {
        const canvas = renderer.domElement // 获取canvas
        camera.aspect = canvas.clientWidth / canvas.clientHeight // 设置镜头的宽高比
        camera.updateProjectionMatrix() // 通知镜头更新视椎
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
      }
      handleResize()

      window.requestAnimationFrame(render) // render(16.7)
    },
    [canvasRef]
  )

  useEffect(() => {
    createInit()
  }, [canvasRef, createInit])
  return (
    <canvas ref={canvasRef} className="full-screen"></canvas>
  )
}

export default HelloPrimitives
import { useRef, useEffect } from "react";
import * as Three from 'three'
import './index.css'

import { mesh } from './create-material'

const HelloMaterial = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<Three.WebGLRenderer | null>(null)
  const cameraRef = useRef<Three.PerspectiveCamera | null>(null)
  const sceneRef = useRef<Three.Scene | null>(null)

  useEffect(() => {
    //创建渲染器
    const renderer = new Three.WebGLRenderer({ canvas: canvasRef.current as HTMLCanvasElement })
    rendererRef.current = renderer

    //创建镜头
    const camera = new Three.PerspectiveCamera(40, 2, 1, 100)
    camera.position.set(0, 10, 0)
    camera.up.set(0, 0, 1)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    //创建场景
    const scene = new Three.Scene()
    scene.background = new Three.Color(0xFFFFFF)
    sceneRef.current = scene

    // 创建光源
    const light = new Three.DirectionalLight(0xFFFFFF, 1)
    light.position.set(-1, 2, 4)
    scene.add(light)


    scene.add(mesh)

    // 添加自动旋转动画
    const render = (time: number) => {
      time = time * 0.001
      mesh.position.x = time
      mesh.position.y = time
      renderer.render(scene, camera)
      window.requestAnimationFrame(render)
    }

    // 提高清晰度
    const handleResize = () => {
      const canvas = renderer.domElement // 获取canvas
      camera.aspect = canvas.clientWidth / canvas.clientHeight // 设置镜头的宽高比
      camera.updateProjectionMatrix() // 通知镜头更新视椎
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
    }
    handleResize()


    window.requestAnimationFrame(render)
    // renderer.render(scene, camera)
    
    

    

    

  }, [canvasRef])

  return (
    <canvas ref={canvasRef} className='full-screen' />
  )
}

export default HelloMaterial
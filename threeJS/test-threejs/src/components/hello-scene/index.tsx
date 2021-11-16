import { useRef, useEffect } from 'react'
import * as Three from 'three'
import './index.css'
import { sunOribit, earthOribit, moonOribit, pointLight } from './create-something'

const nodeArr = [sunOribit, earthOribit, moonOribit] //太阳、地球、月亮对应的网格


const HelloScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<Three.WebGLRenderer | null>(null)
  const cameraRef = useRef<Three.PerspectiveCamera | null>(null)
  const sceneRef = useRef<Three.Scene | null>(null)

  useEffect(() => {
    //创建渲染器
    const renderer = new Three.WebGLRenderer({ canvas: canvasRef.current as HTMLCanvasElement })
    rendererRef.current = renderer

    //创建镜头
    const camera = new Three.PerspectiveCamera(40, 2, 0.1, 1000)
    camera.position.set(0, 50, 0)
    camera.up.set(0, 0, 1)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    //创建场景
    const scene = new Three.Scene()
    scene.background = new Three.Color(0x111111)
    sceneRef.current = scene

    // 把太阳系、灯光添加到场景中
    scene.add(sunOribit)
    scene.add(pointLight)

    // 添加自动旋转动画
    const render = (time: number) => {
      time = time * 0.001
      nodeArr.map(item => {
        item.rotation.y = time
      })
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

  }, [canvasRef])
  

  return (
    <canvas ref={canvasRef} className='full-screen' />
  )
}

export default HelloScene
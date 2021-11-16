import { useEffect, useRef } from 'react'
import * as Three from 'three'

import './index.css'
import imgSrc1 from '@/assets/imgs/1.jpg'
import imgSrc2 from '@/assets/imgs/2.jpg'
import imgSrc3 from '@/assets/imgs/3.jpg'
import imgSrc4 from '@/assets/imgs/4.jpg'
import imgSrc5 from '@/assets/imgs/5.jpg'
import imgSrc6 from '@/assets/imgs/6.jpg'

const HelloTexture = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    
    // 创建渲染器
    const renderer = new Three.WebGLRenderer({ canvas: canvasRef.current as HTMLCanvasElement })

    // 创建镜头
    const camera = new Three.PerspectiveCamera(40, 2, 0.1, 1000)
    camera.position.set(0, 0, 40)

    // 创建场景
    const sence = new Three.Scene()
    sence.background = new Three.Color(0xcccccc)

    // 创建一个纹理加载器
    const loader = new Three.TextureLoader()

    const imgSrcArr = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6]
    // 创建一个材质
    const materialArr: Three.MeshBasicMaterial[] = []
    imgSrcArr.forEach((src) => {
      materialArr.push(
        new Three.MeshBasicMaterial({
          map: loader.load(src)
        })
      )
    })
    // const material = new Three.MeshBasicMaterial({
    //   map: loader.load(imgSrc)
    // })

    const box = new Three.BoxBufferGeometry(8, 8, 8)
    const mesh = new Three.Mesh(box, materialArr)

    sence.add(mesh)

    // 自动旋转
    const render = (time: number) => {
      time = time * 0.001
      mesh.rotation.x = time
      mesh.rotation.y = time
      renderer.render(sence, camera)
      window.requestAnimationFrame(render)
    }

    // 清晰度
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
    <canvas className="full-screen" ref={canvasRef}></canvas>
  )
}

export default HelloTexture
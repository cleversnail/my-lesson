import { 
  SphereGeometry, 
  PlaneGeometry,
  BoxGeometry,
  PointsMaterial, 
  MeshPhysicalMaterial,
  ShadowMaterial,
  Points, 
  LineBasicMaterial,
  Line,
  Mesh
} from 'three'

const geometry = new SphereGeometry(1, 50, 50); //创建一个球体几何对象

// 创建一个点材质对象
const material = new PointsMaterial({
  color: 0x0000ff, //颜色
  size: 1, //点渲染尺寸
});

// 直线基础材质对象
var material2 = new LineBasicMaterial({
  color: 0x0000ff
});

// 面基础材质
const material3 = new MeshPhysicalMaterial({
  color: 0x0000ff
})

// 阴影材质


//点模型对象  参数：几何体  点材质
export const point = new Points(geometry, material);

export const line = new Line(geometry, material2);

export const mesh = new Mesh(geometry, material3);





// 阴影材质
var planeGeometry = new PlaneGeometry( 10, 10 );
planeGeometry.rotateX( - Math.PI / 2 );

var planeMaterial = new ShadowMaterial();
planeMaterial.opacity = 0;

var shadow = new Mesh( geometry, planeMaterial );
shadow.position.y = -200;
shadow.receiveShadow = true;

export {shadow}
 


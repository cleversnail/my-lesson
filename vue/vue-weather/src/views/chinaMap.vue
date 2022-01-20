<template>
  <!-- 用pc端 -->
  <div class="map">
    <div class="flying-line" ref="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import jsonData from "@/map/chain.json"; // 下载地址 http://datav.aliyun.com/portal/school/atlas/area_selector
export default {
  data() {
    return {
      coord: [
        { name: "北京市", value: [116.405285, 39.904989] },
        { name: "河南省", value: [113.665412, 34.757975] },
        { name: "江西省", value: [115.892151, 28.676493] },
        { name: "四川省", value: [104.065735, 30.659462] },
      ],
      linesCoord: [
        [
          [115.892151, 28.676493],
          [116.405285, 39.904989],
        ],
        [
          [104.065735, 30.659462],
          [113.665412, 34.757975],
        ],
      ],
    };
  },
  created() {
    console.log(jsonData);
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // const lines_coord = [];
      // this.coord.forEach((v, index) => {
      //   index > 0 &&
      //     lines_coord.push({
      //       coords: [v.value, this.coord[0].value],
      //     });
      // });
      // console.log(lines_coord);
      // 先显示中国地图
      echarts.registerMap("mapJson", jsonData);
      // 再在地图上出现飞线
      let myChart = echarts.init(this.$refs.main);
      let option = {
        geo: {
          name: "地图",
          map: "mapJson",
          type: "map",
          zlevel: 0,
          layoutCenter: ["50%", "50%"],
          layoutSize: "90%",
          label: {
            show: true,
            fontSize: 10,
            color: "#43D0D6",
          },
          itemStyle: {},
          emphasis: {
            label: {
              show: true,
            },
            itemStyle: {
              areaColor: "#ffb800",
            },
          },
        },
        series: [
          {
            // effectScatter画散点【起点】
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            symbolSize: 6,
            rippleEffect: {
              period: 3,
              brushType: "stroke",
              scale: 3,
            },
            itemStyle: {
              color: "#FFB800",
              opacity: 0.7,
            },
            data: this.coord.slice(2),
          },
          {
            // 画中心散点【终点】,这里是为了区分起点终点不同样式，所以分开写，如果二者样式一样那就直接合在一起写就好了
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            symbolSize: 10,
            rippleEffect: {
              period: 4,
              brushType: "stroke",
              scale: 4,
            },
            itemStyle: {
              color: "#FF5722",
              opacity: 1,
            },
            data: this.coord.slice(0, 2),
          },
          //这里设了2条不同效果的飞线是为了将他们叠加起来，满足飞机后面白色的喷气动画效果
          {
            // lines画线
            type: "lines",
            coordinateSystem: "geo",
            zlevel: 15,
            symbolSize: 12,
            effect: {
              show: true,
              period: 5, //箭头指向速度，值越小速度越快
              trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 8, //图标大小
              color: "#01AAED",
            },
            itemStyle: {
              normal: {
                borderWidth: 1,
                lineStyle: {
                  type: "solid",
                  shadowBlur: 10,
                },
              },
            },
            lineStyle: {
              normal: {
                width: 1.2,
                opacity: 0.6,
                curveness: 0.2,
                color: "#FFB800",
              },
            },
            data: this.linesCoord,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less">
.flying-line {
  width: 1000px;
  height: 1000px;
  border: 1px solid #ddd;
}
</style>
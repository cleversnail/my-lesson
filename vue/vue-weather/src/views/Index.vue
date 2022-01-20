<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="city" @click="changeCity">切换城市</div>
    </div>

    <div class="city-info">
      <p class="city">{{ mapData.city }}</p>
      <p class="weather">{{ mapData.weather }}</p>
      <h2 class="temp">
        <em>{{ mapData.temperature }}</em
        >℃
      </h2>
      <div class="detail">
        <span>风力: {{ mapData.windPower }}</span> |
        <span>风向: {{ mapData.windDirection }}</span> |
        <span>空气湿度: {{ mapData.humidity }}%</span>
      </div>
    </div>

    <div class="future" v-if="futureMapData.length > 0">
      <div class="group">
        明天:
        <span class="tm"
          >白天: {{ futureMapData[1].dayTemp }}℃
          {{ futureMapData[1].dayWeather }} {{ futureMapData[1].dayWindDir }}
          {{ futureMapData[1].dayWindPower }}</span
        >
        <span class="tm"
          >夜间: {{ futureMapData[1].nightTemp }}℃
          {{ futureMapData[1].nightWeather }}
          {{ futureMapData[1].nightWindDir }}
          {{ futureMapData[1].nightWindPower }}</span
        >
      </div>
      <div class="group">
        后天:
        <span class="tm"
          >白天: {{ futureMapData[2].dayTemp }}℃
          {{ futureMapData[2].dayWeather }} {{ futureMapData[2].dayWindDir }}
          {{ futureMapData[2].dayWindPower }}</span
        >
        <span class="tm"
          >夜间: {{ futureMapData[2].nightTemp }}℃
          {{ futureMapData[2].nightWeather }}
          {{ futureMapData[2].nightWindDir }}
          {{ futureMapData[2].nightWindPower }}</span
        >
      </div>
    </div>

    <div class="echart-container" ref="echartContainer"></div>

    <van-action-sheet v-model="show">
      <div class="area">
        <van-area title="地区" :area-list="areaList" :columns-num="2" @confirm="selectCity" @cancel="cancel"/>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
// import AMapLoader from "@amap/amap-jsapi-loader";
import * as echarts from "echarts";
import { areaList } from '@vant/area-data';
export default {
  data() {
    return {
      localTime: "",
      mapData: {},
      futureMapData: [],
      seriesData: [],
      areaList: areaList,
      show: false
    };
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);

    this.initMap();
  },
  methods: {
    changeCity() {
      this.show = true
    },
    cancel() {
      this.show = false
    },
    selectCity(val) {
      console.log(val);
      this.seriesData = []
      this.getWeatherData(val[1].name);
      this.show = false
    },
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      let that = this;
      // 获取定位
      AMap.plugin("AMap.CitySearch", function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            // console.log(result);
            // 根据城市获取天气
            that.getWeatherData(result.city);
          }
        });
      });
    },
    // 获取天气
    getWeatherData(cityName) {
      let that = this;
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();
        // 今天的天气
        weather.getLive(cityName, function (err, data) {
          // console.log(data);
          that.mapData = data;
        });

        //执行实时天气信息查询
        weather.getForecast(cityName, function (err, data) {
          console.log(err, data);
          that.futureMapData = data.forecasts;

          data.forecasts.forEach(item => {
            that.seriesData.push(item.dayTemp)
          });

          // 生成图表
          that.initEchart()
        });
      });
    },
    initEchart() {
      let myChart = echarts.init(this.$refs.echartContainer);
      let option = {
        xAxis: {
          type: "category",
          data: ['今天', '明天', '后天', '三天后'],
          lineStyle: {
            color: '#fff'
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          show: false
        },
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            // console.log(params);
            var relVal = params[0].name
            for (let item of params) {
              relVal += item.value + '℃'
            }
            return relVal
          }
        },
        series: [
          {
            data: this.seriesData,
            type: "line",
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less">
.container {
  min-height: 100vh;
  background: #000;
  opacity: 0.7;
  color: #fff;
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .city-info {
    text-align: center;
    .temp {
      font-size: 26px;
      em {
        font-size: 34px;
        font-style: normal;
      }
    }
  }
  .future {
    margin-top: 30px;
    padding: 0 10px;
    .group {
      height: 44px;
      line-height: 44px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.3);
      color: rgba(16, 16, 16, 1);
      font-size: 13px;
      margin-bottom: 10px;
      padding: 0 10px;
      .tm {
        color: #fff;
      }
    }
  }
  .echart-container {
    width: 100%;
    height: 50vh;
  }
}
</style>
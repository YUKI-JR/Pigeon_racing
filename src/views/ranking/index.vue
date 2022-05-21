<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="dashboard-container">
          <el-descriptions
            class="margin-top"
            style="width: 40vw"
            title="飞行信息"
            :column="2"
            border
          >
            <el-descriptions-item :span="2">
              <template slot="label">
                <i class="el-icon-tickets"></i>
                飞行名称
              </template>
              {{ flightData.name }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                放飞地点
              </template>
              {{ flightData.locationName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-time"></i>
                放飞时间
              </template>
              {{
                !(Number(flightData.startTime) > 1)
                  ? ""
                  : moment(Number(flightData.startTime)).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )
              }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-trophy"></i>
                放飞类型
              </template>
              {{ ["训练", "比赛"][flightData.type] }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-sunny"></i>
                天气
              </template>
              {{ flightData.weather }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-place"></i>
                经度
              </template>
              {{ flightData.longitude }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-place"></i>
                纬度
              </template>
              {{ flightData.latitude }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-wind-power"></i>
                风向
              </template>
              {{
                ["北", "东北", "东", "东南", "南", "西南", "西", "西北"][
                  flightData.windDirection
                ]
              }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-partly-cloudy"></i>
                风速
              </template>
              {{ flightData.windSpeed }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-stopwatch"></i>
                湿度
              </template>
              {{ flightData.humidity }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-odometer"></i>
                温度
              </template>
              {{ flightData.temperature }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-pie-chart"></i>
                空距
              </template>
              {{ flightData.distance }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-timer"></i>
                大气压
              </template>
              {{ flightData.atmospherePressure }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="table">
          <div style="margin-bottom: 20px">
            <span style="font-size: 16px; font-weight: 700; margin-bottom: 20px"
              >排名</span
            >
          </div>
          <el-table :data="tableData" style="width: 100%" height="70vh">
            <el-table-column fixed prop="number" label="环号" width="150">
              <template slot-scope="scope">
                <a @click="record(scope.row.number)" style="color: #409eff">{{
                  scope.row.number
                }}</a></template
              >
            </el-table-column>
            <el-table-column prop="duration" label="耗时" width="120">
              <template slot-scope="scope">{{
                parseInt(scope.row.duration / 3600) +
                ":" +
                parseInt((scope.row.duration % 3600) / 60) +
                ":" +
                parseInt((scope.row.duration % 3600) % 60)
              }}</template>
            </el-table-column>
            <el-table-column prop="speed" label="速度" width="120">
              <template slot-scope="scope">{{
                scope.row.speed.toFixed(2)
              }}</template>
            </el-table-column>
            <el-table-column prop="timestamp" label="到达时间" width="200">
              <template slot-scope="scope">{{
                moment(Number(scope.row.timestamp)).format(
                  "YYYY-MM-DD HH:mm:ss"
                )
              }}</template>
            </el-table-column>
            <el-table-column prop="ranking" label="排名"> </el-table-column>
          </el-table></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import { getOne } from "@/api/table";
import { getRanking } from "@/api/table";
import { flightFinish } from "@/api/table";
import moment from "moment";
export default {
  data() {
    return {
      id: null,
      moment,
      flightData: {
        startTime: "",
        locationName: "",
        longitude: null,
        latitude: null,
        distance: null,
        weather: "",
        windDirection: null,
        windSpeed: null,
        temperature: null,
        atmospherePressure: null,
        humidity: null,
        name: "",
        type: "",
      },
      tableData: [],
    };
  },
  methods: {
    // 获取当前飞行
    getCurrent() {
      getOne(this.$route.params.id).then((res) => {
        console.log(res);
        this.flightData = res.data;
      });
    },
    getRank() {
      getRanking(this.$route.params.id).then((res) => {
        this.tableData = res.data;
      });
    },
    record(number) {
      this.$router.push({
        name: "Record",
        params: {
          number: number,
        },
      });
    },
    // 结束飞行
    finish() {
      flightFinish().then(() => {
        this.$message.success("飞行已结束！");
        this.flightData = {};
      });
    },
  },
  mounted() {
    this.getCurrent();
    this.getRank();
    this.id = this.$route.params.id;
    console.log(this.id);
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.table {
  margin: 30px;
  // width: 45vw;
}
</style>

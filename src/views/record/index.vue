<template>
  <div class="p_table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="飞行名称"></el-table-column>
      <el-table-column prop="locationName" label="地点名称"></el-table-column>
      <el-table-column prop="startTime" label="放飞时间">
        <template slot-scope="scope">{{
          moment(Number(scope.row.startTime)).format("YYYY-MM-DD HH:mm:ss")
        }}</template>
      </el-table-column>
      <el-table-column
        prop="distance"
        label="空距"
        width="80"
      ></el-table-column>
      <el-table-column
        prop="longitude"
        label="经度"
        width="80"
      ></el-table-column>
      <el-table-column
        prop="latitude"
        label="纬度"
        width="80"
      ></el-table-column>
      <el-table-column prop="type" label="类型" width="80">
        <template slot-scope="scope">{{
          scope.row.type === 0 ? "训练" : "比赛"
        }}</template>
      </el-table-column>
      <el-table-column
        prop="atmospherePressure"
        label="大气压"
        width="80"
      ></el-table-column>
      <el-table-column
        prop="temperature"
        label="温度"
        width="80"
      ></el-table-column>
      <el-table-column prop="weather" label="天气" width="80"></el-table-column>
      <el-table-column
        prop="humidity"
        label="湿度"
        width="80"
      ></el-table-column>
      <el-table-column prop="speed" label="速度" width="80">
        <template slot-scope="scope">{{
          scope.row.speed.toFixed(2)
        }}</template></el-table-column
      >
      <el-table-column prop="duration" label="耗时" width="80">
        <template slot-scope="scope">{{
          parseInt(scope.row.duration / 3600) +
          ":" +
          parseInt((scope.row.duration % 3600) / 60) +
          ":" +
          parseInt((scope.row.duration % 3600) % 60)
        }}</template></el-table-column
      >
      <el-table-column prop="windDirection" label="风向" width="80">
        <template slot-scope="scope">
          {{
            ["北", "东北", "东", "东南", "南", "西南", "西", "西北"][
              scope.row.windDirection
            ]
          }}
        </template>
      </el-table-column>
      <el-table-column
        prop="windSpeed"
        label="风速"
        width="80"
      ></el-table-column>
      <el-table-column prop="ranking" label="排名" width="80"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getFlightRecord } from "@/api/table";
import moment from "moment";
export default {
  data() {
    return {
      moment,
      number: null,
      tableData: [],
    };
  },
  mounted() {
    this.number = this.$route.params.number;
    this.record();
  },
  methods: {
    //   查看赛鸽飞行记录
    record() {
      getFlightRecord(this.number).then((res) => {
        console.log(res);
        this.tableData = res.data;
      });
    },
  },
};
</script>

<style scoped></style>

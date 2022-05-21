<template>
  <div>
    <div class="query_head">
      <el-form :model="p_form" ref="p_form">
        <div style="width: 95%; margin: 2vh auto">
          <el-input
            v-model="p_form.locationName"
            size="normal"
            placeholder="地点名称"
            clearable
            style="width: 10%"
          ></el-input>
          <el-input
            v-model="p_form.maxDistance"
            size="normal"
            placeholder="最大空距"
            clearable
            style="width: 10%"
          ></el-input>
          <el-input
            v-model="p_form.minDistance"
            size="normal"
            placeholder="最小空距"
            clearable
            style="width: 10%"
          ></el-input>
          <el-input
            v-model="p_form.weather"
            size="normal"
            placeholder="天气"
            clearable
            style="width: 10%"
          ></el-input>
          <el-date-picker
            type="date"
            placeholder="起始时间"
            v-model="p_form.startTime"
            value-format="timestamp"
            style="width: 10%"
          ></el-date-picker>
          <el-date-picker
            type="date"
            placeholder="结束时间"
            v-model="p_form.endTime"
            value-format="timestamp"
            style="width: 10%"
          ></el-date-picker>
          <el-button
            type="primary"
            size="default"
            icon="el-icon-search"
            @click="getAll"
            style="float: right"
            >查询</el-button
          >
        </div>
        <div class="query_add" style="width: 95%; margin: 0 auto">
          <el-button
            style="width: 10%; float: right"
            type="success"
            size="default"
            icon="el-icon-plus"
            @click="dialogAddgsVisible = true"
            >添加</el-button
          >
        </div>
      </el-form>
      <!-- 添加表单 -->
      <el-dialog
        title="添加飞行信息"
        width="30vw"
        :visible.sync="dialogAddgsVisible"
        @close="closeDialogAddgsVisible"
        :modal-append-to-body="false"
        center
      >
        <el-form
          :model="add_form"
          ref="add_form"
          label-width="6vw"
          style="width: 25vw"
        >
          <el-form-item label="放飞地点" prop="locationName">
            <el-input v-model="add_form.locationName" />
          </el-form-item>
          <el-form-item label="经度" prop="longitude">
            <el-input v-model="add_form.longitude" />
          </el-form-item>
          <el-form-item label="纬度" prop="latitude">
            <el-input v-model="add_form.latitude" />
          </el-form-item>
          <el-form-item label="空距" prop="distance">
            <el-input v-model="add_form.distance" />
          </el-form-item>

          <el-form-item label="天气" prop="weather">
            <el-input v-model="add_form.weather" />
          </el-form-item>

          <el-form-item label="风速" prop="windSpeed">
            <el-input v-model="add_form.windSpeed" />
          </el-form-item>

          <el-form-item label="温度" prop="temperature">
            <el-input v-model="add_form.temperature" />
          </el-form-item>

          <el-form-item label="大气压" prop="atmospherePressure">
            <el-input v-model="add_form.atmospherePressure" />
          </el-form-item>

          <el-form-item label="湿度" prop="humidity">
            <el-input v-model="add_form.humidity" />
          </el-form-item>
          <el-form-item label="飞行名称" prop="name">
            <el-input v-model="add_form.name" />
          </el-form-item>
          <el-form-item label="风向" prop="windDirection">
            <el-select
              v-model="add_form.windDirection"
              placeholder="选择风向"
              style="width: 30%"
            >
              <el-option label="北" :value="0"></el-option>
              <el-option label="东北" :value="1"></el-option>
              <el-option label="东" :value="2"></el-option>
              <el-option label="东南" :value="3"></el-option>
              <el-option label="南" :value="4"></el-option>
              <el-option label="西南" :value="5"></el-option>
              <el-option label="西" :value="6"></el-option>
              <el-option label="西北" :value="7"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-select
              v-model="add_form.type"
              placeholder="放飞类型"
              style="width: 30%"
            >
              <el-option label="训练" :value="0"></el-option>
              <el-option label="比赛" :value="1"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="放飞时间" prop="startTime">
            <el-date-picker
              type="datetime"
              placeholder="选择放飞时间"
              v-model="add_form.startTime"
              value-format="timestamp"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button @click="dialogAddgsVisible = false">取消</el-button>
            <el-button type="primary" @click="addOneSubmit('add_form')"
              >确定</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>

      <!-- 编辑表单 -->
      <el-dialog
        title="编辑赛鸽信息"
        width="30vw"
        :visible.sync="dialogEditVisible"
        @close="closeDialogEditVisible"
        :modal-append-to-body="false"
        center
      >
        <el-form
          :model="edit_form"
          ref="edit_form"
          label-width="6vw"
          style="width: 25vw"
        >
          <el-form-item label="放飞地点" prop="locationName">
            <el-input v-model="edit_form.locationName" />
          </el-form-item>
          <el-form-item label="经度" prop="longitude">
            <el-input v-model="edit_form.longitude" />
          </el-form-item>
          <el-form-item label="纬度" prop="latitude">
            <el-input v-model="edit_form.latitude" />
          </el-form-item>
          <el-form-item label="空距" prop="distance">
            <el-input v-model="edit_form.distance" />
          </el-form-item>

          <el-form-item label="天气" prop="weather">
            <el-input v-model="edit_form.weather" />
          </el-form-item>

          <el-form-item label="风速" prop="windSpeed">
            <el-input v-model="edit_form.windSpeed" />
          </el-form-item>

          <el-form-item label="温度" prop="temperature">
            <el-input v-model="edit_form.temperature" />
          </el-form-item>

          <el-form-item label="大气压" prop="atmospherePressure">
            <el-input v-model="edit_form.atmospherePressure" />
          </el-form-item>

          <el-form-item label="湿度" prop="humidity">
            <el-input v-model="edit_form.humidity" />
          </el-form-item>
          <el-form-item label="飞行名称" prop="name">
            <el-input v-model="edit_form.name" />
          </el-form-item>
          <el-form-item label="风向" prop="windDirection">
            <el-select
              v-model="edit_form.windDirection"
              placeholder="选择风向"
              style="width: 30%"
            >
              <el-option label="北" :value="0"></el-option>
              <el-option label="东北" :value="1"></el-option>
              <el-option label="东" :value="2"></el-option>
              <el-option label="东南" :value="3"></el-option>
              <el-option label="南" :value="4"></el-option>
              <el-option label="西南" :value="5"></el-option>
              <el-option label="西" :value="6"></el-option>
              <el-option label="西北" :value="7"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="放飞时间" prop="startTime">
            <el-date-picker
              type="datetime"
              placeholder="选择放飞时间"
              v-model="edit_form.startTime"
              value-format="timestamp"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button @click="editCancle">取消</el-button>
            <el-button type="primary" @click="editOneSubmit('edit_form')"
              >确定</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>

    <div class="p_table">
      <el-table :data="tableData" border style="width: 95%">
        <el-table-column prop="name" label="飞行名称"></el-table-column>
        <el-table-column prop="locationName" label="地点名称"></el-table-column>
        <el-table-column
          prop="startTime"
          label="放飞时间"
          :formatter="dateFormat"
        >
        </el-table-column>
        <el-table-column
          prop="distance"
          label="空距(KM)"
          width="100"
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
            ["训练", "比赛"][scope.row.type]
          }}</template>
        </el-table-column>
        <el-table-column
          prop="atmospherePressure"
          label="大气压(kPa)"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="temperature"
          label="温度(°C)"
          width="80"
        ></el-table-column>
        <el-table-column
          prop="weather"
          label="天气"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="humidity"
          label="湿度(%)"
          width="80"
        ></el-table-column>
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
          label="风速(m/s)"
          width="100"
        ></el-table-column>

        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button size="mini" @click="rank(scope.row.id)">排名</el-button>
            <el-button type="warning" size="mini" @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" size="mini" @click="del(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <nav style="text-align: center; margin: 3vh auto">
      <div class="pages">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[10, 30, 50, 100]"
            :page-size="10"
            layout="total,sizes, prev, pager, next"
            :total="totalElements"
          >
          </el-pagination>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {
  addOneFlight,
  getFlight,
  deleteOneFlight,
  editOneFlight,
} from "@/api/table";
import moment from "moment";

export default {
  data() {
    return {
      moment,
      tableData: [],
      dialogAddgsVisible: false,
      dialogEditVisible: false,
      currentPage2: 5,
      Loading: true,
      totalElements: null,
      // 查询表单
      p_form: {
        locationName: "",
        minDistance: "",
        maxDistance: "",
        weather: "",
        startTime: "",
        endTime: "",
      },
      // 增加表单
      add_form: {
        startTimme: "",
        locationName: "",
        longitude: null,
        latitude: null,
        distance: null,
        weather: null,
        windDirection: null,
        windSpeed: null,
        temperature: null,
        atmospherePressure: null,
        humidity: null,
        name: "",
        type: null,
      },
      // 编辑表单
      edit_form: {
        startTime: "",
        locationName: "",
        longitude: 0,
        latitude: 0,
        distance: 0,
        weather: 0,
        windDirection: 0,
        windSpeed: 0,
        temperature: 0,
        atmospherePressure: 0,
        humidity: 0,
      },
      pageAndSize: {
        page: 1,
        size: 10,
      },
      dialogVisible: false,
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    // 获取全部赛鸽信息
    getAll() {
      getFlight(this.p_form, this.pageAndSize)
        .then((res) => {
          console.log(res);
          this.tableData = res.data.dataList;
          this.totalElements = Number(res.data.totalElements);
        })
        .then(() => {
          this.$message.success("查询成功！");
        });
    },
    // 格式化时间戳
    dateFormat(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(Number(date)).format("YYYY-MM-DD HH:mm:ss");
    },
    // 编辑单条信息
    edit(row) {
      (this.dialogEditVisible = true),
        (this.edit_form = Object.assign({}, row));
    },

    // 获取排名
    rank(id) {
      this.$router.push({
        name: "Ranking",
        params: {
          id: id,
        },
      });
    },

    // 关闭编辑dialog
    closeDialogEditVisible() {
      (this.dialogAddgsVisible = false), (this.edit_from = {});
    },

    // 提交编辑表单
    editOneSubmit() {
      this.$refs.edit_form.validate((valid) => {
        if (valid) {
          editOneFlight(this.edit_form).then(() => {
            this.dialogEditVisible = false;
            this.$message.success("修改成功！");
            this.getAll();
          });
        } else {
          this.$message.error("请检查输入信息！");
          return false;
        }
      });
    },

    // 取消编辑
    editCancle() {
      this.dialogEditVisible = false;
    },
    // 关闭增加弹出框并清空
    closeDialogAddgsVisible() {
      (this.dialogAddgsVisible = false), (this.add_form = {});
    },

    // 确认添加表单
    addOneSubmit() {
      this.$refs.add_form.validate((valid) => {
        if (valid) {
          addOneFlight(this.add_form).then(() => {
            this.closeDialogAddgsVisible();
            this.$message.success("添加成功！");
            this.getAll();
          });
        } else {
          this.$message.error("请检查输入信息！");
          return false;
        }
      });
    },

    // 删除单条赛鸽信息
    del(id) {
      this.$confirm("此操作将删除该飞行信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteOneFlight(id).then((res) => {
            console.log(res);
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            setTimeout(this.getAll(), 2000);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 分页功能
    handleSizeChange(val) {
      this.pageAndSize.size = val;
      this.getAll();
    },
    handleCurrentChange(val) {
      this.pageAndSize.page = val;
      this.getAll();
    },
  },
};
</script>

<style scoped>
.query_head {
  margin: 0.5vh auto;
  justify-content: center;
}
.query_head .el-input,
.el-button,
.el-select {
  margin: 0.5vh 0.5vh;
}
.query_add,
.el-button {
  margin: 0.5vh 0.5vh;
}

.el-form-item__content {
  display: flex;
  justify-content: center;
}

.el-form-item__content .el-button {
  margin: 0 2vw;
}

.p_table {
  width: 100%;
}

.el-table {
  margin: 0 auto;
}
</style>

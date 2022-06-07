<template>
  <div>
    <div class="query_head">
      <el-form :model="p_form" ref="p_form">
        <div style="width: 95%; margin: 2vh auto">
          <el-input
            v-model="p_form.number"
            size="normal"
            placeholder="环号"
            clearable
            style="width: 10%"
          ></el-input>
          <el-select
            v-model="p_form.gender"
            placeholder="鸽子性别"
            style="width: 10%"
            clearable
          >
            <el-option label="雄" value="1"></el-option>
            <el-option label="雌" value="0"></el-option>
          </el-select>
          <el-button
            type="primary"
            size="default"
            icon="el-icon-search"
            @click="getAll"
            style="float: right"
            >查询</el-button
          >
        </div>
      </el-form>
    </div>

    <div class="p_table">
      <el-table :data="tableData" border style="width: 95%">
        <el-table-column prop="number" label="环号"> 
            <template slot-scope="scope">
            <a @click="toBreedPigeon(scope.row)" style="color: #409eff">
              {{ scope.row.number }}
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="gender" label="性别">
          <template slot-scope="scope">{{
            scope.row.gender === 0 ? "雌" : "雄"
          }}</template>
        </el-table-column>
        <el-table-column prop="point" label="种鸽积分">
          <template slot-scope="scope">{{
            scope.row.point == null ? "-" : scope.row.point
          }}</template>
        </el-table-column>
        <el-table-column prop="point" label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="del(scope.row.number)">删除</el-button>
            <el-button size="mini" @click="goToKids(scope.row)">子鸽信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getBreedPigeon } from "@/api/table";
import { deleteOnebreed } from "@/api/table";


export default {
  data() {
    return {
      tableData: [],
      Loading: true,
      // 查询表单
      p_form: {
        number: "",
        gender: "",
        point: false,
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
      getBreedPigeon().then((res) => {
        this.tableData = res.data;
        this.$message.success("查询成功！");
      });
    },

    // 删除种鸽信息
    del(id){
      this.$confirm("此操作将删除该飞行信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteOnebreed(id).then((res) => {
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

    // 跳转到子鸽页面
    goToKids(row) {
      if (row.gender == 1) {
        this.$router.push({
          name: "Table",
          params: {
            father: row.number,
          },
        });
      } else {
        this.$router.push({
          name: "Table",
          params: {
            mother: row.number,
          },
        });
      }
    },
    toBreedPigeon(row){
        if (row.gender == 1) {
        this.$router.push({
          name: "Table",
          params: {
            father: row.number,
          },
        });
      } else {
        this.$router.push({
          name: "Table",
          params: {
            mother: row.number,
          },
        });
      }
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

.el-table {
  margin: 0 auto;
}
</style>

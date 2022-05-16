<template>
  <div>
    <div class="query_head">
      <el-form id="aa" :model="p_form" ref="p_form">
        <el-input
          v-model="p_form.tag"
          size="normal"
          placeholder="电子脚环环号"
          clearable
          style="width: 12vw"
        ></el-input>
        <el-input
          v-model="p_form.number"
          size="normal"
          placeholder="环号"
          clearable
          style="width: 12vw"
        ></el-input>
        <el-select
          v-model="p_form.gender"
          placeholder="鸽子性别"
          style="width: 12vw"
          clearable
        >
          <el-option label="公" value="1"></el-option>
          <el-option label="母" value="0"></el-option>
        </el-select>
        <el-input
          v-model="p_form.eyeType"
          size="normal"
          placeholder="眼砂"
          clearable
          style="width: 12vw"
        ></el-input>
        <el-input
          v-model="p_form.color"
          size="normal"
          placeholder="羽色"
          clearable
          style="width: 12vw"
        ></el-input>
        <el-input
          v-model="p_form.father"
          size="normal"
          placeholder="父（环号）"
          clearable
          style="width: 12vw"
        ></el-input>
        <el-input
          v-model="p_form.mother"
          size="normal"
          placeholder="母（环号）"
          clearable
          style="width: 12vw"
        ></el-input>

        <el-select
          v-model="p_form.lost"
          placeholder="丢失"
          style="width: 12vw"
          clearable
        >
          <el-option label="未丢失" value="false"></el-option>
          <el-option label="已丢失" value="true"></el-option>
        </el-select>
        <el-select
          v-model="p_form.dead"
          placeholder="死亡"
          style="width: 12vw"
          clearable
        >
          <el-option label="未死亡" value="false"></el-option>
          <el-option label="已死亡" value="true"></el-option>
        </el-select>
        <el-button type="primary" size="default" @click="getAll()"
          >查询</el-button
        >
        <el-button type="primary" size="default" @click="addOne"
          >添加</el-button
        >
      </el-form>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100vw">
        <el-table-column prop="id" label="id"> </el-table-column>
        <el-table-column prop="tag" label="电子脚环环号"> </el-table-column>
        <el-table-column prop="number" label="环号"> </el-table-column>
        <el-table-column prop="gender" label="性别">
          <template slot-scope="scope">{{
            scope.row.gender === 0 ? "母" : "公"
          }}</template>
        </el-table-column>
        <el-table-column prop="eyeType" label="眼砂"> </el-table-column>
        <el-table-column prop="color" label="羽色"> </el-table-column>
        <el-table-column prop="father" label="父（环号）"> </el-table-column>
        <el-table-column prop="mother" label="母（环号）"> </el-table-column>
        <el-table-column prop="lost" label="丢失">
          <template slot-scope="scope">{{
            scope.row.lost == false ? "没丢" : "丢了"
          }}</template>
        </el-table-column>
        <el-table-column prop="dead" label="死亡">
          <template slot-scope="scope">{{
            scope.row.dead == false ? "没死" : "死了"
          }}</template>
        </el-table-column>
        <el-table-column prop="oint" label="积分" width="82">
          <template slot-scope="scope">{{
            scope.row.point == null ? "0" : scope.row.point
          }}</template>
        </el-table-column>
        <el-table-column prop="oint" label="操作">
          <template slot-scope="scope">
            <el-button type="warning" size="mini" @click="edit">编辑</el-button>
            <el-button type="danger" size="mini" @click="del(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getAllPigeon } from "@/api/table";
import { deleteOnePigeon } from "@/api/table";

export default {
  data() {
    return {
      tableData: [],
      Loading: true,
      p_form: {
        tag: "",
        number: "",
        gender: "",
        eyeType: "",
        color: "",
        father: "",
        mother: "",
        birthday: "",
        lost: "",
        dead: "",
      },
      pageAndSize: {
        page: 1,
        size: 10,
      },
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    // 获取全部赛鸽信息
    getAll() {
      getAllPigeon(this.p_form, this.pageAndSize)
        .then((res) => {
          console.log(res);
          this.tableData = res.data.dataList;
        })
        .then(() => {
          this.$message.success("查询成功！");
        });
    },
    edit() {},

    // 删除单条鸽子信息
    del(row) {
      deleteOnePigeon(row.id).then((res) => {
        console.log(res);
        this.$message.success("删除成功！");
      });
    },
    addOne() {},
  },
};
</script>

<style scoped>
.query_head {
  display: flex;
  margin: 0.5vh auto;
  justify-content: center;
}
.query_head .el-input {
  margin: 0.5vh 0.5vh;
}
.query_head .el-button {
  margin: 0 0.5vh;
}
.query_head .el-select {
  margin: 0 0.5vh;
}
</style>

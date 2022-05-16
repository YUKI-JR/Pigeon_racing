<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="电子脚环环号" required>
        <el-input v-model="form.tag" />
      </el-form-item>
      <el-form-item label="环号">
        <el-input v-model="form.number" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="选择赛鸽性别">
          <el-option label="公" value="1"></el-option>
          <el-option label="母" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="眼砂类型">
        <el-input v-model="form.eyeType" />
      </el-form-item>
      <el-form-item label="羽毛颜色">
        <el-input v-model="form.color" />
      </el-form-item>
      <el-form-item label="父（环号）">
        <el-input v-model="form.father" />
      </el-form-item>
      <el-form-item label="母（环号）">
        <el-input v-model="form.mother" />
      </el-form-item>
      <el-form-item label="出生日期">
        <el-date-picker
          type="date"
          placeholder="选择出生日期"
          v-model="form.birthday"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tag: "",
        number: "",
        gender: "",
        eyeType: "",
        color: "",
        father: "",
        mother: "",
        birthday: 0,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.$message("submit!");
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

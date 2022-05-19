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
          <el-select
            v-model="p_form.eyeType"
            placeholder="眼砂类型"
            style="width: 10%"
            clearable
          >
            <el-option label="牛" value="牛"></el-option>
            <el-option label="黄" value="黄"></el-option>
            <el-option label="砂" value="砂"></el-option>
          </el-select>
          <el-select
            v-model="p_form.color"
            placeholder="选择羽色"
            style="width: 10%"
            clearable
          >
            <el-option label="白" value="白"></el-option>
            <el-option label="黑" value="黑"></el-option>
            <el-option label="花" value="花"></el-option>
            <el-option label="灰" value="灰"></el-option>
            <el-option label="雨点" value="黄"></el-option>
            <el-option label="雨白条" value="雨白条"></el-option>
            <el-option label="红绛" value="红绛"></el-option>
            <el-option label="灰白条" value="灰白条"></el-option>
            <el-option label="红楞" value="红楞"></el-option>
            <el-option label="深雨点" value="深雨点"></el-option>
            <el-option label="银白" value="银白"></el-option>
            <el-option label="灰雨点" value="灰雨点"></el-option>
            <el-option label="深灰" value="深灰"></el-option>
            <el-option label="绛白条" value="绛白条"></el-option>
            <el-option label="麒麒花" value="麒麒花"></el-option>
            <el-option label="花绛" value="花绛"></el-option>
            <el-option label="百花" value="百花"></el-option>
          </el-select>
          <el-input
            v-model="p_form.father"
            size="normal"
            placeholder="父（环号）"
            clearable
            style="width: 10%"
          ></el-input>
          <el-input
            v-model="p_form.mother"
            size="normal"
            placeholder="母（环号）"
            clearable
            style="width: 10%"
          ></el-input>

          <el-select
            v-model="p_form.lost"
            placeholder="丢失状态"
            style="width: 10%"
            clearable
          >
            <el-option label="未丢失" value="false"></el-option>
            <el-option label="已丢失" value="true"></el-option>
          </el-select>
          <el-select
            v-model="p_form.dead"
            placeholder="死亡状态"
            style="width: 10%"
            clearable
          >
            <el-option label="未死亡" value="false"></el-option>
            <el-option label="已死亡" value="true"></el-option>
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
        title="添加赛鸽信息"
        width="30vw"
        :visible.sync="dialogAddgsVisible"
        @close="closeDialogAddgsVisible"
        :modal-append-to-body="false"
        center
      >
        <el-form
          :model="add_form"
          :rules="rules"
          ref="add_form"
          label-width="6vw"
          style="width: 25vw"
        >
          <el-form-item label="环号" prop="number">
            <el-input v-model="add_form.number" />
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-select
              v-model="add_form.gender"
              placeholder="赛鸽性别"
              style="width: 30%"
            >
              <el-option label="雄" :value="1"></el-option>
              <el-option label="雌" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="眼砂" prop="eyeType">
            <el-select
              v-model="add_form.eyeType"
              placeholder="眼砂类型"
              style="width: 30%"
            >
              <el-option label="牛" value="牛"></el-option>
              <el-option label="黄" value="黄"></el-option>
              <el-option label="砂" value="砂"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="羽色" prop="color">
            <el-select
              v-model="add_form.color"
              placeholder="选择羽色"
              style="width: 30%"
            >
              <el-option label="白" value="白"></el-option>
              <el-option label="黑" value="黑"></el-option>
              <el-option label="花" value="花"></el-option>
              <el-option label="灰" value="灰"></el-option>
              <el-option label="雨点" value="黄"></el-option>
              <el-option label="雨白条" value="雨白条"></el-option>
              <el-option label="红绛" value="红绛"></el-option>
              <el-option label="灰白条" value="灰白条"></el-option>
              <el-option label="红楞" value="红楞"></el-option>
              <el-option label="深雨点" value="深雨点"></el-option>
              <el-option label="银白" value="银白"></el-option>
              <el-option label="灰雨点" value="灰雨点"></el-option>
              <el-option label="深灰" value="深灰"></el-option>
              <el-option label="绛白条" value="绛白条"></el-option>
              <el-option label="麒麒花" value="麒麒花"></el-option>
              <el-option label="花绛" value="花绛"></el-option>
              <el-option label="百花" value="百花"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="父（环号）" prop="father">
            <el-input v-model="add_form.father" />
          </el-form-item>
          <el-form-item label="母（环号）" prop="mother">
            <el-input v-model="add_form.mother" />
          </el-form-item>
          <el-form-item label="出生日期" prop="birthdate">
            <el-date-picker
              type="date"
              placeholder="选择出生日期"
              v-model="add_form.birthdate"
              value-format="yyyyMMdd"
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
          :rules="rules"
          ref="edit_form"
          label-width="6vw"
          style="width: 25vw"
        >
          <el-form-item label="环号" prop="number">
            <el-input v-model="edit_form.number" />
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-select
              v-model="edit_form.gender"
              placeholder="赛鸽性别"
              style="width: 100%"
            >
              <el-option label="雄" :value="1"></el-option>
              <el-option label="雌" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="眼砂" prop="eyeType">
            <el-select
              v-model="edit_form.eyeType"
              placeholder="眼砂类型"
              style="width: 100%"
            >
              <el-option label="牛" value="牛"></el-option>
              <el-option label="黄" value="黄"></el-option>
              <el-option label="砂" value="砂"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="羽色" prop="color">
            <el-select
              v-model="edit_form.color"
              placeholder="选择羽色"
              style="width: 100%"
            >
              <el-option label="白" value="白"></el-option>
              <el-option label="黑" value="黑"></el-option>
              <el-option label="花" value="花"></el-option>
              <el-option label="灰" value="灰"></el-option>
              <el-option label="雨点" value="黄"></el-option>
              <el-option label="雨白条" value="雨白条"></el-option>
              <el-option label="红绛" value="红绛"></el-option>
              <el-option label="灰白条" value="灰白条"></el-option>
              <el-option label="红楞" value="红楞"></el-option>
              <el-option label="深雨点" value="深雨点"></el-option>
              <el-option label="银白" value="银白"></el-option>
              <el-option label="灰雨点" value="灰雨点"></el-option>
              <el-option label="深灰" value="深灰"></el-option>
              <el-option label="绛白条" value="绛白条"></el-option>
              <el-option label="麒麒花" value="麒麒花"></el-option>
              <el-option label="花绛" value="花绛"></el-option>
              <el-option label="百花" value="百花"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="父（环号）" prop="father">
            <el-input v-model="edit_form.father" />
          </el-form-item>
          <el-form-item label="母（环号）" prop="mother">
            <el-input v-model="edit_form.mother" />
          </el-form-item>
          <el-form-item label="存活状态" prop="dead">
            <el-select
              v-model="edit_form.dead"
              placeholder="选择存活状态"
              style="width: 100%"
            >
              <el-option label="存活" :value="false"></el-option>
              <el-option label="已死亡" :value="true"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="丢失状态" prop="lost">
            <el-select
              v-model="edit_form.lost"
              placeholder="选择丢失状态"
              style="width: 100%"
            >
              <el-option label="已丢失" :value="true"></el-option>
              <el-option label="未丢" :value="false"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期" prop="birthdate">
            <el-date-picker
              type="date"
              placeholder="选择出生日期"
              v-model="edit_form.birthdate"
              value-format="yyyyMMdd"
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
        <el-table-column prop="number" label="环号"> </el-table-column>
        <el-table-column prop="gender" label="性别">
          <template slot-scope="scope">{{
            scope.row.gender === 0 ? "雌" : "雄"
          }}</template>
        </el-table-column>
        <el-table-column prop="eyeType" label="眼砂"> </el-table-column>
        <el-table-column prop="color" label="羽色"> </el-table-column>
        <el-table-column prop="birthdate" label="生日">
          <template slot-scope="scope">{{
            scope.row.birthdate == null
              ? "-"
              : scope.row.birthdate.slice(0, 4) +
                "-" +
                scope.row.birthdate.slice(4, 6) +
                "-" +
                scope.row.birthdate.slice(6)
          }}</template>
        </el-table-column>
        <el-table-column prop="father" label="父（环号）"> </el-table-column>
        <el-table-column prop="mother" label="母（环号）"> </el-table-column>
        <el-table-column prop="lost" label="丢失状态">
          <template slot-scope="scope">{{
            scope.row.lost == false ? "-" : "丢失"
          }}</template>
        </el-table-column>
        <el-table-column prop="dead" label="存活状态">
          <template slot-scope="scope">{{
            scope.row.dead == false ? "-" : "死亡"
          }}</template>
        </el-table-column>
        <el-table-column prop="oint" label="积分">
          <template slot-scope="scope">{{
            scope.row.point == null ? "-" : scope.row.point
          }}</template>
        </el-table-column>
        <el-table-column prop="point" label="操作" width="170">
          <template slot-scope="scope">
            <el-button type="warning" size="mini" @click="edit(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" size="mini" @click="del(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <nav style="text-align:center;margin:3vh auto">
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
import { addOnePigeon } from "@/api/table";
import { getAllPigeon } from "@/api/table";
import { deleteOnePigeon } from "@/api/table";
import { editOnePigeon } from "@/api/table";

export default {
  data() {
    return {
      tableData: [],
      dialogAddgsVisible: false,
      dialogEditVisible: false,
      currentPage2: 5,
      Loading: true,
      totalElements: null,
      // 查询表单
      p_form: {
        number: "",
        gender: "",
        eyeType: "",
        color: "",
        birthdate: "",
        father: "",
        mother: "",
        birthdate: "",
        lost: "",
        dead: "",
      },
      // 增加表单
      add_form: {
        number: "",
        gender: null,
        eyeType: "",
        color: "",
        father: "",
        mother: "",
        birthdate: null,
        lost: "",
        dead: "",
      },
      // 编辑表单
      edit_form: {
        number: "",
        gender: "",
        eyeType: "",
        color: "",
        father: "",
        mother: "",
        birthdate: "",
        lost: false,
        dead: false,
        point: 0,
      },
      pageAndSize: {
        page: 1,
        size: 10,
      },
      dialogVisible: false,
      rules: {
        number: [
          { required: true, message: "请输入脚环号", trigger: "blur" },
          {
            pattern: /(\d\d-){0}\d{6}/,
            message: "环号必须为数字，且按照11-22-123456格式",
          },
        ],
        gender: [
          { required: true, message: "请选择赛鸽性别", trigger: "change" },
        ],
        eyeType: [{ required: true, message: "请输眼砂类型", trigger: "blur" }],
        color: [{ required: true, message: "请输入羽色", trigger: "blur" }],
        father: [
          { required: true, message: "请输入父（环号）", trigger: "blur" },
          {
            pattern: /(\d\d-){0}\d{6}/,
            message: "环号必须为数字，且按照11-22-123456格式",
          },
        ],
        mother: [
          { required: true, message: "请输入母（环号）", trigger: "blur" },
          {
            pattern: /(\d\d-){0}\d{6}/,
            message: "环号必须为数字，且按照11-22-123456格式",
          },
        ],
        birthdate: [
          { required: true, message: "请选择赛鸽出生日期", trigger: "change" },
        ],
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
          this.totalElements = Number(res.data.totalElements);
        })
        .then(() => {
          this.$message.success("查询成功！");
        });
    },

    // 编辑单条信息
    edit(row) {
      (this.dialogEditVisible = true),
        (this.edit_form = Object.assign({}, row));
    },

    // 关闭编辑dialog
    closeDialogEditVisible() {
      (this.dialogAddgsVisible = false), (this.edit_from = {});
    },

    // 提交编辑表单
    editOneSubmit() {
      this.$refs.edit_form.validate((valid) => {
        if (valid) {
          editOnePigeon(this.edit_form).then(() => {
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
          addOnePigeon(this.add_form).then(() => {
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
    del(row) {
      this.$confirm("此操作将永久删除该赛鸽信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteOnePigeon(row.id).then((res) => {
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

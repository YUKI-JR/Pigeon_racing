import request from "@/utils/request";
var token = sessionStorage.getItem("token");

// 根据Id查询单只鸽子
export function getOnePigeon(id) {
  return request({
    url: "/pigeonInfo/getOne",
    method: "get",
    params: {
      id: id,
    },
    headers: {
      token: token,
    },
  });
}

// 条件查询
export function getAllPigeon(p_form, pageAndSize) {
  return request({
    url: "/pigeonInfo/getPage",
    method: "get",
    params: Object.assign(p_form, pageAndSize),
    headers: {
      token: token,
    },
  });
}

// 根据Id删除单只鸽子
export function deleteOnePigeon(id) {
  return request({
    url: "/pigeonInfo/delete/" + id,
    method: "delete",
    headers: {
      token: token,
    },
  });
}

// 增加单只鸽子
export function addOnePigeon(addform) {
  return request({
    url: "/pigeonInfo/save",
    method: "post",
    headers: {
      token: token,
    },
    data: addform,
  });
}

// 修改单只鸽子信息
export function editOnePigeon(editform) {
  return request({
    url: "/pigeonInfo/update",
    method: "post",
    headers: {
      token: token,
    },
    data: editform,
  });
}

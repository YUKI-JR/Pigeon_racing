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

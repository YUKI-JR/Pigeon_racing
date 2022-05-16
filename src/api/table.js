import request from "@/utils/request";

// 根据Id查询单只鸽子
export function getOnePigeon(id) {
  return request({
    url: "/pigeonInfo/getOne",
    method: "get",
    params: {
      id: id,
    },
    headers: {
      token: sessionStorage.getItem("token"),
    },
  });
}

// 条件查询
export function getAllPigeon(p_form, pageAndSize) {
  console.log(pageAndSize);
  return request({
    url: "/pigeonInfo/getPage",
    method: "get",
    params: Object.assign(p_form, pageAndSize),
    headers: {
      token: sessionStorage.getItem("token"),
    },
  });
}

// 根据Id删除单只鸽子
export function deleteOnePigeon(id) {
  return request({
    url: "/pigeonInfo/delete/"+id,
    method: "delete",
    headers: {
      token: sessionStorage.getItem("token"),
    },
  });
}

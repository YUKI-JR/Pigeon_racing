import request from "@/utils/request";
var token = sessionStorage.getItem("token");

/**
 * 赛鸽信息页面
 */

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

/**
 * 飞行页面
 */

// 增加一场飞行信息
export function addOneFlight(form) {
  return request({
    url: "/flight/save",
    method: "post",
    headers: {
      token: token,
    },
    data: form,
  });
}

// 根据id获取一次
export function getOne(id) {
  return request({
    url: "/flight/getOne",
    method: "get",
    headers: {
      token: token,
    },
    params: {
      id: id,
    },
  });
}

// 条件查询
export function getFlight(form, pageAndSize) {
  return request({
    url: "/flight/getPage",
    method: "get",
    headers: {
      token: token,
    },
    params: Object.assign(form, pageAndSize),
  });
}

// 根据Id删除飞行信息
export function deleteOneFlight(id) {
  return request({
    url: "/flight/delete/" + id,
    method: "delete",
    headers: {
      token: token,
    },
  });
}

// 修改飞行信息
export function editOneFlight(editform) {
  return request({
    url: "/flight/update",
    method: "post",
    headers: {
      token: token,
    },
    data: editform,
  });
}

// 获取排名信息
export function getRanking(id) {
  return request({
    url: "/flight/ranking",
    method: "get",
    headers: {
      token: token,
    },
    params: {
      id: id,
    },
  });
}

/**
 * 仪表盘页面
 */

// 获取当前飞行
export function getCurrentFlight() {
  return request({
    url: "/dashboard/currentFlight",
    method: "get",
    headers: {
      token: token,
    },
  });
}

// 获取当前排名
export function getCurrentRanking() {
  return request({
    url: "/dashboard/currentRanking",
    method: "get",
    headers: {
      token: token,
    },
  });
}

// 获取当前排名
export function flightFinish() {
  return request({
    url: "/flight/finish",
    method: "get",
    headers: {
      token: token,
    },
  });
}

/**
 * Record页面
 */

// 查看赛鸽飞行记录
export function getFlightRecord(number) {
  return request({
    url: "/pigeonInfo/flightRecord",
    method: "get",
    headers: {
      token: token,
    },
    params: {
      number: number,
    },
  });
}

/**
 * 种鸽页面
 */

// 获取种鸽父母信息
export function getBreedPigeon() {
  return request({
    url: "/parent/query",
    method: "get",
    headers: {
      token: token,
    },
  });
}

// 删除种鸽信息
export function deleteOnebreed(number) {
  return request({
    url: "/parent/delete",
    method: "delete",
    headers: {
      token: token,
    },
    params: {
      number:number
    },
  });
}

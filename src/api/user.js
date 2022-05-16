import request from "@/utils/request";
import qs from "qs";

// 登录
export function login(data) {
  return request({
    url: "/login/manager",
    method: "post",
    data,
  });
}


// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }

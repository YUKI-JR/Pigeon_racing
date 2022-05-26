import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  // {
  //   path:"/pigeon/table",
  //   component: Layout,
  //   hidden: true,
  //   children:[
  //     {
  //       name:"record",
  //       meta: { title: "记录", icon: "dashboard" },
  //       path: "/record",
  //       component: () => import("@/views/record"),
  //     }
  //   ]
  // },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/pigeon",
    component: Layout,
    name: "pigeon",
    meta: { icon: "el-icon-s-help" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/tree/index"),
        meta: { title: "赛鸽信息", icon: "el-icon-trophy" },
      },
      {
        path: "record",
        name:"Record",
        hidden:true,
        component: () => import("@/views/record/index"),
        meta: { title: "记录", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/breed_pigeon",
    component: Layout,
    name: "Breed_pigeon",
    meta: { icon: "el-icon-s-help" },
    children: [
      {
        path: "table",
        name: "Breed_pigeon",
        component: () => import("@/views/breedPigeon/index"),
        meta: { title: "种鸽信息", icon: "el-icon-trophy" },
      },
    ],
  },

  {
    path: "/flight",
    component: Layout,
    children: [
      {
        path: "index",
        name: "flight",
        component: () => import("@/views/form/index"),
        meta: { title: "飞行信息", icon: "el-icon-medal-1" },
      },
      {
        path: "ranking",
        name: "Ranking",
        component: () => import("@/views/ranking/index"),
        hidden:true,
        meta: { title: "排名", icon: "el-icon-medal-1" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

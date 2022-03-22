import type { AppRouteRecordRaw } from '@/router/types'
export const LoginRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登陆',
  },
};

export const MainRoute: AppRouteRecordRaw = {
  path: '/main',
  name: 'Main',
  component: () => import('@/views/main/index.vue'),
  meta: {
    title: '首页'
  }
}

// Basic routing without permission
export const basicRoutes = [
  LoginRoute,
  MainRoute
];

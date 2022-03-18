import type { AppRouteRecordRaw } from '@/router/types'
export const LoginRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登陆',
  },
};

// Basic routing without permission
export const basicRoutes = [
  LoginRoute,
];

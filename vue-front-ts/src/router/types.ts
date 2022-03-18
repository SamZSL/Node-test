import { defineComponent } from 'vue';
import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export type Component<T = any> =
| ReturnType<typeof defineComponent>
| (() => Promise<typeof import('*.vue')>)
| (() => Promise<T>);

// Use Omit To del the parameter named 'meta' from RouteRecordRaw
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  fullPath?: string;
}
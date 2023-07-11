import type { CSSProperties } from 'vue'
declare global {
  declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

  declare type AxiosHeaders =
| 'application/json'
| 'application/x-www-form-urlencoded'
| 'multipart/form-data'

}
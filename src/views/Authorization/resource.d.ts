import type { TableV2Row } from '@/hooks/web/useTableV2/types/tableV2'

export enum MenuLevel {
    MainMenu = '主菜单', 
    SubMenu = '子菜单', 
    SubMenuGroup = '子菜单组'
}

declare type ParentMenu = {
    id: string,
    name: string
}

declare type Resource = {
    name: string
    path: string
    component: string
    level: MenuLevel
    icon?: string
    belong?: ParentMenu
  } & TableV2Row
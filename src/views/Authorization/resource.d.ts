import type { TableV2Row } from '@/hooks/web/useTableV2/types/tableV2'

export enum MenuLevel {
    MainMenu = '主菜单', 
    SubMenu = '子菜单', 
    SubMenuGroup = '子菜单组'
}

export interface ParentMenu {
    id: string,
    name: string
}

export interface Resource extends TableV2Row {
    name: string
    path: string
    component: string
    level: MenuLevel
    icon?: string
    belong?: ParentMenu
}
 
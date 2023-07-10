import { string } from 'vue-types';
import type { TableV2Row } from '@/hooks/web/useTableV2/types/tableV2'

export interface User extends TableV2Row {
    avatar: string
    name: string
    username: string
    email: string
    department: string
    role: string
}

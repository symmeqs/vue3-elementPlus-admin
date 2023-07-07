import type { TableV2Row } from '@/hooks/web/useTableV2/types/tableV2'

declare type User = {
    avatar: string
    name: string
    username: string
    email: string
    department: string
    role: string
  } & TableV2Row
import { ElButton, ElCheckbox, ElCheckboxGroup, ElPopover, type HeaderCellSlotProps } from 'element-plus'
import { Alignment } from 'element-plus/es/components/table-v2/src/constants'
import { reactive, ref } from 'vue'

const popoverRef = ref()

const roleFilterSelected = reactive({ selected: [] })
const roleFilterOptions = reactive(['超级管理员', 'A类业务员', 'B类业务员'])

function onFilter() {
  console.log('roleFilterSelected', roleFilterSelected.selected)
  // popoverRef.value.hide()
  // if (shouldFilter.value)
  //   data.value = generateData(columns, 100, 'filtered-')
  // else
  //   data.value = generateData(columns, 200)
}

function onReset() {
  roleFilterSelected.selected = []
  onFilter()
}

function roleHeaderCellRenderer(props: HeaderCellSlotProps) {
  return (
    <div class="flex items-center justify-center">
      <span class="mr-2 text-xs">{props.column.title}</span>
      <ElPopover ref={popoverRef} trigger="click" {...{ width: 200 }}>
        {{
          default: () => (
            <div class="filter-wrapper">
              <div class="filter-group">
                <ElCheckboxGroup v-model={roleFilterSelected.selected}>
                  {
                    roleFilterOptions.map(roleFilterOption =>
                      <ElCheckbox key={roleFilterOption} label={roleFilterOption}>
                        {roleFilterOption}
                      </ElCheckbox>,
                    )
                  }
                </ElCheckboxGroup>

              </div>
              <div class="el-table-v2__demo-filter">
                <ElButton text onClick={onFilter}>
                  查询
                </ElButton>
                <ElButton text onClick={onReset}>
                   重置
                </ElButton>
              </div>
            </div>
          ),
          reference: () => (
            <span class="i-ep-filter cursor-pointer"></span>
          ),
        }}
      </ElPopover>
    </div>
  )
}

export const userColumns = [
  {
    key: 'avatar',
    dataKey: 'avatar',
    title: '',
    width: 100,
    align: Alignment.CENTER,
  },
  {
    key: 'name',
    dataKey: 'name',
    title: '姓名',
    width: 100,
  },
  {
    key: 'role',
    dataKey: 'role',
    title: '角色',
    width: 120,
    headerCellRenderer: roleHeaderCellRenderer,
  },
  {
    key: 'username',
    dataKey: 'username',
    title: '账户',
    width: 150,
  },
  {
    key: 'email',
    dataKey: 'email',
    title: '邮箱',
    width: 200,
  },
]

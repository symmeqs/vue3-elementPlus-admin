import variables from '@/styles/variables.module.less'

/**
 * @param scope 类名
 * @returns 返回空间名-类名
 */
export function getPrefixCls(scope: string) {
  const lessVariables = variables
  return `${lessVariables.namespace}-${scope}`
}

export function useDesign() {
  return {
    variables,
    getPrefixCls,
  }
}

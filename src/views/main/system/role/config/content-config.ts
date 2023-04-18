const contentConfig = {
  pageName: 'role',
  header: {
    title: '角色列表',
    btnTitle: '新建角色'
  },

  propsList: [
    {
      type: 'selection',
      width: '80px'
    },
    {
      type: 'index',
      label: '序号',
      width: '80px'
    },
    {
      type: 'normal',
      prop: 'name',
      label: '角色名称',
      width: '130px'
    },
    {
      type: 'normal',
      prop: 'intro',
      label: '权限介绍',
      width: '130px'
    },
    {
      type: 'timer',
      prop: 'createAt',
      label: '创建时间'
    },
    {
      type: 'timer',
      prop: 'updateAt',
      label: '更新时间'
    },
    {
      type: 'handler',
      label: '操作',
      width: '150px'
    }
  ]
}

export default contentConfig

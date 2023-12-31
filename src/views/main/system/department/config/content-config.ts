const contentConfig = {
  pageName: 'department',
  header: {
    title: '部门列表',
    btnTitle: '新建部门'
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
      label: '部门名称',
      width: '130px'
    },
    {
      type: 'normal',
      prop: 'leader',
      label: '部门领导',
      width: '130px'
    },

    {
      type: 'normal',
      prop: 'parentId',
      label: '上级部门',
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

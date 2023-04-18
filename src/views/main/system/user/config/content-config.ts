const contentConfig = {
  pageName: 'users',
  header: {
    title: '用户列表',
    btnTitle: '新建用户'
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
      label: '用户名称',
      width: '130px'
    },
    {
      type: 'normal',
      prop: 'realname',
      label: '真实姓名',
      width: '130px'
    },
    {
      type: 'normal',
      prop: 'cellphone',
      label: '手机号码',
      width: '130px'
    },
    {
      type: 'enable',
      prop: 'enable',
      label: '状态',
      width: '100px'
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

const searchConfig = {
  pageName: 'users',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '用户名称',
      placeholder: '请输入用户名称'
    },

    {
      type: 'input',
      prop: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'input',
      prop: 'cellphone',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      type: 'select',
      prop: 'enable',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { label: '启动', value: 0 },
        { label: '禁用', value: 1 }
      ]
    },

    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig

const searchConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      lable: '部门名称',
      placeholder: '请输入部门名称'
    },

    {
      type: 'input',
      prop: 'leader',
      lable: '部门领导',
      placeholder: '请输入部门领导'
    },
    {
      type: 'select',
      prop: 'enable',
      lable: '状态',
      placeholder: '请选择状态',
      options: [
        { label: '启动', value: 0 },
        { label: '禁用', value: 1 }
      ]
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      lable: '创建时间'
    }
  ]
}

export default searchConfig

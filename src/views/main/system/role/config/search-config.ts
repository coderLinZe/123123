const searchConfig = {
    formItems: [
      {
        type: 'input',
        prop: 'name',
        lable: '角色名称',
        placeholder: '请输入角色名称'
      },
  
      {
        type: 'input',
        prop: 'leader',
        lable: '权限介绍',
        placeholder: '请输入权限介绍'
      },
      {
        type: 'date-picker',
        prop: 'createAt',
        lable: '创建时间'
      }
    ]
  }
  
  export default searchConfig
  
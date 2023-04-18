const searchConfig = {
  pageName: 'goods',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
     {
      type: 'input',
      prop: 'newPrice',
      label: '现价格',
      placeholder: '请输入商品现价格'
    }
    ,
    {
     type: 'input',
     prop: 'oldPrice',
     label: '原价格',
     placeholder: '请输入商品现价格'
   },
   {
    type: 'date-picker',
    prop: 'createAt',
    label: '创建时间'
  }

    
  ]
}

export default searchConfig

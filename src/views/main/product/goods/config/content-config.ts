const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品列表',
    btnTitle: '新建商品'
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
      label: '商品名称',
      width: '130px'
    },
    {
      type: 'custom',
      prop: 'oldPrice',
      label: '原价格',
      width: '80px',
      slotName: 'oldP'
    },
    {
      type: 'custom',
      prop: 'newPrice',
      label: '现价格',
      width: '80px',
      slotName: 'newP'
    },

    {
      type: 'custom',
      prop: 'imgUrl',
      label: '商品图片',
      width: '120px',
      slotName: 'image'
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

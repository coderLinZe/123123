const contentConfig = {
  pageName: 'story',
  header: {
    title: '故事列表'
  },
  propsList: [
    {
      type: 'index',
      label: '序号',
      width: '80px'
    },

    {
      type: 'normal',
      prop: 'title',
      label: '故事标题',
      width: '200px'
    },
    {
      type: 'normal',
      prop: 'content',
      label: '我的故事',
      width: '500px'
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
    }
  ]
}

export default contentConfig

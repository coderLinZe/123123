const contentConfig = {
  pageName: 'menu',
  isPagination:false,
  header: {
    title: '菜单列表',
    btnTitle: '新建菜单'
  },
  propsList: [
    {
      label: '菜单名称',
      prop: 'name',
      width: '130px'
    },
    {
      label: '级别',
      width: '80px',
      prop: 'type'
    },
    {
      prop: 'url',
      label: '菜单url',
      width: '160px'
    },
    {
      prop: 'icon',
      label: '菜单icon',
      width: '190px'
    },

    {
      prop: 'sort',
      label: '排序',
      width: '80px'
    },
    {
      prop: 'permission',
      label: '权限'
    },
    {
      type: 'timer',
      prop: 'createAt',
      label: '创建时间',
      width: '170px'
    },
    {
      type: 'timer',
      prop: 'updateAt',
      label: '更新时间',
      width: '170px'
    },
    {
      type: 'handler',
      label: '操作',
      width: '150px'
    }
  ],
  childrenTree:{
    rowKey:"id",
    treeProps:{
      children:'children'
    }
  }
}

export default contentConfig

import type {IModalConfig} from '@/components/page-modal/type'


const modalConfig:IModalConfig = {
  pageName: 'users',
  header: {
    newTitle: '新建用户',
    editTitle: '编辑用户'
  },
  formItems: [
    {
      type: 'input',
      label: '用户名称',
      prop: 'name',
      placeholder: '请输入用户名称'
    },
    {
      type: 'input',
      label: '真实姓名',
      prop: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'input',
      label: '用户密码',
      prop: 'password',
      placeholder: '请输入用户密码',
      isHidden: false
    },
    {
      type: 'input',
      label: '电话号码',
      prop: 'cellphone',
      placeholder: '请输入电话号码'
    },
    {
      prop: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      type: 'select',
      label: '选择角色',
      prop: 'roleId',
      placeholder: '请选择角色',
      options: []
    },
  ]
}

export default modalConfig

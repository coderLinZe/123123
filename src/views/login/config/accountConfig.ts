import type { FormRules } from 'element-plus'

export const accountRules: FormRules = {
  name: [
    { required: true, message: '账号必须填写', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '账号为6~20位数字或字母组成', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码必须填写', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码为3位以上数字或字母组成', trigger: 'blur' }
  ]
}

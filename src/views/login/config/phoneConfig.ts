import type { FormRules } from 'element-plus'

export const phoneRules: FormRules = {
    phone: [
      {
        required: true,
        message: "手机号称必须填写",
        trigger: "blur",
      },
      {
        pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
        message: "手机号填写错误",
        trigger: "blur",
      },
    ],
    verifyCode: [
      {
        required: true,
        message: "验证码必须填写",
        trigger: "blur",
      },
      {
        pattern: /^[a-z0-9]{1,4}$/,
        message: "验证码错误,验证码为4位数",
        trigger: "blur",
      },
    ],
  };
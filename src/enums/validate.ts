// 登录规则
export const validateName = (rule: any, value: string, callback: any) => {
  setTimeout(() => {
    if (value.length < 6) {
      callback(new Error("用户名必须大于6个字符"));
    } else if (!/^[a-zA-Z][a-zA-Z0-9_]{5,19}$/.test(value)) {
      return callback(
        new Error("用户名第一个字符必须为字母且总长度在6-20之间")
      );
    } else {
      callback();
    }
  }, 300);
};

export const validatePassword = (rule: any, value: string, callback: any) => {
  setTimeout(() => {
    if (value.length < 6) {
      callback(new Error("密码长度必须大于6个字符"));
    } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)) {
      return callback(new Error("密码必须包含字母和数字"));
    } else {
      callback();
    }
  }, 300);
};

export const validateEmail = (rule: any, value: string, callback: any) => {
  setTimeout(() => {
    if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
      callback(new Error("邮箱格式不正确"));
    } else {
      callback();
    }
  }, 300);
};

// 验证手机号
export const validatePhone = (rule: any, value: string, callback: any) => {
  setTimeout(() => {
    if (!/^1[3456789]\d{9}$/.test(value)) {
      callback(new Error("手机号格式不正确"));
    } else {
      callback();
    }
  }, 300);
};

export const SignInRules = {
  username: [
    {
      required: true,
      validator: validateName,
      trigger: ["blur", "change"],
    },
  ],
  password: [
    {
      required: true,
      validator: validatePassword,
      trigger: ["blur", "change"],
    },
  ],
};

// 注册规则
export const SignUpRules = {
  username: [
    {
      required: true,
      validator: validateName,
      trigger: ["blur", "change"],
    },
  ],
  password: [
    {
      required: true,
      validator: validatePassword,
      trigger: "blur",
    },
  ],
  sex: [
    {
      required: true,
      message: "请选择性别",
      trigger: ["blur", "change"],
    },
  ],
  phoneNum: [
    {
      required: true,
      validator: validatePhone,
      trigger: ["blur", "change"],
    },
  ],
  email: [
    {
      required: true,
      validator: validateEmail,
      trigger: ["blur", "change"],
    },
  ],
  birth: [
    {
      required: true,
      type: "date",
      message: "请选择日期",
      trigger: ["blur", "change"],
    },
  ],
  introduction: [
    {
      message: "请输入介绍",
      trigger: ["blur", "change"],
    },
  ],
  location: [
    {
      message: "请输入地区",
      trigger: ["blur", "change"],
    },
  ],
};

// validationUtils.ts

type ValidationResult = {
    isValid: boolean;
    message: string;
  };
  
  type ValidationCase = {
    condition: () => boolean;
    message: string;
  };
  
  export const validateLogin = (
    username: string,
    password: string,
    isUserFound: boolean
  ): ValidationResult => {
    const cases: ValidationCase[] = [
      {
        condition: () => username === '' && password === '',
        message: 'Vui lòng nhập mã số BHXH của bạn'
      },
      {
        condition: () => username !== '' && password === '',
        message: 'Vui lòng nhập mật khẩu'
      },
      {
        condition: () => username !== '' && password !== '' && !isUserFound,
        message: `Mã số ${username} chưa được đăng kí sử dụng, vui lòng đăng kí!`
      },
      {
        condition: () => username !== '' && password !== '' && isUserFound,
        message: 'Mật khẩu không chính xác'
      }
    ];
  
    const result = cases.find(c => c.condition());
  
    return result
      ? { isValid: false, message: result.message }
      : { isValid: true, message: '' };
  };
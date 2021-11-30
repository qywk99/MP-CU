export const culog = (message, ...optionalParams) => {
      if (wx.getAccountInfoSync().miniProgram.envVersion === 'develop' && message) {
          console.log(message, ...optionalParams)
      } else {
          return
      }
  }
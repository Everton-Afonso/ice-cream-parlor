export default {
  grid: {
    container: '70rem', //1300px
    gutter: '2rem'
  },
  border: {
    radius: '5px'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    semiBold: 500,
    bold: 600,
    sizes: {
      xsmall: '0.75rem', //12px
      small: '0.875rem', //14px
      medium: '1rem', //16px
      large: '1.125rem', //18px
      xlarge: '1.25rem', //20px
      xxlarge: '1.75rem', //28px
      huge: '3.25rem' //52px
    }
  },
  colors: {
    primary: '#5429CC',
    mainBg: '#F0F2F5',
    green: '#33CC95',
    blue: '#6933FF',
    white: '#FFF',
    black: '#363F5F',
    gray: '#D7D7D7',
    lightGray: '#E7E9EE',
    darkGray: '#969CB2',
    red: '#E52E4D'
  },
  spacings: {
    xxsmall: '0.5rem',
    xsmall: '1rem',
    small: '1.5rem',
    medium: '2rem',
    large: '2.5rem',
    xlarge: '3rem',
    xxlarge: '3.5rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const

const lightTheme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848a',
    thirdColor: '#f5f5f5'
  },
  textColor: {
    primaryColor: '#484848',
    secondaryColor: '#222222'
  },
  borderColor: {
    primaryColor: '#f2f2f2'
  },
  fontSize: {
    primarySize: 16 + 'px',
    secondarySize: 14 + 'px',
    thirdSize: 12 + 'px'
  },
  mixin: {
    boxShadow: `
      cursor: pointer;
      transition: box-shadow 0.2s cubic-bezier(0.2,0,0,1);
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18) ;
      }
    `,
      arrayBtn: `
      background: white;
      border-radius: 50%;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.18);
      cursor: pointer;  
    `
    },
}

export {lightTheme}
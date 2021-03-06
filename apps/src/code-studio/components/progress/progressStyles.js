import color from '../../../color';

export const createOutline = color => {
  return `
    ${color} 0 1px,
    ${color} 1px 1px,
    ${color} 1px 0px,
    ${color} 1px -1px,
    ${color} 0 -1px,
    ${color} -1px -1px,
    ${color} -1px 0,
    ${color} -1px 1px`;
};

const baseButtonStyle = {
  fontSize: 14,
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 10,
  paddingRight: 10,
  whiteSpace: 'nowrap'
};

const progressStyles = {
  dotIcon: {
    borderColor: 'transparent',
    fontSize: 24,
    verticalAlign: -4,
    color: color.white,
    textShadow: createOutline(color.lighter_gray),
    ':hover': {
      color: color.white,
      backgroundColor: 'transparent'
    }
  },
  baseButton: baseButtonStyle,
  blueButton: Object.assign({}, baseButtonStyle, {
    backgroundColor: color.cyan,
    color: color.white
  }),
  orangeButton: Object.assign({}, baseButtonStyle, {
    backgroundColor: color.orange,
    color: color.white,
  })
};
export default progressStyles;

// Constants
const backgroundColor = 'rgba(4, 9, 15, 0.75)';
const foregroundColor = '#ffffff';

// Colors
const RED = '#6673bf';
const GREEN = '#3ea290';
const YELLOW = '#b0ead9';
const BLUE = '#31658c';
const MAGENTA = '#596196';
const LIGHT_GRAY = '#ffffff';
const DARK_GRAY = '#1b1b1b';

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: BLUE,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: BLUE,
  colorCubes: '#fff',
  grayscale: foregroundColor
};

// Additional Constants
const cursorColor = colors.yellow;
const borderColor = backgroundColor;

exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');
exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorShape: "UNDERLINE",
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${colors.magenta} !important;
        border-color: ${colors.magenta} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: rgba(4, 9, 15, 0.1) !important;
      }
      .splitpane_divider {
        background-colo4, 9, 15, 0.35) !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        border-bottom: 2px solid ${colors.blue};
      }
    `
  })
}

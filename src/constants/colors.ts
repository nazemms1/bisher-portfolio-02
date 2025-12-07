export const colors = {
  forestDark: "#1a3a2e",
  forestMid: "#2d5a47",
  forestLight: "#428177",

  wheatLight: "#edebe0",
  wheatMid: "#d4cfc0",

  neutralDark: "#2c2c2c",
  neutralMid: "#666666",
  neutralLight: "#f5f5f5",

  white: "#ffffff",
  black: "#000000",
} as const;

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.forestLight} 0%, ${colors.forestMid} 100%)`,
  secondary: `linear-gradient(135deg, ${colors.wheatLight} 0%, ${colors.wheatMid} 100%)`,
  hero: `linear-gradient(135deg, ${colors.forestDark} 0%, ${colors.forestMid} 50%, ${colors.forestLight} 100%)`,
  overlay: `linear-gradient(to bottom, transparent 0%, ${colors.neutralDark}90 100%)`,
} as const;

export const backgrounds = {
  light: colors.wheatLight,
  dark: colors.neutralDark,
  white: colors.white,
} as const;

export const shadows = {
  small: "0 2px 4px rgba(0,0,0,0.1)",
  medium: "0 4px 12px rgba(0,0,0,0.15)",
  large: "0 8px 24px rgba(0,0,0,0.2)",
  hover: "0 12px 28px rgba(0,0,0,0.15)",
} as const;

export const borderRadius = {
  small: "4px",
  medium: "8px",
  large: "12px",
  circle: "50%",
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
} as const;

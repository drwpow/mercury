const designTokens = {
  color: {
    black: "#000000",
    blue: "#1e50da",
    borderGray: "#c4c7ca",
    gray: "#8f8f95",
    grayDark: "#575b5f",
    grayDarker: "#323940",
    grayLight: "#ddddde",
    grayLighter: "#ececed",
    grayLightest: "#f7f7f8",
    green: "#31baa2",
    mutedBlue: "#dde9fe",
    mutedGreen: "#a4eacf",
    mutedOrange: "#ffcaa5",
    mutedPurple: "#ddcff7",
    mutedRed: "#ffc4d2",
    mutedTeal: "#c0eef6",
    mutedYellow: "#fff2b9",
    orange: "#f58b23",
    purple: "#7748d2",
    red: "#d52049",
    teal: "#10b5d0",
    white: "#ffffff",
    yellow: "#ffde52",
  },
  gradient: {
    brand: "linear-gradient(45deg, #da566c 0%, #8c4794 100%)",
    brandMuted: "linear-gradient(45deg, #edc2ca 0%, #e3cfe6 100%)",
    green: "linear-gradient(237.2deg, #4cbc88 6.74%, #329dd1 111%)",
    greenMuted: "linear-gradient(237.2deg, #d2f5e4 6.74%, #d5f1ff 111%)",
    red: "linear-gradient(45deg, #af0d1e 0%, #ff3570 100%)",
    redMuted: "linear-gradient(225deg, #ffb3b3 0%, #fd83b2 100%)",
    yellow: "linear-gradient(43.45deg, #ffb83a -2.87%, #ffe268 100%)",
    yellowMuted: "linear-gradient(43.67deg, #ffd995 -2.85%, #fff7d3 108.09%)",
    orange: "linear-gradient(47.51deg, #ff0264 -34.31%, #fddf31 111.92%)",
    orangeMuted: "linear-gradient(45.05deg, #f5bca5 -11.1%, #fff1d7 111.79%)",
    purple: "linear-gradient(225deg, #a572ff 0%, #543edd 100%)",
    purpleMuted: "linear-gradient(225deg, #eadeff 0%, #cbc3ff 100%)",
    blue: "linear-gradient(225deg, #329dd1 0%, #4f50a4 100%)",
    blueMuted: "linear-gradient(225deg, #b1e5ff 0%, #c5c6ff 100%)",
    manifold:
      "linear-gradient(272.4deg, #fe1360 -13.37%, #814eae 26.05%, #2d98cc 77.38%, #fd8745 95.25%, #fdC935 135.64%)",
  },
  shadow: {
    far: "0 6px 10px rgba(0, 0, 0, 0.15000000596046448)",
    near: "0 2px 8px rgba(0, 0, 0, 0.07999999821186066)",
  },
  typography: {
    body: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "16px",
    },
    caption: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "12px",
    },
    heading: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "20px",
      letterSpacing: "-0.01em",
      lineHeight: "1.11",
    },
    headingExtraLarge: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "500",
      fontSize: "32px",
      letterSpacing: "-0.0125em",
      lineHeight: "0.96",
    },
    headingLarge: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "25px",
      letterSpacing: "-0.0125em",
    },
    label: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "14px",
    },
    monoBody: {
      fontFamily:
        '"IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
      fontWeight: "400",
      fontSize: "14px",
      letterSpacing: "-0.01em",
    },
    monoCaption: {
      fontFamily:
        '"IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
      fontWeight: "400",
      fontSize: "10px",
      letterSpacing: "-0.01em",
    },
    monoLabel: {
      fontFamily:
        '"IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
      fontWeight: "400",
      fontSize: "12px",
      letterSpacing: "-0.01em",
    },
    sidebarBigTitle: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "600",
      fontSize: "16px",
    },
    sidebarSmallTitle: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "700",
      fontSize: "14px",
    },
    smallScreenBody: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "16px",
    },
    smallScreenCaption: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "13px",
    },
    smallScreenHeading: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "18px",
      letterSpacing: "-0.01em",
    },
    smallScreenHeadingExtraLarge: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "500",
      fontSize: "26px",
      letterSpacing: "-0.0125em",
      lineHeight: "1.18",
    },
    smallScreenHeadingLarge: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "22px",
      letterSpacing: "-0.0125em",
    },
    smallScreenLabel: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "400",
      fontSize: "14px",
    },
    subheading: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "600",
      textTransform: "uppercase",
      fontSize: "13px",
      letterSpacing: "0.030000000000000002em",
    },
    subheadingSmall: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: "500",
      textTransform: "uppercase",
      fontSize: "11px",
      letterSpacing: "0.04em",
    },
  },
};
export default designTokens;

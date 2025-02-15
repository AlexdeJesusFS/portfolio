import theme from "./theme/theme";

const media = {
  queries: {
    mobile: `(max-width: ${theme.breakpoints.mobile})`,
    tablet: `(min-width: ${theme.breakpoints.tablet.min}) and (max-width: ${theme.breakpoints.tablet.max})`,
    desktop: `(min-width: ${theme.breakpoints.desktop})`,
  },

  mobile: (styles: string) =>
    `@media (max-width: ${theme.breakpoints.mobile}) {${styles}}`,

  tablet: (styles: string) =>
    `@media (min-width: ${theme.breakpoints.tablet.min}) and (max-width: ${theme.breakpoints.tablet.max}) {${styles}}`,

  desktop: (styles: string) =>
    `@media (min-width: ${theme.breakpoints.desktop}) {${styles}}`,
};

export default media;

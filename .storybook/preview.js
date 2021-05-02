// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/Theme";
import { addDecorator } from "@storybook/react";

addDecorator((story) => {
  const [theme, setTheme] = useState('light');
  return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{story()}</ThemeProvider>;
});

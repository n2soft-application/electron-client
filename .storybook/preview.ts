import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: false, // 목차 여부
      controls: {
        sort: "requiredFirst", // 정렬
      },
    },
    options: {
      storySort: {
        method: "configure",
        includeNames: true,
        order: [
          "Components",
          ["Button", "Checkbox"],
          "Layout",
          ["Sidebar", "Header"],
          "Example",
          ["Button", "Page", "Header"],
          "*",
        ],
      },
    },
  },
};

export default preview;

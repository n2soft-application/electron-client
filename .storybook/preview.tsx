import React from "react";
import type { Preview } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import DocumentationTemplate from "./DocumentationTemplate.mdx";
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
      //   page: () => (
      //     <>
      //       <Title />
      //       <Subtitle />
      //       <Description />
      //       <Primary />
      //       <Controls />
      //       <Stories />
      //     </>
      //   ),
      page: DocumentationTemplate,
    },
    options: {
      storySort: {
        method: "configure",
        includeNames: true,
        order: [
          "Components",
          ["Button", "Checkbox"],
          "Layout",
          ["Header", "Footer"],
          "Example",
          ["Button", "Page", "Header"],
          "*",
        ],
      },
    },
  },
};

export default preview;

import readme from "./readme.md";

export default {
  title: "Button",
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const Default = () => `
  <my-button first="Millie" middle="Bobby" last="Brown"></my-button>
`;

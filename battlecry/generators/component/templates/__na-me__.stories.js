import readme from "./readme.md";

export default {
  title: "__Na Me__",
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const Default = () => `
  <my-__na-me__ first="Millie" middle="Bobby" last="Brown"></my-__na-me__>
`;

export const initParamsValidationRules = {
  color: {
    label: "Text Color",
    type: "color",
    optional: true,
    default: "white",
  },
};

export const initParams = [
  {
    name: "Default",
    value: {
      color: "white",
    },
  },
];

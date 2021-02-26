import * as yup from "yup";

const pizzaSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Please enter your name")
    .min(6, "Name must be at least 2 characters"),
  size: yup.mixed().oneOf(["small", "medium", "large"]),
  sauce: yup.string().required(),
  pepp: yup.boolean(),
  saus: yup.boolean(),
  anchovies: yup.boolean(),
  redpepper: yup.boolean(),
  xtracheese: yup.boolean(),
  garlic: yup.boolean(),
  sub: yup.string(),
  specInst: yup.string(),
});

export default pizzaSchema;

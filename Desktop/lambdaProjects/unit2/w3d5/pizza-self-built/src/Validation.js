import * as yup from "yup";

const pizzaSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Please enter your name")
    .min(3, "Name must be at least 2 characters"),
  size: yup
    .mixed()
    .oneOf(["small", "medium", "large"], "please choose your size"),
  sauce: yup.string().required("Please choose a sauce"),
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

import * as Yup from "yup";

export function initialValues() {
  return {
    name: "",
    mail: "",
    telf: "",
    country: "",
    city: "",
    address: "",
    zip: "",
    payment_method: "paypal"
  };
}
export function validationSchema() {
  return Yup.object({
    name: Yup.string().required("Name and Last Name are required"),
    mail: Yup.string().email("Mail must be a valid email").required("Mail is required"),
    telf: Yup.string().matches(/^(\+\d{1,4})?\d{7,14}$/, 'Phone number must be valid').required('Phone number is required'),
    country: Yup.string().required("Country is requiered"),
    city: Yup.string().required("City is requiered"),
    address: Yup.string().matches(/[a-zA-Z]/,"Address must be valid").required("Address is requiered"),
    zip: Yup.string(),
    payment_method: Yup.string().required()
  });
}

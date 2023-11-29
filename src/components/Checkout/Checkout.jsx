import { Sidebar } from "../Sidebar/Sidebar";
import "./Checkout.scss";
import { initialValues, validationSchema } from "./Checkout.form";
import { useFormik } from "formik";
import { useCart } from "../../hooks/useCart";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { TotalPrice, formatNumber } from "../../utils/Functions";
export const Checkout = () => {
  const { clearCart, cart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue, { resetForm }) => {
      try {
        setTotalPrice(formatNumber(TotalPrice(cart)));
        resetForm();
        clearCart();
        BuyNow(true);
      } catch (error) {
        console.error(error);
      }
    },
  });
  const BuyNow = (value) => {
    setIsOpen(value);
  };
  return (
    <>
      <Modal BuyNow={BuyNow} isOpen={isOpen} price={totalPrice} />
      <div className="checkout">
        <div className="checkout_content">
          <h2>Checkout</h2>
          <form>
            <h3>Details</h3>
            <div className="details">
              <div className="">
                <label
                  htmlFor="name"
                  className={`${formik.errors.name ? "error" : ""}`}
                >
                  Name*
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className={`${formik.errors.name ? "input_form_error" : ""}`}
                />
                {formik.errors.name && formik.touched.name ? (
                  <p className="error">{formik.errors.name}</p>
                ) : null}
              </div>
              <div className="">
                <label
                  htmlFor="mail"
                  className={`${formik.errors.mail ? "error" : ""}`}
                >
                  Mail*
                </label>
                <input
                  type="email"
                  name="mail"
                  placeholder="Name@domain.com"
                  onChange={formik.handleChange}
                  value={formik.values.mail}
                  className={`${formik.errors.mail ? "input_form_error" : ""}`}
                />
                {formik.errors.mail && formik.touched.mail ? (
                  <p className="error">{formik.errors.mail}</p>
                ) : null}
              </div>
              <div className="">
                <label
                  htmlFor="telf"
                  className={`${formik.errors.telf ? "error" : ""}`}
                >
                  Phone number*
                </label>
                <input
                  type="telf"
                  name="telf"
                  placeholder="+54 1234 56-7890"
                  onChange={formik.handleChange}
                  value={formik.values.telf}
                  className={`${formik.errors.telf ? "input_form_error" : ""}`}
                />
                {formik.errors.telf && formik.touched.telf ? (
                  <p className="error">{formik.errors.telf}</p>
                ) : null}
              </div>
            </div>
            <h3>Shopping Info</h3>
            <div className="shopping_info">
              <div className="">
                <label
                  htmlFor="country"
                  className={`${formik.errors.country ? "error" : ""}`}
                >
                  Country*
                </label>
                <select
                  className={`${
                    formik.errors.country ? "input_form_error" : ""
                  }`}
                  name="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                >
                  <option value="">Choose a Country</option>
                  <option value="argentina">Argentina</option>
                  <option value="bolivia">Bolivia</option>
                  <option value="uruguay">Uruguay</option>
                  <option value="colombia">Colombia</option>
                  <option value="chile">Chile</option>
                  <option value="mexico">Mexico</option>
                  <option value="perú">Perú</option>
                  <option value="paraguay">Paraguay</option>
                </select>
                {formik.errors.country && formik.touched.country ? (
                  <p className="error">{formik.errors.country}</p>
                ) : null}
              </div>
              <div className="">
                <label
                  htmlFor="city"
                  className={`${formik.errors.city ? "error" : ""}`}
                >
                  City*
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  className={`${formik.errors.city ? "input_form_error" : ""}`}
                />
                {formik.errors.city && formik.touched.city ? (
                  <p className="error">{formik.errors.city}</p>
                ) : null}
              </div>
              <div className="">
                <label
                  htmlFor="address"
                  className={`${formik.errors.address ? "error" : ""}`}
                >
                  Address*
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="1600 Pennsylvania Avenue NW"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  className={`${
                    formik.errors.address ? "input_form_error" : ""
                  }`}
                />
                {formik.errors.address && formik.touched.address ? (
                  <p className="error">{formik.errors.address}</p>
                ) : null}
              </div>
              <div className="">
                <label>Zip Code</label>
                <input
                  name="zip"
                  type="text"
                  placeholder="1234"
                  onChange={formik.handleChange}
                  value={formik.values.zip}
                />
              </div>
            </div>

            <h3>Payment Details</h3>
            <div className="payment_section">
              <label
                htmlFor="paypal"
                className={`payment_method ${
                  formik.values.payment_method === "paypal" ? "active" : ""
                }`}
              >
                Paypal
                <input
                  type="radio"
                  id="paypal"
                  name="payment_method"
                  value="paypal"
                  onChange={formik.handleChange}
                  checked={formik.values.payment_method === "paypal"}
                />
              </label>
              <label
                htmlFor="card"
                className={`payment_method ${
                  formik.values.payment_method === "card" ? "active" : ""
                }`}
              >
                Credit/Debit Card
                <input
                  type="radio"
                  id="card"
                  name="payment_method"
                  value="card"
                  onChange={formik.handleChange}
                  checked={formik.values.payment_method === "card"}
                />
              </label>
            </div>
          </form>
        </div>
        <div className="checkout_sidebar">
          <Sidebar HandleCheckout={formik.handleSubmit} />
        </div>
      </div>
    </>
  );
};

import { CheckIcon } from "../Icons";
import "./Modal.scss";
export const Modal = ({BuyNow, isOpen, price}) => {
  return (
    <div className={`modal ${isOpen ? "active" : ""}`}>
      <div className="modal_content">
        <CheckIcon />
        <h2>THANKS FOR YOUR ORDER</h2>
        <div className="total">
          <span>TOTAL: ${price}</span>
        </div>
        <button onClick={() => BuyNow(false)} className="btn btn_blue ok_button">OK</button>
      </div>
    </div>
  );
};

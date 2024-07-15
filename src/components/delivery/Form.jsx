import { useState } from 'react';
import { Link } from 'react-router-dom';
import Apple_pay from '../../assets/ApplePay.svg';
import Cards from '../yourcart_card/Yourcart_card';
import Pale from '../../assets/PayPal1.svg';
import Visa from '../../assets/Visa.svg';
import Master from '../../assets/Mastercard.svg';
import Gpay from '../../assets/GooglePay.svg';
import Amex from '../../assets/Amex.svg';
import Card from '../../assets/card.svg';
import Location from '../../assets/location.svg';
import Car from '../../assets/car.svg';
import Style from '../delivery/Form.module.css';

const Form = () => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    emailAddress: false,
    homeAddress: false,
    city: false,
    country: false,
    cardNumber: false,
    nameOnCard: false,
    expiryDate: false,
    cvv: false,
  });

  const handleBuyNow = () => {
    const newErrors = {
      firstName: !document.getElementById('firstName').value,
      lastName: !document.getElementById('lastName').value,
      phoneNumber: !document.getElementById('phoneNumber').value,
      emailAddress: !document.getElementById('emailAddress').value,
      homeAddress: !document.getElementById('homeAddress').value,
      city: !document.getElementById('city').value,
      country: !document.getElementById('country').value,
      cardNumber: !document.getElementById('cardNumber').value,
      nameOnCard: !document.getElementById('nameOnCard').value,
      expiryDate: !document.getElementById('expiryDate').value,
      cvv: !document.getElementById('cvv').value,
    };
    setErrors(newErrors);
  };

  return (
    <section className={Style.form}>
      <h1>CheckOut</h1>
      <div className={Style.form0}>
        <div className={Style.form1}>
          <div className={Style.deliverybtn}>
            <h2>How do you want your delivery?</h2>
            <div className={Style.delivery_btn}>
              <button>
                <img src={Car} alt="Car" />
                <p>Delivery</p>
              </button>
              <button>
                <img src={Location} alt="Location" />
                <p>In-Store Pickup</p>
              </button>
            </div>
          </div>
          <div className={Style.delivery_form}>
            <div className={Style.name}>
              <p>Delivery Address</p>
              <div className={Style.names}>
                <div className={Style.namess}>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className={errors.firstName ? Style.error : ''}
                  />
                  {errors.firstName && <span className={Style.errorMessage}>First Name is required</span>}
                </div>
                <div className={Style.namess}>

                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className={errors.lastName ? Style.error : ''}
                />
                {errors.lastName && <span className={Style.errorMessage}>Last Name is required</span>}
                </div>
              </div>
              <div className={Style.names}>
                 <div className={Style.namess}>

                <input
                  id="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  className={errors.phoneNumber ? Style.error : ''}
                />
                {errors.phoneNumber && <span className={Style.errorMessage}>Phone Number is required</span>}
                 </div>
                 <div className={Style.namess}>

                <input
                  id="emailAddress"
                  type="text"
                  placeholder="Email Address"
                  className={errors.emailAddress ? Style.error : ''}
                />
                {errors.emailAddress && <span className={Style.errorMessage}>Email Address is required</span>}
                 </div>
              </div>
              <div className={Style.names}>
                <div className={Style.namess}>

                <input
                  id="homeAddress"
                  type="text"
                  placeholder="Home Address"
                  className={`${Style.hold} ${errors.homeAddress ? Style.error : ''}`}
                />
                {errors.homeAddress && <span className={Style.errorMessage}>Home Address is required</span>}
                </div>
              </div>
              <div className={Style.names}>
                <div className={Style.namess}>
                    
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className={errors.city ? Style.error : ''}
                />
                {errors.city && <span className={Style.errorMessage}>City is required</span>}
                </div>
                <div className={Style.namess}>

                <input
                  id="country"
                  type="text"
                  placeholder="Country"
                  className={errors.country ? Style.error : ''}
                />
                {errors.country && <span className={Style.errorMessage}>Country is required</span>}
                </div>
              </div>
            </div>
          </div>
          <div className={Style.paymentbtn}>
            <h4>Payment</h4>
            <h6>Select Payment Method</h6>
            <div className={Style.delivery_btn1}>
              <button className={Style.pale}>
                <img src={Card} alt="Card" />
                <p>Debit or Credit Card</p>
              </button>
              <button className={Style.pale}>
                <img src={Pale} alt="Pal" />
                <p>Paypal</p>
              </button>
            </div>
            <p className={Style.p}>We Accept:</p>
            <div className={Style.card_type}>
              <img src={Visa} alt="Visa" />
              <img src={Master} alt="Master" />
              <img src={Amex} alt="Amex" />
              <img src={Gpay} alt="Gpay" />
              <img src={Apple_pay} alt="Pay" />
            </div>
            <div className={Style.delivery_form1}>
              <div className={Style.name1}>
                <p className={Style.p}>Card Details</p>
                <div className={Style.names}>
                    <div className={Style.namess}>

                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="Card Number"
                    className={errors.cardNumber ? Style.error : ''}
                  />
                  {errors.cardNumber && <span className={Style.errorMessage}>Card Number is required</span>}
                    </div>
                    <div className={Style.namess}>

                  <input
                    id="nameOnCard"
                    type="text"
                    placeholder="Name On Card"
                    className={errors.nameOnCard ? Style.error : ''}
                  />
                  {errors.nameOnCard && <span className={Style.errorMessage}>Name On Card is required</span>}
                    </div>
                </div>
                <div className={Style.names}>
                    <div className={Style.namess}>

                  <input
                    id="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    className={errors.expiryDate ? Style.error : ''}
                  />
                  {errors.expiryDate && <span className={Style.errorMessage}>Expiry Date is required</span>}
                    </div>
                    <div className={Style.namess}>

                  <input
                    id="cvv"
                    type="text"
                    placeholder="CVV"
                    className={errors.cvv ? Style.error : ''}
                  />
                  {errors.cvv && <span className={Style.errorMessage}>CVV is required</span>}
                    </div>
                </div>
                <div className={Style.saved}>
                  <input type="checkbox" name="trend" id="trend" />
                  <p>Save card details for later</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <button className={Style.buynow} onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
        <div className={Style.form2}>
          <Cards />
          <hr className={Style.line} />
        </div>
      </div>
    </section>
  );
};

export default Form;

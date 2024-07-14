import { Link } from 'react-router-dom'
import Apple_pay from '../../assets/ApplePay.svg'
import Cards from '../yourcart_card/Yourcart_card'
import Pale from '../../assets/PayPal1.svg'
import Visa from '../../assets/Visa.svg'
import Master from '../../assets/Mastercard.svg'
import Gpay from '../../assets/GooglePay.svg'
import Amex from '../../assets/Amex.svg' 
import Card from '../../assets/card.svg'
import Location from '../../assets/location.svg'
import Car from '../../assets/car.svg'
import Style from '../delivery/Form.module.css'

const Form = () => {
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
                <p>
                    Delivery Address
                </p>
                <div className={Style.names}>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name'/>
                </div>
                <div className={Style.names}>
                    <input type="text" placeholder='Phone Number'/>
                    <input type="text" placeholder='Email Address'/>
                </div>
                <div className={Style.names}>
                    <input type="text" placeholder='Home Address' className={Style.hold}/>
                </div>
                <div className={Style.names}>
                    <input type="text" placeholder='City'/>
                    <input type="text" placeholder='Country'/>
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
                    <p className={Style.p}>
                        Card Details
                    </p>
                    <div className={Style.names}>
                        <input type="text" placeholder='Card Number'/>
                        <input type="text" placeholder='Name On Card'/>
                    </div>
                    <div className={Style.names}>
                        <input type="text" placeholder='MM/YY'/>
                        <input type="text" placeholder='CVV'/>
                    </div>
                    <div className={Style.saved}>
                        <input type="checkbox" name="trend" id="trend" />
                        <p>Save card details for later</p>
                    </div>
            </div>
        </div>
        </div>
        <hr/>
        <Link style={{textDecoration: 'none'}} to='/Successful'>
        <button className={Style.buynow}>
            Buy Now
        </button>
        </Link>
        </div>
        <div className={Style.form2}>
            <Cards/>
            <hr  className={Style.line}/>
        </div>
        </div>
    </section>
  )
}

export default Form
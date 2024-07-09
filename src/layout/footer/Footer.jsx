import facebook from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import snapchat from '../../assets/snapchat.svg'
import style from '../footer/Footer.module.css'

const Footer = () => {
  return (
    <footer>
        <div className={style.footer_wrap}>
            <div className={style.footer_top}>
                <div className={style.section1}>
                    <ul className={style.list}>
                        <li><b>Products</b></li>
                        <li>Men's Wear</li>
                        <li>Women's Wear</li>
                        <li>Unisex</li>
                        <li>Kid's Wear</li>
                        <li>Shoes</li>
                        <li>Bags</li>
                        <li>Accessories</li>
                    </ul>   
                </div>
                <div className={style.section2}>
                    <ul className={style.list}>
                    <li><b>About Giora</b></li>
                    <li>About Us</li>
                    <li>Corporate News</li>
                    <li>Investors</li>
                    <li>Careers</li>   
                </ul>
                </div>
                <div className={style.section3}>
                    <ul className={style.list}>
                    <li><b>Support</b></li>
                    <li>Contact Us</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Shipping & Delivery</li> 
                    <li>Discount</li>  
                </ul>
                </div>
                <div className={style.section4}>
                    <ul className={style.list}>
                        <li><b>FAQ</b></li>
                        <li>Return Policy</li>
                        <li>Referral Policy</li>
                        <li>Cookie Settings</li>
                        <li>Franchise Policy</li>   
                        <li>Student Discount</li>
                    </ul>
                </div>
                 <div className={style.section5}>
                    <ul className={style.list}>
                        <h4>Follow US</h4>
                        <div className={style.socials}>
                            <img src={facebook} alt="facebook" />
                            <img src={whatsapp} alt="whatsapp" />
                            <img src={youtube} alt="youtube" />
                            <img src={instagram} alt="instagram" />
                            <img src={snapchat} alt="snapchat" />
                        </div>
                    </ul>
                </div>
            </div>
            <div className={style.footer_bottom}>
                <div className={style.section7}>
                    <p>© 2024 Giora, Inc</p>
                </div>
            </div>    
        </div>
    </footer>
  )
}

export default Footer

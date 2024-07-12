import Color from '../colors/Color';
import styles from '../side_bar/Dropdown.module.css'

export const Dropdown = () => {
  return (
    <section className={styles.side}>
        <div className={styles.sides}>
                <div className={styles.category}>
                    <ul className={styles.lists}>
                        <li><b>CATEGORY</b></li>
                        <li>All</li>
                        <li>Dresses</li>
                        <li>Trousers</li>
                        <li>Beach wear</li>
                        <li>Bags</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div className={styles.style}>
                    <ul className={styles.stylee}>
                        <li><b>STYLE</b></li>
                        <li><input type="checkbox" name="trend" id="trend" /> Trending</li>
                        <li><input type="checkbox" name="discount" id="discount" />  Sales Discount</li>
                        <li><input type="checkbox" name="demand" id="demand" />  On Demand</li>
                        <li><input type="checkbox" name="limit" id="limit" />  Limited</li>
                    </ul>
                </div>
                <div className={styles.color}>
                    <h4>
                      COLOR
                    </h4>
                    <div className={styles.column}>
                        <Color/>
                    </div>
                </div>
            </div> 
      

    </section>
  )
}

export default Dropdown;

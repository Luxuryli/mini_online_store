import  styles from '../colors/Color.module.css'

const Color = () => {
  return (
        <div className={styles.color}>
            <div className={styles.color1}>

                <input type="checkbox" name="trend" className={styles.grey} /> 
                <input type="checkbox" name="trend" className={styles.ocean} /> 
                <input type="checkbox" name="trend" className={styles.violet} /> 
                <input type="checkbox" name="trend" className={styles.purple} /> 
                <input type="checkbox" name="trend" className={styles.green} /> 
                <input type="checkbox" name="trend" className={styles.blue} /> 
            </div>
            <div className={styles.colors}>

                <input type="checkbox" name="trend" className={styles.red} /> 
                <input type="checkbox" name="trend" className={styles.yellow}/> 
                <input type="checkbox" name="trend" className={styles.lemon} /> 
                <input type="checkbox" name="trend" className={styles.brown} /> 
                <input type="checkbox" name="trend" className={styles.army} /> 
                <input type="checkbox" name="trend" className={styles.ash} /> 
            </div>
        </div>
  )
}



export default Color

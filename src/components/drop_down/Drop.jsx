import styles from '../drop_down/Drop.module.css'

const Drop = () => {
  return (
            <div className={styles.drop}>
                    <select name="size" id="size">
                    <option value="12">UK 12</option>
                    <option value="14">UK 14</option>
                    <option value="16">UK 16</option>
                    <option value="16">UK 18</option>
                    </select>
            </div>  
  )
}

export default Drop

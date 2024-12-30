import styles from './ResturantCard.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import {faUtensils} from "@fortawesome/free-solid-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

const ResturantCard = (props) =>{

    let roundOfStars = Math.floor(props.rating);
        roundOfStars = roundOfStars || 1;
    const starArray = new Array(roundOfStars).fill(null);

    return <div className={styles.card}>
        <div className={styles.heading}>
             <div className={styles.info}>
               <span>{props.name}</span> 
               {
                starArray.map((ele , index)=><FontAwesomeIcon icon={faStar} key={`star_${index}`} className={styles.yellow}/>)
               }
               
             </div>
             <div className={styles.location}>
             <FontAwesomeIcon icon={faLocationDot} className={styles.grey} />
                <span> {props.address}</span>
             </div>
            
            <span>{`${props.outcode} ${props.postcode}`}</span>
        </div>
        <div className={styles.partTwo}>
            <div className={styles.utnesiles}><FontAwesomeIcon icon={faUtensils} className={styles.green}/> <span className={styles.green}>{props.type_of_food}</span></div>
            <a href={props.URL}>Visit Link</a>
        </div>
    </div>
}
export default ResturantCard;
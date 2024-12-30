import ResturantCard from '../ResturantCard/ResturantCard';
import styles from './ResturantList.module.css'
import resturantList from '../../Data/data'
import { useState } from 'react';
const ResturantList = () =>{
    const[searchKey , setSearchKey] = useState("");
    const[searchRating , setSearchRating] = useState(0);
    const onChangeValue = (e) =>{
      setSearchKey(e.target.value);
    }
    const onChangeRating = (e) =>{
      setSearchRating(Number(e.target.value));
    }

    return<>
      <div className={styles.heading}><h1 > Resutrant List</h1></div>
      <div className={styles.inputBox}>
        <input type="text" placeholder='Search Resturant...'onChange={onChangeValue}/>
        <label htmlFor='minRating'>
          Minimum Rating{" "}
          <input type="number" id='minRating'  onChange={onChangeRating}/>
        </label>
      </div>
     <div className={styles.mainContainer}>
      {
        resturantList
        .filter((resturant) => resturant.name.toLowerCase().includes(searchKey.toLowerCase()) && resturant.rating >= searchRating)
        .map((resturant)=><ResturantCard key ={resturant._id} {...resturant} />)
      }
        
    </div>
    </>
}
export default ResturantList;
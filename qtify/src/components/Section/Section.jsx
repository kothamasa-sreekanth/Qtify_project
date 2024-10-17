import React from 'react'
import MyCard from '../Card/MyCard'
import styles from "./Section.module.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

function Section() {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(
          `https://qtify-backend-labs.crio.do/albums/top`
        );
        setCardData(response.data);
        console.log(response.data);
      }
      fetchData();
    }, []);
  return (
    <div>
<header className={styles.header}>
<h4>Top Albums</h4>
<button>Collapse</button>
</header>
        <MyCard cardData={cardData}/>
    </div>
  )
}

export default Section
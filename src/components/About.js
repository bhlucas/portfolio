import React from 'react';
import styles from './About.css';
import background from '.././background_image.jpg'

const content = (props) => {

    console.log("styles: "+styles.bg) 
    return ( 
        <div className={styles.About}>
            <img src={background} className={styles.bg} alt="Responsive image"/>
        </div>
    );
};

export default content;
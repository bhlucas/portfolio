import React from 'react';
import styles from './About.css';
import background from '.././background_image.jpg'

const content = (props) => {
    return ( 
        <div className={styles.About}>
            <img src={background} alt="Responsive image"/>
        </div>
    );
};

export default content;
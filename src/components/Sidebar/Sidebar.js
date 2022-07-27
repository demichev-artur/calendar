import React from 'react';
import styles from './Sidebar.module.css';
import media from '../../access/icons/calendarIcon.svg'

const Sidebar = () => {
    return (
        <div className={styles.side_bar}>
            <div className={styles.logo}>
                <img src={media} alt=""/>
                <p>Calendar</p>
            </div>
            <div className={styles.date_select}>
                <button>Создать</button>
            </div>
        </div>
    );
};

export default Sidebar;
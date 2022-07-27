import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import styles from './Calendar.module.css';

const Calendar = () => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <Header/>
        </div>
    );
};

export default Calendar;
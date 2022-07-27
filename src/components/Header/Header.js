import React from 'react';
import styles from './Header.module.css';
import arrowL from '../../access/icons/arrowLeftIcon.svg';
import arrowR from '../../access/icons/arrowRightIcon.svg';
import notifedIcon from '../../access/icons/notifedIcon.svg';
import searchIcon from  '../../access/icons/searchIcon.svg';
import profileImg from '../../access/icons/profileImg.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.date_select}>
                <button>Сегодня</button>
                <select name="" id="">
                    <option value="">День</option>
                </select>
                <div className={styles.date}>
                    <img src={arrowL} alt=""/>
                    <img src={arrowR} alt=""/>
                    <p>2 сентября 2022</p>
                </div>
            </div>

            <div className={styles.account_items}>
                <button><img src={notifedIcon} alt=""/></button>
                <button><img src={searchIcon} alt=""/></button>
                <img src={profileImg} alt=""/>
            </div>
        </div>
    );
};

export default Header;
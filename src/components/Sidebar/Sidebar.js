import React from 'react';
import styles from './Sidebar.module.css';
import media from '../../access/icons/calendarIcon.svg';
import addMark from '../../access/icons/addMarkIcon.svg';

const Sidebar = () => {
    return (
        <>
            <div className={styles.logo}>
                <img src={media} alt=""/>
                <p>Calendar</p>
            </div>
            <div className={styles.side_bar}>

                <div className={styles.date_select}>
                    <button>Создать</button>
                    <p>Здесь должен быть календарь</p>
                </div>
                <div>
                    <div className={styles.marks}>
                        <h3>Мои метки</h3>
                        <img src={addMark} alt=""/>
                    </div>
                    <div className={styles.marks_item}>
                        <div>
                            <div className={styles.mark_color} style={{backgroundColor: '#E37DAC'}}/>
                            <p>Личный</p>
                        </div>
                        <div>
                            <div className={styles.mark_color} style={{backgroundColor:'#80DEA0'}}/>
                            <p>Рабочий</p>
                        </div>
                        <div>
                            <div className={styles.mark_color} style={{backgroundColor:'#8A75FA'}}/>
                            <p>Мероприятия</p>
                        </div>
                        <div>
                            <div className={styles.mark_color} style={{backgroundColor:'#FFD480'}}/>
                            <p>Проекты</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
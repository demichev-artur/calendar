import React from 'react';
import styles from "./Registration.module.css"
import media from "../../access/images/calendarBG.png";

const Registration = () => {
    return (
        <div className={styles.authorization}>
            <div className={styles.form_blank}>

                <form action="javascript:void(0)">
                    <h1 className={styles.title_blank}>Добро пожаловать!</h1>

                    <p>ФИО</p>
                    <input type="text" name="" id=""/>

                    <p>Отдел</p>
                    <input type="text" name="" id=""/>

                    <p>Должность</p>
                    <input type="text" name="" id=""/>

                    <p>Почта</p>
                    <input type="text" name="" id=""/>

                    <p>Пароль</p>
                    <input type="text" name="" id=""/>

                    <p>Повторите пароль</p>
                    <input type="text" name="" id=""/>

                    <button>СОХРАНИТЬ</button>

                </form>

            </div>

            <div className={styles.bg_blue}>
                <div>
                    <h1 className={styles.bg_blue_title}>Calendar</h1>
                    <img src={media} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Registration;
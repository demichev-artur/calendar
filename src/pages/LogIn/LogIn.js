import React from 'react';
import media from "../../access/images/calendarBG.png";
import styles from './LogIn.module.css';

const LogIn = () => {
    return (
        <div className={styles.authorization}>
            <div className={styles.form_blank}>

                <form action="javascript:void(0)">
                    <h1 className={styles.title_blank}>Вход</h1>

                    <p>Логин</p>
                    <input type="text" name="" id=""/>

                    <p>Пароль</p>
                    <input type="text" name="" id=""/>

                    <a href="#">Забыли пароль?</a>

                    <button>ВОЙТИ</button>

                    <div className={styles.register}>
                        <p className="">У вас нет аккаунта?</p>
                        <a href="#">Регистрация</a>
                    </div>
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

export default LogIn;
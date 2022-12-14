import React from 'react';
import media from "../../access/images/calendarBG.png";
import styles from './LogIn.module.css';
import {Link} from "react-router-dom";


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

                    <a className={styles.a} href="#">Забыли пароль?</a>

                    <Link className={styles.link} to="/calendar">
                        <button>ВОЙТИ</button>
                    </Link>

                    <div className={styles.register}>
                        <p className="">У вас нет аккаунта?</p>
                        <Link className={styles.a} to="/registration">Регистрация</Link>
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
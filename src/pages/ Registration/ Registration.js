import React from 'react';
import styles from "./Registration.module.css"
import media from "../../access/images/calendarBG.png";
import addIcon from "../../access/icons/addImg.svg";
import {Link} from "react-router-dom";

const Registration = () => {
    return (
        <div className={styles.authorization}>
            <div className={styles.form_blank}>

                <form action="javascript:void(0)">
                    <h1 className={styles.title_blank}>Добро пожаловать!</h1>

                    <div className={styles.add_profile_img}>
                        <img src={addIcon} alt=""/>
                        <span>Добавьте фото профиля</span>
                    </div>

                    <p>ФИО</p>
                    <input type="text" name="" id=""/>

                    <p>Отдел</p>
                    <select name="" id="">
                        <option value=""></option>
                    </select>


                    <p>Должность</p>
                    <select name="" id="">
                        <option value=""></option>
                    </select>

                    <p>Почта</p>
                    <input type="text" name="" id=""/>

                    <p>Пароль</p>
                    <input type="text" name="" id=""/>

                    <p>Повторите пароль</p>
                    <input type="text" name="" id=""/>
                    <Link className={styles.link} to="/calendar">
                        <button>СОХРАНИТЬ</button>
                    </Link>
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
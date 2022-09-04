import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header>
            <div className={s.container}>
                <h1>Блог и соцсети</h1>
                <p>Идейные соображения высшего порядка, а также сложившаяся структура организации представляет собой
                    интересный эксперимент проверки направлений прогрессивного развития.</p>
            </div>
        </header>
    );
}

export default Header;
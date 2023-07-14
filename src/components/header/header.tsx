import React, {useCallback, useEffect, useState} from 'react';
import styles from './header.module.scss'
import {Link, NavLink, useNavigate} from "react-router-dom";
import Favorite from "../favorites";
import {Simulate} from "react-dom/test-utils";
import keyUp = Simulate.keyUp;

export interface IHeader {
    title: string;
    subtitle: string
    searchDataHandler: any

}

function Header({title, subtitle, searchDataHandler}: IHeader) {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("")
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSearchValue("")
    }

    const handleChange = useCallback((e: any) => {
        setSearchValue(e.target.value);
        setTimeout(()=>{
            searchDataHandler(e.target.value)
        },1500)
    }, [])

    // console.log("%csearchName", "font-size: 20px; color: red; font-weight: bold;");
    return (
        <div className={styles.header}>
            <div className={styles.header_routes}>
                <NavLink to={'/home'} className={styles.link}>HOME</NavLink>
                <Link to={'/favorite'} className={styles.link}>FAVORITE</Link>
            </div>
            <h1>{title}</h1>
            <span style={{fontWeight: 'bold', color: "whitesmoke"}}>{subtitle}</span><br/><br/>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder={"Search for beer name"}
                       className={styles.inputName}
                       value={searchValue}
                       onChange={handleChange}
                />
            </form>


        </div>
    );
}

export default Header;
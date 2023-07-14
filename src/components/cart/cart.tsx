import React, {useState} from 'react';
import styles from './cart.module.scss'
import star from "../../assets/images/star.svg"
import goldStar from "../../assets/images/goldstar.png"
import classNames from "classnames";
import {useNavigate} from "react-router-dom";

export interface ICart {
    name:string;
    tagline:string;
    image:string
    isLarge?:boolean
    id:number
    onClick:any
    handleClick:any
}

function Cart(props:ICart) {
    const {name,tagline,image,isLarge = false,handleClick} = props;
    const navigate = useNavigate();
    const [isFill,setIsFill] = useState(true)
    // const handleClick = (e:any)=>{
    //     navigate(`/beer/:${name}`);
    //
    //
    // }
    const colorChangeHandler = ()=>{
        setIsFill(!isFill)
    }
    return (
        <div className={classNames(styles.cartContainer)}>
        <div className={classNames(styles.cart, isLarge ? styles.cart_large : "")}>
            <div className={styles.starBox}>
                <img src={isFill?star:goldStar} alt="star" className={styles.star} onClick={colorChangeHandler}/>
            </div>
            <div style={{height:"100%"}} onClick={handleClick}>
            <img src={image} alt="" className={styles.image}/>
            <h1 className={styles.beerName}>{name}</h1>
            <span className={styles.tagline}>{tagline}</span>
            </div>
        </div>
        </div>
    );
}

export default Cart;
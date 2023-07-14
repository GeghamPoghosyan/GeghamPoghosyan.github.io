import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cart from "../cart/cart";
import styles from './content.module.scss'
import ReactModal from "react-modal";
import {FaTimes} from 'react-icons/fa'
import Random from "../random/random";


function Content(props: any) {
    const {searchData} = props
    const [beers, setBeers]: any = useState([]);
    const [singleBeer, setSingleBeer]: any = useState(null);
    const [skip, setSkip] = useState(false);
    const [beerId, setBeerId] = useState("");
    useEffect(() => {
         axios.get(`https://api.punkapi.com/v2/beers?${searchData ? "&beer_name=" + searchData : ""}&page=1&per_page=40`).then((response) => {
            setBeers(response.data);
        });

    }, [searchData, setBeers]);


        useEffect(() => {
            axios.get(`https://api.punkapi.com/v2/beers/${beerId}`).then((res: any) => {
                setSingleBeer(res.data)
                console.log(res.data,121212)
            })

        }, [beerId])

    const handleClick = (id: any) => {
        setBeerId(id)
        setSkip(!skip)
    }
    const onCloseHandler  = ()=>{
        setSkip(false)
    }
    return (
        <div className={styles.content}>
            {beers?.map((item: any) => (<Cart handleClick={() => handleClick(item.id)}
                                              key={item.id}
                                              name={item.name}
                                              tagline={item.tagline}
                                              image={item.image_url}
                                              id={item.id}
                                              onClick={handleClick}/>
            ))}
            <ReactModal isOpen={skip} className={styles.myModal} overlayClassName={styles.myOverlay}
                        ariaHideApp={false}>
                <div className={styles.cancelButtonContainer}>
                    <FaTimes onClick={onCloseHandler} style={{cursor: "pointer"}}/>
                </div>
                {singleBeer ? <div className={styles.modalContainer}>
                    <div className={styles.imageContainer}>

                        <img src={singleBeer[0].image_url} alt="picture" width="100%" height="100%"/>
                    </div>
                    <div className={styles.containContainer}>
                        <h1 className={styles.beerNameInPopup}>{singleBeer[0].name}</h1>
                        <h2 className={styles.beerTagLineInPopup}>{singleBeer[0].tagline}</h2>
                        <div style={{border:"4px solid rgb(157, 37, 136)", width:"7rem"}}></div><br/>
                        <h1 style={{display:"inline",color:"gray"}}>IBU:</h1> <span className={styles.contains}>{singleBeer[0].ibu}</span>&nbsp;&nbsp;&nbsp;
                        <h1 style={{display:"inline",color:"gray"}}>ABV:</h1> <span className={styles.contains}>{singleBeer[0].abv}%</span>&nbsp;&nbsp;&nbsp;
                        <h1 style={{display:"inline",color:"gray"}}>EBC:</h1>  <span className={styles.contains}>{singleBeer[0].ebc}</span>
                        <p style={{color:"grey"}}> {singleBeer[0].description}</p>
                        <h1 style={{color:"gray"}}>Best served with</h1>
                        <ul>
                            {singleBeer[0].food_pairing[0]?<li style={{color:"gray"}}>{singleBeer[0].food_pairing[0]}</li>:null}
                            {singleBeer[0].food_pairing[1]?<li style={{color:"gray"}}>{singleBeer[0].food_pairing[1]}</li>:null}
                            {singleBeer[0].food_pairing[2]?<li style={{color:"gray"}}>{singleBeer[0].food_pairing[2]}</li>:null}
                            {singleBeer[0].food_pairing[3]?<li style={{color:"gray"}}>{singleBeer[0].food_pairing[3]}</li>:null}
                        </ul>
                    </div>
                </div> : null}
                <h2 className={styles.youMight}>You might also like:</h2>
                <div className={styles.randomContainer}>
                    <Random/>
                    <Random/>
                    <Random/>
                </div>

            </ReactModal>
        </div>


    );
}


export default Content;
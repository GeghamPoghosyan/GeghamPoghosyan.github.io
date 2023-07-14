import React, {useEffect, useState} from 'react';
import styles from "../random/random.module.scss"
import axios from "axios";

function Random() {
    const [random,setRandom] = useState<any>(null);
    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers/random`).then((res) => {
           setRandom(res.data)
            console.log(res)
        })

    }, [])
    console.log(random)
    return (
        random &&
                <div className={styles.modalFooterPictures}>
                    {random[0].image_url?
                        <img src={random[0].image_url} alt="" width={35} height={130}/>:
                        <img src={"https://images.punkapi.com/v2/7.png"} alt="" width={35} height={130}/>
                    }
                    <h3 style={{color:"grey"}}>{random[0].name}</h3>
                </div>

    );
}

export default Random;
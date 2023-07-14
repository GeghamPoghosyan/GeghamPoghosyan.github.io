import React from 'react';
import Header from "../header";
import Footer from "../footer/footer";
import styles from "./layout.module.scss"
export interface ILayout {
    children:React.ReactElement
    searchDataHandler:any
}
function Layout({children,searchDataHandler}:ILayout) {
    return (
        <div>
            <Header title="The Beer Bank" subtitle="Find Your favorite here" searchDataHandler = {searchDataHandler}/>
            <div className={styles.mainContent}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Header from "./components/header";
import Layout from "./components/layout/layout";
import Favorite from "./components/favorites";
import Home from "./components/home";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Content from "./components/content";



function App() {
    const [searchData,setSearchData] = useState('')
    const searchDataHandler = useCallback((text:string)=>{
        setSearchData(text)
    },[setSearchData,searchData])
    console.log(searchData);
    return (
        <BrowserRouter>
            <Layout searchDataHandler = {searchDataHandler}>
                <Routes>
                    <Route path={'/'} element={<Content searchData = {searchData} />}/>
                    <Route path={'/favorite'} element={<Favorite/>}/>
                    <Route path={'/home'} element={<Home/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Catalog from "./Catalog";
import Main from "./Main";

export const PATH = {
    CATALOG: '/catalog',
    MAIN: '/main'
}

export const Pages = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/main'}/>}/>

            <Route path={'/main'} element={<Main/>}/>
            <Route path={'/catalog'} element={<Catalog/>}/>
        </Routes>
    );
};

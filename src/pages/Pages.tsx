import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Catalog from "./Catalog";
import Main from "./Main";
import {Error404} from "./Error404";

export const path = {
    catalog: '/catalog',
    main: '/main'
}

export const Pages = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={path.catalog}/>}/>

            <Route path={path.main} element={<Main/>}/>
            <Route path={path.catalog} element={<Catalog/>}/>

            <Route path={'/*'} element={<Error404/>}/>
        </Routes>
    );
};

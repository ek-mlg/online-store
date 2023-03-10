import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Pages} from "./pages/Pages";

const App = () => {
    //  Я установил уже редакс, рауты, uuid, предлагаю также использовать Styled Components тут, в реальном проекте, интересно
    //  посмотреть удобнее ли он модулей, также уже создал папку страниц и одноименный компонент для роута, удачи нам :)
    return (
        <>
            <Header/>
                <Pages/>
            <Footer/>
        </>
    );
}

export default App;

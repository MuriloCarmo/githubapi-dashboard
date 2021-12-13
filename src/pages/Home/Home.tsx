import React from "react";
import {SideArea} from "../../components/SideArea/SideArea";
import {HomePageArea} from "./Home.styles";
import {Header} from "../../components/Header/Header";
import {SearchField} from "../../components/SearchField/SearchField";

export const Home: React.FunctionComponent<any> = () => {
    return (
        <>
            <SideArea/>
            <HomePageArea>
                <Header/>
                <SearchField />
            </HomePageArea>
        </>
    )
}
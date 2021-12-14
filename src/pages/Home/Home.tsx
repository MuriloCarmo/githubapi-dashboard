import React, {useState} from "react";
import {SideArea} from "../../components/SideArea/SideArea";
import {HomePageArea} from "./Home.styles";
import {Header} from "../../components/Header/Header";
import {SearchField} from "../../components/SearchField/SearchField";
import {RepositoriesArea} from "../../components/RepositoriesArea/RepositoriesArea";

export const Home: React.FunctionComponent<any> = () => {
    const [loading, setLoading] = useState(false);


    const getRepositoryData = (data: []) => {


    }

    return (
        <>
            <SideArea/>
            <HomePageArea>
                <Header/>
                <SearchField setLoading={setLoading} getData={getRepositoryData}/>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <RepositoriesArea/>
                )}


            </HomePageArea>
        </>
    )
}
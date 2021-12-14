import React, {useState} from "react";
import {SideArea} from "../../components/SideArea/SideArea";
import {HomePageArea} from "./Home.styles";
import {Header} from "../../components/Header/Header";
import {SearchField} from "../../components/SearchField/SearchField";
import {RepositoriesArea} from "../../components/RepositoriesArea/RepositoriesArea";
import api from "../../services/api";


export const Home: React.FunctionComponent = () => {
    const [loading, setLoading] = useState(false);
    const [dataArray, setDataArray] = useState([]);

    interface IData {
        language: string;
        name: string,
        stargazers_count: number,
        created_at: string,
        description: string,
        html_url: string,
        forks: number,
        saveData: React.MouseEventHandler<HTMLButtonElement>,
    }

    const getRepositoryData = (data: any) => {
        setDataArray(data.items);
    }

    const saveRepositories = async (item: IData) => {
        const dataRepository = {
            name: item.name,
            stargazers_count: item.stargazers_count,
            repository_created_at: item.created_at,
            description: item.description,
            url: item.html_url,
            forks: item.forks,
            language: item.language
        };

        try {
            const result = await api.post('/saverepositories', dataRepository);
            if(result.status === 200) {
                alert(`Sucesos ao Salvar ${dataRepository.name}`);
            } else {
                alert("Falha ao Salvar");
            }

        } catch (e) {
            alert("erro");
            console.log("Erro", e);
        }
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
                    <>
                        {dataArray.length < 1 ? (
                            <h2>Repositórios não Encontrados</h2>
                        ) : (
                            dataArray.map((item: IData, key) => (
                                <RepositoriesArea key={key} name={item.name} stars={item.stargazers_count}
                                                  created_at={item.created_at} description={item.description}
                                                  html_url={item.html_url} forks={item.forks}
                                                  onClick={() => saveRepositories(item)}/>
                            ))
                        )}
                    </>
                )}
            </HomePageArea>
        </>
    )
}
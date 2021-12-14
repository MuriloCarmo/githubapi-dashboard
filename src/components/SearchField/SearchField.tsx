import React, {Dispatch, SetStateAction, useState} from "react";
import {SearchArea, SearchButton, SearchSelect, TextField, LanguageOption} from "./SearchField.styles";
import SearchIcon from '@material-ui/icons/Search';
import {languages} from "../../services/languages";
import axios from 'axios';

type IProps = {
    setLoading: Dispatch<SetStateAction<boolean>>;
    getData: () => [];
}

export const SearchField: React.FC<IProps> = ({setLoading, getData}) => {
    const [languageValue, setLanguageValue] = useState('');


    const handleSearchClick = async () => {
        setLoading(true);
        if (languageValue === '') {
            alert("Selecione uma Linguagem");
        } else {
            const response = await axios.get(`https://api.github.com/search/repositories?q=${languageValue}:javascript&sort=stars&order=desc&per_page=5`)

            console.log('aqui o response', response.data);
        }


        setLoading(false);
    }

    return (
        <SearchArea>
            <SearchSelect>
                <TextField>
                    Selecione a Linguagem
                </TextField>
                <LanguageOption onChange={(e) => setLanguageValue(e.target.value)}>
                    {languages.map((item, key) => (
                        <option key={key} value={item.urlParam}>{item.name}</option>
                    ))}
                </LanguageOption>
            </SearchSelect>
            <SearchButton onClick={handleSearchClick}>
                <SearchIcon/>
            </SearchButton>
        </SearchArea>
    )
}
import {SearchArea, SearchButton, SearchSelect, TextField, LanguageOption} from "./SearchField.styles";
import SearchIcon from '@material-ui/icons/Search';
import {languages} from "../../services/languages";
import {useState} from "react";

export const SearchField = () => {
    const [languageValue, setLanguageValue] = useState('');


    const handleSearchClick = async () => {

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
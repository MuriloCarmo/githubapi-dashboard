import {SearchArea, SearchButton, SearchSelect, TextField, LanguageOption} from "./SearchField.styles";
import SearchIcon from '@material-ui/icons/Search';
import {languages} from "../../services/languages";

export const SearchField = () => {

    return (
        <SearchArea>
            <SearchSelect>
                <TextField>
                    Selecione a Linguagem
                </TextField>
                <LanguageOption>
                    {languages.map((item, key) => (
                        <option value={item.urlParam}>{item.name}</option>
                    ))}
                </LanguageOption>
            </SearchSelect>
            <SearchButton>
                <SearchIcon/>
            </SearchButton>
        </SearchArea>
    )
}
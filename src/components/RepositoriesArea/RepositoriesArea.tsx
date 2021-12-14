import {
    ReposioriesAreaDetails,
    RepositoriesAreaContent,
    RepositoriesAreaIcon,
    RepositoriesAreaMain,
    RepositoriesAreaMainHeader,
    RepositoriesAreaMainBody,
    RepositoriesAreaMainFooter,
    RepositoriesText,
    RepositoriesAreaMainHeaderButton,
    RepositoriesAreaMainHeaderTime,
    RepositoriesAreaMainHeaderValue,
    RepositoriesAreaMainText,
    RepositoriesAreaMainFooterLink,
    RepositoriesAreaDetailsHeader,
    RepositoriesAreaDetailsBody,
    RepositoriesAreaDetailsFooter,
    RepositoriesAreaDetailsText,
    RepositoriesAreaDetailsBodyText,
    RepositoriesAreaDetailsFooterButton
} from "./RepositoriesArea.styles";
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import React from "react";

type IProps = {
    name: string,
    stars: number,
    created_at: string,
    description: string,
    html_url: string,
    forks: number,
    onClick: () => void;
}

export const RepositoriesArea: React.FC<IProps> = ({
                                                       name,
                                                       stars,
                                                       created_at,
                                                       description,
                                                       html_url,
                                                       forks,
                                                       onClick
                                                   }) => {

    function formatDateToDMY(dateString: string) {
        const date = new Date(dateString);
        let d = date.getDate();
        let m = date.getMonth() + 1; //Month from 0 to 11
        let y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;
    }

    const date = formatDateToDMY(created_at);


    // @ts-ignore
    return (
        <>
            <RepositoriesAreaContent>
                <RepositoriesAreaIcon>
                    <MoveToInboxIcon className="repositorie--icon"/>
                </RepositoriesAreaIcon>

                <RepositoriesAreaMain>

                    <RepositoriesAreaMainHeader>
                        <RepositoriesText>
                            {name.toUpperCase()}
                        </RepositoriesText>
                        <RepositoriesAreaMainHeaderButton>
                            STARS
                        </RepositoriesAreaMainHeaderButton>
                        <RepositoriesAreaMainHeaderValue>
                            {stars}
                        </RepositoriesAreaMainHeaderValue>
                        <RepositoriesAreaMainHeaderTime>
                            {`Criado em: ${date}`}
                        </RepositoriesAreaMainHeaderTime>
                    </RepositoriesAreaMainHeader>

                    <RepositoriesAreaMainBody>
                        <LocalOfferIcon/>
                        <RepositoriesAreaMainText>
                            Description: {description}
                        </RepositoriesAreaMainText>
                    </RepositoriesAreaMainBody>

                    <RepositoriesAreaMainFooter>
                        <RepositoriesAreaMainFooterLink href={'teste'}>
                            URL:{html_url}
                        </RepositoriesAreaMainFooterLink>

                    </RepositoriesAreaMainFooter>

                </RepositoriesAreaMain>

                <ReposioriesAreaDetails>
                    <RepositoriesAreaDetailsHeader>
                        <RepositoriesAreaDetailsText>Forks</RepositoriesAreaDetailsText>
                        <BookmarkBorderIcon className="RepositoriesDetails--icon"/>

                    </RepositoriesAreaDetailsHeader>

                    <RepositoriesAreaDetailsBody>
                        <RepositoriesAreaDetailsBodyText>{forks}</RepositoriesAreaDetailsBodyText>

                    </RepositoriesAreaDetailsBody>

                    <RepositoriesAreaDetailsFooter>
                        <RepositoriesAreaDetailsFooterButton
                            onClick={onClick}
                        >SALVAR</RepositoriesAreaDetailsFooterButton>
                    </RepositoriesAreaDetailsFooter>

                </ReposioriesAreaDetails>

            </RepositoriesAreaContent>

        </>

    )
}
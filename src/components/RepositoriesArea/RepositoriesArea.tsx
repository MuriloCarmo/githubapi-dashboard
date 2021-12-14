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


export const RepositoriesArea = () => {

    return (
        <>
            <RepositoriesAreaContent>
                <RepositoriesAreaIcon>
                    <MoveToInboxIcon className="repositorie--icon"/>
                </RepositoriesAreaIcon>

                <RepositoriesAreaMain>

                    <RepositoriesAreaMainHeader>
                        <RepositoriesText>
                            REACTJS
                        </RepositoriesText>
                        <RepositoriesAreaMainHeaderButton>
                            STARS
                        </RepositoriesAreaMainHeaderButton>
                        <RepositoriesAreaMainHeaderValue>
                            450
                        </RepositoriesAreaMainHeaderValue>
                        <RepositoriesAreaMainHeaderTime>
                            Today 10:45 AM
                        </RepositoriesAreaMainHeaderTime>
                    </RepositoriesAreaMainHeader>

                    <RepositoriesAreaMainBody>
                        <LocalOfferIcon/>
                        <RepositoriesAreaMainText>
                            Description: A declarative, efficient, and flexible JavaScript library for building user
                            interfaces.
                        </RepositoriesAreaMainText>
                    </RepositoriesAreaMainBody>

                    <RepositoriesAreaMainFooter>
                        <RepositoriesAreaMainFooterLink href={'teste'}>
                            URL:https://github.com/facebook/react
                        </RepositoriesAreaMainFooterLink>

                    </RepositoriesAreaMainFooter>

                </RepositoriesAreaMain>

                <ReposioriesAreaDetails>
                    <RepositoriesAreaDetailsHeader>
                        <RepositoriesAreaDetailsText>Forks</RepositoriesAreaDetailsText>
                        <BookmarkBorderIcon className="RepositoriesDetails--icon"/>

                    </RepositoriesAreaDetailsHeader>

                    <RepositoriesAreaDetailsBody>
                        <RepositoriesAreaDetailsBodyText>36283</RepositoriesAreaDetailsBodyText>

                    </RepositoriesAreaDetailsBody>

                    <RepositoriesAreaDetailsFooter>
                        <RepositoriesAreaDetailsFooterButton>SALVAR</RepositoriesAreaDetailsFooterButton>

                    </RepositoriesAreaDetailsFooter>

                </ReposioriesAreaDetails>

            </RepositoriesAreaContent>

        </>

    )
}
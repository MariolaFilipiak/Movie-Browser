import { Button, Info, Icon, Wrapper, Header } from "./styled"

export const Error = () => (
    <Wrapper>
        <Icon />
        <Header>Ooops! Something went wrong... </Header>
        <Info>Please check your network connection and try again</Info>
        <Button to={"/"}>Back to home page</Button>
    </Wrapper>
);
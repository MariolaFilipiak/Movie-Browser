import styled from "styled-components";
import { ReactComponent as loading } from "./loading.svg";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
`;
export const StyledSpinner = styled(loading)`
margin-top:120px;
width: 91px;
height: 91px;
@media(max-width: 480px){
    width: 35px;
    height: 35px;
    margin-top:24px;
}
`;
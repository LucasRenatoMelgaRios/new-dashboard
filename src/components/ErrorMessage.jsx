import styled from "styled-components"
import { MdError } from "react-icons/md";

export const ErrorMessage = () => {
    return(
        <>
        <MessageMainContainer>
            <FlexContainer>
                <Message>Error al agregar el elemento.</Message>
                <MdError size={20} color="#3ba5b3"/>
           </FlexContainer>
        </MessageMainContainer>


        </>
    )
}

const MessageMainContainer = styled.div`
    width: 20vw;
    background-color: #ffff;
    color: #3ba5b3;
    padding: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    border-radius: 120px;
    border: 1px solid #3ba5b3;
   

`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Message = styled.p``;


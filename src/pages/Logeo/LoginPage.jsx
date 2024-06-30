import styled from "styled-components"
import { BiPaperclip } from "react-icons/bi";
import { useState } from 'react';
import FloatingLabelInput from "../../components/FloatingLabelInput";
import useAuth from "../../hooks/UseAuth";


export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login}=useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <MainContainer>
            <FormContainer>
                <FirstHalf>
                    <HeaderFirstHalf>
                        <BiPaperclip size={30} />
                        <p>Event Jungle</p>
                    </HeaderFirstHalf>
                    <FirstHalfContent>
                        <Title>Hey There!</Title>
                        <TextContainer>
                            <p>Welcome Back.</p>
                            <p>You are just one step away to your feed.</p>
                        </TextContainer>
                        <Question>Don't have an account yet?</Question>
                        <SimpleButton>Sign Up</SimpleButton>
                    </FirstHalfContent>
                </FirstHalf>
                <SecondHalf>
                    <SmallerTitle>SIGN IN</SmallerTitle>
                    <Form onSubmit={handleSubmit}>
                        <FloatingLabelInput
                            type="text"
                            label="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <FloatingLabelInput
                            type="password"
                            label="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p style={{ color: "#f88233", cursor: "pointer" }}>Forgot password?</p>
                        <SimpleButton type="submit">Sign In</SimpleButton>
                    </Form>
                </SecondHalf>
            </FormContainer>
        </MainContainer>
    );
}

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FirstHalf = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #3ba5b3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 20px;



`;

const HeaderFirstHalf = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    align-items: center;
    font-weight: bold;
    color: #ffff;
    white-space: nowrap;
    padding-left: 20px;
`;

const Title = styled.h2`
    font-size: 2.2rem;
`;

const SmallerTitle = styled.h3`
    color: #3ba5b3;
`;

const FirstHalfContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #ffff;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;

`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: bold;


    p{
        margin: 0; 
        padding: 5px; 
    }

`;

const SecondHalf = styled.div`
    width: 50%;
    background-color: #ffffff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    button{
        width: 90%;
        padding: 15px;
        font-weight: bold;
    }

    p{
        align-self: flex-end;
    }
`;


const FormContainer = styled.div`
    width: 50%;
    display: flex;
    border-radius: 40px;

`;

const SimpleButton = styled.button`
    background-color: #3ba5b3;
    width: 30%;
    padding: 10px;
    border: 2px solid #ffff;
    border-radius: 30px;
    color: #ffff;
    cursor: pointer;

`;

const Question = styled.p`
    color: #dddddd;
`;


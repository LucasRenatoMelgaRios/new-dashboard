import styled from "styled-components"
import { BiPaperclip } from "react-icons/bi";
import { useState } from 'react';
import FloatingLabelInput from "../../components/FloatingLabelInput";


export const RegisterPage = () => {

    return(
        <>
        <MainContainer>

            <FormContainer>
                <FirstHalf>
                    <HeaderFirstHalf>
                        <BiPaperclip size={30}/>
                        <p>Event Jungle</p>
                    </HeaderFirstHalf>
                    <FirstHalfContent>
                    <Title>New here?</Title>
                        <TextContainer>
                        <p>Create an account.</p>
                        <p>Remember to create a safe password.</p>
                        </TextContainer>
                        <Question>Have an account already?</Question>
                        <SimpleButton>Sign in</SimpleButton>
                    </FirstHalfContent>
                </FirstHalf>
                <SecondHalf>
                    <SmallerTitle>SIGN UP</SmallerTitle>
                    <Form>
                    <FloatingLabelInput 
                            type="text" 
                            label="Username"
                            required 
                        />
                                                <FloatingLabelInput 
                            type="email" 
                            label="Email Adress"
                            required 
                        />
                        <FloatingLabelInput 
                            type="password" 
                            label="Password"
                            required 
                        />
                                                <FloatingLabelInput 
                            type="password" 
                            label="Repeat Password"
                            required 
                        />
                           
                        <SimpleButton>Sign In</SimpleButton>
                    </Form>
  
                </SecondHalf>
            </FormContainer>

        </MainContainer>
        </>
    )
}

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
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
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
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
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
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
    flex-direction: row-reverse;

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

import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`;


export const LoginWrapper = styled.form`
    max-width: 500px;
    width: 50%;
    height: 50%;
    display: grid;
    background: #dfdfdf52;
    border-radius: 20px;
    border: none;
`;

export const LoginItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;

    &:last-child{
        justify-content: center;
    }
`;

export const Title = styled.label`
    margin-right: 10px;
    font-size: 1.2rem;
    /* font-weight: bold; */
    color: #fff;
    

`;

export const LoginInput = styled.input`
    height: 2rem;
    border-radius: 10px;
    border:none;
    width: 70%;
    padding:2px 10px;
    font-size: 1rem;


    &:focus{
        background: #99a7eb;
        outline: none;
    }

`;

export const GoButton = styled.button`
    background: #99a7eb;
    padding:10px 20px;
    font-size:1rem;
    color: black;
    border-radius:10px;
    border-color:transparent;


    &:hover{
        opacity: .9;
        cursor: pointer;
    }

    &:active{
        opacity: .7;
    }

`;






import { useState} from "react";
import {
    LoginContainer,
    LoginItem,
    LoginWrapper,
    Title,
    LoginInput,
    GoButton
} from "./LoginElements";

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const usernameHnadler = (event) =>{
        setUsername(event.target.value);
    }


    const passwordHandler = (event) =>{
        setPassword(event.target.value)
    }


    const SubmitHandler = (event) =>{
        event.preventDefault();


        console.log(password , username)

    }



    return (
        <LoginContainer>
            <LoginWrapper onSubmit={SubmitHandler}>
                <LoginItem key={'login01'}>
                    <Title>Username</Title>
                    <LoginInput  value={username} type="text" onChange={usernameHnadler} />
                </LoginItem>
                <LoginItem key={'login02'}>
                    <Title>Password</Title>
                    <LoginInput value={password} type="password" onChange={passwordHandler}  />
                </LoginItem>
                <LoginItem key={'login03'}>
                    <GoButton>Login</GoButton>
                </LoginItem>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default Login;

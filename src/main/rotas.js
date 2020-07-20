import React from 'react'

import Login from '../views/login'
import Home from '../views/home'
//import AuthService from '../app/service/authService'
import CadastroUsuario from '../views/cadastroUsuario'
import ConsultaLancamentos from '../views/lancamentos/consultaLancamentos'
import CadastroLancamentos from '../views/lancamentos/cadastroLancamentos'
import {AuthConsumer} from '../main/provedorAutenticacao'

import {Route, Redirect, Switch, HashRouter } from 'react-router-dom'



//function RotaAutenticada({component: Component, ...props}){
function RotaAutenticada({component: Component, isUsuarioAutenticado, ...props}){

    return (
        <Route {...props} render = { (componentProps) => {
            if (isUsuarioAutenticado){
                return (
                    <Component {...componentProps}/>
                )
            }else{
                return(
                    <Redirect to={{pathname: '/login', state: {from: componentProps.location}}}/>
                )
            }
        }}/>
    )
}

function Rotas(props){
    return (
        <HashRouter>
            <Switch>                
                <Route path="/login" component={Login}/>
                <Route path="/cadastroUsuarios" component={CadastroUsuario}/>
                <RotaAutenticada isUsuarioAutenticado={props.isUSuarioAutenticado} path="/home" component={Home}/>
                <RotaAutenticada isUsuarioAutenticado={props.isUSuarioAutenticado} path="/consultaLancamentos" component={ConsultaLancamentos}/>
                <RotaAutenticada isUsuarioAutenticado={props.isUSuarioAutenticado} path="/cadastroLancamentos/:id?" component={CadastroLancamentos}/>
            </Switch>
        </HashRouter>
    )
}

export default () => (
    <AuthConsumer>
        { (context) => (<Rotas isUSuarioAutenticado={context.isAutenticado}/>) }
    </AuthConsumer>
)
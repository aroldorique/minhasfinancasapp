import React from 'react'

import NavbarItem from './navbarItem'
import AuthService from '../app/service/authService'
import {AuthConsumer} from '../main/provedorAutenticacao'
/*
const deslogar = () => {
    AuthService.removerUsuarioAutenticado();
}
/*
const isUsuarioAutenticado = () => {
    return AuthService.isUsuarioAutenticado();
}
*/
function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="#/home" className="navbar-brand">Minhas Finanças</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">                    
                    <span className="navbar-toggler-icon"></span>
                </button>                
                <div className="navbar-collapse collapse" id="navbarResponsive">
                    <ul className="navbar-nav mr-auto">
                        <NavbarItem render={props.isUsuarioAutenticado} href="#/home" label="Home"/>
                        <NavbarItem render={props.isUsuarioAutenticado} href="#/cadastroUsuarios" label="Usuários"/>
                        <NavbarItem render={props.isUsuarioAutenticado} href="#/consultaLancamentos" label="Lançamentos"/>
                        <NavbarItem render={props.isUsuarioAutenticado} onClick={props.deslogar} href="#/login" label="Sair"/>                    
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default () => (
    <AuthConsumer>
        {(context) => (
            <Navbar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao}/>
        )}
    </AuthConsumer>
)
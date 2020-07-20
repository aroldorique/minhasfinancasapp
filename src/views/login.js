import React from 'react'

import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'
//import axios from 'axios'

import UsuarioService from '../app/service/usuarioService'
import LocalStorageService from '../app/service/localStorageService'
import {mensagemErro} from '../components/toastr'
import { AuthContext } from '../main/provedorAutenticacao'

class Login extends React.Component{

    state = {
        email: '',
        senha: ''
        //mensagemErro: null
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }



    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then(response =>{
            //pode ser em cookies ou em local storage
            //console.log('respose: ', response.data)
            //localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
            //LocalStorageService.adicionarItem('_usuario_logado', response.data)
            this.context.iniciarSessao(response.data)
            this.props.history.push('/home')
        }).catch(erro => {
            //this.setState({mensagemErro: erro.response.data})
            mensagemErro(erro.response.data)            
        })


        /*axios
            .post('http://localhost:8080/api/usuarios/autenticar', {
                email: this.state.email,
                senha: this.state.senha
            }).then(response =>{
                //pode ser em cookies ou em local storage
                //console.log('respose: ', response.data)
                localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
                this.props.history.push('/home')
            }).catch(erro => {
                this.setState({mensagemErro: erro.response.data})
            })*/
        
        
        //console.log('E-mail: ', this.state.email)
        //console.log('Senha: ', this.state.senha)
    }

    prepareCadastrar = ()=> {
        this.props.history.push('/cadastroUsuarios')
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <span>{this.state.mensagemErro}</span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="E-mail *" htmlFor="exmpleInputEmail1">
                                                    <input type="email" 
                                                        value={this.state.email}
                                                        onChange={e => this.setState({email: e.target.value})}
                                                        className="form-control" 
                                                        id="exampleInputEmail1" 
                                                        aria-describedby="emailHelp" 
                                                        placeholder="Digite o Email"/>
                                                </FormGroup>            
                                                <FormGroup label="Senha *" htmlFor="exampleInputPassword1">
                                                    <input type="password"
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({senha: e.target.value})}
                                                        className="form-control" 
                                                        id="exampleInputPassword1" 
                                                        placeholder="Password"/>
                                                </FormGroup>
                                                <button onClick={this.entrar} className="btn btn-success"><i className="pi pi-sign-in"></i> Entrar</button>
                                                <button onClick={this.prepareCadastrar} className="btn btn-danger"><i className="pi pi-plus"></i> Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>      
                                </div>                                
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

Login.contextType = AuthContext

export default withRouter (Login)
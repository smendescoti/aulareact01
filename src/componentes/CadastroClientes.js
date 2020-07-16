import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = "http://reactdasboard-001-site1.dtempurl.com/api/cliente";

class CadastroCliente extends Component {

    //construtor
    constructor(props){
        super(props);

        //objeto state -> utilizado para armazenar informações deste componente
        this.state = {
            nome : '', email : '', mensagem : ''
        };

        //registrar as funções do componente
        this.cadastrarCliente = this.cadastrarCliente.bind(this);
        this.lerNome = this.lerNome.bind(this);
        this.lerEmail = this.lerEmail.bind(this);
    }

    //função para ler o conteudo preenchido no campo nome do formulario
    lerNome(e){ //e.target.value => retorna o valor do campo texto
        this.setState({ nome : e.target.value });
    }

    //função para ler o conteudo preenchido no campo email do formulario
    lerEmail(e){ //e.target.value => retorna o valor do campo texto
        this.setState({ email : e.target.value });
    }

    //função para executar o evento SUBMIT do formulário
    cadastrarCliente(e){
        e.preventDefault(); //anular o submit do formulário

        this.setState({ mensagem : "Processando, por favor aguarde." });

        var requestJSON = {
            nome : this.state.nome,
            email : this.state.email
        };

        axios.post(apiUrl, requestJSON)
            .then(
                result => {
                    console.log(result);
                    this.setState({
                        mensagem : result.data.mensagem,
                        nome : '',
                        email : ''
                    });
                }
            );
    }

    render() {
        return (
            <div>
                <h4>Cadastro de Clientes</h4>
                
                <form method="post" onSubmit={this.cadastrarCliente}>

                    <div className="form-group">
                        <label>Nome do Cliente:</label>
                        <input type="text" 
                            required="required"
                            className="form-control col-md-6"
                            placeholder="Digite aqui"
                            onChange={this.lerNome}
                            value={this.state.nome} />
                    </div>

                    <div className="form-group">
                        <label>Email do Cliente:</label>
                        <input type="email" 
                            required="required"
                            className="form-control col-md-6"
                            placeholder="Digite aqui" 
                            onChange={this.lerEmail}
                            value={this.state.email} />
                    </div>

                    <input type="submit" value="Cadastrar Cliente"
                        className="btn btn-success"/>

                    <br/>
                    <br/>

                    <h5>{this.state.mensagem}</h5>

                </form>

            </div>
        )
    }
}

export default CadastroCliente;
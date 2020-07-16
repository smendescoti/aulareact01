import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = "http://reactdasboard-001-site1.dtempurl.com/api/cliente";

class ConsultaCliente extends Component{

    constructor(props){
        super(props);

        this.state = {
            listagemClientes : []
        }

        this.consultarClientes = this.consultarClientes.bind(this);
    }

    componentDidMount(){
        this.consultarClientes();
    }

    consultarClientes(){
        axios.get(apiUrl)
            .then(
                result => {
                    this.setState({ listagemClientes : result.data });
                }
            );
    }

    render(){
        return(
            <div>
                <h4>Consulta de Clientes</h4>
                
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome do Cliente</th>
                            <th>Email</th>
                            <th>Operações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listagemClientes.map(
                                item => (
                                    <tr key={item.idCliente}>
                                        <td>{item.idCliente}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button className="btn btn-primary btn-sm">
                                                Atualizar
                                            </button>
                                            <button className="btn btn-danger btn-sm ml-1">
                                                Excluir
                                            </button>
                                        </td>         
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">
                                Quantidade de clientes: 
                                {this.state.listagemClientes.length}
                            </td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}

export default ConsultaCliente;
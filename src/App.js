import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import CadastroCliente from './componentes/CadastroClientes';
import ConsultaCliente from './componentes/ConsultaClientes';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
              <h3>Sistema REACT STATELESS</h3>
              <p>Curso REACT - COTI Informática</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li>
                  <NavLink to="/cadastro-clientes">Cadastrar Clientes</NavLink>                  
                </li>
                <li>
                  <NavLink to="/consulta-clientes">Consultar Clientes</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <Route path="/cadastro-clientes" component={CadastroCliente}/>
              <Route path="/consulta-clientes" component={ConsultaCliente}/>
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }

}

export default App;
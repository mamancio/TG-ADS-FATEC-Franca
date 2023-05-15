import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import ProdutoCrud from '../components/produto/ProdutoCrud'
import EmpresaCrud from '../components/empresa/EmpresaCrud'
import FornecedorCrud from '../components/fornecedor/FornecedorCrud'
import SetorCrud from '../components/setor/SetorCrud'
import DescricaoCrud from '../components/descricao/DescricaoCrud'
import EspecificacaoCrud from '../components/especificacao/EspecificacaoCrud'
import ApresentacaoCrud from '../components/apresentacao/ApresentacaoCrud'
import UnidadeCrud from '../components/unidade/UnidadeCrud'
import EnderecoCrud from '../components/endereco/EnderecoCrud'
import RequisicaoCrud from '../components/requisicao/RequisicaoCrud'
import EntradaCrud from '../components/entrada/EntradaCrud'
import AtendimentoCrud from '../components/atendimento/AtendimentoCrud'


export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/produtos' component={ProdutoCrud} />
        <Route path='/empresas' component={EmpresaCrud} />
        <Route path='/fornecedores' component={FornecedorCrud} />
        <Route path='/setores' component={SetorCrud} />
        <Route path='/descricoes' component={DescricaoCrud} />
        <Route path='/especificacoes' component={EspecificacaoCrud} />
        <Route path='/apresentacoes' component={ApresentacaoCrud} />
        <Route path='/unidades' component={UnidadeCrud} />
        <Route path='/enderecos' component={EnderecoCrud} />
        <Route path='/requisicoes' component={RequisicaoCrud} />
        <Route path='/entradas' component={EntradaCrud} />
        <Route path='/atendimentos' component={AtendimentoCrud} />
        <Redirect from='*' to='/' />
    </Switch>
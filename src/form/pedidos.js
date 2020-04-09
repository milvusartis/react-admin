import React, { Component } from 'react'
import api from "../service/api";
import '../plugins/style.css'

export default class formValidation extends Component {
    state = {
        pedidos: [],
    }
    async buscar() {
        let res = await api.get("/pedidos")
        this.setState({ pedidos: res.data })
    }
    async aprovarPedido(event,pedido) {
        let idPedido = pedido.idPedido
        event.preventDefault()
        let res = await api.put("/pedidos/"+idPedido+"/aprovar")
        console.log(res)
    }
    componentDidMount() {
        this.buscar()
    }
    render() {
        return (
            <div>
                <div
                    className="right_col"
                    role="main"
                    style={{
                        minHeight: 944
                    }}>
                    <div>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Pagina de aprovação de Pedidos</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                            {this.state.pedidos.map(pedido => {
                                return(
                                    pedido.statusPedido === "PAGAMENTO_CONFIRMADO" && (
                                       <div className="col-md-12 col-sm-12" key={pedido.idPedido}>
                                           <div className="x_panel">
                                               <div className="x_title">
                                                   <h2>Pedido nº: {pedido.idPedido}</h2>
                                                   <ul className="nav navbar-right panel_toolbox">
                                                       <li>
                                                           <a className="collapse-link"><i className="fa fa-chevron-down"/></a>
                                                       </li>
                                                   </ul>
                                                   <div className="clearfix" />
                                               </div>
                                               <div className="x_content" key={pedido.idPedido}>
                                                   <form className="form-horizontal form-label-left" noValidate name="idPedido" defaultValue={pedido.idPedido} onSubmit={(event)=>{this.aprovarPedido(event,pedido)}}>
                                                       <span className="section">Dados do pedido:</span>
                                                       <div className="item form-group">
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Numero do Pedido:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align" name="teste">{pedido.idPedido}</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Endereço de Entrega:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.endereco.rua}</label>
                                                       </div>
                                                       <div className="item form-group">
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Data de Cadastro do Pedido:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.dataPedido}</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Numero do imovel:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.endereco.numero}</label>
                                                       </div>
                                                       <div className="item form-group">
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Valor Total do Pedido:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.valorTotal}</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Complemento:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.endereco.complemento}</label>
                                                       </div>
                                                       <div className="item form-group">
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Nome do Cliente:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.usuario.nome}</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Bairro:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.endereco.bairro}</label>
                                                       </div>
                                                       <div className="item form-group">
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Telefone para Contato:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.telefone}</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Cidade:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.endereco.cidade}</label>
                                                       </div>
                                                       <div className="item form-group">
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Email para Contato:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.usuario.email}</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Estado:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.endereco.uf}</label>
                                                       </div>
                                                       <div className="item form-group">
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">Prazo para Entregar:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align" name="">{pedido.diasParaEntrega}</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">CEP:</label>
                                                           <label className="col-form-label col-md-3 col-sm-3 label-align">{pedido.cliente.endereco.cep}</label>
                                                       </div>
                                                       <div className="x_content">
                                                           <span className="section">Dados dos Produtos:</span>
                                                           <div className="clearfix" />
                                                           {pedido.pedidoItens.map(produto => (
                                                               <div key={produto.idPedidoItem}>
                                                                   <div className="item form-group">
                                                                       <label className="col-form-label col-md-4 col-sm-4 label-align">Codigo do Produto</label>
                                                                       <label className="col-form-label col-md-4 col-sm-4 label-align" name="a">{produto.produto.idProduto}</label>
                                                                   </div>
                                                                   <div className="item form-group d-flex justify-content-between col-6">
                                                                       <label className="col-form-label col-md-2 col-sm-2 label-align"></label>
                                                                       <label className="col-form-label col-md-6 col-sm-6 label-align align-self-center">imagem do Produto</label>
                                                                       <label className="col-form-label col-md-6 col-sm-6 label-align"></label>
                                                                       <img src={produto.produto.imagem} height="20%" width="20%" />
                                                                   </div>
                                                                   <div className="item form-group">
                                                                       <label className="col-form-label col-md-4 col-sm-4 label-align">Nome do Produto</label>
                                                                       <label className="col-form-label col-md-4 col-sm-4 label-align" name="a">{produto.produto.nome}</label>
                                                                   </div>
                                                                   <div className="item form-group">
                                                                       <label className="col-form-label col-md-4 col-sm-4 label-align">Quantidade vendida</label>
                                                                       <label className="col-form-label col-md-4 col-sm-4 label-align" name="a">{produto.quantidade}</label>
                                                                   </div>
                                                                   <div className="ln_solid" />
                                                               </div>
                                                           ))}
                                                       </div>
                                                       <div className="form-group ">
                                                           <div className="col-md-6 offset-md-3 mt-3">
                                                               <button id="send" className="btn btn-success">Aprovar</button>
                                                           </div>
                                                       </div>
                                                   </form>
                                               </div>
                                           </div>
                                       </div>
                                   )
                               )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
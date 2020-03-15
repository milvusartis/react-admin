import React, {Component} from 'react'
import axios from "axios";
import '../plugins/style.css'


export default class formValidation extends Component {
    gerarForm =()=>{
        let guarda=[]
        let i=0
        for(i;i<4;i++){
            guarda.push
            (
                <div className="col-md-12 col-sm-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>Pedido nº:nrpedido{i}</h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li>
                                        <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                    </li>
                                </ul>
                            <div className="clearfix"/>
                        </div>
                        <div className="x_content">
                            <form className="form-horizontal form-label-left" noValidate /*onSubmit={this.salvar}*/>
                                <span className="section">Dados do pedido:</span>
                                <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="nPedido">Numero do Pedido:</label>
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="nPedido">nrpedido{i}</label>
                                </div>
                                <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="idCliente">Codigo do Cliente:</label>
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="idCliente">idCliente{i}</label>
                                </div>
                                <div className="ln_solid"/>
                                <div className="form-group ">
                                    <div className="col-md-6 offset-md-3 mt-3">
                                        <button id="send" type="submit" className="btn btn-success">Aprovar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        return guarda;
    }
    // salvar = async (event) =>{
    //     let nome=event.target.nome.value
    //     let descricao=event.target.descricao.value
    //     let imagem=event.target.imagem.value
    //     let valorUnitario=event.target.vlProduto.value
    //     let disponibilidade=event.target.disponibilidade.value
    //     let codigo=event.target.Categoria.value
    //     event.preventDefault();
    //     await 1;
    //     console.log(valorUnitario)
    //     const api = axios.create({baseURL: "http://localhost:8080/api/ecommerce"})
    //     api.post("/produto",{
    //         nome:nome,
    //         descricao:descricao,
    //         imagem:imagem,
    //         valor:valorUnitario,
    //         disponibilidade:disponibilidade,
    //         categoria:{
    //             codigo:codigo
    //         }
    //     }).then(res => console.log(res.data)).catch(err => console.log(err.data))
    // }
    render() {
        return (
            <div>
                <div
                    className="right_col"
                    role="main"
                    style={{
                    minHeight: 944
                }}>
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Pagina de aprovação de Pedidos</h3>
                            </div>
                        </div>
                        <div className="clearfix"/>
                        <div className="row">
                            {/*Inicio do form*/}
                            {this.gerarForm()}
                            {/*Fim do form*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
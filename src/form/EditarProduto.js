import React, {Component, useEffect} from 'react'
import api from "../service/api";
import '../plugins/style.css'
import Produtos from './Produtos';


export default class EditarProduto extends Component {

    salvar = async (event) =>{
        event.preventDefault()
        let nome=event.target.nome.value
        let descricao=event.target.descricao.value
        let imagem=event.target.imagem.value
        let valorUnitario=event.target.vlProduto.value
        let codigo=event.target.Categoria.value
        await 1;
        api.post(`/admin/produtos/`,{
            nome:nome,
            descricao:descricao,
            imagem:imagem,
            valorUnitario:valorUnitario,
            categoria:{
                id:codigo
            }
        }).then(res => console.log(res.data)).catch(err => console.log(err.data))
        
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
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Pagina de Cadastro</h3>
                            </div>
                        </div>
                        <div className="clearfix"/>
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Pagina de cadastro:
                                            <small>Produto</small>
                                        </h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                    <div className="x_content">
                                        <form className="form-horizontal form-label-left" noValidate onSubmit={this.salvar}>
                                            <span className="section">Preencha as alterações do produto</span>
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="nome">Nome
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        id="nome"
                                                        className="form-control"
                                                        name="nome"
                                                        placeholder="Nome do produto"
                                                        required="required"
                                                        type="text"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="descricao">Descrição
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="text"
                                                        id="descricao"
                                                        name="descricao"
                                                        placeholder="Descrição do produto"
                                                        required="required"
                                                        className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="imagem">Imagem
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="text"
                                                        id="imagem"
                                                        name="imagem"
                                                        placeholder="url da imagem do produto"
                                                        required="required"
                                                        className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="vlProduto">Valor
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="number"
                                                        id="vlProduto"
                                                        name="vlProduto"
                                                        placeholder="Valor do Produto"
                                                        required="vlProduto"
                                                        data-validate-minmax="0,10000"
                                                        className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="item form-group mb-3">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="website">Categoria
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                <select className="form-control" 
                                                    name="Categoria" 
                                                    id="Categoria">
                                                    <option value="" disabled defaultValue> </option>
                                                    <option value="1">Pipa</option>
                                                    <option value="2">Lata</option>
                                                    <option value="3">Linha</option>
                                                </select>
                                                </div>
                                            </div>
                                            <div className="ln_solid"/>
                                            <div className="form-group ">
                                                <div className="col-md-6 offset-md-3 mt-3">
                                                    <button id="send" type="submit" className="btn btn-success">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    
import React, {Component} from 'react'
import axios from "axios";
import '../plugins/style.css'


export default class formValidation extends Component {
    
    salvar = async (event) =>{
        event.preventDefault()
        let nome=event.target.nome.value
        let descricao=event.target.descricao.value
        let imagem=event.target.imagem.value
        let valorUnitario=event.target.vlProduto.value
        let disponibilidade=event.target.disponibilidade.value
        let codigo=event.target.Categoria.value
        let estoque=event.target.quantidade.value
        await 1;
        const api = axios.create({baseURL: "http://localhost:8080/api/ecommerce"})
        api.post("/produto",{
            nome:nome,
            descricao:descricao,
            imagem:imagem,
            valorUnitario:valorUnitario,
            disponibilidade:disponibilidade,
            categoria:{
                id:codigo
            },
            estoque:{
                quantidadeEstoque:estoque,
                quantidadeReservada:0
            },
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
                                            <span className="section">Complete o form para cadastrar um Produto</span>
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="nome">Nome
                                                    <span className="required">*</span>
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
                                                    <span className="required">*</span>
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
                                                    <span className="required">*</span>
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
                                                    <span className="required">*</span>
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
                                                    <span className="required">*</span>
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
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="website">Disponibilidade
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 d-flex justify-content-center">
                                                    <div class="form-check col-6">
                                                        <input className="form-check-input" type="radio" name="disponibilidade" 
                                                            id="disponivel" value="true"/>
                                                        <label className="form-check-label" htmlFor="disponivel">Disponivel</label>
                                                    </div>
                                                    <div className="form-check col-6">
                                                        <input className="form-check-input" type="radio" name="disponibilidade" 
                                                            id="indisponivel" value="false"/>
                                                        <label className="form-check-label" htmlFor="indisponivel">Indisponivel</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="quantidade">Quantidade
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="number"
                                                        id="quantidade"
                                                        name="quantidade"
                                                        placeholder="Estoque inicial do produto"
                                                        required="required"
                                                        className="form-control"/>
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
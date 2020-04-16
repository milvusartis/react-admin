import React, {Component} from 'react'
import api from "../service/api";
import '../plugins/style.css'
import { Link } from 'react-router-dom'

export default class EditarProduto extends Component {

    state = {
        produto: [],
        categorias: [],
        categoria: {},
        url: ""
    }

    async buscarProduto() {
        let urlProduto = window.location.href.toString();
        let idProdutoLink = urlProduto.substr(36).split("?", 1)
        let url = urlProduto.substring(0, 21)
        this.setState({url: url})

        await api.get("/produtos").then((response) => {
            let listaDeProdutos = response.data.content;
            listaDeProdutos.map((item) => {
                if(item.idProduto == idProdutoLink) {
                    this.setState({produto: item})
                    this.setState({categoria: item.categoria})
                }
            })
        })
        this.buscarCategorias()
    }

    async buscarCategorias() {
        let categoriasExibicao = []

        await api.get("/categorias").then((response) => {
            let listaDeCategoria = response.data;
            listaDeCategoria.map((item) => {
                if(item.idCategoria != this.state.categoria.idCategoria) {
                    
                    categoriasExibicao.push(
                        <option value={item.idCategoria}>
                            {item.nome}
                        </option>
                    )
                }
            })
        })

        this.setState({categorias: categoriasExibicao})

    }

    componentDidMount() {
        this.buscarProduto();
    }

    editarProduto = async (event) =>{
        event.preventDefault()

        let nome=event.target.nome.value
        let descricao=event.target.descricao.value
        let imagem=event.target.imagem.value
        let valorUnitario=event.target.vlProduto.value
        let idCategoria=event.target.Categoria.value

        api.put(`/admin/produtos/${this.state.produto.idProduto}`,{

            idProduto:"33",
            nome:nome,
            descricao:descricao,
            imagem:imagem,
            valorUnitario:valorUnitario,
            categoria:{
                idCategoria:idCategoria
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
                    }}
                >
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
                                        <form className="form-horizontal form-label-left" noValidate onSubmit={this.editarProduto}>
                                            <span className="section">Preencha as alterações do produto</span>
                                            <div className="item form-group">
                                                <label 
                                                    className="col-form-label col-md-3 col-sm-3 label-align" 
                                                    htmlFor="nome">
                                                    Nome
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="text"
                                                        id="nome"
                                                        name="nome"
                                                        placeholder="Nome do produto"
                                                        required="required"
                                                        className="form-control"
                                                        defaultValue={this.state.produto.nome}                                                      
                                                        />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="descricao">
                                                    Descrição
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="text"
                                                        id="descricao"
                                                        name="descricao"
                                                        placeholder="Descrição do produto"
                                                        required="required"
                                                        className="form-control"
                                                        defaultValue={this.state.produto.descricao}
                                                    />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="imagem">
                                                    Imagem
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="text"
                                                        id="imagem"
                                                        name="imagem"
                                                        placeholder="Url da imagem do produto"
                                                        required="required"
                                                        className="form-control"
                                                        defaultValue={this.state.produto.imagem}
                                                    />
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="vlProduto">
                                                    Valor
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="number"
                                                        id="vlProduto"
                                                        name="vlProduto"
                                                        placeholder="Valor do Produto"
                                                        required="vlProduto"
                                                        data-validate-minmax="0,10000"
                                                        className="form-control"
                                                        defaultValue={this.state.produto.valorUnitario}
                                                    />
                                                </div>
                                            </div>
                                            <div className="item form-group mb-3">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="website">
                                                    Categoria
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <select
                                                        className="form-control" 
                                                        name="Categoria" 
                                                        id="Categoria"
                                                        >
                                                        <option
                                                        value={this.state.categoria.idCategoria}
                                                        defaultValue={this.state.categoria.idCategoria}>
                                                            {this.state.categoria.nome}
                                                        </option>
                                                         {this.state.categorias}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="ln_solid"/>
                                            <div className="form-group ">
                                                <div className="col-md-6 offset-md-3 mt-3">
                                                <Link to="/produtos">
                                                        <button id="send" type="submit" className="btn btn-primary">
                                                                Editar
                                                        </button>
                                                    </Link>
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
    
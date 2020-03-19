import React, {Component} from 'react'
import axios from "axios";
import '../plugins/style.css'

const a={
    valor:{}
}
export default class formValidation extends Component {
    state={
            valor:{},
            guarda:[]
        }
    teste(event){
        event.preventDefault();
        Object.keys(a.valor).map((item)=>{
            if(event.target.name==a.valor[item].nrPedido){
                console.log(a.valor[item].idPedido)
            }
        })
    }
    async buscar(){
        const api = axios.create({baseURL: "http://localhost:8080/api/ecommerce"})
        await api.get("/pedidos").then((res)=>{this.setState({valor:res.data.body})})
        a.valor = this.state.valor
        console.log(this.state.valor)
        let guarda=[]
        Object.keys(this.state.valor).map((item)=>{
            if(this.state.valor[item].dsStatusPedido=="false"){
                guarda.push(
                    <div className="col-md-12 col-sm-12">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Pedido nº: </h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                    </ul>
                                <div className="clearfix"/>
                            </div>
                            <div className="x_content">
                                <form className="form-horizontal form-label-left" noValidate onSubmit={this.teste} name={this.state.valor[item].nrPedido}>
                                    <span className="section">Dados do pedido:</span>
                                    <div className="item form-group">
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="nPedido">Numero do Pedido:</label>
                                    <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="nrPedido" >{this.state.valor[item].nrPedido}</label>
                                    </div>
                                    <div className="item form-group">
                                        <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="id">Codigo do Cliente:</label>
                                        <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="idCliente">{this.state.valor[item].idPedido}</label>
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
            
        })
           this.setState({guarda:[...this.state.guarda,guarda]})
        }
        componentDidMount(){
            {this.buscar()}
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
                                <h3>Pagina de aprovação de Pedidos</h3>
                            </div>
                        </div>
                        <div className="clearfix"/>
                        <div className="row">
                            {this.state.guarda}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component, useEffect, useState } from 'react';
import api from "../service/api";
import '../plugins/style.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useHistory,useLocation } from 'react-router-dom';
import { MdExpandMore } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }, heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const ListaDeNF = () => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const [nf, setNF] = useState([]);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    useEffect(() => {
        api.get(`/notasfiscais`, {
        }).then(response => {
            setNF(response.data);
        })
    }, []);
    return (
        <>
            <div className="pedido-container">
                <div className="content">
                    <div className={classes.root}>
                        {nf.map(nf => (
                            <ExpansionPanel key={nf.idNotaFiscal} TransitionProps={{ unmountOnExit: true }} expanded={expanded === `panel${nf.idNotaFiscal}`} onChange={handleChange(`panel${nf.idNotaFiscal}`)}>
                                <ExpansionPanelSummary
                                    expandIcon={<MdExpandMore />}
                                    aria-controls={`panel${nf.idNotaFiscal}c-content`}
                                    id={`panel${nf.idNotaFiscal}c-header`}>
                                    <div className={classes.column}>
                                        <Typography className={classes.heading}>Nota Fiscal Nº: {nf.numeroNf.replace(/^(\d{3})(\d{3})(\d{3})/g,"$1.$2.$3")}</Typography>
                                    </div>
                                </ExpansionPanelSummary>
                                {/* Dados da NF */}
                                <ExpansionPanelDetails className={classes.details}>
                                    <span className="col-12 section">Dados da Nota Fiscal:</span>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails className={classes.details}>
                                    <form className="form-horizontal form-label-left" noValidate>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Numero da NF:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align" name="teste">{nf.numeroNf.replace(/^(\d{3})(\d{3})(\d{3})/g,"$1.$2.$3")}</label>
                                        </div>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Data de emissão:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align" name="teste">{nf.dataEmissao}</label>
                                        </div>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Natureza da Operação:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align" name="teste">{nf.naturezaOperacao}</label>
                                        </div>
                                    </form>
                                </ExpansionPanelDetails>
                                <Divider />
                                {/* Dados do Pedido */}
                                <ExpansionPanelDetails className={classes.details}>
                                    <span className="col-12 section">Dados do pedido:</span>
                                </ExpansionPanelDetails>
                                <ExpansionPanelDetails className={classes.details}>
                                    <form className="form-horizontal form-label-left" noValidate style={{fontSize:12}}>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Numero do Pedido:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align" name="teste">#{nf.pedido.idPedido}</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Endereço de Entrega:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.endereco.rua}</label>
                                        </div>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Data de Cadastro do Pedido:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.dataPedido}</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Numero do imovel:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.endereco.numero}</label>
                                        </div>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Valor Total do Pedido:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Complemento:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.endereco.complemento}</label>
                                        </div>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Nome do Cliente:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.usuario.nome}</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Bairro:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.endereco.bairro}</label>
                                        </div>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Telefone para Contato:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.telefone}</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Cidade:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.endereco.cidade}</label>
                                        </div>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Email para Contato:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.usuario.email}</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Estado:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.endereco.uf}</label>
                                        </div>
                                        <div className="item form-group">
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">Prazo para Entregar:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align" name="">{nf.pedido.diasParaEntrega == 1 ? nf.pedido.diasParaEntrega + " dia" : nf.pedido.diasParaEntrega + " dias"}</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">CEP:</label>
                                            <label className="col-form-label col-md-6 col-sm-6 label-align">{nf.pedido.cliente.endereco.cep}</label>
                                        </div>
                                    </form>
                                </ExpansionPanelDetails>
                                <Divider />
                                {nf.pedido.pedidoItens.map(pedidoItem => (
                                    <div key={pedidoItem.idPedidoItem}>
                                        <ExpansionPanelDetails className={classes.details}>
                                            <div className={classes.column}>
                                                <img width="80" src={pedidoItem.produto.imagem} alt="" />
                                            </div>
                                            <div className={clsx(classes.column, classes.helper)}>
                                                <Typography variant="caption">
                                                    <p>{pedidoItem.produto.nome}</p>
                                                    <strong>{pedidoItem.quantidade} und - {pedidoItem.precoVendido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                                                    <p>Subtotal: {((pedidoItem.quantidade) * (pedidoItem.precoVendido)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                                </Typography>
                                            </div>
                                        </ExpansionPanelDetails>
                                    </div>
                                ))}
                            </ExpansionPanel>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default class ListarNF extends Component {
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
                                <h3>Listar NFs</h3>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <div className="x_panel">
                                <div className="x_content">
                                    <ListaDeNF />
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        )
    }
}
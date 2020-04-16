import React, { Component, useEffect, useState } from 'react';
import api from "../service/api";
import '../plugins/style.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

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
const HistoricoPedidosl = () => {

    const classes = useStyles();
    const [pedidos, setPedidos] = useState([]);

    const usuario = sessionStorage.getItem('usuario');

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handlePedidoMensage = {
        PAGAMENTO_CONFIRMADO: value => "Aprovar o Pedido",
        PEDIDO_ENVIADO: value => "Confirmar a entrega do Pedido",
    };

    const showMenssage = (statusPedido, value) => {
        const handler = handlePedidoMensage[statusPedido]
        return handler(value);
    };
    const aprovarPedido = (pedido) => {
        let idPedido = pedido
        api.put("/pedidos/" + idPedido + "/aprovar")
    }
    const confirmarEntrega = (pedido) => {
        let idPedido = pedido
        api.put("/pedidos/" + idPedido + "/entregar")
    }

    useEffect(() => {
        api.get(`/pedidos`, {
        }).then(response => {
            setPedidos(response.data);
        })
    }, []);
    return (
        <>
            <div className="pedido-container">
                <div className="content">
                    <div className={classes.root}>
                        {pedidos.map(pedido => {
                            if (pedido.statusPedido==="PAGAMENTO_CONFIRMADO"||pedido.statusPedido==="PEDIDO_ENVIADO") {
                                return (
                                    <ExpansionPanel key={pedido.idPedido} TransitionProps={{ unmountOnExit: true }} expanded={expanded === `panel${pedido.idPedido}`} onChange={handleChange(`panel${pedido.idPedido}`)}>
                                        <ExpansionPanelSummary
                                            expandIcon={<MdExpandMore />}
                                            aria-controls={`panel${pedido.idPedido}c-content`}
                                            id={`panel${pedido.idPedido}c-header`}>
                                            <div className={classes.column}>
                                                <Typography className={classes.heading}>Pedido: #{pedido.idPedido}</Typography>
                                            </div>
                                            <div className={classes.column}>
                                                <Typography className={classes.secondaryHeading}>{showMenssage(pedido.statusPedido)}</Typography>
                                            </div>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails className={classes.details}>
                                            <span className="col-12 section">Dados do pedido:</span>
                                        </ExpansionPanelDetails>
                                        <ExpansionPanelDetails className={classes.details}>
                                            <form className="form-horizontal form-label-left" noValidate style={{ fontSize: 12 }}>
                                                <div className="item form-group">
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Numero do Pedido:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align" name="teste">{pedido.idPedido}</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Endereço de Entrega:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.endereco.rua}</label>
                                                </div>
                                                <div className="item form-group">
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Data de Cadastro do Pedido:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.dataPedido}</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Numero do imovel:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.endereco.numero}</label>
                                                </div>
                                                <div className="item form-group">
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Valor Total do Pedido:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.valorTotal}</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Complemento:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.endereco.complemento}</label>
                                                </div>
                                                <div className="item form-group">
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Nome do Cliente:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.usuario.nome}</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Bairro:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.endereco.bairro}</label>
                                                </div>
                                                <div className="item form-group">
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Telefone para Contato:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.telefone}</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Cidade:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.endereco.cidade}</label>
                                                </div>
                                                <div className="item form-group">
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Email para Contato:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.usuario.email}</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Estado:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.endereco.uf}</label>
                                                </div>
                                                <div className="item form-group">
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">Prazo para Entregar:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align" name="">{pedido.diasParaEntrega}</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">CEP:</label>
                                                    <label className="col-form-label col-md-6 col-sm-6 label-align">{pedido.cliente.endereco.cep}</label>
                                                </div>
                                            </form>
                                        </ExpansionPanelDetails>
                                        <Divider />
                                        {pedido.pedidoItens.map(pedidoItem => (
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
                                        <Divider />
                                        <ExpansionPanelActions>
                                            <strong >Total - {pedido.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                                            {pedido.statusPedido === "PAGAMENTO_CONFIRMADO" ?
                                                <Button size="small" color="primary" onClick={() => { 
                                                    aprovarPedido(pedido.idPedido)
                                                    window.location.reload()
                                                    }}>
                                                    Aprovar pedido
                                             </Button>
                                                :
                                                <Button size="small" color="primary" onClick={() => { 
                                                    confirmarEntrega(pedido.idPedido)
                                                    window.location.reload() 
                                                    }}>
                                                    Confirmar entrega
                                                 </Button>
                                            }
                                        </ExpansionPanelActions>
                                    </ExpansionPanel>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );

}
export default class GerenciarPedidos extends Component {
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
                                <h3>Gerenciar Pedidos</h3>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <div className="x_panel">
                                <div className="x_content">
                                    <HistoricoPedidosl />
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
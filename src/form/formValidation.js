import React, {Component} from 'react'

export default class formValidation extends Component {
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
                                        <form className="form-horizontal form-label-left" noValidate>
                                            <span className="section">Complete o form para cadastrar um Produto</span>
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="name">Name
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        id="name"
                                                        className="form-control"
                                                        data-validate-length-range={6}
                                                        data-validate-words={2}
                                                        name="name"
                                                        placeholder="both name(s) e.g Jon Doe"
                                                        required="required"
                                                        type="text"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="email">Email
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required="required"
                                                        className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="email">Confirm Email
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="email"
                                                        id="email2"
                                                        name="confirm_email"
                                                        data-validate-linked="email"
                                                        required="required"
                                                        className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="number">Number
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="number"
                                                        id="number"
                                                        name="number"
                                                        required="required"
                                                        data-validate-minmax="10,100"
                                                        className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="website">Website URL
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="url"
                                                        id="website"
                                                        name="website label-align"
                                                        required="required"
                                                        placeholder="www.website.com"
                                                        className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="occupation">Occupation
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        id="occupation"
                                                        type="text"
                                                        name="occupation"
                                                        data-validate-length-range="5,20"
                                                        className="optional form-control"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label htmlFor="password" className="col-form-label col-md-3 label-align">Password</label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        name="password"
                                                        data-validate-length="6,8"
                                                        className="form-control"
                                                        required="required"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    htmlFor="password2"
                                                    className="col-form-label col-md-3 col-sm-3 label-align ">Repeat Password</label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        id="password2"
                                                        type="password"
                                                        name="password2"
                                                        data-validate-linked="password"
                                                        className="form-control"
                                                        required="required"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="telephone">Telephone
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <input
                                                        type="tel"
                                                        id="telephone"
                                                        name="phone"
                                                        required="required"
                                                        data-validate-length-range="8,20"
                                                        className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="item form-group">
                                                <label
                                                    className="col-form-label col-md-3 col-sm-3 label-align"
                                                    htmlFor="textarea">Textarea
                                                    <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6">
                                                    <textarea
                                                        id="textarea"
                                                        required="required"
                                                        name="textarea"
                                                        className="form-control"
                                                        defaultValue={""}/>
                                                </div>
                                            </div>
                                            <div className="ln_solid"/>
                                            <div className="form-group">
                                                <div className="col-md-6 offset-md-3">
                                                    <button type="submit" className="btn btn-primary">Cancel</button>
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

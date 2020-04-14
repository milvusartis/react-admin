import React, { useState, useEffect } from "react";
import api from "../service/api";

import "./produtostyle.css";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProdutoASerEditado = () => {

}

const ProductTable = props => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
    };
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
          <div className="clearfix" />
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="x_panel">
                <div className="x_title">
                  <h2>Pagina de cadastro:
                    <small>Produto</small>
                  </h2>
                  <ul className="nav navbar-right panel_toolbox">
                    <li>
                      <a className="collapse-link"><i className="fa fa-chevron-up" /></a>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
                <div className="x_content">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <button
                            type="button"
                            onClick={() => requestSort("nome")}
                            className={getClassNamesFor("nome")}
                          >
                            Nome
                          </button>
                        </th>
                        <th>
                          <button
                            type="button"
                            onClick={() => requestSort("categoriaNome")}
                            className={getClassNamesFor("categoriaNome")}
                          >
                            Categoria
                          </button>
                        </th>
                        <th>
                          <button
                            type="button"
                            onClick={() => requestSort("valorUnitario")}
                            className={getClassNamesFor("valorUnitario")}
                          >
                            Valor Unitário
                          </button>
                        </th>
                        <th>
                          <button
                            type="button"
                            onClick={() => requestSort("isAtivo")}
                            className={getClassNamesFor("isAtivo")}
                          >
                            Disponibilide
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map(item => (
                        <tr key={item.idProduto}>
                          <td>{item.nome}</td>
                          <td>{item.categoriaNome}</td>
                          <td>{item.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                          <td>{item.isAtivo ? "Disponível" : "Indisponível"}</td>
                          <td>
                            <button type="button">
                              <a
                                href={`http://localhost:3000/editarproduto/${item.idProduto}`}
                                >
                                Editar 
                              </a>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Produtos() {
  const id = 1;
  const [products, setProducts] = useState([]);


  useEffect(() => {
    api.get(`produtos`, {

    }).then(response => {
      // setPedidos(response.data)
      setProducts(response.data.content);
      //console.log(response.data.content)

    })
  }, [id]);

  return (
    <div className="App">
      <ProductTable
        products={products}
      />
    </div>
  );
}
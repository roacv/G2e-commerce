import React, { useContext, useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { Card } from "./cards";
import { DetailCard } from "./detail-card";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";

export const DetailCategory = () => {
  const { id, nombre } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDetailCategory(id);
  }, []);
  useEffect(() => {
    actions.getDetailCategory(id);
  }, [id]);

  return (
    <>
            <div>
              <h1
                className="mt-2 pt-2 mb-5"
                style={{ textAlign: "center" }}
               >
                Categoría  {nombre} </h1>
              </div>

      {store.productCategoria !== null &&
        store.productCategoria.length > 0 &&
        store.productCategoria.map((products, index) => {
          return (
            
              <div className="container justify-content-center " key={products.id}>
                <div className="card mb-3" key={products.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={products.img}
                        className="img-fluid rounded-start h-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{products.nombre}</h5>
                        <p className="card-text">{products.descripcion}</p>
                        <p className="card-text">
                          <NumericFormat value={products.precio} prefix="Precio $" thousandSeparator="." decimalSeparator="," displayType="text"/>
                        </p>
                        <Link
                          to={"/detail_product/" + products.id}
                          className="btn btn-primary"
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          );
        })}
    </>
  );
};
//onClick={() => filterData("categorias")}

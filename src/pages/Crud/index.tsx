import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Data, DTO } from "src/interfaces/data.interface";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { addItem } from "src/services/index.rest";
import { dataFake } from "./data";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

const Crud = () => {
  const uuidKey: any = Date.now().toString();
  const [products, setProducts] = useState([] as Data[]);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [value, setValue] = useState({
    uuid: uuidKey,
  } as Data);

  function changeData(event: any): void {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  }

  function getDataStorage(): void {
    const arrList: any = localStorage.getItem("data");
    setProducts(JSON.parse(arrList) || []);
  }

  const onHide = () => {
    setDisplayBasic(false);
  };

  function categoriesBody(rowData: any) {
    return (
      <>
        {rowData?.categories.map((e: any, index: number) => {
          return (
            <span key={index} className="mr-2">
              {e.name}
            </span>
          );
        })}
      </>
    );
  }

  function statusBody(rowData: any) {
    return rowData.status === true ? "Ativo" : "Inativo";
  }

  useEffect(() => {
    getDataStorage();
  }, []);

  return (
    <>
      <Dialog
        header="Adicionar Produto"
        visible={displayBasic}
        style={{ width: "30vw" }}
        draggable={false}
        onHide={() => onHide()}
      >
        <div className="">
          <input
            type="text"
            name="id"
            value={value?.uuid}
            onChange={(e) => changeData(e)}
            hidden
          />
          <div className="col-12 my-3">
            <label className="mb-2">Nome do Produto</label>
            <InputText
              name="name"
              className="w-100"
              value={value?.name ?? ""}
              onChange={(e) => changeData(e)}
            />
          </div>

          <div className="col-12 my-3">
            <label className="mb-2">Quantidade</label>
            <InputNumber
              inputId="quantity"
              name="quantity"
              className="w-100"
              value={value?.quantity ?? null}
              onValueChange={(e) => changeData(e)}
              mode="decimal"
              min={0}
              max={100}
              showButtons
            />
          </div>

          <div className="col-12 my-3">
            <label className="mb-2">Código</label>
            <InputText
              name="code"
              className="w-100"
              value={value?.code ?? ""}
              onChange={(e) => changeData(e)}
            />
          </div>

          <div className="d-flex w-100 justify-content-end">
            <Button
              label="Salvar"
              className="bg-blue"
              onClick={() => {
                addItem({
                  data: products,
                  value,
                  setValue,
                  getDataStorage,
                } as DTO);
                setDisplayBasic(false);
              }}
              disabled={
                !value.name ||
                !value.quantity ||
                !value.code ||
                products?.length === 10
              }
            />
          </div>
        </div>
      </Dialog>

      <main>
        <div className="d-flex w-100 justify-content-between mb-3">
          <h1>Produtos</h1>
          <Button
            label="Novo Produto"
            className="bg-blue"
            onClick={() => setDisplayBasic(true)}
          />
        </div>

        <DataTable value={[...products, ...dataFake]} responsiveLayout="scroll">
          <Column field="name" header="Produto"></Column>
          <Column field="quantity" header="Qtd. Estoque"></Column>
          <Column field="code" header="Código"></Column>
          <Column header="Categoria" body={categoriesBody}></Column>
          <Column header="Status" body={statusBody}></Column>
        </DataTable>
      </main>
    </>
  );
};
export default Crud;

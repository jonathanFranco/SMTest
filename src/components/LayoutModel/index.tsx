import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Layout = ({ children }: any) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const [visible, setVisible] = useState(isDesktopOrLaptop ? true : false);

  const menuItems: any = [
    { label: "Home", link: "/dashboard" },
    { label: "Produtos", link: "/products" },
  ];

  return (
    <>
      <Sidebar
        visible={visible}
        modal={false}
        closeOnEscape={!isDesktopOrLaptop}
        showCloseIcon={!isDesktopOrLaptop}
        onHide={() => setVisible(false)}
      >
        <div>
          <section className="mb-4">
            <img src={logo} alt="logo" className="w-50" />
          </section>
          {menuItems.map((response: any, index: number) => {
            return (
              <div key={index}>
                <NavLink
                  to={response.link}
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <strong>{response.label}</strong>
                </NavLink>
              </div>
            );
          })}
        </div>
      </Sidebar>

      <div className="col-12">
        <div className="col-md-2 col-12">
          <Button
            icon="pi pi-align-left"
            className="bg-white text-dark border-0"
            onClick={(e) => setVisible(true)}
          />
        </div>
        <div
          className="col-md-10 col-12 p-5"
          style={{ marginLeft: `${isDesktopOrLaptop ? "300px" : "0px"}` }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

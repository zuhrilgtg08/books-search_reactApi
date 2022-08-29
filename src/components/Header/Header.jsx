import React from "react";
import Navbar from "../Navbar/Navbar";
import FormSearch from "../FormSearch/FormSearch";
import "./Header.css";

const Header = () => {
    return (
      <div className="holder">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Temukan buku mu sesuai pilihanmu disini
          </h2>{" "}
          <br />
          <p className="header-text fs-18 fw-3">
            Tidak ada yang lebih menyenangkan daripada menjelajahi perpustakaan
          </p>
          <FormSearch />
        </div>
      </div>
    );
}

export default Header;
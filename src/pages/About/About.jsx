import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
    return (
      <section className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="about-content grid">
            <div className="about-img">
              <img src={aboutImg} alt="about-pages" />
            </div>
            <div className="about-text">
              <h2 className="about-title fs-26 ls-1">About Z_LIBRARY</h2>
              <p className="fs-17">
                Di sini kamu bisa
                me time tanpa terganggu pengunjung yang lain, atau menikmati
                event yang kadang diadakan di sini.
              </p>
              <p className="fs-17">
                Z-library adalah sebuah perpustakan online terbuka bagi semua pengunjung. 
                Saat harus bikin laporan penelitian, mau nggak mau, kamu harus
                ke perpustakaan. Akan tetapi, saat kamu butuh referensi sebagai
                landasan teori penelitianmu, perpustakaan sudah siap dengan
                banyak sumber yang bisa dirujuk. Bahkan, kamu bisa melihat data
                atau hasil penelitian sebelumnya. Nyaris nggak ada celanya sih,
                sebuah tempat yang bernama z-library ini.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;
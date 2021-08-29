import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Navbar } from "../navbar/Navbar";
import "./iconografia.css";

import codice_03 from "../../../images/iconografia/codice_03.png";
import folio_01_a from "../../../images/iconografia/codice_01_a.png";
import folio_01_b from "../../../images/iconografia/codice_01-b.png";

export const Iconografia = () => {
  return (
    <section className="view-iconography">
      <Navbar />
      <div className="cover-iconography">
        <div className="title-iconography">
          <div className="author-section-iconography">
            <div>
              <hr />
            </div>
            <p className="author-name">Saeko Yanagisawa</p>
          </div>
          <h1 className="section_titles_iconography">
            Estudio <br /> Iconográfico
          </h1>
        </div>

        <div className="cover-iconography-image">
          <img src={codice_03} alt="codice-maya-folio-3" />
        </div>
      </div>
      <div className="intro-iconography">
        <p className="text-gray">
          Los Mayas dividían el ciclo sinódico de este astro en cuatro fases
          aparentes desde la Tierra. La fase uno, cuando Venus aparece como la
          Estrella de la Mañana; la dos, se oculta detrás del Sol; la tres,
          reaparece como la Estrella de la Tarde; y la cuatro, desaparece de
          nuevo en la sombra del Sol. Cada fase es presidida por un dios con
          conductas agresivas. Son deidades militares, de la muerte y el
          inframundo. Los augurios de cada fase son aciagos, nefastos y
          beligerantes, porque creían que cuando Venus se ocultaba, andaba en el
          Inframundo. El ciclo comienza en el día 1 Ajaw, el último día
          registrado en la última página que hoy está perdida. Es la fecha
          venusina por excelencia, en ella arranca y termina. 1 Ajaw es el alfa
          y el omega de toda la construcción del almanaque venusino.
        </p>
      </div>

      {/* <div className="folio-container">
        <div className="images-codice"></div>
        <div className="text-media">
            <div className="slide-tex"></div>
            <div className="audio-container"></div>
        </div>
    </div> */}

      <div className="todos-los-folios">
        <div className="folio-container">
          <div className="images-codice"></div>
          <div className="text-media">
            <div className="slide-tex">
                <Parallax pages={2} horizontal>
                    <ParallaxLayer factor={.5} offset={0} className="layer blue">
                        <p>Uno</p>
                    </ParallaxLayer>
                    <ParallaxLayer factor={.5} offset={.5} className="layer red">
                        <p>Dos</p>
                    </ParallaxLayer>
                    <ParallaxLayer factor={.5} offset={1} className="layer blue">
                        <p>Tres</p>
                    </ParallaxLayer>
                </Parallax>
            </div>
            <div className="audio-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

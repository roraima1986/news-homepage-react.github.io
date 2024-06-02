import { useState } from "react";
import { ContentPrincipal } from "./components/ContentPrincipal";
import { Sidebar } from "./components/Sidebar";
import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";

function App() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  // Redimensionado
  window.addEventListener("resize", () => {
    let screen = parseFloat(document.body.clientWidth);

    if (screen > 850) {
      setVisibleMenu(false);
    }
  });

  return (
    <>
      <div className="layout">
        {/*Header - Encabezado*/}
        <header className="header">
          <nav className="nav">
            {/*Logo*/}
            <div className="logo__container">
              <a href="#" className="logo__link">
                <img
                  src="./assets/images/logo.svg"
                  className="logo__img"
                  alt="Logo W."
                />
              </a>
            </div>

            {/*Barra de navegacion*/}
            <ul className="menu__container">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  New
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Popular
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Trending
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Categories
                </a>
              </li>
            </ul>

            {/*Boton de abrir menu en pantalla movil*/}
            <button
              className="icon__menu__container"
              id="open-button"
              onClick={setVisibleMenu}
            >
              <img
                className="icon__menu"
                src="./assets/images/icon-menu.svg"
                alt="Icon Menu"
              />
            </button>
          </nav>
        </header>

        {/*Contenido Principal*/}
        <ContentPrincipal />

        {/*Barra Lateral*/}
        <Sidebar />

        {/*Articulos*/}
        <Articles />

        {/*Pie de Pagina*/}
        <Footer />
      </div>

      {/*Menu de navegacion en pantalla movil*/}
      {visibleMenu && (
        <>
          <div className="overlay" id="overlay"></div>
          <div className="menu__mobile" id="menu-mobile">
            {/*Boton de cerrar menu en pantalla movil*/}
            <button
              className="icon__menu__close__container"
              id="close-button"
              onClick={() => setVisibleMenu(false)}
            >
              <img
                className="icon__menu__close"
                src="./assets/images/icon-menu-close.svg"
                alt="Icon Menu Close"
              />
            </button>

            {/*Barra de navegacion*/}
            <ul className="menu__mobile__container">
              <li className="menu__mobile__item">
                <a href="#" className="menu__mobile__link">
                  Home
                </a>
              </li>
              <li className="menu__mobile__item">
                <a href="#" className="menu__mobile__link">
                  New
                </a>
              </li>
              <li className="menu__mobile__item">
                <a href="#" className="menu__mobile__link">
                  Popular
                </a>
              </li>
              <li className="menu__mobile__item">
                <a href="#" className="menu__mobile__link">
                  Trending
                </a>
              </li>
              <li className="menu__mobile__item">
                <a href="#" className="menu__mobile__link">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default App;

export const ContentPrincipal = () => {
  return (
    <section className="principal">
      {/*Imagen Principal*/}
      <picture className="principal__img-container">
        <source
          srcSet="./src/assets/images/image-web-3-mobile.jpg"
          media="(max-width: 600px)"
        />
        <img
          src="./src/assets/images/image-web-3-desktop.jpg"
          className="principal__img"
          alt="Image Web 3"
        />
      </picture>

      <div className="principal__content">
        {/*Titulo*/}
        <h1 className="content__title">The Bright Future of Web 3.0?</h1>

        {/*Contenido*/}
        <div className="content__container">
          <p className="content__description">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="content__btn">Read more</button>
        </div>
      </div>
    </section>
  );
};

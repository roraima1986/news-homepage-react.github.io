import { ArticlesData } from "../data/Articles";

export const Articles = () => { 

  return (
    <main className="articles">
      {ArticlesData.map((article) => {
        return (
          <article className="article" key={article.id}>
            <div className="article__img-container">
              <img
                src={article.image}
                className="article__img"
                alt={article.title}
              />
            </div>

            <div className="article__content">
              <span className="article__number">0{article.id}</span>
              <h2 className="article__title">
                <a href="#" className="article__link">
                  {article.title}
                </a>
              </h2>
              <p className="article__description">{article.description}</p>
            </div>
          </article>
        );
      })}
    </main>
  );
};

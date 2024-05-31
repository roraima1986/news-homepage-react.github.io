import { News } from "../data/News";

export const Sidebar = () => { 

  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">New</h2>

      {News.map((item) => {
        return (
          <div key={item.id}>
            <h3 className="sidebar__subtitle">
              <a href="#" className="sidebar__subtitle-link">
                {item.title}
              </a>
            </h3>
            <p className="sidebar__description">{item.description}</p>

            {item.id !== 3 && <div className="sidebar__separator"></div>}
          </div>
        );
      })}
    </aside>
  );
};

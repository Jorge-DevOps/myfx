

import { Outlet } from "react-router-dom";
import { Menu } from "../common/components";
import "./style.sass";

export const App = () => {

  return (
    <>
      <section className="Container_Layout">
        <Menu />
        <section className="Container_Layout--Content">
          {/* <Header /> */}
          <main className="Container_Layout--Main">
            <Outlet />
          </main>
        </section>
      </section>
    </>
  );
};


import styles from "./pagesLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "@/widgets/header/header.tsx";

const PagesLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
      {/* NavBar*/}
    </div>
  );
};

export default PagesLayout;

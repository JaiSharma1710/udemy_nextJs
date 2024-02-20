import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid/mealsGrid";

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]}/>
      </main>
    </>
  );
};

export default MealsPage;

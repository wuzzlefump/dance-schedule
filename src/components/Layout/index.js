import * as React from "react";
import styles from "./style.module.css";
import MyClock from "../Clock/index";
import { NavLink } from "react-router-dom";
import { List } from "../../App";

export default function Layout(props) {
  const { list } = List.get();
  return (
    <>
      <nav className={styles.layoutNav}>
        <MyClock />
        {window.location.href.includes("todo") ? (
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            <span className={styles.linkItem}>Schedule</span>
          </NavLink>
        ) : (
          <NavLink style={{ textDecoration: "none" }} to={"/todo"}>
            <span className={styles.linkItem}>To Do List ({list.length})</span>
          </NavLink>
        )}
      </nav>
      <main className={styles.layoutSchedule}>
        <h1>Daily Work Schedule</h1>
        <div className={styles.schedule}>{props.children}</div>
      </main>
    </>
  );
}

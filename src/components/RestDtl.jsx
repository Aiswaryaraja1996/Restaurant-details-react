import { useState } from "react";
import data from "../db.json";
import RestCard from "./RestCard";
import style from "./RestDtl.module.css";

const RestDtl = () => {
  const [filter, setFilter] = useState(0);
  const [pay, setPay] = useState("all");
  const [cost, setCost] = useState("");
  const handleRating = (n) => {
    setFilter(n);
  };

  const handlePayment = (n) => {
    setPay(n);
  };

  const handleCost = (n) => {
    setCost(n);
  };
  return (
    <div className={style.mainCont}>
      <h1 style={{ textAlign: "center" }}>RESTAURANT DETAILS</h1>
      <div style={{ textAlign: "center" }}>
        <div className={style.btnCont}>
          <p>Ratings</p>
          <button onClick={() => handleRating(4)}>4</button>
          <button onClick={() => handleRating(3)}>3</button>
          <button onClick={() => handleRating(2)}>2</button>
          <button onClick={() => handleRating(1)}>1</button>
          <button onClick={() => handleRating(0)}>All</button>
        </div>
        <div className={style.btnCont}>
          <p>Payment</p>
          <button onClick={() => handlePayment("card")}>Card</button>
          <button onClick={() => handlePayment("cash")}>Cash</button>
          <button onClick={() => handlePayment("all")}>All</button>
        </div>
        <div className={style.btnCont}>
          <p>Cost</p>
          <button onClick={() => handleCost("Asc")}>Asc</button>
          <button onClick={() => handleCost("Desc")}>Desc</button>
        </div>
      </div>
      {data
        .filter(({ rating, payment_methods }) => {
          const { card, cash } = payment_methods;
          let pymnt = true;
          if (pay === "cash") pymnt = cash ? true : false;
          else if (pay === "card") pymnt = card ? true : false;

          return rating > filter && pymnt;
        })
        .sort((a, b) => {
          if (cost === null) {
            return 0;
          }
          if (cost === "Asc") {
            return a.costForTwo - b.costForTwo;
          }
          if (cost === "Desc") {
            return b.costForTwo - a.costForTwo;
          }
        })
        .map((item) => {
          return <RestCard cont={item}></RestCard>;
        })}
    </div>
  );
};

export default RestDtl;

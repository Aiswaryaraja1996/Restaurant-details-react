import { ChevronRight } from "react-bootstrap-icons";

const RestCard = ({ cont }) => {
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #BAC1C8",
        borderRadius: "7px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div>
          <img
            style={{ borderRadius: "7px" }}
            width={300}
            height={200}
            src={cont.src}
            alt={cont.name}
          />
        </div>
        <div>
          <h3 style={{ color: "red", fontSize: "26px", letterSpacing: "2px" }}>
            {cont.name}
          </h3>
          <p style={{ padding: "8px 0 0 0", color: "#8D979C" }}>
            {cont.cuisine.join(",")}
          </p>
          <p style={{ padding: "8px 0 0 0", color: "#8D979C" }}>
            Cost ${Number(cont.costForTwo) / 2} for One
          </p>
          <div style={{ display: "flex" }}>
            <p style={{ padding: "8px 0 0 0" }}>Min {cont.minOrder} </p>
            <ul style={{ padding: "8px 0 0 30px" }}>
              <li>Up to {cont.deliveryTime}min</li>
            </ul>
          </div>

          <p style={{ padding: "8px 0 0 0" }}>
            Accepts{" "}
            {(() => {
              if (cont.payment_methods.card && cont.payment_methods.cash)
                return "Card and Cash";
              else if (cont.payment_methods.card) return "Card Only";
              else return "Cash Only";
            })()}{" "}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
          }}
        >
          <div
            style={{
              backgroundColor: "#72A02B",
              width: "40%",
              marginLeft: "60px",
              padding: "3px",
              borderRadius: "2px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>{cont.rating}</p>
          </div>
          <p
            style={{
              textAlign: "right",
              padding: "8px 0 0 0",
              color: "#8D979C",
            }}
          >
            {cont.votes} Votes
          </p>
          <p
            style={{
              textAlign: "right",
              padding: "8px 0 0 0",
              color: "#8D979C",
            }}
          >
            {cont.reviews} Reviews
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          borderTop: "1px solid #BAC1C8",
        }}
      >
        <div
          style={{
            backgroundColor: "#E9F4EC",
            padding: "10px",
            color: "#589847",
            display: "flex",
            alignItems: "center",
            justifyContent: "center ",
          }}
        >
          <p>Order Online </p>
          <ChevronRight></ChevronRight>
        </div>
      </div>
    </div>
  );
};

export default RestCard;

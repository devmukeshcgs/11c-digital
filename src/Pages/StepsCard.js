import { motion } from "framer-motion";
import { useState } from "react";

function StepsCard(props) {
  console.log("stepsCardsProps", props.stepsdata);
  const [stepsCards, setStepsCards] = useState(props.stepsdata);

  return (
    <nav className="nav-steps">
      <ul className="cards">
        {stepsCards && (
          <>
            {/* 👇️ render array of objects */}
            {stepsCards.map((obj, i) => {
              return (
                <li key={i}>
                  <div to="service/website" className="card">
                    {/* <p>#{i+1}</p> */}
                    <div className="title">{obj.name}</div>
                    <p>{obj.description}</p>
                  </div>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </nav>
  );
}

export default StepsCard;

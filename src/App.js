import React from "react";
import TennisLiveChart from "./TennisLiveChart";
import StyledList from "./StyledList";

function App() {
  const items = ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4"];
  return (
    <><div>
      <TennisLiveChart />
    </div><div>
        <StyledList items={items} />
      </div></>
  );
}

export default App;

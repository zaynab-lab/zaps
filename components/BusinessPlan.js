import { useState, useEffect } from "react";
import Conditions from "./Conditions";
import Solutions from "./Solutions";
import { lines as l, techs as t } from "../public/ContractData";

export default function BusinessPlan() {
  const [next, setNext] = useState(true);
  const [minTime, setMinTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [state, setDefaultState] = useState({ lines: l, techs: t });
  const setState = (id, field, status) => {
    if (field === "lines") {
      let newLines = state.lines.map((line, i) =>
        id === i ? { ...line, status: status } : line
      );
      setDefaultState({ techs: state.techs, lines: newLines });
    } else {
    }
  };
  useEffect(() => {
    let newAverage = state.lines.filter((line) => line.status === "average");
    let minValue = state.lines
      .filter((line) => line.status === "min")
      .map((line) => line.min);
    let maxValue = state.lines
      .filter((line) => line.status === "max")
      .map((line) => line.max);
    let min = newAverage.map((line) => line.min);
    let max = newAverage.map((line) => line.max);
    let newMinValue = minValue.concat(maxValue).concat(min);
    let newMaxValue = minValue.concat(maxValue).concat(max);
    newMinValue[0] && setMinTime(newMinValue.reduce((a, b) => a + b));
    newMaxValue[0] && setMaxTime(newMaxValue.reduce((a, b) => a + b));
  }, [state]);
  return (
    <>
      <div className="mainContainer">
        <div className="Details">
          <div id="first">
            Company Name : <input id="input" />
          </div>
          <div id="second">
            Date : <input id="input" />
          </div>
          <div id="third">
            Address : <input id="input" />
          </div>
          <div id="fourth">
            Time & Cost : {minTime !== 0 && minTime}
            {maxTime !== 0 && maxTime !== minTime && " - " + maxTime}
          </div>
        </div>
        {next ? (
          <Solutions state={state} setState={setState} />
        ) : (
          <Conditions />
        )}
        <div className="Signature">
          <div>Delivery time _________________</div>
          <div>Za-apps Signature _________________</div>
          <div>Customer Signature _________________</div>
        </div>
        <div className={next && "next"} onClick={() => setNext(!next)}>
          {next ? "Next >" : "< Prev"}
        </div>
      </div>

      <style jsx>{`
        .mainContainer {
          padding: 1rem;
        }
        .Details {
          display: flex;
          flex-wrap: wrap;
        }
        .Details div {
          padding: 0.5rem;
          display: flex;
          color: grey;
        }
        #input {
          border: none;
          padding: 0 0.8rem;
          font-size: 1.1rem;
        }

        #first {
          flex: 1 1 65%;
        }
        #second {
          flex: 1 1 35%;
        }
        #third {
          flex: 1 1 65%;
        }
        #fourth {
          flex: 1 1 35%;
        }

        .Signature {
          display: flex;
          justify-content: space-between;
          color: grey;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .Signature div {
          padding: 0.5rem;
        }
        .next {
          text-align: right;
        }
      `}</style>
    </>
  );
}

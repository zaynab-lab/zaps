import { useState, useEffect, useRef } from "react";
import Conditions from "./Conditions";
import Solutions from "./Solutions";
import { lines as l, techs as t } from "../public/ContractData";
import { FaFilePdf } from "react-icons/fa";
import ReactToPrint from "react-to-print";

export default function BusinessPlan() {
  const componentRef = useRef();
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
      setDefaultState({
        techs: state.techs.map((tech, i) =>
          id === i
            ? { ...tech, status: tech.status === "average" ? "" : "average" }
            : tech
        ),
        lines: state.lines
      });
    }
  };
  useEffect(() => {
    let newAverage = state.lines
      .filter((line) => line.status === "average")
      .concat(state.techs.filter((tech) => tech.status === "average"));
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
      <div className="mainContainer" ref={componentRef}>
        <div className="contractHead">
          <div className="contractTitle">Contract</div>
          <div className="h2">
            Za-<span className="apps">apps</span>
          </div>
        </div>
        <span className="DetailsTitle">Contract's info</span>
        <div className="Details">
          <div className="first">
            <div>Company Name: </div>
            <input className="input" />
          </div>
          <div className="second">
            <div>Date: </div>
            <input className="input" />
          </div>
          <div className="third">
            <div>Address: </div>
            <input className="input" />
          </div>
          <div className="fourth">
            Time (cost): {minTime !== 0 && minTime}
            {maxTime !== 0 && maxTime !== minTime && " - " + maxTime}{" "}
            {minTime !== 0 && "hours"}
          </div>
        </div>
        <Solutions state={state} setState={setState} />
        <div className="Signature">
          <div>Delivery time _________________</div>
          <div>Za-apps Signature _________________</div>
          <div>Customer Signature _________________</div>
        </div>
        <div className="page-break"></div>
        <Conditions />
        <div className="Signature">
          <div>Delivery time _________________</div>
          <div>Za-apps Signature _________________</div>
          <div>Customer Signature _________________</div>
        </div>
      </div>
      <ReactToPrint
        trigger={() => (
          <div className="pdfBtn">
            <FaFilePdf />
            Download the contract
          </div>
        )}
        content={() => componentRef.current}
      />

      <style jsx>{`
        .mainContainer {
          padding: 1rem;
          position: relative;
        }

        .Details {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          border: 1px solid black;
          border-radius: 0.5rem;
          padding: 0.5rem 0;
        }
        .DetailsTitle {
          position: absolute;
          -webkit-transform: translate(0.8rem, -0.8rem);
          -ms-transform: translate(0.8rem, -0.8rem);
          transform: translate(0.8rem, -0.8rem);
          background: white;
          font-size: 1.2rem;
        }
        .Details div {
          padding: 0.5rem;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          color: #666;
        }
        .input {
          border: 1px solid #ddd;
          border-radius: 0.2rem;
          padding: 0 0.8rem;
          font-size: 1rem;
          -webkit-box-flex: 1;
          -ms-flex: 1 1;
          flex: 1 1;
        }
        .first {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 40%;
          flex: 1 1 40%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          gap: 0.4rem;
        }
        .second {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 10%;
          flex: 1 1 10%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          gap: 0.4rem;
        }
        .third {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 45%;
          flex: 1 1 45%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          gap: 0.4rem;
        }
        .fourth {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 35%;
          flex: 1 1 35%;
        }
        .Signature {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          color: grey;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .Signature div {
          padding: 0.5rem;
        }
        .next {
          text-align: right;
        }
        .pointer {
          cursor: pointer;
        }
        .pdfBtn {
          width: fit-content;
          margin: auto;
          background: #34f;
          color: white;
          padding: 0.6rem 1rem;
          border-radius: 0.3rem;
          display: flex;
          gap: 1rem;
          cursor: pointer;
          margin-bottom: 2rem;
        }
        .contractHead {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding: 1rem 0.2rem;
        }
        .contractTitle {
          font-size: 2rem;
        }

        .h2 {
          font-size: 2rem;
          display: flex;
          align-items: center;
          margin: 1rem;
        }
        .apps {
          background: black;
          color: white;
          padding: 0.5rem;
          font-size: 70%;
          margin: 0.1rem;
          border-radius: 0.5rem;
        }
        @media all {
          .page-break {
            display: none;
          }
        }
        @media print {
          html,
          body {
            height: initial !important;
            overflow: initial !important;
            -webkit-print-color-adjust: exact;
          }
        }
        @media print {
          .page-break {
            margin-top: 1rem;
            display: block;
            page-break-before: auto;
          }
        }
        @page {
          size: auto;
          margin: 20mm;
        }
      `}</style>
    </>
  );
}

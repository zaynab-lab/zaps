import { useState } from "react";

export default function BusinessPlan() {
  const [lines, setLines] = useState([1, 2, 3, 4, 5]);
  const [techs, setTechs] = useState([1, 2]);

  return (
    <>
      <div className="mainContainer">
        <div className="Details">
          <div id="first">
            Company Name : <input />
          </div>
          <div id="second">
            Date : <input />
          </div>
          <div id="third">
            Address : <input />
          </div>
          <div id="fourth">
            Cost : <input />
          </div>
        </div>
        <div className="Box">
          <span
            className="Box-title"
            onClick={() => {
              setLines([1]);
            }}
          >
            Solutions
          </span>
          {lines.map((line, i) => (
            <div>
              <span
                onClick={() => {
                  setLines([...lines, i + 1]);
                }}
              >
                {i + 1}-
              </span>
              <input id="long" />
            </div>
          ))}
        </div>
        <div className="Box">
          <span
            className="Box-title"
            onClick={() => {
              setTechs([1]);
            }}
          >
            Technologies
          </span>

          {techs.map((tech, i) => (
            <div>
              <span
                onClick={() => {
                  setTechs([...techs, i + 1]);
                }}
              >
                {i + 1}-
              </span>
              <input id="long" />
            </div>
          ))}
        </div>

        <div>Customer Sign ___________________</div>
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
        input {
          min-width: 10px;
          border: none;
          font-size: 1.1rem;
          padding: 0 0.8rem;
        }
        #long {
          width: 95%;
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

        .Box {
          border: 1px solid black;
          border-radius: 0.5rem;
          padding: 0.5rem 0;
          position: relative;
          margin: 1.5rem 0;
        }
        .Box div:last-child {
          border: none;
        }
        .Box-title {
          position: absolute;
          transform: translate(0.8rem, -1.5rem);
          background: white;
          font-size: 1.3rem;
        }
        .Box div {
          padding: 0.5rem;
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </>
  );
}

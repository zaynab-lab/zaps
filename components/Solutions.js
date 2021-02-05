export default function Solutions({ state, setState }) {
  return (
    <>
      <div className="Box">
        <span className="Box-title">Solutions</span>
        {state.lines.map((line, i) => (
          <SoBox line={line} i={i} setState={setState} />
        ))}
      </div>

      <div className="Box">
        <span className="Box-title">Technologies</span>
        {state.techs.map((tech, i) => (
          <TeBox tech={tech} i={i} setState={setState} />
        ))}
      </div>

      <style jsx>{`
        .Box {
          border: 1px solid black;
          border-radius: 0.5rem;
          padding: 0.5rem 0;
          position: relative;
          margin: 1.5rem 0;
        }
        .Box-title {
          position: absolute;
          transform: translate(0.8rem, -1.5rem);
          background: white;
          font-size: 1.3rem;
        }
      `}</style>
    </>
  );
}
const SoBox = ({ line, i, setState }) => {
  return (
    <>
      <div className="Box-item">
        <span>{i + 1}-</span>
        <span className="Box-details">
          <span className="label">{line.label}</span>
          <select onChange={(e) => setState(i, "lines", e.target.value)}>
            <option value="">select</option>
            <option value="min">min</option>
            <option value="average">average</option>
            <option value="max">max</option>
          </select>
        </span>
      </div>
      <style jsx>{`
        .label {
          padding: 0 0.8rem;
        }

        .Box-item {
          display: flex;
          padding: 0.5rem;
          border-bottom: 1px solid #eee;
        }

        .Box-item:last-child {
          border: none;
        }

        .Box-details {
          flex: 1 1 100%;
          display: flex;
          justify-content: space-between;
        }

        select {
          background: white;
        }
      `}</style>
    </>
  );
};

const TeBox = ({ tech, i, setState }) => {
  return (
    <>
      <div className="Box-item">
        <span className="Box-details">
          <span className="label">{tech.label}</span>
          <input
            type="checkBox"
            onChange={() => setState(i, "techs", "average")}
          />
        </span>
      </div>
      <style jsx>{`
        .label {
          padding: 0 0.8rem;
        }

        .Box-item {
          display: flex;
          padding: 0.5rem;
          border-bottom: 1px solid #eee;
        }

        .Box-item:last-child {
          border: none;
        }

        .Box-details {
          flex: 1 1 100%;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};

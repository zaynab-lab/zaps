import { terms } from "../public/ContractData";

export default function Conditions() {
  return (
    <>
      <div className="Box">
        <span className="Box-title">Terms & Conditions</span>
        {terms.map((term, i) => (
          <div className="Box-item">
            <span>{term.label}</span>
          </div>
        ))}
      </div>

      <div className="Box">
        <span className="Box-title">
          Extra Terms, Conditions & Requirements
        </span>
        <div className="extra"></div>
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
        .Box-item {
          display: flex;
          padding: 0.5rem;
          border-bottom: 1px solid #eee;
        }

        .Box-item:last-child {
          border: none;
        s}          
          
        .Box-details {
          flex: 1 1 100%;
          display: flex;
          justify-content: space-between;
        }

        .extra {
          height: 10rem;
        }
      `}</style>
    </>
  );
}

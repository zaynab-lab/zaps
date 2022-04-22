import { useState } from "react";

export default function Costs({ plan }) {
  const [costs, setCosts] = useState(false);

  return (
    <>
      <div className="costsbtn" onClick={() => setCosts(!costs)}>
        Costs
      </div>

      {costs && (
        <div className="costs">
          <div className="month">{plan.month}</div>

          <div>
            <span className="annual">{plan.annual}</span>
            <span className="annualD">(annual)</span>
          </div>
        </div>
      )}

      <style jsx>{`
        .costsbtn {
          padding: 0.2rem 0.8rem;
          font-size: 1.6rem;
          border: 1px solid ${plan.color};
          background: ${plan.color};
          color: white;
          border-radius: 0.5rem;
          margin: 2rem 0;
          cursor: pointer;
        }

        .costs {
          padding-bottom: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .month {
          font-size: 2.4rem;
          font-family: "Quattrocento";
        }

        .month:before {
          font-size: 2.6rem;
          content: " $ ";
        }

        .month:after {
          font-size: 1rem;
          content: "/month";
        }

        .annual {
          margin: 0.5rem;
        }

        .annual:before {
          content: " $ ";
        }

        .annual:after {
          font-size: 0.8rem;

          content: "/month";
        }

        .annualD {
          font-size: 0.5rem;
        }
      `}</style>
    </>
  );
}

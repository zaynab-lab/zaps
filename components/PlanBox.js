import TitleBox from "./TitleBox";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
export default function PlanBox({ plan }) {
  return (
    <>
      <div className="container">
        <div className="boxTitle">
          <TitleBox title={plan.title} color={plan.color} />
        </div>
        <div className="month">{plan.month}</div>
        <div className="annual">{plan.annual}</div>
        <div className="content">
          {plan.content.map((item, i) => (
            <div key={i} className="item">
              {item}
            </div>
          ))}
        </div>
        <Link href={`https://wa.me/+96181026095?text=${plan.message}`}>
          <div className="contactbtn">
            <button className="orderNow">
              <span className="icon">
                <FaWhatsapp />
              </span>
              <span>Order Now</span>
            </button>
          </div>
        </Link>
      </div>
      <style jsx>{`
        .container {
          border: 1px solid grey;
          border-radius: 0.5rem;
          margin: 0.5rem;
          flex: 0 1 20rem;
          display: flex;
          background: white;
          flex-direction: column;
          align-items: center;
          margin-top: 3rem;
          box-shadow: 0px 0px 10px 1px lightgrey;
        }
        .boxTitle {
          transform: translateY(-2rem);
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
          content: "/annual";
        }
        .content {
          color: grey;
          font-size: 1.1rem;
          width: 100%;
          padding: 1.6rem;
        }
        .item {
          margin: 1.2rem 0;
        }
        .item:before {
          content: " - ";
        }
        .icon {
          margin: 0 0.5rem;
        }
        .orderNow {
          bottom: 0;
          display: flex;
          justify-content: center;
          font-size: 1.5rem;
          color: ${plan.color};
          background: ${plan.color};
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          margin-top: auto;
          margin-bottom: 2rem;
          border: 1px solid ${plan.color};
          background: white;
          animation: Animation 10s ease 0s infinite normal none;
        }
        @keyframes Animation {
          0% {
            background: ${plan.color};
            color: white;
            box-shadow: 0px 0px 10px 1px ${plan.color};
          }
          10% {
            background: white;
            color: ${plan.color};
            box-shadow: none;
          }
          20% {
            background: ${plan.color};
            color: white;
            box-shadow: 0px 0px 10px 1px ${plan.color};
          }
          30% {
            background: white;
            color: ${plan.color};
            box-shadow: none;
          }
        }
      `}</style>
    </>
  );
}

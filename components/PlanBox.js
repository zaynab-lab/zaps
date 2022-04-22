import TitleBox from "./TitleBox";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Costs from "./Costs";

export default function PlanBox({ plan }) {
  return (
    <>
      <div className="container">
        <div className="boxTitle">
          <TitleBox title={plan.title} color={plan.color} />
        </div>
        <div className="boxContent">
          <div className="boxDetails">
            <div className="solutions">Solutions</div>
            <div>for you</div>
            <div className="content">
              {plan.content.map((item, i) => (
                <div key={i} className="item">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="btnContainer">
            {plan.img && (
              <div className="img">
                <Link href={plan.link}>
                  <img
                    width="100%"
                    src={`/img/${plan.img}.png`}
                    alt={plan.img}
                  />
                </Link>
              </div>
            )}
            <Costs plan={plan} />
            <Link href={`https://wa.me/+96181026095?text=${plan.message}`}>
              <button className="orderNowbtn">
                <span className="icon">
                  <FaWhatsapp />
                </span>
                <span>Order Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          border: 1px solid grey;
          border-radius: 0.5rem;
          margin: 0.5rem;
          flex: 0 1 22rem;
          display: flex;
          background: white;
          flex-direction: column;
          align-items: center;
          margin-top: 3rem;
          box-shadow: 0px 0px 10px 1px lightgrey;
        }
        @media only screen and (min-width: 500px) {
          .container {
            flex: 0 1 21rem;
          }
        }
        @media only screen and (min-width: 900px) {
          .container {
            flex: 0 1 24rem;
          }
        }

        .boxTitle {
          transform: translateY(-2rem);
        }
        .solutions {
          font-size: 2.2rem;
          color: ${plan.color};
        }
        .boxContent {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .boxDetails {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1 1 27rem;
          overflow: hidden;
        }
        .btnContainer {
          padding-bottom: 2rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          ${!plan.img && "padding-bottom: 2rem"};
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

        .img {
          flex: 0 1 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem 3rem;
        }

        .orderNowbtn {
          display: flex;
          justify-content: center;
          font-size: 1.5rem;
          color: ${plan.color};
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          margin-top: auto;
          border: 1px solid ${plan.color};
          background: white;
          animation: Animation 10s ease 0s infinite normal none;
          cursor: pointer;
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

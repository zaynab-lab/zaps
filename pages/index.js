import Head from "next/head";
import PlanBox from "../components/PlanBox";

const plans = [
  {
    title: "BASIC",
    color: "#ea547e",
    month: "29",
    annual: "25",
    percent: "0",
    content: [
      "Menu website",
      "Installable on IOS/Android/..",
      "Arabic & English",
      "Scanable with QR code",
      "Marketing services (addintional fees apply)"
    ],
    message: "Hi, I am .......... I want to get the Basic plan",
    img: "Drop-Cafe"
  },
  {
    title: "STANDARD",
    color: "#F0A260",
    month: "99",
    annual: "89",
    percent: "20",
    content: [
      "Web application",
      "Installable on IOS/Android/..",
      "Arabic & English",
      "Scanable with QR code",
      "Recieve orders over Whatsapp",
      "Marketing services (addintional fees apply)"
    ],
    message: "Hi, I am .......... I want to get the Standard plan",
    img: "Za-Market"
  },
  {
    title: "PRO",
    color: "#0ABAB5",
    month: "299",
    annual: "270",
    percent: "40",
    content: [
      "Web application (2 Sides)  ",
      "Installable on IOS/Android/..",
      "Arabic & English",
      "Scanable with QR code + B card",
      "Recieve orders over Client app",
      "Saving Data + Business Insights",
      "Marketing services (addintional fees apply)"
    ],
    message: "Hi, I am .......... I want to get the Pro plan",
    img: "Za-Market"
  }
];

export default function Index() {
  return (
    <>
      <Head>
        <title>Za apps</title>
      </Head>
      <div className="app">
        <h1 className="h1">
          Za-<span className="apps">apps</span>
        </h1>
        <div className="mainContainer">
          {plans.map((plan, index) => (
            <PlanBox key={index} plan={plan} />
          ))}
        </div>
        <div className="back">
          <img id="card0" src="/img/Card1.png" alt="" />
          <img id="card1" src="/img/Card1.png" alt="" />
          <img id="card2" src="/img/Card2.png" alt="" />
          <img id="card3" src="/img/Card3.png" alt="" />
        </div>
        <h1 className="h2">
          <span className="apps">Business</span>Plans
        </h1>
      </div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-decoration: unset;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-family: sans-serif;
          -ms-scroll-chaining: none;
          overscroll-behavior: contain;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <style jsx>{`
        .app {
          width: 100vw;
          overflow: hidden;
          position: relative;
        }
        .h1 {
          font-size: 2.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1rem;
        }
        .h2 {
          font-size: 2rem;
          display: flex;
          justify-content: center;
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
        .mainContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .back {
          width: 100%;
          position: fixed;
          top: 6rem;
          opacity: 25%;
          z-index: -3;
        }
        #card0 {
          position: absolute;
          top: 0;
          width: 22rem;
          transform: translate(-40vw, 0vh);
        }

        #card1 {
          position: absolute;
          top: 0;
          width: 22rem;
          transform: translate(70vw, -20vh);
        }
        #card2 {
          position: absolute;
          top: 0;
          width: 22rem;
          transform: translate(-32vw, 50vh);
        }
        #card3 {
          position: absolute;
          top: 0;
          width: 22rem;
          transform: translate(70vw, 35vh);
        }
      `}</style>
    </>
  );
}

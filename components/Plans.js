import PlanBox from "../components/PlanBox";

const plans = [
  {
    title: "BASIC",
    color: "#CB4B2B",
    month: "49",
    annual: "45",
    percent: "0",
    content: [
      "Menu website",
      "Installable on IOS/Android/..",
      "Arabic & English",
      "Scanable with QR code",
      "Recieve orders over Whatsapp",
      "Marketing services (addintional fees apply)"
    ],

    message: "Hi, I am .......... I want to get the Basic plan",
    img: "Drop-cafe",
    link: "https://drop-cafe.vercel.app/"
  },

  {
    title: "STANDARD",
    color: "#DDB669",
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
    img: "MogeTee",
    link: "https://mogetee.vercel.app"
  },

  {
    title: "ADVANCE",
    color: "#F4A460",
    month: "199",
    annual: "189",
    percent: "20",
    content: [
      "Web application (2 Sides)",
      "Installable on IOS/Android/..",
      "Arabic & English",
      "Scanable with QR code",
      "Recieve orders over Client app",
      "Business Insights",
      "Marketing services (addintional fees apply)"
    ],

    message: "Hi, I am .......... I want to get the Advance plan",
    img: "Za-market",
    link: "https://za-market.vercel.app"
  },

  {
    title: "PRO",
    color: "#FF4886",
    month: "299",
    annual: "270",
    percent: "40",
    content: [
      "Web application (2 Sides) ",
      "Installable on IOS/Android/..",
      "Arabic & English",
      "Scanable with QR code + B card",
      "Recieve orders over Client app",
      "Data Collection + Business Insights",
      "Marketing services (addintional fees apply)"
    ],

    message: "Hi, I am .......... I want to get the Pro plan",
    img: "za-menu",
    link: "https://za-menu.vercel.app/"
  }
];

export default function Plans() {
  return (
    <>
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
      <style jsx>{`
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

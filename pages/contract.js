import BusinessPlan from "../components/BusinessPlan";

export default function () {
  return (
    <>
      <h1 className="h1">
        Za-<span className="apps">apps</span>
      </h1>

      <BusinessPlan />

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
      `}</style>
    </>
  );
}

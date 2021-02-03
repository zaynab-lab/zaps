import Head from "next/head";
import { useState } from "react";
import BusinessPlan from "../components/BusinessPlan";
import Plans from "../components/Plans";

export default function Index() {
  const [plan, setPlan] = useState(false);
  return (
    <>
      <Head>
        <title>Za apps</title>
      </Head>
      <div className="app">
        <h1 className="h1">
          Za-<span className="apps">apps</span>
        </h1>
        {!plan ? <Plans /> : <BusinessPlan />}
        {!plan && (
          <h1
            className="h2"
            onClick={() => {
              setPlan(!plan);
            }}
          >
            <span className="apps">Business</span>Plan
          </h1>
        )}
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
      `}</style>
    </>
  );
}

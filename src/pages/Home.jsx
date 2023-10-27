import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Home = () => {
  return (
    <main className="w-full h-screen bg-home-bg bg-no-repeat bg-cover bg-center">
      <section className="w-full h-full  flex flex-col items-center justify-center bg-opacity-70 bg-black ">
        <PageNav />
        <h1 className="text-4xl text-white text-center">
          You travel the world <br /> Worldwise keeps track of your adventures.
        </h1>
        <h2 className="text-[#f2f2f2] text-center mt-3">
          A world map that track your footsteps into every city you can think
          of. Never forget your wonderful experience, and show your friends how
          you have wandered the world.
        </h2>
        <Link
          to="/app"
          className="bg-green-600 px-2 py-1 m-5 uppercase rounded-md hover:bg-green-700"
        >
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
};

export default Home;

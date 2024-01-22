import React from "react";
import { Button } from "../shadcn/button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center text-center mb-40">
          <h1 className="text-5xl font-bold mb-4">
            Easily create{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              colour
            </span>{" "}
            palettes
          </h1>

          <p className="text-base text-gray-600">
            Or find motivation with community-made palettes
          </p>
          <Button className="mt-4" variant={"default"}>
            <Link to={"/generate"}>Generate Palettes</Link>
          </Button>
          <Button className="mt-2" variant={"secondary"}>
            <Link to={"/community"}>Expolore Community Made</Link>
          </Button>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

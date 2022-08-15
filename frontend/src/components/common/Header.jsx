// package
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../App";

export const Header = () => {
  const authProps = useContext(AuthContext);

  useEffect(() => {
    console.log(authProps.currentUser);
  });

  return (
    <>
      <div className="fixed z-10 w-full h-11">
        <div
          className="relative w-full h-full bg-theme-color"
          style={{ borderBottom: "1px solid  #c2c2c2ad" }}
        >
          <div className="py-1.5 w-5/12 h-full block m-auto ">
            <div className="h-full rounded-md bg-neutral-50">
              <p className="flex items-center justify-center h-full text-sm ">
                xxxxx内を検索する
              </p>
            </div>
          </div>
          <div className="absolute h-full py-1 transform -translate-y-1/2 top-1/2 right-4">
            <div
              className="h-full bg-gray-100 rounded-md aspect-square"
              style={{ backgroundImage: authProps.currentUser.image }}
            >
              <img src={authProps.currentUser.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

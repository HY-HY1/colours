import React, { useState } from "react";
import { Navmenu } from "./Navmenu";
import { Link } from "react-router-dom";
import style from "../styles/navbar.module.css";
import { Button } from "../components/shadcn/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/shadcn/avatar";
import { RegisterCard } from "../components/ui/RegisterCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/shadcn/alert-dialog";
import { LoginCard } from "../components/ui/LoginCard";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/shadcn/hover-card"

import { useUser } from "../hooks/UseUser";

export const Navbar = () => {
  const { isLoggedIn, logout } = useUser()
  console.log(isLoggedIn)


  

  return (
    <>
      <div className={style.container}>
        <nav className={style.navbar}>
          <div className={style.item}>
            <Link to={"/"}>
              <h3 className="mt-1.5 text-xl">Colours</h3>
            </Link>
          </div>
          <div className={style.item}></div>
          <div className={style.item}>
            <div className={style.menu}>
              <Navmenu />
            </div>
          </div>
          <div className={style.item}>
          {!isLoggedIn ? (
              <>
                <div className={style.buttons}>
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button variant={"outline"}>Login</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <LoginCard />
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  <div>
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button>Sign up</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <RegisterCard />
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />{" "}
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <ul className="h-30 mb-4">
                        <li className="mb-2">
                          <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li className="mb-2">
                          <Link to={"/profile"}>Profile</Link>
                        </li>
                        <li className="mb-2">
                          <Link to={"/account"}>Account</Link>
                        </li>
                        <li onClick={logout} className="mb-2">
                          <Link to={"/"}>Sign Out</Link>
                        </li>
                      </ul>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
      {/* <RegisterCard /> */}
    </>
  );
};

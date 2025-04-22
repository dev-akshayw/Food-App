import React, {lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const root = ReactDom.createRoot(document.getElementById("root"));

const Grocery = lazy(()=> import("./components/Grocery") );

const AppLayout = () => { 

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name:"Akshay Waychal",
    };
    setUserName(data.name);
  },[]);

  return (
    <UserContext.Provider value={ {loggedInUser:userName, setUserName} }>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
          {
            path: "/",
            element: <Body />,
          },
          {
            path: "/about",
            element: <About />,
          },
          { 
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
          },
          {
            path: "/grocery",
            element: <Suspense fallback={ <h2>Loading...</h2> } >  <Grocery /> </Suspense>,
          }
      ],
      errorElement: <Error />,
    },
]);


root.render( <RouterProvider router={appRouter} /> );

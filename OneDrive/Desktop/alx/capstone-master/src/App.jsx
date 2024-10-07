import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import LogWorkout from "./components/pages/LogWorkout";
import WorkoutHistory from "./components/pages/WorkoutHistory";
import Tracking from "./components/pages/ProgressChart";
// import Logging from "./components/pages/Logging";
import { useState } from "react";



const router = createBrowserRouter([


  {
    path: "/",
    element: <Layout/>,
    children: [
      {
      path:"/",
      element: <Home/>,
      index: true,
    },
    {
      path: "/logworkout",
      element: <LogWorkout/>,
    },
    {
      path: "/history",
      element: <WorkoutHistory/>,
    },
    {
      path: "/tracking",
      element: <Tracking/>,
    },
  ]
  },
]);

function App() {

  

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <RouterProvider router={router} />
    </div>
      
    </>
  )
}

export default App

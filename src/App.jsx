import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./Utils/Routes/Routes";
import { NextUIProvider } from "@nextui-org/system";

export default function App() {
  const appRouter = useRoutes(routes);
  return <NextUIProvider>{appRouter}</NextUIProvider>;
}

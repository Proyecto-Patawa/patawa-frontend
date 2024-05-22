import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import Dashboard from "../Components/dashboard/Dashboard";
import CreateDog from "../Components/dog/CreateDog";
export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="dogs" element={<CreateDog />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

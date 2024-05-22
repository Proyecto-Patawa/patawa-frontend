import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import Dashboard from "../Components/dashboard/Dashboard";
import CreateDog from "../Components/dog/CreateDog";
import Login from "../Components/login/Login";
import OwnersList from "../Components/user/OwnersList";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />}></Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="dogs" element={<CreateDog />}></Route>
          <Route path="owners" element={<OwnersList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

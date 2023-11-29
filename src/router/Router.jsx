import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home";
import { Single } from "../pages/Single";
import { LayoutSidebar } from "../layout/LayoutSidebar";
import { Checkout } from "../pages/Checkout";

export const Router = () => {
    const loadLayout = (Layout, Page) => {
        return (
          <Layout>
            <Page />
          </Layout>
        );
      };
  return (
    <Routes>
      <Route path="/" element={loadLayout(Layout, Home)} />
      <Route path="/article/:id" element={loadLayout(Layout, Single)} />
      <Route path="/checkout" element={loadLayout(Layout, Checkout)} />
    </Routes>
  )
}

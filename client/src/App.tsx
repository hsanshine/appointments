import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Layout, Skeleton } from "antd";

import Navbar from "./components/Navbar";
// import BookingForm from "./components/BookingForm";

import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";
import Customer from "./pages/Customer";
import NewBooking from "./pages/NewBooking";
import ViewAppointment from "./pages/ViewAppointment";
import CheckAppointment from "./pages/CheckAppointment";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const { Footer, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout className="h-100">
      <Navbar />
      <Content className="">
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/new-booking">
            <NewBooking />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/check-appointment">
            {/* maybe pass the appointment id so it can be fetched */}
            <CheckAppointment />
          </Route>
          <Route path="/appointment">
            <ViewAppointment />
          </Route>

          {/* <Skeleton /> */}
        </Switch>
      </Content>
      <Footer className="bg-secondary mb-3 footer">
        <div>Designed by hsanshine </div>
      </Footer>
    </Layout>
  </div>
);

export default App;

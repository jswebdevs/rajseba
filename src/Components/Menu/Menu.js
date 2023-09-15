import {React, useState, useEffect } from "react";
import MenuItem from "../MenuItem/Menu-Item";
import { Col, Form, Row } from "react-bootstrap";
import "./menu.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Menu = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the reviews data asynchronously
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      });
  }, []);

  
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, 
      name: "About", 
      path: "/about",
      subMenu: [
        { id: 8, name: "Our Teams", path: "our-team" },
        { id: 9, name: "Our Blogs", path: "our-blogs" }
      ]
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
      subMenu: services.map((services) => ({
        id: services.serviceid,
        name: services.servicename,
        path: services.serviceslug
      })),
    },
    { id: 4, name: "Gallery", path: "/gallery" },
    { id: 5, name: "Shop", path: "/shop" },
    { id: 6, name: "My Account", path: "/account" },
    { id: 7, 
      name: "Contact", 
      path: "/contact",
      subMenu: [
        { id: 10, name: "Our Branches", path: "branches" },
        { id: 11, name: "Build a Career", path: "career" },
        { id: 12, name: "Join the Training Program", path: "training" }
      ] 
  },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="menu-container-wrapper relative bg-white">
      <div className="menu-container flex justify-between global-blue-bg p-3">
        <div
          className="hamburger-Menu md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XMarkIcon className="h-8"></XMarkIcon>
          ) : (
            <Bars3Icon className="h-8"></Bars3Icon>
          )}
        </div>

        <nav>
          <ul
            className={`md:flex justify-center menu absolute md:static menu duration-800 ease-in 
                            ${open ? "top-12" : "top-[-1200px]"}`}
          >
            {loading ? (
            <p>Loading reviews...</p>) : 
            (routes.map((route) => (
              <li>
                <MenuItem key={route.id} route={route}></MenuItem>
              </li>
              )))}
          </ul>
        </nav>

        <div className="menu-searchbox">
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Search a Service" />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Menu;

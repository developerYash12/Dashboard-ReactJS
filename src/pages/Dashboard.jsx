import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import "./Dashboard.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie
} from "recharts";
import { data, customerData } from "../data";
import Layout from "../component/Layout";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const Dashboard = () => {
  return (
    <div className="screenFlex" style={{ display: "flex" }}>
      <Layout />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h3>Hello Shahrukh 👋,</h3>
          <form className="nosubmit">
            <input className="nosubmit" type="search" placeholder="Search..." />
          </form>
        </div>

        <div className="wrapper">
          <div className="details-container">
            <div className="details-content green">
              <span className="darkgreen">
                <AiOutlineDollarCircle />
              </span>
            </div>
            <div className="details">
              <small className="grey">Earning</small>
              <p>$198k</p>
              <small>
                <span className="earning-percentage-green">&#8593; 37.8%</span>
                this month
              </small>
            </div>
          </div>

          <div className="details-container">
            <div className="details-content bg-grey">
              <span className="purple">
                <LuMenuSquare />
              </span>
            </div>
            <div className="details">
              <small className="grey">Orders</small>
              <p>$2.4k</p>
              <small>
                <span className="earning-percentage-red">&#8595; 2%</span>
                this month
              </small>
            </div>
          </div>

          <div className="details-container">
            <div className="details-content bg-blue">
              <span className="blue">
                <MdOutlineAccountBalanceWallet />
              </span>
            </div>
            <div className="details">
              <small className="grey">Balance</small>
              <p>$2.4k</p>
              <small>
                <span className="earning-percentage-red">&#8595; 2%</span>
                this month
              </small>
            </div>
          </div>

          <div className="details-container">
            <div className="details-content bg-red">
              <span className="red">
                <BsHandbag />
              </span>
            </div>
            <div className="details">
              <small className="grey">Total Sales</small>
              <p>$89k</p>
              <small>
                <span className="earning-percentage-green">&#8593; 11%</span>
                this month
              </small>
            </div>
          </div>
        </div>

        <div className="charts-container">
          <div className="charts">
            <div className="chart-wrapper">
              <div>
                <h4>Overview</h4>
                <small className="grey">Monthly Earning</small>
              </div>
              <select>
                <option>Quaterly</option>
                <option>Semi Annually</option>
                <option>Annually</option>
              </select>
            </div>
            <ResponsiveContainer aspect={3} width="100%">
              <BarChart data={data} width={200} height={200}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="amount" radius={[5, 5, 5, 5]}>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.month === "Aug" ? "#8884d8" : "lightgrey"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="pie-charts">
            <div>
              <h4>Customer</h4>
              <small className="grey">Customers that buy product</small>
            </div>
            <span className="customer-percentage">65%</span>
            <span className="new-customer">Total New</span>
            <span className="customer">Customer</span>
            <div className="pie-chart-container">
              <PieChart width={350} height={300}>
                <Pie
                  data={data}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="lightgrey"
                  paddingAngle={5}
                  dataKey="amount"
                >
                  {customerData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>
        </div>

        <div className="sell-container">
          <div className="sell-header">
            <h3>Product sell</h3>
            <div>
              <form className="nosubmit">
                <input
                  className="nosubmit sell"
                  type="search"
                  placeholder="Search..."
                />
              </form>
              <select className="dropdown sell">
                <option>Last 30 days</option>
                <option>Last 45 days</option>
                <option>Last 60 days</option>
              </select>
            </div>
          </div>

          <div className="product">
            <small className="grey">Product Name</small>
            <div>
              <small className="grey">Stock</small>
              <small className="grey">Price</small>
              <small className="grey">Total Sales</small>
            </div>
          </div>

          <div className="product-details-container">
            <div className="product-details">
              <img
                src="https://images.unsplash.com/photo-1627637820550-423ab938955c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                alt="3d"
              />
              <div>
                <h4>Abstarct 3D</h4>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </small>
              </div>
            </div>

            <div className="product-sell-details">
              <small>32 in stock</small>
              <small>$45.99</small>
              <small>20</small>
            </div>
          </div>

          <div className="product-details-container">
            <div className="product-details">
              <img
                src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                alt="3d"
              />
              <div>
                <h4>Sarphens Illustration</h4>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </small>
              </div>
            </div>

            <div className="product-sell-details">
              <small>32 in stock</small>
              <small>$45.99</small>
              <small>20</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

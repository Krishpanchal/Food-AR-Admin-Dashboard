import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import {
  fetchTodayTotalViewTime,
  fetchTotalLength,
  fetchTotalViewTime,
  fetchTotalViewsPerDate,
  fetchTotalViewsPerFoodItem,
} from "../../actions/foodItems";

const Home = () => {
  const [totalViewTime, setTotalViewTime] = useState(null);
  const [todaytotalViewTime, setTodaytotalViewTime] = useState(null);
  const [length, setLength] = useState({});
  const [chartData, setChartData] = useState([]);
  const [pieData, setPieData] = useState([]);

  const getTotalViewTime = async () => {
    const data = await fetchTotalViewTime();
    setTotalViewTime(data.totalViewTime);
  };

  const getTodayTotalViewTime = async () => {
    const data = await fetchTodayTotalViewTime();
    setTodaytotalViewTime(data.totalViewTime);
  };

  const getTotalLength = async () => {
    const data = await fetchTotalLength();
    setLength(data);
  };

  const getTotalViewsPerDate = async () => {
    const data = await fetchTotalViewsPerDate();
    setChartData(data);
  };
  const getTotalViewsPerFoodItem = async () => {
    const data = await fetchTotalViewsPerFoodItem();
    setPieData(data);
  };

  useEffect(() => {
    getTotalViewTime();
    getTodayTotalViewTime();
    getTotalLength();
    getTotalViewsPerDate();
    getTotalViewsPerFoodItem();
  }, []);

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='today_viewtime' showData={todaytotalViewTime} />
          <Widget type='total_viewtime' showData={totalViewTime} />
          <Widget type='total_fooditems' showData={length} />
          <Widget type='total_categories' showData={length} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}>
          <div
            className='charts'
            style={{
              width: "950px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Chart
              title='Total Views Per Day'
              data={chartData}
              aspect={2 / 1}
            />
          </div>
          <div style={{ width: "950px" }}>
            <Featured title='Total Views Per FoodItem' data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

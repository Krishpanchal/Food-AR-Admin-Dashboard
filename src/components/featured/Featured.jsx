import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";
import Chart from "react-google-charts";

const Featured = ({ data, title }) => {
  console.log(data);

  return (
    <div className='featured'>
      <div className='title' style={{ alignSelf: "start" }}>
        {title}
      </div>

      <Chart
        chartType='PieChart'
        data={data}
        width={"800px"}
        height={"500px"}
      />
    </div>
  );
};

export default Featured;

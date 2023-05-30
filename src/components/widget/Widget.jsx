import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

const Widget = ({ type, showData }) => {
  let data;

  //temporary

  switch (type) {
    case "today_viewtime":
      data = {
        title: "Today's View Time",
        isMoney: false,
        link: "See all views",
        time: showData + " seconds",
        icon: (
          <VisibilityOutlinedIcon
            className='icon'
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "total_viewtime":
      data = {
        title: "Total View Time",
        isMoney: false,
        link: "See all views",
        time: showData + " seconds",
        icon: (
          <VisibilityOutlinedIcon
            className='icon'
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "total_fooditems":
      data = {
        title: "Total Food Items",
        isMoney: false,
        link: "View Food Items",
        time: showData?.foodItems,
        icon: (
          <LunchDiningOutlinedIcon
            className='icon'
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "total_categories":
      data = {
        title: "Total Categories",
        isMoney: false,
        link: "View Categories",
        time: showData?.categories,
        icon: (
          <CategoryOutlinedIcon
            className='icon'
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.time}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {/* {diff} % */}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

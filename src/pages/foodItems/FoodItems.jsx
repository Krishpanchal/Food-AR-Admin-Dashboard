import "../list/list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import { fetchFoodItems } from "../../actions/foodItems";

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 230,
    },
    {
      field: "foodItem",
      headerName: "FoodItem",
      width: 230,
    },
    {
      field: "category",
      headerName: "Category",
      width: 230,
    },

    {
      field: "views",
      headerName: "Views",
      width: 100,
    },
    {
      field: "totalViewTime",
      headerName: "TotalViewTime",
      width: 160,
    },
  ];

  const rows = foodItems?.map((el) => {
    return {
      id: el.id,
      foodItem: el.name,
      category: el.category.name,
      views: el?.viewTime ? el.viewTime.length : 0,
      totalViewTime: el.totalViewTime,
    };
  });

  console.log(foodItems);

  const getFoodItems = async () => {
    const data = await fetchFoodItems();
    setFoodItems(data);
  };

  useEffect(() => {
    getFoodItems();
  }, []);

  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <Datatable columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default FoodItems;

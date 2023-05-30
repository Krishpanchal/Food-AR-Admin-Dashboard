import axios from "axios";

export const fetchTotalViewTime = async () => {
  try {
    let url = "/api/v1/foodItems/totalViewTime";

    const response = await axios.get(url);
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTodayTotalViewTime = async () => {
  try {
    let url = "/api/v1/foodItems/todayTotalViewTime";

    const response = await axios.get(url);
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTotalLength = async () => {
  try {
    let url = "/api/v1/foodItems/totalLength";

    const response = await axios.get(url);
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFoodItems = async (foodItem = "", category = "") => {
  try {
    let url = "/api/v1/foodItems?";

    const response = await axios.get(url);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTotalViewsPerDate = async () => {
  try {
    let url = "/api/v1/foodItems/viewTimeByDate";

    const response = await axios.get(url);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFoodItem = async (data) => {
  try {
    let url = "/api/v1/foodItems";

    const response = await axios.post(url, data);
    console.log(response);
    // return response?.data?.data;
  } catch (error) {
    // console.log(error);
  }
};

export const fetchTotalViewsPerFoodItem = async () => {
  try {
    let url = "/api/v1/foodItems/viewByFoodItem";

    const response = await axios.get(url);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

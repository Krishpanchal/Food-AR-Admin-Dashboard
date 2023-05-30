import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import FoodItemModal from "../foodItems/FoodItemModal";

const Datatable = ({ columns, rows }) => {
  const [data, setData] = useState(userRows);
  const [open, setOpen] = useState(false);

  console.log(columns);
  console.log(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: "none" }}>
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add FoodItems
        <button onClick={onOpenModal} className='link'>
          Add New
        </button>
        <Modal open={open} onClose={onCloseModal} center>
          <FoodItemModal />
        </Modal>
      </div>
      <DataGrid
        className='datagrid'
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

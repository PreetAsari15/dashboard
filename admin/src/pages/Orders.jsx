// import React from 'react'
import React from 'react';
import {useState, useEffect} from "react"
import { Header } from '../components';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Filter } from '@syncfusion/ej2-react-grids';
import {RichTextEditorComponent} from '@syncfusion/ej2-react-richtexteditor'
// import orders from '../resources/orders.json';
import { useNavigate } from "react-router-dom";
import { ordersGrid } from '../resources/dummy';
import {DataStore} from "aws-amplify"
import {Order} from "../models"
const Orders = () => {

    const [orders, setOrders] = useState([])
    const navigate = useNavigate();

    useEffect(() =>{
      DataStore.query(Order).then(setOrders);
    }, []);

    console.log(orders);

    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === "Accepted") {
            return <RichTextEditorComponent color={"green"}>{orderStatus}</RichTextEditorComponent>;
          }
          if (orderStatus === "Pending") {
            return <RichTextEditorComponent color={"orange"}>{orderStatus}</RichTextEditorComponent>;
          }
          if (orderStatus === "Declined") {
            return <RichTextEditorComponent color={"red"}>{orderStatus}</RichTextEditorComponent>;
          }
    }

    const tableColumns = [
        {
          title: "Order ID",
          dataIndex: "orderID",
          key: "orderID",
        },
        {
          title: "Delivery Address",
          dataIndex: "deliveryAddress",
          key: "deliveryAddress",
        },
        {
          title: "Price",
          dataIndex: "total",
          key: "total",
          render: (total) => `${total} $`,
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: renderOrderStatus,
        },
      ];

      let grid;
      const rowSelected = () => {
          if (grid) {
              /** Get the selected row indexes */
              const selectedrowindex = grid.getSelectedRowIndexes();
              /** Get the selected records. */
              const selectedrecords = grid.getSelectedRecords();
              alert(selectedrowindex + " : " + JSON.stringify(selectedrecords));
              navigate(`${selectedrowindex}`)
            }
            // onClick: () => navigate(`${rowSelected.orderID}`)
      };

  return (
    <div className="m-2 md:m-10 mt-24 bg-white p-2 md:p-10 rounded-3xl">

      <Header category="Page" title="Orders"/>

      <GridComponent dataSource={orders} allowPaging={true} rowSelected={rowSelected}  ref={g => grid = g} allowFiltering={true} allowSorting={true} loadingIndicator={{ indicatorType: 'Shimmer' }} >

        <ColumnsDirective>
          <ColumnDirective field='orderID' headerText='Order ID (↑)' width='80' textAlign="Left"/>
          <ColumnDirective field='price' headerText='Price (↑)' width='80' textAlign="Left"/>
          <ColumnDirective field='deliveryAddress' headerText='Delivery Address (↑)' width='120' textAlign="Left"/>
          <ColumnDirective field='status' headerText='Status (↑)' width='80' textAlign="Left"/>
        </ColumnsDirective>

        <Inject services={[Page, Sort, Filter]} />
      </GridComponent>

    </div>
  )
}

export default Orders
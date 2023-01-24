// import React from 'react'
import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import {RichTextEditorComponent} from '@syncfusion/ej2-react-richtexteditor'
import orders from '../resources/orders.json';
import { useNavigate } from "react-router-dom";
// import { updateSampleSection } from '../common/sample-base';
const Orders = () => {
    const navigate = useNavigate();

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
          dataIndex: "price",
          key: "price",
          render: (price) => `${price} $`,
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: renderOrderStatus,
        },
      ];

  return (
    <div className='control-pane'>
    <div className='control-section' title={Orders}>
      <GridComponent dataSource={orders} height='350'>
        <ColumnsDirective
        columns={tableColumns}
        rowKey="orderID"
        onRow={(orderItem) => ({
          onClick: () => navigate(`order/${orderItem.orderID}`),
        })}/>
          {/* <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'></ColumnDirective>
          <ColumnDirective field='DeliveryAddress' headerText='DeliveryAddress' width='350'></ColumnDirective>
          <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'/>
          <ColumnDirective field='Status' headerText='Status' width='130' textAlign='Right'></ColumnDirective> */}
        {/* </ColumnsDirective> */}
      </GridComponent>
    </div>
  </div>
  )
}

export default Orders
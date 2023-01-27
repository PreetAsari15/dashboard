// import React from 'react'
import React from 'react';
import { Header } from '../components';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import {RichTextEditorComponent} from '@syncfusion/ej2-react-richtexteditor'
import orders from '../resources/orders.json';
import { useNavigate } from "react-router-dom";
import { ordersGrid } from '../resources/dummy';
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
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <div className='control-pane'>
    <div className='control-section'>
      <Header category="Page" title="Orders"/>
      <GridComponent dataSource={orders} title={"Orders"}>
        <ColumnDirective
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                dataSource={orders}
                columns={tableColumns}
                rowKey="orderID"
                onRow={(orderItem) => ({
                  onClick: () => navigate(`order/${orderItem.orderID}`),
                })}
        />
      </GridComponent>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
        </div>
      </div>
    </div>
  )
}

export default Orders
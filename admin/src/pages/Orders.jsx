import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import {RichTextEditorComponent} from '@syncfusion/ej2-react-richtexteditor'
import orders from '../resources/orders.json'
import { ordersData, contextMenuItems, ordersGrid } from '../resources/dummy';

import { Header } from '../components';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };

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
  };
  const tableColumns = [
    {
      title: 'Order ID',
      dataIndex: 'orderID',
      key: 'orderID',
    },
    {
      title: 'Delivery Address',
      dataIndex: 'deliveryAddress',
      key: 'deliveryAddress'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `${price} $`
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: renderOrderStatus
    }
  ];
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={orders}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        columns={tableColumns}
        editSettings={editing}
        onRow={(orderItem) => ({
          onclick: () => navigate(`order/${orderItem.orderID}`)
        })}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
    </div>
  );
};
export default Orders;
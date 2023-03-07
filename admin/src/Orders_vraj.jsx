import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';
import { useNavigate } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Order } from '../models';
import { useQuery, ApolloClient, InMemoryCache, gql } from '@apollo/client'; // Added this; Vraj

const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_ENDPOINT', // Replace with actual endpoint from AWS Amplify
  cache: new InMemoryCache()
});

const GET_ORDERS = gql`
query GetOrders {
  listOrders {
    items {
      id
      userID
      total
      status
      WasteProvider {
        id
        name
      }
      OrderServices {
        id
        serviceType
        quantity
      }
    }
  }
}
`; 

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_ORDERS, { client });

  useEffect(() => {
    if (!loading && !error) {
      setOrders(data.listOrders.items);
    }
  }, [loading, error, data]);


  const renderOrderStatus = (orderStatus) => {
    if (orderStatus === 'Accepted') {
      return (
        <RichTextEditorComponent color={'green'}>
          {orderStatus}
        </RichTextEditorComponent>
      );
    }
    if (orderStatus === 'Pending') {
      return (
        <RichTextEditorComponent color={'orange'}>
          {orderStatus}
        </RichTextEditorComponent>
      );
    }
    if (orderStatus === 'Declined') {
      return (
        <RichTextEditorComponent color={'red'}>
          {orderStatus}
        </RichTextEditorComponent>
      );
    }
    return (
      <RichTextEditorComponent color={'black'}>
        {orderStatus}
      </RichTextEditorComponent>
    );
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
      key: 'deliveryAddress',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `${price} $`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
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
      alert(selectedrowindex + ' : ' + JSON.stringify(selectedrecords));
      navigate(`${selectedrowindex}`);
    }
    // onClick: () => navigate(`${rowSelected.orderID}`)
  };

  return (
    <div className='m-2 md:m-10 mt-24 bg-white p-2 md:p-10 rounded-3xl'>
      <Header category='Page' title='Orders' />

      <GridComponent
        dataSource={orders}
        allowPaging={true}
        rowSelected={rowSelected}
        ref={(g) => (grid = g)}
        allowFiltering={true}
        allowSorting={true}
        loadingIndicator={{ indicatorType: 'Shimmer' }}
      >
        <ColumnsDirective>
          <ColumnDirective
            field='orderID'
            headerText='Order ID (↑)'
            width='80'
            textAlign='Left'
          />
          <ColumnDirective
            field='price'
            headerText='Price (↑)'
            width='80'
            textAlign='Left'
          />
          <ColumnDirective
            field='deliveryAddress'
            headerText='Delivery Address (↑)'
            width='120'
            textAlign="Left"
          />
          <ColumnDirective
            field='status'
            headerText='Status (↑)'
            width='80'
            textAlign="Left"
          />

        </ColumnsDirective>
    <Inject services={[Page, Sort, Filter]} />
      </GridComponent>

      </div>
  )
}

export default Orders



//

//  return (
//    <div className="m-2 md:m-10 mt-24 bg-white p-2 md:p-10 rounded-3xl">

//     <Header category="Page" title="Orders"/>

//     <GridComponent dataSource={orders} allowPaging={true} rowSelected={rowSelected}  ref={g => grid = g} allowFiltering={true} allowSorting={true} loadingIndicator={{ indicatorType: 'Shimmer' }} >
//
//        <ColumnsDirective>
//          <ColumnDirective field='orderID' headerText='Order ID (↑)' width='80' textAlign="Left"/>
//          <ColumnDirective field='price' headerText='Price (↑)' width='80' textAlign="Left"/>
//          <ColumnDirective field='deliveryAddress' headerText='Delivery Address (↑)' width='120' textAlign="Left"/>
//          <ColumnDirective field='status' headerText='Status (↑)' width='80' textAlign="Left"/>
//        </ColumnsDirective>

//       <Inject services={[Page, Sort, Filter]} />
//     </GridComponent>

//    </div>
//  )
//}

//export default Orders

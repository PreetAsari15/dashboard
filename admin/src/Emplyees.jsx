import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';
import { useNavigate } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Employee } from '../models';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    DataStore.query(Employee).then(setEmployees);
  }, []);

  const renderEmployeeStatus = (employeeStatus) => {
    if (employeeStatus === 'Active') {
      return <RichTextEditorComponent color={'green'}>{employeeStatus}</RichTextEditorComponent>;
    }
    if (employeeStatus === 'Inactive') {
      return <RichTextEditorComponent color={'red'}>{employeeStatus}</RichTextEditorComponent>;
    }
  };

  const tableColumns = [
    {
      title: 'Employee ID',
      dataIndex: 'employeeID',
      key: 'employeeID',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: renderEmployeeStatus,
    },
  ];

  let grid;
  const rowSelected = () => {
    if (grid) {
      const selectedRowIndex = grid.getSelectedRowIndexes();
      const selectedRecords = grid.getSelectedRecords();
      alert(selectedRowIndex + ' : ' + JSON.stringify(selectedRecords));
      navigate(`${selectedRowIndex}`);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 bg-white p-2 md:p-10 rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employees}
        allowPaging={true}
        rowSelected={rowSelected}
        ref={(g) => (grid = g)}
        allowFiltering={true}
        allowSorting={true}
        loadingIndicator={{ indicatorType: 'Shimmer' }}
      >
        <ColumnsDirective>
          <ColumnDirective field="employeeID" headerText="Employee ID (↑)" width="80" textAlign="Left" />
          <ColumnDirective field="name" headerText="Name (↑)" width="120" textAlign="Left" />
          <ColumnDirective field="email" headerText="Email (↑)" width="120" textAlign="Left" />
          <ColumnDirective field="status" headerText="Status (↑)" width="80" textAlign="Left" />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Employees;

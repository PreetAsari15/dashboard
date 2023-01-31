import React from "react";
import { Header } from "../../components";
import { ListBoxComponent } from "@syncfusion/ej2-react-dropdowns";

const DetailedOrder = () => {
  return (
    <div>
      <Header category="Page" title={"Detailed Order"} />
      <div className="flex justify-center" style={{ width: 500, height: 100 }}>
        <ListBoxComponent
          label="Customer"
          dataSource={["LukasGraham"]}
        ></ListBoxComponent>
        <ListBoxComponent
          label="Customer Address"
          dataSource={["43 Aditya Bunglows, Regina, Saskatchewan"]}
        ></ListBoxComponent>
      </div>
    </div>

    // <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    //   <Header category="Page" title="Detailed Order" />
    //   <div className="overflow-hidden bg-white shadow sm:rounded-lg">
    //     <div className="px-4 py-5 sm:px-6">
    //       <h3 className="text-lg font-medium leading-6 text-gray-900">
    //         Customer
    //       </h3>
    //       <p className="mt-1 max-w-2xl text-sm text-gray-500">
    //         Customer details and application.
    //       </p>
    //     </div>
    //     <div className="border-t border-gray-200">
    //       <dl>
    //         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt
    //             className="text-sm font-medium text-gray-500"
    //             label="Customer"
    //           >
    //             Full Name
    //           </dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
    //             Carson Foster
    //           </dd>
    //         </div>
    //         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">
    //             Customer Address
    //           </dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
    //             Retallack St, Saskatoon, SK, Canada
    //           </dd>
    //         </div>
    //         <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">
    //             Salary expectation
    //           </dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
    //             $120,000
    //           </dd>
    //         </div>
    //         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    //           <dt className="text-sm font-medium text-gray-500">About</dt>
    //           <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
    //             Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
    //             incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
    //             consequat sint. Sit id mollit nulla mollit nostrud in ea officia
    //             proident. Irure nostrud pariatur mollit ad adipisicing
    //             reprehenderit deserunt qui eu.
    //           </dd>
    //         </div>
    //         <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"></div>
    //       </dl>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DetailedOrder;

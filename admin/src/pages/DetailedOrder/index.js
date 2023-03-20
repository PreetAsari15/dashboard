// import React from "react";
// import { Header } from "../../components";
// import { ListViewComponent } from "@syncfusion/ej2-react-lists";
// import dishes from "../../resources/dishes.json";
// import { enableRipple } from "@syncfusion/ej2-base";
// import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
// import Logo from "../../resources/avatar.jpg";
// // import { GiFlexibleLamp } from "react-icons/gi";
// // import { content } from "@syncfusion/ej2-react-grids";
// const DetailedOrder = () => {
//   return (
//     <div className="w-full">
//       <Header category="Page" title={"Detailed Order"} />
//       <div
//         className="w-full -scroll-ml-6"
//         // style={{ width: 500, height: 150 }}
//       >
//         <div className="e-card">
//           <div className="e-card-header">
//             <div className="e-card-header-image football" />
//             <img
//               src={Logo}
//               className="rounded-full w-12 h-12"
//               alt="Didn't work init"
//             />
//             <div className="e-card-header-caption">
//               <div className="e-card-header-title"> Carson Callahan</div>
//               <div className="e-card-sub-title">
//                 4045 Robinson St, Regina, SK
//               </div>
//             </div>
//           </div>
//           <div className="e-card-content">
//             Carson received a BA in psychology from the University of
//             Washington. She has also completed a course in business French. She
//             reads and writes French.
//           </div>
//         </div>
//       </div>
//       {/* Divider */}
//       <div className="divide-y divide-dashed md:divide-solid mt-3 mb-3 ml-20 mr-20">
//         <div></div>
//         <div></div>
//       </div>
//       {/* Divider ends */}

//       <div className="e-card w-1/2">
//         <div className="e-card-header">
//           <div className="e-card-header-caption">Order List</div>
//         </div>
//         <div
//           className="e-card-content flex space-between"
//           style={styles.orderList}
//         >
//           <div>
//             <ListViewComponent
//               dataSource={dishes}
//               fields={{
//                 id: "id",
//                 text: "name",
//               }}
//             ></ListViewComponent>
//           </div>
//           <div>
//             <ListViewComponent
//               dataSource={dishes}
//               fields={{
//                 id: "id",
//                 text: "quantity",
//               }}
//             ></ListViewComponent>
//           </div>
//           <div>
//             <ListViewComponent
//               dataSource={dishes}
//               fields={{
//                 id: "id",
//                 text: "price",
//               }}
//             ></ListViewComponent>
//           </div>
//         </div>
//         <div>
//           <h2 className="mt-5 text-xl">Total: </h2>
//           <h2 className="text-lg">$ 23.45</h2>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="divide-y divide-dashed md:divide-solid mt-3 ml-20 mr-20">
//         <div></div>
//         <div></div>
//       </div>
//       {/* Divider ends */}

//       <div className="buttonsContainer" style={styles.buttonsContainer}>
//         <div className="declineBtn">
//           <ButtonComponent
//             type="submit"
//             cssClass="e-danger"
//             isDanger={true}
//             style={styles.button}
//           >
//             Decline Order
//           </ButtonComponent>
//         </div>
//         <div className="acceptBtn">
//           <ButtonComponent
//             type="submit"
//             cssClass="e-success"
//             isSuccess={true}
//             style={styles.button}
//           >
//             Accept Button
//           </ButtonComponent>
//         </div>
//       </div>
//       <div className="flex w-full">
//         <ButtonComponent
//           type="submit"
//           cssClass="e-primary"
//           isPrimary={true}
//           style={styles.button}
//         >
//           Pickup is on it's way
//         </ButtonComponent>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   buttonsContainer: {
//     display: "flex",
//     paddingTop: 30,
//     paddingBottom: 30,
//     justifyContent: "space-around",
//   },
//   button: {
//     marginRight: 30,
//     marginLeft: 30,
//     height: 50,
//     width: "100%",
//   },
//   orderList: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
// };
// export default DetailedOrder;

import { Card, Descriptions, Divider, List, Button } from "antd";
import dishes from "../../resources/dishes.json";
import { useParams } from "react-router-dom";

const DetailedOrder = () => {
  const { id } = useParams();

  return (
    <Card title={`Order ${id}`} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Customer">
          Lukas Grinevicius
        </Descriptions.Item>
        <Descriptions.Item label="Customer Address">
          Address 15-29, City, Country
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(dishItem) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>
              {dishItem.name} x{dishItem.quantity}
            </div>
            <div>${dishItem.price}</div>
          </List.Item>
        )}
      />
      <Divider />
      <div style={styles.totalSumContainer}>
        <h2>Total:</h2>
        <h2 style={styles.totalPrice}>$42.96</h2>
      </div>
      <Divider />
      <div style={styles.buttonsContainer}>
        <Button block type="danger" size="large" style={styles.button}>
          Decline Order
        </Button>
        <Button block type="primary" size="large" style={styles.button}>
          Accept Order
        </Button>
      </div>
      <Button block type="primary" size="large">
        Waste PickUp Is Done
      </Button>
    </Card>
  );
};

const styles = {
  totalSumContainer: {
    flexDirection: "row",
    display: "flex",
  },
  totalPrice: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    paddingBottom: 30,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
  },
};

export default DetailedOrder;

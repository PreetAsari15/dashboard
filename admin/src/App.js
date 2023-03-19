// import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { FiSettings } from "react-icons/fi";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
// import {
//   Orders,
//   Home,
//   Editor,
//   ColorPicker,
//   ColorMapping,
//   Calendar,
//   Customers,
//   Kanban,
//   Pie,
//   Pyramid,
//   Stacked,
//   Bar,
//   Area,
//   Financial,
//   Line,
// } from "./pages";

// import { useStateContext } from "./contexts/ContextProvider";

// import "./App.css";
// import Employees from "./pages/Employees";

// const App = () => {
//   const { activeMenu } = useStateContext();

//   return (
//     <div>
//       <BrowserRouter>
//         <div className="flex relative dark:bg-main-dark-bg">
//           <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
//             <TooltipComponent content="Settings" position="Top">
//               <button
//                 type="button"
//                 className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
//                 style={{ background: "#567189", borderRadius: "50%" }}
//               >
//                 <FiSettings />
//               </button>
//             </TooltipComponent>
//           </div>
//           {activeMenu ? (
//             <div
//               className="w-72 fixed sidebar
//               dark:bg-secondary-dark-bg
//               bg-white
//               "
//             >
//               <Sidebar />
//             </div>
//           ) : (
//             <div className="w-0 dark:bg-secondary-dark-bg">
//               <Sidebar />
//             </div>
//           )}
//           <div
//             // className={`dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full ${
//             //   activeMenu ? "md:ml-72" : "flex-2"
//             // }`}
//             className={
//               activeMenu
//                 ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
//                 : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
//             }
//           >
//             <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
//               <Navbar />
//             </div>
//           </div>
//           <div>
//             <Routes>
//               {/* Dashboard */}
//               <Route path="/" element={<Home />} />
//               <Route path="/home" element={<Home />} />

//               {/* Pages */}
//               <Route path="/employees" element={<Employees />} />
//               <Route path="/orders" element={<Orders />} />
//               <Route path="/customers" element={<Customers />} />

//               {/* Apps */}
//               <Route path="/kanban" element={<Kanban />} />
//               <Route path="/editor" element={<Editor />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/color-picker" element={<ColorPicker />} />

//               {/* Charts */}
//               <Route path="/line" element={<Line />} />
//               <Route path="/area" element={<Area />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/finacial" element={<Financial />} />
//               <Route path="/color-mapping" element={<ColorMapping />} />
//               <Route path="/pyramid" element={<Pyramid />} />
//               <Route path="/stacked" element={<Stacked />} />
//             </Routes>
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

// Apollo Branch

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  // Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Home,
  DetailedOrder,
  SignOut,
  OrdersV,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
Amplify.configure(awsconfig);
const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    } // eslint-disable-next-line
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/ordersV" element={<OrdersV />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="orders/:orderID" element={<DetailedOrder />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

                {/* Settings */}
                <Route path="/signout" element={<SignOut />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default withAuthenticator(App);

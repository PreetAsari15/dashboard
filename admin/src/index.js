import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./contexts/ContextProvider";
import { registerLicense } from "@syncfusion/ej2-base";
import "antd/dist/reset.css";

// Registering Syncfusion license key
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhlWFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSn9ad0FjWn1ccXZSTg==;Mgo+DSMBPh8sVXJ0S0J+XE9BclRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdURqWHtec3ZXR2RcWQ==;ORg4AjUWIQA/Gnt2VVhkQlFac1tJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZiUH5acHdXRGFZU0w=;MTM3Mjc0N0AzMjMwMmUzNDJlMzBWWVFLdjRGcndwRGhDbk1pbVJzTFlldFNTLzJZNFo2S1YxdEpxa2VJK1IwPQ==;MTM3Mjc0OEAzMjMwMmUzNDJlMzBmYy96TDQveDI1d0FqeTI2c21YQS8zSW81NWFXUDVrQkFXNElRVDJMYy8wPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpGVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVgWHZfdHRWRGJeUEJ+;MTM3Mjc1MEAzMjMwMmUzNDJlMzBBeUcwU3lPaUVtZHhieng4M0N6UDhqWlRLdFkvNzRYbGFIVVlhcUp2UnYwPQ==;MTM3Mjc1MUAzMjMwMmUzNDJlMzBIOFRVOS96bmhrcWp2TXRISXhJa1BXaFlGTTJkSC9hczZDTjVPQmNjenBJPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac1tJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZiUH5acHdXRGJUVUw=;MTM3Mjc1M0AzMjMwMmUzNDJlMzBBWUx3bW1uSFpGSFViakVFK1F3a1RjbnNScHFzS1pkSlgrSGpNeDk5Z2ZJPQ==;MTM3Mjc1NEAzMjMwMmUzNDJlMzBOeG1NcnVzb25PYkdpUjhOWkx5b0ZHUTdndERmd0plYy91VENlU0dGOG1jPQ==;MTM3Mjc1NUAzMjMwMmUzNDJlMzBBeUcwU3lPaUVtZHhieng4M0N6UDhqWlRLdFkvNzRYbGFIVVlhcUp2UnYwPQ=="
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//   <ContextProvider>
//     <App />
//   </ContextProvider>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import { Header } from "../../components";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import { dishes } from "../../../src/resources/dishes.json";
import Logo from "../../resources/avatar.jpg";
const DetailedOrder = () => {
  return (
    <div>
      <Header category="Page" title={"Detailed Order"} />
      <div className="flex justify-center" style={{ width: 500, height: 150 }}>
        <div className="e-card">
          <div className="e-card-header">
            <div className="e-card-header-image football" />
            <img
              src={Logo}
              className="rounded-full w-12 h-12"
              alt="Didn't work init"
            />
            <div className="e-card-header-caption">
              <div className="e-card-header-title"> Carson Callahan</div>
              <div className="e-card-sub-title">
                4045 Robinson St, Regina, SK
              </div>
            </div>
          </div>
          <div className="e-card-content">
            Carson received a BA in psychology from the University of
            Washington. She has also completed a course in business French. She
            reads and writes French.
          </div>
        </div>
      </div>
      <div
        style={{ width: 500, height: 150 }}
        className="divide-y divide-dashed md:divide-solid mt-3"
      >
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DetailedOrder;

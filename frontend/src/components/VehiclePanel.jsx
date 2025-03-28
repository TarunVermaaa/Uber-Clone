import React from "react";

const VehiclePanel = ({
  setVehiclePanelOpen,
  setConfirmRidePanel,
  fare,
  selectVehicle,
}) => {
  return (
    <div>
      <h5 className="p-3 text-center absolute top-7 right-[10%]">
        <i
          onClick={() => {
            setVehiclePanelOpen(false);
          }}
          className="text-2xl text-gray-400  ri-arrow-down-wide-line"
        ></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
          selectVehicle("car");
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl  w-full  p-3 items-center justify-between"
      >
        <img
          className="h-14"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="uber car logo"
        />
        <div className="-ml-1 w-1/2">
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable , 4-seater car
          </p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{fare.car}</h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
          selectVehicle("moto");
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl  w-full  p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="uber car logo"
        />
        <div className="ml-2   w-1/2">
          <h4 className="font-medium text-base">
            Moto
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable , Moto Ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{fare.moto}</h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
          selectVehicle("auto");
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl  w-full  p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="uber car logo"
        />
        <div className="ml-2   w-1/2">
          <h4 className="font-medium text-blge">
            UberAuto
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable , Auto Ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;

"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeader2 } from "../../Redux/Header2/ActionHeader2";
import { useEffect } from "react";
const Header2 = () => {
  const { loading, error, header2 } = useSelector((state) => state.header2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeader2());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="body bg-[#eeeded] h-[1800px] w-full">
      <div className="colum w-[288px] h-[679px] absolute top-[455px] rounded-[14px] right-[108px] bg-white">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="checkbox" id="accordion1" defaultChecked />
          <div className="collapse-title font-semibold font-[iranyekanmedium] text-[16px] text-[#727272]">
            قیمت اجاره خودرو
          </div>
          <div className="collapse-content text-sm ">
            <div className="flex justify-between font-[yekan]">
              <p>از 6,000,000 تومان</p>
              <p>تا 60,000,000 تومان</p>
            </div>
            <input
              type="range"
              min={0}
              max="100"
              defaultValue="40"
              className="range text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
            />
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 ">
          <input type="checkbox" id="accordion2"  defaultChecked />
          <div className="collapse-title font-semibold font-[iranyekanmedium] text-[16px] text-[#727272]">
            برند خودرو
          </div>
          <div className="collapse-content text-sm">
            <ul>
              {header2.accordion2?.map((item) => {
                return (
                  <div key={item.id} className="flex font-[iranyekanmedium] ">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-warning mx-2 my-[5px]"
                    />
                    <li className="my-[5px]">{item.name}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="checkbox" id="accordion3"  defaultChecked />
          <div className="collapse-title font-semibold font-[iranyekanmedium] text-[16px] text-[#727272]">
            اجاره خودرو بر اساس نیاز شما
          </div>
          <div className="collapse-content text-sm">
            <ul>
              {header2.accordion3?.map((item) => {
                return (
                  <div key={item.id} className="flex font-[iranyekanmedium] ">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary mx-2 my-[5px]"
                    />
                    <li className="my-[5px]">{item.name}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;

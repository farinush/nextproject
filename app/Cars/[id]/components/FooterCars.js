"use client";

import { fetchFooterh } from "@/app/Redux/FooterH/ActionFooterh";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCopyright } from "react-icons/md";

const FooterCars = () => {
  const { loading, error, footerh } = useSelector((state) => state.footerh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFooterh());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!footerh || !footerh.box1) return <h1>No data available</h1>;
  return (
    <div className="footer absolute top-[3650px] left-[190px] w-[80%] p-[40px] mx-auto h-[490px] bg-[#1E1E1EE5] rounded-[20px]">
      <div className="box1 items-center border flex text-white justify-between border-gray-600 rounded-[15px] mx-auto w-[93%] h-[101px] ">
        {footerh.box1?.map((item) => {
          return (
            <div className="w-[254px] items-center flex h-[69px] mx-auto p-[10px]" key={item.id}>
              <img src={item.image} alt="" />
              <div className="font-[yekan] mx-[20px] text-center justify-center text-[17px]  colum-wrap text-[14px] font-[400] gap-y-[20px]">
                <div className="my-[15px]">{item.title}</div>
                <div >{item.inform}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="box2 justify-between w-[97%]  flex font-[iranyekanmedium] text-white px-[96px]">
        <div className="colum1 w-[438px] text-[14px] font-[400] colum-wrap">
          <img src={footerh.autorent} alt="" />
          <div className="text-wrap my-[24px]  leading-[25px]">{footerh.text}</div>
        </div>
        <div className="colum2 w-[134px] ">
          {footerh.colum?.map((item)=>{
            return <div className="colum-wrap my-[20px] text-[16px] font-[500]" key={item.id}>{item.title}</div>
          })}
        </div>
        <div className="colum3">
          <div className="text-[16px] font-[600]">{footerh.khabarname}</div>
          <input type="text" placeholder="ایمیل خود را وارد کنید" className="border p-3 h-[40px] w-[320px] mx-2 my-[15px] rounded-[10px] border-gray-500"/>
          <input type="ارسال" placeholder="ارسال" className="btn btn-warning w-[70px]"/>
        </div>
      </div>
      <hr  className="w-[95%] mx-auto border-gray-400"/>
      <div className="box3 mx-auto font-[iranyekanmedium] flex text-white">
        <div><MdOutlineCopyright /></div>
        <div>تمامی حقوق این سایت متعلق به اتورنت می باشد.</div>
      </div>
    </div>
  );
};

export default FooterCars;

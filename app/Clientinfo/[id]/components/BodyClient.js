"use client";
import { fetchClient } from "@/app/Redux/Client/ActionClient";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BodyClient = ({ q, carDetails }) => {
  if (!carDetails) {
    return <h1>loading....</h1>;
  }
  const { loading, error, client } = useSelector((state) => state.client);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClient());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <div className="box1 p-5 items-center text-center flex w-[70%] h-[122px] mx-auto absolute top-[456px] right-[280px] bg-white">
        <div className="first w-[86px] h-[84px] ">
          <img src={client.svg1} alt="" className="mx-auto block" />
          <div className="font-[iranyekanmedium] text-[#727272] my-[4px] text-[14px] font-[400]">
            {client.text1}
          </div>
        </div>
        <hr className="border border-gray-300 w-[202px]" />
        <div className="second  w-[86px] h-[84px]">
          <img src={client.svg2} alt="" className="mx-auto block" />
          <div className="font-[iranyekanmedium] text-[#727272] my-[4px] text-[14px] font-[400]">
            {client.text2}
          </div>
        </div>
        <hr className="border border-gray-300 w-[202px]" />
        <div className="third  w-[86px] h-[84px]">
          <img src={client.svg3} alt="" className="mx-auto block" />
          <div className="font-[iranyekanmedium] text-[#727272] my-[4px] text-[14px] font-[400]">
            {client.text3}
          </div>
        </div>
        <hr className="border border-gray-300 w-[202px]" />
        <div className="fourth  w-[86px] h-[84px]">
          <img src={client.svg4} alt="" className="mx-auto block" />
          <div className="font-[iranyekanmedium] text-[#727272] my-[4px] text-[14px] font-[400]">
            {client.text4}
          </div>
        </div>
        <hr className="border border-gray-300 w-[202px]" />
        <div className="fifth  w-[86px] h-[84px]">
          <img src={client.svg5} alt="" className="mx-auto block" />
          <div className="font-[iranyekanmedium] text-[#727272] my-[4px] text-[14px] font-[400]">
            {client.text5}
          </div>
        </div>
      </div>
      <div className="box2 rounded-[10px] items-center  justify-center p-5 w-[70%] h-[56px] flex absolute top-[652px] bg-[#D9E1FD] right-[280px]">
        <img className="w-[32px] block h-[32px]" src={client.alarm} alt="" />
        <div className="text-[#194BF0]  mx-[7px] font-[iranyekanmedium] text-[20px] font-[400]">برای اعتبارسنجی قبل از تحویل خودرو,مستنداتی از شما درخواست می گردد,عدم ارائه این مستندات باعث لغو این رزرو خواهد شد.</div>
      </div>
      <div className="box3 p-6 w-[70%] h-[530px] top-[770px] right-[280px] absolute bg-white">
        <div className="font-[iranyekanmedium] text-[16px] font-[400] text-[#404040]">مشخصات کاربر</div>
        <hr  className="w-[96%] mx-auto border my-[20px] border-gray-200"/>
        <div >
            <input type="text" placeholder="نام" className="w-[528px] px-[60px] font-[iranyekanmedium] p-3 h-[48px] border border-gray-300 rounded-[10px] absolute top-[110px] right-[80px]" />
            <img src={client.namesvg} alt="" className="absolute top-[120px] right-[100px]" />
        </div>
        <div >
            <input type="text" placeholder="کدملی" className="w-[528px] px-[60px] font-[iranyekanmedium] p-3 h-[48px] border border-gray-300 rounded-[10px] absolute top-[188px] right-[80px]" />
            <img src={client.namesvg} alt="" className="absolute top-[200px] right-[100px]" />
        </div>
        <div >
            <input type="text" placeholder="ایمیل" className="w-[528px] px-[60px] font-[iranyekanmedium] p-3 h-[48px] border border-gray-300 rounded-[10px] absolute top-[268px] right-[80px]" />
            <img src={client.emailsvg} alt="" className="absolute top-[280px] right-[100px]" />
        </div>
        <div >
            <input type="text" placeholder="آدرس" className="w-[528px] px-[60px] font-[iranyekanmedium] p-3 h-[48px] border border-gray-300 rounded-[10px] absolute top-[350px] right-[80px]" />
            <img src={client.addresssvg} alt="" className="absolute top-[360px] right-[100px]" />
        </div>
        <div className="w-[232px] h-[48px] bg-[#D7D7D7] rounded-[10px] text-white text-center items-center leading-[48px] font-[iranyekanmedium] absolute right-[240px] top-[450px] cursor-pointer hover:text-black">ادامه رزرو</div>
        <div >
            <input type="text" placeholder="نام خانوادگی" className="w-[528px] px-[60px] font-[iranyekanmedium] p-3 h-[48px] border border-gray-300 rounded-[10px] absolute top-[110px] left-[80px]" />
            <img src={client.familysvg} alt="" className="absolute top-[120px] left-[565px]" />
        </div>
         <div >
            <input type="text" placeholder="شماره موبایل" className="w-[528px] px-[60px] font-[iranyekanmedium] p-3 h-[48px] border border-gray-300 rounded-[10px] absolute top-[188px] left-[80px] z-20" />
            <img src={client.familysvg} alt="" className="absolute top-[200px] left-[565px]" />
        </div>
        <div className="absolute top-[150px] left-0"><img src={client.client} className="w-[596px] h-[502px] block " alt="" /></div>
      </div>
        
    </>
  );
};

export default BodyClient;

"use client"
import { fetchCars } from "@/app/Redux/Cars/ActionCars";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoriteCars = () => {
  const { loading, error, cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="box7 w-[68%] h-[590px]  p-4 absolute top-[3000px] right-[290px]">
      <div className="flex justify-between ">
        <div className="text-[18px] font-[500] font-[iranyekanmedium] my-[15px]">
          خودروهایی که شاید دوست داشته باشید!
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[14px] font-[500] text-[#194BF0] font-[iranyekanmedium]">
            مشاهده بیشتر
          </div>
          <img src="/svg/Cars/flesh.svg" alt="" />
        </div>
      </div>
      <div className="w-[100%] h-[510px] flex justify-between">
        {cars.favorite?.map((item) => {
          return (
            <div
              className="w-[30%] h-full bg-white border border-gray-600 rounded-[10px] p-[16px]"
              key={item.id}
            >
              <img
                src={item.image}
                alt=""
                className="w-[256px] block mx-auto h-[225px] object-contain"
              />
              <div className="title font-[iranyekanmedium] text-[16px] font-[700] my-[8px]">
               <span className="mx-1">اجاره خودرو</span>
                {item.title}
              </div>
              <div className="model text-gray-400 font-[iranyekanmedium] text-[12px] font-[400] mb-[8px]">
                {item.model}
              </div>
              <div className="box1 flex text-[12px] items-center rounded-[10px] justify-between font-[yekan] w-full bg-[#eceaea] h-[44px] pr-2">
                <div className="flex">
                  {" "}
                  {item.daily}
                  <div className="text-[#194BF0] mx-1 text-[15px]">
                    {item.price}
                  </div>
                </div>{" "}
                <div className="ml-[20px]">روزانه</div>
              </div>
              <div className="box2 my-3 flex text-[12px] items-center rounded-[10px] justify-between font-[yekan] w-full bg-[#eceaea] h-[44px] pr-2">
                <div className="flex">
                  {" "}
                  {item.daily}
                  <div className="text-[#194BF0] mx-1 text-[15px]">
                    {item.price}
                  </div>
                </div>{" "}
                <div className="ml-[20px]">روزانه</div>
              </div>
              <hr className="w-[90%] mx-auto opacity-15" />
              <div className="garanti mt-[10px] font-[iranyekanmedium] text-[13px] flex justify-between">
                <div className="text-[#010616] text-[12px]">{item.garanty}</div>
                <div className="font-[yekan]">{item.garantyprice}</div>
              </div>
              <Link
                href={`/Cars/${item.id}?q=${encodeURIComponent(item.title)}`}
                className="w-[256px] block text-center pt-[5px] font-[iranyekanmedium] cursor-pointer mt-[5px] h-[40px] text-white bg-[#194BF0] rounded-[10px]"
              >
                {item.button}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteCars;

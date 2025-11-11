"use client"
import { useDispatch, useSelector } from "react-redux";
import { HiChevronDown } from "react-icons/hi";
import { fetchTaghvim2 } from "../../Redux/Taghvim2/ActionTaghvim2";
import { useEffect, useState } from "react";
const Taghvim2 = () => {
  const { loading, error, taghvim2 } = useSelector((state) => state.taghvim2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTaghvim2());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  function showtaghvim() {
    setShow(true);
  }
  function closetaghvim() {
    setShow(false);
  }
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div
      className="w-[287px] h-[48px] absolute top-[455px] border-gray-400 left-[380px] cursor-pointer rounded-[8px] border-[1px] p-[12px]"
      onClick={showtaghvim}
    >
      <input
        type="text"
        className="font-[iranyekanmedium] absolute"
        placeholder="مرتب سازی"
      />
      <div className="absolute left-4 top-5">
        <HiChevronDown />
      </div>
      {show && (
        <div
          onClick={closetaghvim}
          className="showpage absolute w-full  top-[45px] left-0 bg-black bg-opacity-100 z-20"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="sub-showpage p-6 rounded-[10px] w-[287px] h-[482px] top-0 left-0 absolute bg-[white] shadow-lg"
          >
            <div
              className="absolute top-4 left-4 cursor-pointer"
              onClick={closetaghvim}
            >
              &times;
            </div>
            <div className="parentboxes absolute">
              <div className="box1">
                <input
                  type="text"
                  placeholder="متن عنوان"
                  className="border border-1 p-3 top-2 absolute rounded-[10px] w-[200px] border-gray-500 font-[iranyekanmedium] text-[14px] font-[400]"
                />
                <div className="absolute right-40 top-7">
                  <HiChevronDown />
                </div>
              </div>
              <div className="box2 my-3">
                <input
                  type="text"
                  placeholder="متن عنوان"
                  className="border border-1 top-25 p-3 absolute rounded-[10px] w-[200px] border-gray-500 font-[iranyekanmedium] text-[14px] font-[400]"
                />
                <div className="absolute right-40 top-29">
                  <HiChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Taghvim2;

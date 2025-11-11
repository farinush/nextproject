"use client"
import { fetchCars } from "@/app/Redux/Cars/ActionCars";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrLocation } from "react-icons/gr";
import { HiChevronDown } from "react-icons/hi";

import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "next/link";

const Submittion = ({ carDetails }) => {
  if (!carDetails) {
    return <h1>Loading...!</h1>;
  }
  const { loading, error, cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const [color, setColor] = useState(false);
  const [inputpage1, setInputpage1] = useState(false);
  const [inputpage2, setInputpage2] = useState(false);
  const [location, setLocation] = useState("");
  const [location2, setLocation2] = useState("");
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [value1, setValue1] = React.useState(dayjs("2022-04-17T15:30"));
  const [valueR, setValueR] = React.useState(dayjs("2022-04-17"));
  const [valueT, setValueT] = React.useState(dayjs("2022-04-17T15:30"));
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [dayscount, setDayscount] = useState(0);
  const [totalprice, setTotalprice] = useState(0);

  function changeColor(id) {
    setColor(id);
  }
  function openinput1() {
    setInputpage1(true);
  }
  function closeinput1() {
    setInputpage1(false);
  }
  function openinput2() {
    setInputpage1(false);
    setInputpage2(true);
  }
  function closeinput2() {
    setInputpage2(false);
  }
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  function chooselocation(cityname) {
    setLocation(cityname);
    setInputpage1(false);
  }
  function chooselocation2(cityname2) {
    setLocation2(cityname2);
    setInputpage2(false);
  }
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    if (value && valueR) {
      const startdate = dayjs(value);
      const enddate = dayjs(valueR);

      const diffDays = enddate.diff(startdate, "day");
      setDayscount(diffDays > 0 ? diffDays : 0);

      const priceItem = carDetails.prices?.find((item) => item.id === 2);
      const priceperDay = priceItem
        ? Number(priceItem.text.replace(/,/g, ""))
        : 0;
      setTotalprice(diffDays > 0 ? diffDays * priceperDay : 0);
    }
  }, [value, valueR, carDetails.prices]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="w-[500px] h-[850px] bg-white rounded-[15px] px-3 py-7 absolute top-[455px] left-[300px]">
      <div className="box1 mb-[30px] flex justify-between">
        {carDetails.prices?.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[230px] font-[yekan] h-[38px] flex justify-between items-center p-2 rounded-[10px] bg-[#F3F3F3]"
            >
              <div className="text-[12px] font-[400]">
                از یک تا 30 روز:{" "}
                <span className="text-[#194BF0] text-[16px] font-[600]">
                  {item.text}
                </span>{" "}
              </div>
              <div className="text-[12px]">{item.day}</div>
            </div>
          );
        })}
      </div>
      <div className="box2 flex justify-between p-2">
        {cars.machintype?.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => changeColor(item.id)}
              className={`btn font-[iranyekanmedium] ${
                color === item.id
                  ? "bg-[#194BF0] text-white"
                  : "bg-[white] text-black"
              } text-[13px] font-[400] w-[150px] h-[40px] border border-[#D7D7D7] rounded-[30px]`}
            >
              {item.type}
            </button>
          );
        })}
      </div>
      <div className="box3 relative mt-[15px]">
        <div className="svg absolute top-[15px] right-[26px]">
          <GrLocation />
        </div>
        <input
          onClick={openinput1}
          type="text"
          readOnly
          value={location ? location : ""}
          className="w-[95%] absolute cursor-pointer overflow-y-scroll top-0 left-[14px] px-8 text-[14px] border border-gray-600 rounded-[8px] font-[iranyekanmedium] h-[48px]"
          placeholder="محل تحویل خودرو"
        />
        {inputpage1 && (
          <div className="inputpage absolute w-full  top-[45px] left-0 bg-black bg-opacity-100 z-20">
            <div
              onClick={(e) => e.stopPropagation()}
              className="subinputpage border border-gray-600 rounded-[10px] w-[450px] h-[482px] top-0 left-[15px] absolute bg-[white]  shadow-lg"
            >
              <div
                className="absolute top-4 left-4 cursor-pointer"
                onClick={closeinput1}
              >
                &times;
              </div>
              <div className="font-[iranyekanmedium] absolute top-4 right-4 text-[14px] text-[#194BF0] font-[500]">
                انتخاب شهر
              </div>
              <div className="accordion w-[98%] absolute top-11 right-0 p-1">
                {" "}
                <div className="join join-vertical w-[100%] bg-base-100">
                  {cars.location?.map((item) => {
                    return (
                      <div
                        className="collapse collapse-arrow join-item border-base-300 border "
                        key={item.id}
                      >
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title  font-[iranyekanmedium] text-[16px]">
                          {item.city}
                        </div>
                        <div className="collapse-content text-sm">
                          {item.province?.map((item) => {
                            return (
                              <div
                                className="font-[iranyekanmedium] flex flex-col"
                                key={item.id}
                              >
                                <div
                                  onClick={() => chooselocation(item.name)}
                                  className="my-[5px] cursor-pointer text-gray-700"
                                >
                                  {item.name}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="svg2 absolute top-[15px] left-[26px]">
          <HiChevronDown />
        </div>
      </div>
      <div className="box4 relative top-[70px] mt-[15px]">
        <div className="svg absolute top-[15px] right-[26px]">
          <GrLocation />
        </div>
        <input
          onClick={openinput2}
          type="text"
          readOnly
          value={location2 ? location2 : ""}
          className="w-[95%] absolute cursor-pointer overflow-y-scroll top-0 left-[14px] px-8 text-[14px] border border-gray-600 rounded-[8px] font-[iranyekanmedium] h-[48px]"
          placeholder="محل بازگشت خودرو"
        />
        {inputpage2 && (
          <div className="inputpage absolute w-full   top-[45px] left-0 bg-black bg-opacity-100 z-20">
            <div
              onClick={(e) => e.stopPropagation()}
              className="subinputpage border  border-gray-600 rounded-[10px] w-[450px] h-[482px] top-0 left-[15px] absolute bg-[white]  shadow-lg"
            >
              <div
                className="absolute top-4 left-4 cursor-pointer"
                onClick={closeinput2}
              >
                &times;
              </div>
              <div className="font-[iranyekanmedium] absolute top-4 right-4 text-[14px] text-[#194BF0] font-[500]">
                انتخاب شهر
              </div>
              <div className="accordion w-[98%] absolute top-11 right-0 p-1">
                {" "}
                <div className="join join-vertical w-[100%] bg-base-100">
                  {cars.location2?.map((item) => {
                    return (
                      <div
                        className="collapse collapse-arrow join-item border-base-300 border "
                        key={item.id}
                      >
                        <input type="radio" name="my-accordion-5" />
                        <div className="collapse-title  font-[iranyekanmedium] text-[16px]">
                          {item.city}
                        </div>
                        <div className="collapse-content text-sm">
                          {item.province?.map((item) => {
                            return (
                              <div
                                className="font-[iranyekanmedium] flex flex-col"
                                key={item.id}
                              >
                                <div
                                  onClick={() => chooselocation2(item.name)}
                                  className="my-[5px] cursor-pointer text-gray-700"
                                >
                                  {item.name}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="svg2 absolute top-[15px] left-[26px]">
          <HiChevronDown />
        </div>
      </div>
      <div className="box5 relative w-[94.5%] right-3 top-[140px]" dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="تاریخ تحویل"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            enableAccessibleFieldDOMStructure={false}
            slotProps={{
              textField: {
                variant: "outlined",
                fullWidth: true,
                InputLabelProps: {
                  sx: {
                    width: "85%", // ← جایگزین w-[95%]
                    fontSize: "17px",
                    right: 18,
                    left: "auto",
                    transformOrigin: "right !important",
                    textAlign: "right",
                    fontFamily: "iranyekanmedium",
                  },
                },
                InputProps: {
                  sx: {
                    direction: "rtl",
                    "& fieldset": {
                      textAlign: "right",
                    },
                    "& legend": {
                      textAlign: "right",
                    },
                    "& .MuiInputBase-root": {
                      flexDirection: "row-reverse",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderColor: "black",
                      borderWidth: 1,
                      borderRadius: "8px",
                      flexDirection: "row-reverse",
                      "&:hover fieldset": { borderColor: "black" },
                      "&.Mui-focused fieldset": { borderColor: "black" },
                    },
                    "& .MuiInputBase-input": {
                      textAlign: "right",
                      fontFamily: "iranyekanmedium",
                    },
                    "& .MuiSvgIcon-root": {
                      marginRight: "8px",
                      marginLeft: 0,
                    },
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="box6 relative w-[94.5%] right-3 top-[165px]" dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="ساعت تحویل"
            value={value1}
            onChange={(newValue) => setValue1(newValue)}
            enableAccessibleFieldDOMStructure={false}
            slotProps={{
              textField: {
                variant: "outlined",
                fullWidth: true,
                InputLabelProps: {
                  sx: {
                    width: "85%", // ← جایگزین w-[95%]
                    fontSize: "17px",
                    right: 18,
                    left: "auto",
                    transformOrigin: "right !important",
                    textAlign: "right",
                    fontFamily: "iranyekanmedium",
                  },
                },
                InputProps: {
                  sx: {
                    direction: "rtl",
                    "& fieldset": {
                      textAlign: "right",
                    },
                    "& legend": {
                      textAlign: "right",
                    },
                    "& .MuiInputBase-root": {
                      flexDirection: "row-reverse",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderColor: "black",
                      borderWidth: 1,
                      borderRadius: "8px",
                      flexDirection: "row-reverse",
                      "&:hover fieldset": { borderColor: "black" },
                      "&.Mui-focused fieldset": { borderColor: "black" },
                    },
                    "& .MuiInputBase-input": {
                      textAlign: "right",
                      fontFamily: "iranyekanmedium",
                    },
                    "& .MuiSvgIcon-root": {
                      marginRight: "8px",
                      marginLeft: 0,
                    },
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="box7 relative w-[94.5%] right-3 top-[195px]" dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="تاریخ بازگشت"
            value={valueR}
            onChange={(newValue) => setValueR(newValue)}
            enableAccessibleFieldDOMStructure={false}
            slotProps={{
              textField: {
                variant: "outlined",
                fullWidth: true,
                InputLabelProps: {
                  sx: {
                    width: "85%", // ← جایگزین w-[95%]
                    fontSize: "17px",
                    right: 18,
                    left: "auto",
                    transformOrigin: "right !important",
                    textAlign: "right",
                    fontFamily: "iranyekanmedium",
                  },
                },
                InputProps: {
                  sx: {
                    direction: "rtl",
                    "& fieldset": {
                      textAlign: "right",
                    },
                    "& legend": {
                      textAlign: "right",
                    },
                    "& .MuiInputBase-root": {
                      flexDirection: "row-reverse",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderColor: "black",
                      borderWidth: 1,
                      borderRadius: "8px",
                      flexDirection: "row-reverse",
                      "&:hover fieldset": { borderColor: "black" },
                      "&.Mui-focused fieldset": { borderColor: "black" },
                    },
                    "& .MuiInputBase-input": {
                      textAlign: "right",
                      fontFamily: "iranyekanmedium",
                    },
                    "& .MuiSvgIcon-root": {
                      marginRight: "8px",
                      marginLeft: 0,
                    },
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="box8 relative w-[94.5%] right-3 top-[225px]" dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="ساعت بازگشت"
            value={valueT}
            onChange={(newValue) => setValueT(newValue)}
            enableAccessibleFieldDOMStructure={false}
            slotProps={{
              textField: {
                variant: "outlined",
                fullWidth: true,
                InputLabelProps: {
                  sx: {
                    width: "85%", // ← جایگزین w-[95%]
                    fontSize: "17px",
                    right: 18,
                    left: "auto",
                    transformOrigin: "right !important",
                    textAlign: "right",
                    fontFamily: "iranyekanmedium",
                  },
                },
                InputProps: {
                  sx: {
                    direction: "rtl",
                    "& fieldset": {
                      textAlign: "right",
                    },
                    "& legend": {
                      textAlign: "right",
                    },
                    "& .MuiInputBase-root": {
                      flexDirection: "row-reverse",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderColor: "black",
                      borderWidth: 1,
                      borderRadius: "8px",
                      flexDirection: "row-reverse",
                      "&:hover fieldset": { borderColor: "black" },
                      "&.Mui-focused fieldset": { borderColor: "black" },
                    },
                    "& .MuiInputBase-input": {
                      textAlign: "right",
                      fontFamily: "iranyekanmedium",
                    },
                    "& .MuiSvgIcon-root": {
                      marginRight: "8px",
                      marginLeft: 0,
                    },
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="box9 flex relative w-[92%] items-center right-3 top-[250px] justify-between text-[14px] font-[iranyekanmedium]">
        <div>نوع بیمه:</div>
        <div>
          {" "}
          <div>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              }
              label="بیمه پایه"
              componentsProps={{
                typography: {
                  sx: {
                    fontSize: "14px",
                    fontFamily: "iranyekanmedium",
                    color: "black",
                  },
                },
              }}
            />
            <FormControlLabel
              control={
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
              }
              label="بیمه کامل"
              componentsProps={{
                typography: {
                  sx: {
                    fontSize: "14px",
                    fontFamily: "iranyekanmedium",
                    color: "black",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="box10 bg-[#F3F3F3] flex justify-start items-center w-[94%] rounded-[10px] h-[44px] relative right-3 p-1 top-[270]">
        <div className="font-[yekan] text-[14px] font-[400] mx-3">
          {dayscount}روز:
        </div>
        <div className="font-[yekan] text-[#194BF0] text-[16px] font-[700]">
          {totalprice.toLocaleString()}
        </div>
      </div>
      <Link href={`/Clientinfo/${carDetails.id}?q=${encodeURIComponent(carDetails.title)}`}  className="box11 cursor-pointer bg-[#194BF0] w-[94%] relative right-3 top-[290px] block rounded-[10px] p-3 text-white text-center font-[iranyekanmedium]">
        ثبت درخواست
      </Link>
    </div>
  );
};

export default Submittion;

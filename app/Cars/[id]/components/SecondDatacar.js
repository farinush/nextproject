import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./secondDataCar.css";
import { Navigation } from "swiper/modules";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("قیمت", null, null, 0, "32,045,275"),
  createData("ودیعه", null, null, "250,000,000", "250,000,000"),
  createData("حداکثر تعهد خسارت جزیی", null, null, "250,000,000", "50,000,000"),
  createData("حداکثر تعهد خسارت کلی", null, null, "150,000,000", "500,000,000"),
  createData(
    "اخذ افت خودرو در زمان تصادف",
    null,
    null,
    "به طور کامل",
    "اخذ نمیگردد"
  ),
  createData(
    "خواب خودرو",
    null,
    null,
    "تمام روزهای خواب به قیمت اجاره",
    "نصف قیمت اجاره حداکثر به مدت 30روز"
  ),
];
const SecondDatacar = ({ q, carDetails }) => {
  if (!carDetails) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <div className="box1 w-[704px] h-[530px] p-2 bg-white absolute top-[650px] right-[290px] rounded-[15px]">
        <div className="slider">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {carDetails.totalimages?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <img src={item.image} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="images flex w-[685px] my-[20px]  gap-x-[5px]">
          {carDetails.totalimages?.map((item) => {
            return (
              <div className="w-[130px] " key={item.id}>
                <img
                  className="w-[130px] h-[100px] object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="box2 p-4 w-[704px] h-[520px] absolute top-[1230px] rounded-[15px] right-[290] bg-white">
        <div className="font-[iranyekanmedium] my-[7px] font-[700] text-[25px]">
          پوشش ها
        </div>
        <hr className="border-[1px] mt-[5px] border-gray-200" />
        <div className="table my-[15px]" dir="rtl">
          <TableContainer component={Paper}>
            <Table
              sx={{
                width: "100%",
                tableLayout: "fixed",
                "& th": {
                  fontFamily: "iranyekanmedium",
                  fontWeight: 600,
                  fontSize: "14px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                },
                "& td": {
                  fontFamily: "yekan",
                  fontSize: "13px",
                  textAlign: "center",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  lineHeight: "1.6",
                  padding: "10px",
                },
                "& td:last-child": {
                  width: "35%", // 👈 محدود کردن ستون آخر
                },
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">بیمه پایه</TableCell>
                  <TableCell align="right">بیمه کامل</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="box3 w-[704px] h-[220px] p-4 absolute top-[1800px] rounded-[15px] right-[290px] bg-white">
        <div className="font-[iranyekanmedium] text-[25px] font-[700]">
          مشخصات
        </div>
        <hr className="border-[1px] mt-[5px] border-gray-200" />
        <div className=" grid grid-cols-3 grid-rows-2 w-[656px] h-[125px]">
          {carDetails.character?.map((item) => {
            return (
              <div className="mt-[25px] flex  items-center  " key={item.id}>
                <div className="mx-[20px]">
                  <img src={item.svg} alt="" />
                </div>
                <div>
                  <div className="font-[iranyekanmedium] text-[12px] font-[600] text-[#353535]">
                    {item.title}
                  </div>
                  <div className="font-[yekan] text-[#727272] text-[12px] font-[400]">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="box4 w-[704px] h-[220px] p-4 absolute top-[2070px] rounded-[15px] right-[290px] bg-white">
        <div className="font-[iranyekanmedium] text-[25px] font-[700]">
          امکانات
        </div>
        <hr className="border-[1px] mt-[5px] border-gray-200" />
        <div className=" grid grid-cols-3 grid-rows-2 w-[656px] h-[125px]">
          {carDetails.feature?.map((item) => {
            return (
              <div className="mt-[25px] flex  items-center  " key={item.id}>
                <div className="mx-[20px]">
                  <img src={item.svg} alt="" />
                </div>
                <div>
                  <div className="font-[iranyekanmedium] text-[13px] font-[500] text-[#353535]">
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="box5 w-[704px] h-[320px] p-4 absolute top-[2340px] rounded-[15px] right-[290px] bg-white">
        <div className="font-[iranyekanmedium] text-[25px] font-[700]">
          درباره خودرو
        </div>
        <hr className="border-[1px] mt-[5px] border-gray-200" />
        <div className="title font-[iranyekanmedium] font-[600] my-[10px] text-[17px]">
          اجاره خودرو {q}
        </div>
        <div className="font-[iranyekanmedium] text-[15px] leading-[27px] text-gray-600">
          {carDetails.about}
        </div>
      </div>
      <div className="box6 w-[704px] h-[250px] p-4 absolute top-[2700px] rounded-[15px] right-[290px] bg-white">
        <div className="font-[iranyekanmedium] text-[25px] font-[700]">
          نظرات
        </div>
        <hr className="border-[1px] mt-[5px] border-gray-200" />
        <div className="border-[1px] border-gray-400 p-3 mt-[40px]  w-[95%] h-[122px] mx-auto rounded-[15px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              <img
                className="w-[50px] h-[50px] object-cover"
                src="/images/comment.jpg"
                alt=""
              />
              <div className="font-[yekan] mx-[10px] text-gray-500">
                تاریخ:1403/03/12
              </div>
            </div>
            <div className="star font-[yekan]">
              4/2
              <img
                className="w-[20px] h-[20px] object-cover"
                src="/images/star.png"
                alt=""
              />
            </div>
          </div>
          <div className="text font-[iranyekanmedium]">
            خیلی عالی بود! پیشنهاد میکنم یکبارم که شده از اتورنت ماشین اجاره
            کنید.
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondDatacar;

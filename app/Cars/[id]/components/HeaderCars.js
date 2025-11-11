"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { LuClockAlert } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { fetchHeader } from "@/app/Redux/Header/ActionHeader";

const HeaderCars = () => {
  const { loading, error, header } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const [showlogin, setShowlogin] = useState(false);
  const [showsubmit, setShowsubmit] = useState(false);
  const [inputb, setInputb] = useState("");
  const [inputError, setInputError] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);
  const [code5, setCode5] = useState(["", "", "", "", ""]);
  const [loggedIn, setloggedIn] = useState(false);
  const latestCodeRef = useRef("");
  const [logoutmessage, setLogoutmessage] = useState(false);
  const [codemessage, setCodemessage] = useState(false);
  const [sentcode, setSentcode] = useState("");
  const [loginmessage, setLoginmessage] = useState(false);

  function submitlogin() {
    const isPhoneValid = /^09\d{9}$/.test(inputb);
    const checkbox = document.querySelector(".mycheckbox");
    const isCheckboxChecked = checkbox?.checked;

    document.querySelector(".inputlogin")?.classList.remove("borderRed");
    checkbox?.classList.remove("borderRedText");

    if (!isPhoneValid) {
      setInputError(true);
      document.querySelector(".inputlogin")?.classList.add("borderRed");
      return;
    } else {
      setInputError(false);
    }

    if (!isCheckboxChecked) {
      checkbox?.classList.add("borderRedText");
      return;
    }
    const newCode = Math.floor(10000 + Math.random() * 90000).toString();
    latestCodeRef.current = newCode;
    setSentcode(newCode);
    setCodemessage(true);
    setTimeout(() => {
      setCodemessage(false);
    }, 10000);

    setShowlogin(false);
    setShowsubmit(true);
  }

  function showpageLogin() {
    setShowlogin(true);
    setInputError(false);
  }
  function closepageLogin() {
    setShowlogin(false);
    setShowsubmit(false);
  }
  function reverseLogin() {
    setShowlogin(true);
    setInputError(false);
    setShowsubmit(false);
  }

  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  useEffect(() => {
    if (showsubmit) {
      setTimeLeft(90);
    }
  }, [showsubmit]);

  useEffect(() => {
    if (!showsubmit) return;
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showsubmit]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleCodeChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode5 = [...code5];
    newCode5[index] = value;
    setCode5(newCode5);
  };

  const allFilled = code5.every((c) => c !== "");
  function codeloginsubmit() {
    if (!allFilled) {
      alert("لطفاً همه‌ی خانه‌ها را پر کنید!");
      return;
    }
    const userCode = code5.reverse().join("");
    console.log("کد وارد شده: ", userCode);
    if (userCode === latestCodeRef.current) {
      setLoginmessage(true);
      setTimeout(() => {
        setLoginmessage(false);
      }, 3000);
      setShowsubmit(false);
      setloggedIn(true);
    } else {
      document
        .querySelectorAll(".myinputsecond")
        .forEach((el) => el.classList.add("borderRed"));
    }
  }

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="header relative w-full h-[400px]">
      <div className="navbar z-5 flex justify-between bg-white w-[70%] py-[18.5px] px-8 left-[300px] fixed rounded-br-2xl rounded-bl-2xl">
        <div className="svg">
          <img src={header.rent} alt="" />
        </div>
        <div className="nav flex my-[18px] mx-auto w-[600px] gap-x-[30px] h-[28px]">
          <Link
            href="/Tamas"
            className="text-[15px] hover:text-blue-600 font-[iranyekanmedium]"
          >
            {header.tamas}
          </Link>
          <Link
            href="/About"
            className="text-[15px] hover:text-blue-600 font-[iranyekanmedium]"
          >
            {header.about}
          </Link>
          <Link
            href="/Blog"
            className="text-[15px] hover:text-blue-600 font-[iranyekanmedium]"
          >
            {header.blog}
          </Link>
          <Link
            href="/Service"
            className="text-[15px] hover:text-blue-600 font-[iranyekanmedium]"
          >
            {header.service}
          </Link>
          <Link
            href="/Rentmachine"
            className="text-[15px] hover:text-blue-600 font-[iranyekanmedium]"
          >
            {header.rentmachine}
          </Link>
          <div className="hover:text-blue-600">
            <FiSearch />
          </div>
        </div>
        {!loggedIn ? (
          <div
            onClick={showpageLogin}
            className="login cursor-pointer my-[10px] text-center text-[15px] p-2 rounded-[10px] bg-[#194BF0] text-white font-[iranyekanmedium] w-[122px] h-[40px]"
          >
            {header.login}
            {showlogin && (
              <div className="loginpage bg-[#2b2b2b]/[0.3] z-0 left-0 top-0  w-[100%] fixed h-[100vh]">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="subloginpage p-3 bg-white rounded-[20px] z-10  w-[609px] h-[460px] absolute top-[250px] left-[680px]"
                >
                  <div
                    onClick={closepageLogin}
                    className="button block cursor-pointer absolute text-[black] w-[10px] h-[10px]  left-[20px] top-[20px]"
                  >
                    &times;
                  </div>
                  <div className="mx-auto my-[30px]">
                    <img
                      className="block my-[30px] mx-auto"
                      src={header.rent}
                      alt=""
                    />
                  </div>
                  <div className="text-[20px] my-[20px] mx-auto text-black text-center font-[iranyekanmedium]">
                    ورود یا ثبت نام
                  </div>
                  <div className="text-gray-600 mr-5 text-right text-[15px]">
                    کد تایید به شماره موبایلی که وارد میکنید,ارسال خواهد شد.
                  </div>
                  <div>
                    <input
                      onChange={(e) => setInputb((inputb) => e.target.value)}
                      type="text"
                      className="inputlogin my-[20px] text-black p-3  w-[95%] border border-black rounded-[15px] h-[48px]"
                      placeholder="شماره موبایل"
                    />
                    {inputError && (
                      <div className="text-red-500 text-sm">
                        شماره تماس را به درستی وارد کنید
                      </div>
                    )}
                  </div>
                  <div className="flex my-[20px]  mr-4">
                    <input type="checkbox" className="mycheckbox" />
                    <div className="text-black mx-[10px] font-[iranyekanmedium]">
                      با ورود و ثبت نام در سایت,با{" "}
                      <span className="text-[#194BF0]">قوانین اتورنت</span>{" "}
                      موافقت میکنم.
                    </div>
                  </div>
                  <button
                    onClick={submitlogin}
                    className="w-[95%] cursor-pointer bg-[#F3F3F3] text-gray-900 h-[48px]"
                  >
                    تایید و ادامه
                  </button>
                </div>
              </div>
            )}
            {showsubmit && (
              <div className="loginpage bg-[#2b2b2b]/[0.3] z-0 left-0 top-0  w-[100%] fixed h-[100vh]">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="subloginpage p-3 bg-white rounded-[20px] z-10  w-[609px] h-[422px] absolute top-[250px] left-[680px]"
                >
                  <div
                    onClick={closepageLogin}
                    className="button block cursor-pointer absolute text-[black] w-[10px] h-[10px]  left-[20px] top-[20px]"
                  >
                    &times;
                  </div>
                  <div className="mx-auto my-[30px]">
                    <img
                      className="block my-[30px] mx-auto"
                      src={header.rent}
                      alt=""
                    />
                  </div>
                  <div className="text-[20px] my-[20px] mx-auto text-black text-center font-[iranyekanmedium]">
                    ورود یا ثبت نام
                  </div>
                  <div className="text-gray-600 mr-5 text-right text-[15px]">
                    کد پنچ رقمی ارسال شده به شماره {inputb}را وارد کنید.
                  </div>
                  <div>
                    {code5?.map((item, index) => {
                      return (
                        <input
                          key={index}
                          onChange={(e) =>
                            handleCodeChange(index, e.target.value)
                          }
                          maxLength={1}
                          type="text"
                          className="myinputsecond my-[20px] text-center text-black p-3  w-[80px] mx-2 border border-black rounded-[15px] h-[48px]"
                          value={item}
                        />
                      );
                    })}
                  </div>
                  <div className="flex text-black justify-between my-[20px] mr-4">
                    <div className="flex gap-x-[10px] px-4">
                      <LuClockAlert />
                      <span className="countdown font-mono text-xl">
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                      </span>
                      تا دریافت مجدد کد
                    </div>
                    <div
                      onClick={reverseLogin}
                      className="text-[#194BF0] mx-[10px] font-[iranyekanmedium]"
                    >
                      ویرایش شماره موبایل
                    </div>
                  </div>
                  <button
                    disabled={!allFilled}
                    onClick={codeloginsubmit}
                    className={`w-[95%] ${
                      allFilled ? "bg-[#194BF0]" : "bg-[#F3F3F3]"
                    } cursor-pointer bg-[#F3F3F3] text-gray-900 h-[48px]`}
                  >
                    تایید و ادامه
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-[280px] p-2 bg-[#194BF0] text-white flex items-center rounded-[10px]">
            <span className="font-[yekan] mx-1">{inputb}</span>
            <button
              onClick={() => {
                setloggedIn(false);
                setCode5(["", "", "", "", ""]);
                setInputb("");
                setLogoutmessage(true);
                setTimeout(() => {
                  setLogoutmessage(false);
                }, 3000);
              }}
              className="btn btn-warning btn-sm font-[iranyekanmedium]"
            >
              <MdLogout />
              خروج از حساب کاربری
            </button>
          </div>
        )}
      </div>
      <img
        className="backgroundImage w-full object-cover h-[400px] absolute -top-[1px]"
        src={header.image}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-[400px] bg-[#00000099] bg-opacity-1"></div>
      <div className="absolute top-[143px] left-[880px] w-[179px] h-[85px] text-[#f5b726] font-[iranyekanmedium] text-[30px]">
        اجاره خودرو
      </div>
      <div className="font-[iranyekanmedium] absolute top-[180px] left-[880px] text-[13px] font-bold text-gray-500">
        اتورنت <br /> لیست خودروهای اجاره ای
      </div>
      {logoutmessage && (
        <div
          role="alert"
          className="alert alert-error fixed top-28 left-[200px]  z-[9999] animate-slideUp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-[iranyekanmedium]">
            از حساب کاربری خارج شدید!
          </span>
        </div>
      )}
      {codemessage && (
        <div
          role="alert"
          className="alert alert-warning fixed top-28 left-[200px]  z-[9999] animate-slideUp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span className="font-[yekan]">{sentcode}</span>
        </div>
      )}
      {loginmessage && (
        <div
          role="alert"
          className="alert alert-success fixed top-28 left-[200px]  z-[9999] animate-slideUp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-[iranyekanmedium]">با موفقیت وارد شدید!</span>
        </div>
      )}
    </div>
  );
};

export default HeaderCars;

"use client";
import { fetchCars } from "@/app/Redux/Cars/ActionCars";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderCars from "./components/HeaderCars";
import FooterCars from "./components/FooterCars";
import FirstDatacar from "./components/FirstDatacar";
import Submittion from "./components/Submittion";
import SecondDatacar from "./components/SecondDatacar";
import FavoriteCars from "./components/FavoriteCars";

export default function CarPage({ params }) {
  const { id } = React.use(params);
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const { loading, error, cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    if (cars && cars.original && id) {
      const car = cars.original.find((item) => item.id.toString() === id);
      setCarDetails(car);
    }
  }, [cars, id]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="bg-[#eeeded] relative w-full h-[455vh]">
      <HeaderCars />
      <FirstDatacar q={q} carDetails={carDetails}/>
      <Submittion/>
      <SecondDatacar q={q} carDetails={carDetails}/>
      <FavoriteCars/>
      <FooterCars />
    </div>
  );
}

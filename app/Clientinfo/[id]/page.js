"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeaderClient from "./components/HeaderClient";
import FooterClient from "./components/FooterClient";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "@/app/Redux/Cars/ActionCars";
import BodyClient from "./components/BodyClient";

const ClientPage = ({ params }) => {
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
    <div className="bg-[#eeeded] relative w-full h-[210vh]">
      <HeaderClient />
      <BodyClient q={q} carDetails={carDetails} />
      <FooterClient />
    </div>
  );
};

export default ClientPage;

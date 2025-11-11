const FirstDatacar = ({q,carDetails}) => {
     if (!carDetails) {
    return <h1>Loading...</h1>; 
  }
  return (
    <div className="w-[703px] h-[148px] bg-white absolute top-[455px] right-[290px] p-[24px] rounded-[15px]">
      <div className="flex justify-between my-[10px]">
        <h1 className="font-[yekan] font-[700] text-[20px] text-black">{q}</h1>
        <div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
        </div>
      </div>
      <hr className="border border-[#D7D7D7] my-[15px] w-[95%] mx-auto" />
      <div className="flex ">
        <div className="box1 bg-[#F9F9F9] font-[yekan] text-[12px] p-2 rounded-[10px] flex items-center font-[400] gap-x-[10px]">
          <input type="checkbox" defaultChecked className="checkbox" />
         <div> حداقل سن راننده:25 سال</div>
        </div>
        <div className="box2 bg-[#F9F9F9] font-[yekan] text-[12px] p-2 rounded-[10px] flex items-center gap-x-[10px] font-[400] mx-2">
          <input type="checkbox" defaultChecked className="checkbox" />
      تعداد سرنشین:{carDetails.sarneshin}
        </div>
        <div className="box3 bg-[#F9F9F9] font-[yekan] text-[12px] p-2 rounded-[10px] flex items-center gap-x-[10px] font-[400] mx-2">
          <input type="checkbox" defaultChecked className="checkbox" />
        چمدان:2چمدان بزرگ
        </div>
      </div>
    </div>
  );
};

export default FirstDatacar;

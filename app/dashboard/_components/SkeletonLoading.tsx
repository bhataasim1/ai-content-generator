import React from "react";

const SkeletonLoading = ({ items }: { items: number }) => {
  return Array.from({ length: items || 5 }, (_, index) => (
    <div
      className="w-full bg-slate-300 animate-pulse rounded-lg h-[270px] mt-5"
      key={index}
    ></div>
  ));
};

export default SkeletonLoading;

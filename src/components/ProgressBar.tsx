import React from "react";
import { useSelector } from "react-redux";
import { IBarData, totalValue } from "../redux/dataSlice";

export interface IProgressBarProps {
  width: number;
  height: number;
  barInfo: IBarData[];
}

const ProgressBar = ({ width, height, barInfo }: IProgressBarProps) => {
  const progressBarTotal = useSelector(totalValue);

  const calculatePercentage = (value: number, type: string) => {
    const res = (value * 100) / progressBarTotal;
    if (type === "width") return Math.ceil(res) + "%";
    if (type === "numeric") return res.toFixed(1) + "%";
  };

  return (
    <div className={`flex flex-col gap-2 w-[${width}px] mb-10 `}>
      {/* PROGRESS BAR */}
      <div style={{ width: width, display: "flex" }}>
        {barInfo.map((segment, idx) => (
          <div
            style={{
              backgroundColor: segment.color,
              width: `${calculatePercentage(segment.value, "width")}`,
              height: height,
              borderTopRightRadius: idx === 3 ? "3px" : "0",
              borderBottomRightRadius: idx === 3 ? "3px" : "0",
              borderTopLeftRadius: idx === 0 ? "3px" : "0",
            }}
            key={segment.id + segment.color}
          ></div>
        ))}
      </div>

      {/* TEXT */}
      <div className={`flex items-center w-[${width}]  `}>
        {barInfo.map((segment) => (
          <div key={segment.id} className="w-full">
            <div className="flex justify-start items-center gap-2">
              <div
                style={{
                  backgroundColor: segment.color,
                  borderRadius: "50%",
                  height: "10px",
                  width: "10px",
                }}
              ></div>
              <span className="font-bold text-sm">
                {segment.name}: {segment.value}
                {` (${calculatePercentage(segment.value, "numeric")})`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;

import React, { useEffect, useState } from "react";
import { ItableData, selectTableData } from "../redux/tableSlice";

import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";

interface IColumnFilters {
  projects: boolean;
  tokens: boolean;
  conditions: boolean;
  volume: boolean;
}

const TokenTable = () => {
  const tokenTableInfo = useSelector(selectTableData);

  const [projectName, setProjectName] = useState<string>("");
  const [tokenType, setTokenType] = useState<string>("");
  const [filteredList, setFilteredList] =
    useState<ItableData[]>(tokenTableInfo);

  const [fieldOrders, setFieldOrders] = useState<IColumnFilters>({
    projects: false,
    tokens: false,
    conditions: false,
    volume: false,
  });

  const hanldeBuy = (ID: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    return ID;
  };

  const handleAllFilter = () => {
    const allOrder = [...tokenTableInfo];
    setFilteredList(allOrder);
  };

  useEffect(() => {
    if (projectName || tokenType) {
      const filteredByName = tokenTableInfo.filter(
        (project) =>
          project.name.toLowerCase().includes(projectName) &&
          project.type.toLowerCase().includes(tokenType)
      );
      setFilteredList(filteredByName);
    } else {
      setFilteredList(tokenTableInfo);
    }
  }, [projectName, tokenType, tokenTableInfo]);

  const handleOrderFilter = (fieldType: string) => {
    if (fieldType === "projects") {
      const projectsOrder = [...filteredList];
      if (fieldOrders.projects) {
        projectsOrder.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        projectsOrder.sort((a, b) => b.name.localeCompare(a.name));
      }
      setFieldOrders({ ...fieldOrders, projects: !fieldOrders.projects });
      setFilteredList(projectsOrder);
    }
    if (fieldType === "tokens") {
      const projectsOrder = [...filteredList];
      if (fieldOrders.tokens) {
        projectsOrder.sort((a, b) => a.type.localeCompare(b.type));
      } else {
        projectsOrder.sort((a, b) => b.type.localeCompare(a.type));
      }
      setFieldOrders({ ...fieldOrders, tokens: !fieldOrders.tokens });
      setFilteredList(projectsOrder);
    }

    if (fieldType === "conditions") {
      const projectsOrder = [...filteredList];
      if (fieldOrders.conditions) {
        projectsOrder.sort((a, b) => a.conditions.localeCompare(b.conditions));
      } else {
        projectsOrder.sort((a, b) => b.conditions.localeCompare(a.conditions));
      }
      setFieldOrders({ ...fieldOrders, conditions: !fieldOrders.conditions });
      setFilteredList(projectsOrder);
    }

    if (fieldType === "volume") {
      const projectsOrder = [...filteredList];
      if (fieldOrders.volume) {
        projectsOrder.sort((a, b) => a.volume - b.volume);
      } else {
        projectsOrder.sort((a, b) => b.volume - a.volume);
      }
      setFieldOrders({ ...fieldOrders, volume: !fieldOrders.volume });
      setFilteredList(projectsOrder);
    }
  };

  console.log("list", filteredList);

  return (
    <div className="flex flex-col gap-4">
      {/* TABLE HEADER */}
      <div className="grid grid-cols-table w-full items-center text-gray-400">
        {/* PROJECT */}
        <div className="flex items-center gap-1">
          <button onClick={() => handleOrderFilter("projects")}>
            <AiFillCaretDown
              size={".65rem"}
              className={fieldOrders.projects ? `rotate-180` : `rotate-0`}
            ></AiFillCaretDown>
          </button>
          <button
            className="bg-white rounded px-1 hover:bg-gray-400 hover:text-white "
            onClick={handleAllFilter}
          >
            All
          </button>
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            type="text"
            placeholder="Project"
            className="text-slate-700 border-[1px]  border-slate-500/20 rounded p-1 w-32 bg-slate-100/90 outline-1 focus:outline-blue-500"
          />
        </div>
        {/* TOKEN TYPE */}
        <div className="flex items-center justify-start gap-2 px-1">
          <button onClick={() => handleOrderFilter("tokens")}>
            <AiFillCaretDown
              size={".65rem"}
              className={fieldOrders.tokens ? `rotate-180` : `rotate-0`}
            ></AiFillCaretDown>
          </button>
          <button
            className="bg-white rounded px-1 hover:bg-gray-400 hover:text-white"
            onClick={handleAllFilter}
          >
            All
          </button>
          <input
            value={tokenType}
            onChange={(e) => setTokenType(e.target.value)}
            type="text"
            placeholder="Token Type"
            className="text-slate-700 border-[1px]  border-slate-500/20 rounded-sm p-1 w-32 bg-slate-100/90 outline-1 focus:outline-blue-500"
          />
        </div>
        {/* CONDITIONS */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleOrderFilter("conditions")}
            className="flex items-center gap-1"
          >
            <AiFillCaretDown
              size={".65rem"}
              className={fieldOrders.conditions ? `rotate-180` : `rotate-0`}
            ></AiFillCaretDown>
            Conditions
          </button>
        </div>
        {/* VOLUME */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleOrderFilter("volume")}
            className="flex items-center gap-1"
          >
            <AiFillCaretDown
              size={".65rem"}
              className={fieldOrders.volume ? `rotate-180` : `rotate-0`}
            ></AiFillCaretDown>
            VOLUME
          </button>
        </div>
        <div>ROI</div>
        <div>Free Float</div>
        <div>Insurance Hedge</div>
      </div>
      {/* TokenTable */}
      <div className="flex flex-col gap-4">
        {filteredList.map((project) => (
          <Link href={`project/${project.id}`} key={project.id}>
            <div className="grid grid-cols-table w-full items-center cursor-pointer hover:bg-purple-200/70 text font-medium">
              <div className="flex items-center gap-4">
                <div
                  className={`w-[10px] h-[10px] bg-${project.status}-500 rounded-full`}
                ></div>
                <h3>{project.name}</h3>
              </div>

              <div>{project.type}</div>
              <div>{project.conditions}</div>
              <div>{project.volume}</div>
              <div>{project.roi}</div>
              <div>{project.free}</div>
              <div>{project.hedge}%</div>
              <button
                onClick={(e) => hanldeBuy(project.id, e)}
                className="flex font-medium p-1 justify-center bg-white items-center border-[2px] border-purple-700 text-purple-700 hover:text-white hover:bg-purple-700 rounded"
              >
                Buy
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TokenTable;

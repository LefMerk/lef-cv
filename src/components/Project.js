import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

export default function Projects({task}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-top">
        {expanded ? <FaAngleDown className="mr-1 basis-1/12 mt-0.5" />  : <FaAngleRight className="mr-1 basis-1/12 mt-0.5" />}
        <div className="basis-11/12 leading-5 flex flex-col">
            <div
              className="cursor-pointer hover:text-[#bef52d] font-medium text-sm"
              onClick={() => setExpanded(!expanded)}
            >
              {task.text}
            </div>
            {expanded && task.description &&
              <div className="flex flex-col text-sm mt-1 gap-1">
                <div>{task.description}</div>
                <div className="text-xs italic">({task.technologies})</div>
              </div>
            }
        </div>
    </div>
  );
}
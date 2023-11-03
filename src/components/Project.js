import { Transition } from '@headlessui/react'
import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

export default function Projects({task}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-top">
        {expanded ? <FaAngleDown className="mr-1 basis-1/12 mt-0.5" />  : <FaAngleRight className="mr-1 basis-1/12 mt-0.5" />}
        <div className="basis-11/12 leading-5 flex flex-col select-none">
            <div
              className="cursor-pointer hover:text-[#bef52d] font-medium text-sm"
              onClick={() => setExpanded(!expanded)}
            >
              {task.text}
            </div>
            <Transition
              show={expanded}
              className="flex flex-col text-sm mt-1 gap-1"
              enter="transition-opacity duration-200 ease-in-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div>{task.description}</div>
              <div className="text-xs italic">({task.technologies})</div>
            </Transition>
        </div>
    </div>
  );
}
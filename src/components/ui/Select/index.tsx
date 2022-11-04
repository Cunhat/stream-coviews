import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

export type SelectData = {
  value: string;
  label: string;
};

type SelectProps = {
  data: Array<SelectData>;
  button?: React.ReactNode;
  onChange: (value: any) => void;
  value: SelectData;
};

export const Select: React.FC<SelectProps> = ({
  data,
  button,
  onChange,
  value,
}) => {
  //const [selectedData, setSelectedData] = useState(data[0]);

  return (
    <Listbox as="div" className="" value={value} onChange={onChange}>
      {({ open }) => (
        <>
          {/* <Listbox.Label className="text-sm text-neutral-500">
            {label}
          </Listbox.Label> */}
          <div className="relative">
            <span className="inline-block w-full rounded-md">{button}</span>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              // className="absolute mt-1 w-full rounded-md bg-background shadow-lg"
            >
              <Listbox.Options
                static
                className="shadow-xs absolute max-h-60 overflow-auto rounded-md  bg-background py-1 text-sm leading-6 focus:outline-none"
              >
                {data.map((elem) => (
                  <Listbox.Option key={elem} value={elem}>
                    {({ selected, active }) => (
                      <div
                        className={`${
                          active ? "bg-primary text-white" : "text-white"
                        } relative cursor-default select-none py-1 pl-3 pr-4`}
                      >
                        <span
                          className={`${
                            selected
                              ? active
                                ? "text-white"
                                : "text-primary"
                              : ""
                          } block truncate`}
                        >
                          {elem.label}
                        </span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

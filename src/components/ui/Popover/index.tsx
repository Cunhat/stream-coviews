import { Popover as MyPopover } from "@headlessui/react";

export const Popover = () => {
  return (
    <MyPopover className="relative">
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <MyPopover.Button className="h-7 w-7 bg-primary"></MyPopover.Button>
          <MyPopover.Panel className="absolute  z-10 flex flex-col bg-red-500">
            <a href="/insights">Insights</a>
            <a href="/automations">Automations</a>
            <a href="/reports">Reports</a>
          </MyPopover.Panel>
        </>
      )}
    </MyPopover>
  );
};

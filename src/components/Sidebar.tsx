"use client";

//Icons Imports --

import {
  Settings,
  CircleUserRound,
  LayoutDashboard,
  BarChartHorizontalBig,
  Network,
  Plug,
  UsersRound,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Image from "next/image";

export default function Sidebar() {
  const menuList = [
    {
      group: "",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "Settings",
        },
        {
          link: "/",
          icon: <CircleUserRound />,
          text: "Team",
        },
      ],
    },
    {
      group: "Menu",
      items: [
        {
          link: "/",
          icon: <LayoutDashboard />,
          text: "Dashboard",
        },
        {
          link: "/",
          icon: <BarChartHorizontalBig />,
          text: "Campaigns",
        },
        {
          link: "/",
          icon: <Network />,
          text: "Flows",
        },
        {
          link: "/",
          icon: <Plug />,
          text: "Integrations",
        },
        {
          link: "/",
          icon: <UsersRound />,
          text: "Customers",
        },
      ],
    },
  ];

  return (
    <div className="flex fixed top-0 flex-col w-[180px] min-h-screen p-2">
      <div className="flex font-[700] drop-shadow-md text-gray-500 p-[15px] text-lg">
        Salesware
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem
                    key={optionKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>

      <div className="flex -space-x-2 overflow-hidden">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <p className="flex px-[23px] my-[3px]">Tom Wang</p>
      </div>
    </div>
  );
}

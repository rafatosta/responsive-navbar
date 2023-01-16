import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

import Spense_Icon from "../assets/Spense_Icon.svg";
import Fiber_Icon from "../assets/Fiber_Icon.svg";
import Gradie_Icon from "../assets/Gradie_Icon.svg";

import menu from "../assets/Menu.svg";

type MenuProps = {
  isMobile: boolean;
};

const Products = [
  {
    name: "Spense",
    description:
      "Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.",
    icon: Spense_Icon,
  },
  {
    name: "Fiber Landing Page",
    description:
      "An online  portfolio generator. Great to practice flex/grid layouts, and absolute positioning.",
    icon: Fiber_Icon,
  },
  {
    name: "Gradie Sign Up Page",
    description:
      "Gradie is a simple sign up page, great to practice centering layouts.",
    icon: Gradie_Icon,
  },
];

export function MenuButton(props: MenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          {props.isMobile && (
            <Bars3Icon
              className="ml-2 -mr-1 h-5 w-5 hover:text-blue-500"
              aria-hidden="true"
            />
          )}
          {!props.isMobile && <div className="hover:scale-110">Serviços</div>}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {Products.map((item) => {
              return (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-[#F2ECE4] text-gray-900" : "text-gray-900"
                      } group flex w-full items-start rounded-md px-2 py-2 text-sm font-bold gap-4`}
                    >
                      <img src={item.icon} />

                      <div>
                        <p>{item.name}</p>
                        <p className="text-sm font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

import { useState } from "react";
import Link from "next/link";
import {
  Stack,
  Flex,
  AlertIcon,
  Alert,
  CloseButton,
  Avatar,
  Text,
  Grid,
} from "@chakra-ui/core";

const MainStack = (props) => (
  <Stack spacing="8rem" margin="0 auto" {...props} />
);

const Navbar = ({ title }) => {
  const [hidePop, setHidePop] = useState(false);
  return (
    <nav
      className="primary-nav nav-auto-hide bg-white border-b border-gray-200 top-0 mb-4 py-5 fixed left-0 w-full z-10"
      style={{ transition: "all 0.5s ease 0s", top: "0px" }}
    >
      <div className="container mx-auto sm:px-6 px-4 md:px-0">
        <div className="flex items-center justify-center relative">
          <a
            href=""
            className="text-2xl flex-shrink-0 font-semibold text-gray-700 no-underline"
          >
            Virtue-X
          </a>
          <ul className="ml-4 hidden sm:flex">
            <li>
              <a
                className="py-4 mx-5 md:mx-4 flex items-center text-gray-600 font-semibold hover:text-indigo-600"
                href="#"
              >
                <span className="md:hidden lg:block">About</span>
              </a>
            </li>
            <li>
              <a
                className="py-4 mx-5 md:mx-4 flex items-center text-gray-600 font-semibold hover:text-indigo-600"
                href="#"
              >
                <span className="md:hidden lg:block">Exhibition</span>
              </a>
            </li>
            <li>
              <a
                className="py-4 mx-5 md:mx-4 flex items-center text-gray-600 font-semibold hover:text-indigo-600"
                href="#"
              >
                <span className="md:hidden lg:block">News</span>
              </a>
            </li>
            <li>
              <a
                className="py-4 mx-5 md:mx-4 flex items-center text-gray-600 font-semibold hover:text-indigo-600"
                href="#"
              >
                <span className="md:hidden lg:block">Booth</span>
              </a>
            </li>
            <li>
              <a
                className="py-4 mx-5 md:mx-4 flex items-center text-gray-600 font-semibold hover:text-indigo-600"
                href="#"
              >
                <span className="md:hidden lg:block">Rent</span>
              </a>
            </li>
          </ul>
          <div className="ml-auto w-full sm:w-auto flex items-center">
            <div className="relative flex-shrink-0">
              <button
                onClick={(e) => setHidePop((prevState) => !prevState)}
                className="items-center bg-red-600 rounded-full hover:bg-red-700 text-white px-6 py-2 rounded mr-6 hidden sm:flex focus:outline-none"
              >
                Sign In
              </button>
              {hidePop ? (
                <div className="user-dropdown-menu sm:absolute fixed sm:h-auto h-full bg-white shadow-lg right-0 sm:mt-3 mt-4 border-t sm:border-t-0 sm:rounded sm:w-56 w-full">
                  <div className="container px-5 py-8">
                    <form>
                      <div className="mb-8">
                        <label
                          htmlFor=""
                          className="mb-4 font-semibold text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          className="border-b border-red-500 focus:outline-none text-gray-600"
                        />
                      </div>
                      <div className="mb-8">
                        <label
                          htmlFor=""
                          className="mb-4 font-semibold text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-b border-red-500 focus:outline-none text-gray-600"
                        />
                      </div>
                      <div className="mb-8 flex flex-col">
                        <button className="bg-red-600 text-white rounded-full py-2 px-3 mb-3">
                          Sign In
                        </button>
                        <h5 className="text-center text-gray-500 text-sm mb-3">
                          Don't have account?
                        </h5>
                        <a
                          href="#"
                          className="text-center text-gray-700 text-sm hover:text-red-500"
                        >
                          Sign Up
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface MainLayoutProps {
  title?: string;
}
export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  ...rest
}) => (
  <>
    <Navbar {...{ title }} />
    <MainStack {...rest}>{children}</MainStack>
  </>
);

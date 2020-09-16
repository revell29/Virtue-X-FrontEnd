import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Stack } from "@chakra-ui/core";
import { MainLayout } from "../components/layouts/MainLayout";
import { Banner } from "../components/Banner";
import { Exhibition } from "../components/Exhibition";
import { select } from "underscore";

const StackOption = () => {
  const dateOption = [];
  const monthOption = [];
  for (let i = 1; i <= 31; i++) {
    dateOption.push(<option value={i}>{i}</option>);
  }

  for (let i = 1; i <= 12; i++) {
    monthOption.push(<option value={i}>{i}</option>);
  }

  return (
    <div className="flex items-center justify-center relative bg-white border-b border-t border-gray-200 w-full py-5 px-4">
      <ul className="ml-4 sm:flex">
        <li>
          <select className="border border-gray-200 px-5 py-2 rounded-lg focus:outline-none ">
            <option>Seach exhibition</option>
          </select>
        </li>
        <li>
          <div className="mx-5 md:mx-4">
            Date
            <select className="border border-gray-200 px-5 py-2 rounded-lg focus:outline-none ml-3">
              {dateOption}
            </select>
            <select className="border border-gray-200 px-5 py-2 rounded-lg focus:outline-none ml-3">
              {monthOption}
            </select>
          </div>
        </li>
      </ul>
      <div className="ml-auto w-full sm:w-auto flex items-center">
        <h4>Sort By</h4>
        <select className="border border-gray-200 px-5 py-2 rounded-lg focus:outline-none ml-3">
          <option value="">Newst</option>
        </select>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <StackOption />
      <div className="container mx-auto py-20">
        <div className="w-9/12">
          <h2 className="text-5xl font-bold text-red-500">Exhibition</h2>
          <p className="leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Exhibition />
      </div>
      <div className="bg-red-500 py-20">
        <div className="container mx-auto">
          <div className="w-7/12">
            <h5 className="text-4xl text-white font-bold">Reccomended by Us</h5>
            <h4 className="text-6xl text-white font-bold mt-5">
              INDOFURNITURE AUGUST 2020
            </h4>
            <a
              href="#"
              className="py-2 px-10 border-2 border-white text-white font-semibold inline-block mt-5 hover:bg-white hover:text-gray-700"
            >
              View Exhibition
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

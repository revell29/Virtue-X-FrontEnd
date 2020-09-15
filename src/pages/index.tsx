import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Stack } from "@chakra-ui/core";
import { MainLayout } from "../components/layouts/MainLayout";
import { Banner } from "../components/Banner";
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
    </MainLayout>
  );
}

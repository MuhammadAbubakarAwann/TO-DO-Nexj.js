"use client"
import TodoInput from "@/components/Todo-Input";
import TodoList from "@/components/Todo-List";
import { Provider } from "react-redux";
import store from "@/app/redux/store";

import Head from "next/head";


export default function Home() {
  
  return (
    <Provider store={store}>
      <Head>
        <script
          src="https://kit.fontawesome.com/7057a291ca.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <div className="container flex justify-center">
        <div className="row ">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center text-3xl font-bold">Todo Input</h3>
            <div className=" border border-gray-300 rounded-lg p-5 w-fit">
              <TodoInput />
              <TodoList/>
            </div>
  
          </div>
        </div>
      </div>
    </Provider>
    );
}

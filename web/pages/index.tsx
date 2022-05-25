import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import MenuBar from "../components/MenuBar";

const Home: NextPage = () => {
	const [listings, setListings] = useState([
		{
			id: 0,
			link: "",
      inStock: true
		},
	]);

	useEffect(() => {
		const addListing = [
			...listings,
			{
				id: 1,
				link: "hni",
        inStock: false,
			},
		];
		setListings(addListing);
	}, []);

	return (
		<div className="w-screen h-screen bg-site-neutral">
			<div className="w-full h-[15%]">
				<MenuBar />
			</div>
			<div className="w-full h-[85%]">
				<div className="w-full h-1/6 SPACING-DONT-TOUCH" />
				<div className="w-full h-1/6 flex justify-center items-center">
					<h1 className="text-black text-7xl font-indie">Live Listings</h1>
				</div>
				<div className="w-full h-4/6 space-y-8 flex flex-col items-center flex-shrink-0 overflow-scroll pt-4">
					{listings.map((listi) => {
						return (
							<div className="w-1/3 h-1/4 bg-site-yellow/60 rounded-3xl flex-shrink-0 flex">
								<div className="w-1/4 h-full rounded-l-3xl flex justify-center items-center">
                  <div className="w-20 h-20 bg-gray-500 rounded-3xl flex justify-center items-center text-3xl text-black font-indie">
                    Place
                  </div>
                </div>
								<div className="w-2/4 h-full flex flex-col pl-4 justify-center">
                  <h1 className="text-4xl text-black font-indie">Title</h1>
                  <h1 className="text-2xl text-black font-indie">Description</h1>

                </div>
								<div className="w-1/4 h-full rounded-r-3xl flex justify-center items-center">
                  {listi.inStock && (
                    <h1 className="text-3xl text-site-green font-indie">In Stock!</h1>
                  )}
                  {!listi.inStock && (
                    <h1 className="text-3xl text-red-500 font-indie">Out of stock</h1>
                  )}
                </div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;

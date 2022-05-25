import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import MenuBar from "../components/MenuBar";
import Modal from "../components/Modal";

const Home: NextPage = () => {
	const [ modalShown, setModalShown ] = useState(true);
	const [ num, setNum ] = useState(1);
	const [listings, setListings] = useState([
		{
			id: 0,
			link: "",
      		inStock: true
		},
	]);

	const setModalStatus = () => {
		setModalShown(!modalShown);
	}

	useEffect(() => {
		setTimeout(() => {
			const newListing = [
				...listings,
				{
					id: num,
					link: "",
					inStock: Math.random() < 0.5,
				}
			]

			setNum(num + 1);
			setListings(newListing)
		}, 1500);
	}, [num < 5]);

	return (
		<div className="w-screen h-screen bg-site-neutral">
			{modalShown && (
				<div onClick={() => setModalShown(false)} className="flex bg-black/70 justify-center items-center oveflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none transition ease-in-out duration-700">
					<div onClick={(e) => e.stopPropagation()} className="w-1/2 h-3/4">
						<Modal />
					</div>
				</div>
			)}
			<div className="w-full h-[15%]">
				<MenuBar setModalStatus={setModalStatus} />
			</div>
			<div className="w-full h-[85%]">
				<div className="w-full h-1/6 SPACING-DONT-TOUCH" />
				<div className="w-full h-1/6 flex justify-center items-center">
					<h1 className="text-black text-5xl font-sora">Live Listings</h1>
				</div>
				<div className="w-full h-4/6 space-y-8 flex flex-col items-center flex-shrink-0 overflow-scroll pt-4">
					{listings.map((listi) => {
						return (
							<div className="w-1/3 h-1/4 bg-site-yellow/60 rounded-3xl flex-shrink-0 flex">
								<div className="w-1/4 h-full rounded-l-3xl flex justify-center items-center">
                  <div className="w-20 h-20 bg-gray-500 rounded-3xl flex justify-center items-center text-2xl text-black font-sora">
                    Place
                  </div>
                </div>
								<div className="w-2/4 h-full flex flex-col pl-4 justify-center">
                  <h1 className="text-3xl text-black font-sora">Title</h1>
                  <h1 className="text-xl text-black font-sora">Description</h1>

                </div>
								<div className="w-1/4 h-full rounded-r-3xl flex justify-center items-center">
                  {listi.inStock && (
                    <h1 className="text-3xl text-site-green font-sora">In Stock!</h1>
                  )}
                  {!listi.inStock && (
                    <h1 className="text-3xl text-red-500 font-sora">Out of stock</h1>
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

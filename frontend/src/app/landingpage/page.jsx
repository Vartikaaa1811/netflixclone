// this will be the main landing page, like localhost:3000
"use client";
import React, { useState } from "react";
import Form from "next/form";
import Image from "next/image";
import Rowapi from "../../components/Rowapi/Rowapi";
import requests from "../../app/lib/requests";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const page = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  return (
    <>
      <div className="relative h-screen w-full ">
        <Image
          src="/images/netflixbackground.jpg"
          alt="background "
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <div className="absolute top-5 left-8">
            <Image
              src="/images/netflix full.jpg"
              alt="logo"
              width={100}
              height={80}
            />
          </div>
          <div>
            <button className=" absolute top-5 right-8 bg-red-600 px-4 py-2 rounded">
              Sign In
            </button>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
            Unnlimited movies, <br /> TV Shows and more.
          </h1>
          <h2 className="text-2xl font-semibold mb-4">
            Starts at ₹149. Cancel at any time.
          </h2>
          <p className="text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <Form className="flex flex-col sm:flex-row items-center w-full max-w-xl gap-4 border border-gray-300 rounded-2xl overflow-hidden mt-4">
            <input
              type="email"
              placeholder="Email address"
              className=" w-full px-4 py-3 rounded text-black outline-none"
              required
            />
            <button
              className="bg-red-500 hover:bg-red-700 transition px-6 py-3 text-white font-semibold rounded w-full sm:w-auto"
              type="submit"
            >
              Get Started <ArrowForwardIosOutlinedIcon />
            </button>
          </Form>
        </div>
      </div>

      <div className="text-white bg-black px-12 py-12">
        {/* <h2 className="text-3xl mb-5 max-w-7xl mx-auto">Trending Now</h2> */}
        <Rowapi
          title="Trending Now"
          fetchUrl={requests.fetchNetflixovieOriginals}
          isLargeRow
        />
      </div>

      <div className="text-white bg-black px-12 py-12 ">
        <h2 className="text-3xl mb-5 max-w-7xl mx-auto">
          A plan to suit your needs
        </h2>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className=" relative border-2 border-gray-600 rounded-xl p-6 bg-zinc-900 flex flex-col justify-between transition-transform duration-300  hover:scale-105">
            <h1 className="text-xl font-bold p-2">Mobile</h1>
            <h2 className="text-gray-400 text-lg font-bold p-1">480p</h2>
            <p className="">✔️ Fair video quality</p>
            <p className="">✔️ For your phone or tablet</p>
            <h2 className="text-lg font-bold mt-6">₹149 /mo</h2>
          </div>
          <div className=" relative border-2 border-gray-600 rounded-xl p-6 bg-zinc-900 flex flex-col justify-between transition-transform duration-300  hover:scale-105">
            <h1 className="text-xl font-bold p-2">Basic</h1>
            <h2 className="text-gray-400 text-lg font-bold p-1">720p</h2>
            <p className="">✔️ Good video quality</p>
            <p className="">✔️ For your phone, tablet, laptop and TV</p>
            <h2 className="text-lg font-bold mt-6">₹199 /mo</h2>
          </div>
          <div className=" relative border-2 border-gray-600 rounded-xl p-6 bg-zinc-900 flex flex-col justify-between transition-transform duration-300  hover:scale-105">
            <h1 className="text-xl font-bold p-2">Standard</h1>
            <h2 className="text-gray-400 text-lg font-bold p-1">1080p</h2>
            <p className="">✔️ Great video quality </p>
            <p className="">✔️ For your phone, tablet, laptop and TV</p>
            <h2 className="text-lg font-bold mt-6">₹499 /mo</h2>
          </div>
          <div className=" relative border-2 border-gray-600 rounded-xl p-6 bg-zinc-900 flex flex-col justify-between transition-transform duration-300  hover:scale-105">
            <h1 className="text-xl font-bold p-2">Premium</h1>
            <h2 className="text-gray-400 text-lg font-bold p-1">4K + HDR</h2>
            <p className="">✔️ Best video quality </p>
            <p className="">✔️ Immersive sound (spatial audio) </p>
            <p className="">✔️ For your phone, tablet, laptop and TV</p>
            <h2 className="text-lg font-bold mt-6">₹649 /mo</h2>
          </div>
        </div>
      </div>

      <div className=" bg-black text-white px-6 py-12 ">
        <h2 className="text-3xl font-bold  mb-5 max-w-7xl mx-auto">
          More reasons to join
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="relative border-2 border-gray-700 rounded-xl p-6 bg-zinc-900">
            <h2 className="text-2xl font-bold mb-2 ">Enjoy on your TV</h2>
            <p className="text-sm text-gray-300">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
            <div className="flex justify-end bottom-0 right-8">
              <Image src="/images/TV.jpg" alt="tv" width={60} height={60} />
            </div>
          </div>

          <div className="relative border-2 border-gray-700 rounded-xl p-6 bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">
              Download to watch offline
            </h3>
            <p className="text-sm text-gray-300">
              Save your favourites easily and always have something to watch.
            </p>
            <div className="flex justify-end bottom-4 right-4">
              <Image
                src="/images/Download.jpg"
                alt="offline"
                width={60}
                height={60}
              />
            </div>
          </div>

          <div className="relative border-2 border-gray-700 rounded-xl p-6 bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">Watch everywhere</h3>
            <p className="text-sm text-gray-300">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
            <div className="flex justify-end bottom-4 right-4">
              <Image src="/images/Watch.jpg" alt="tv" width={60} height={60} />
            </div>
          </div>

          <div className="relative border-2 border-gray-700 rounded-xl p-6 bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">
              Create profiles for kids
            </h3>
            <p className="text-sm text-gray-300">
              Send kids on adventures with their favourite characters in a space
              made just for them—free with your membership.
            </p>
            <div className="flex justify-end bottom-4 right-4">
              <Image
                src="/images/profile.jpg"
                alt="tv"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white px-6 py-12">
        <div className="text-3xl font-bold mb-10 max-w-5xl mx-auto">
          Frequently Asked Questions
        </div>
        <div className="flex flex-col gap-2 font-bold max-w-5xl mx-auto">
          {/* Question Block */}
          <div className="bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300">
            <button
              className="w-full flex justify-between items-center p-6 text-left text-xl"
              onClick={() => setShow1(!show1)}
            >
              <span>What is Netflix?</span>
              {show1 ? (
                <CloseIcon fontSize="large" />
              ) : (
                <AddIcon fontSize="large" />
              )}
            </button>
            <hr className="border-t border-gray-950 " />
            {show1 && (
              <div className="text-xl font-normal px-6 pb-6">
                <p className="mb-4">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  on thousands of internet-connected devices.
                </p>
                <p>
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </p>
              </div>
            )}
          </div>

          {/* Repeat for all questions with matching layout */}
          <div className="bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300">
            <button
              className="w-full flex justify-between items-center p-6 text-left text-xl"
              onClick={() => setShow2(!show2)}
            >
              <span>How much does Netflix cost?</span>
              
              {show2 ? (
                <CloseIcon fontSize="large" />
              ) : (
                <AddIcon fontSize="large" />
              )}
            </button>
            <hr className="border-t border-gray-950 " />
            {show2 && (
              <div className="text-xl font-normal px-6 pb-6">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from USD 8.99 to USD 16.99 a month. No extra costs, no
                contracts.
              </div>
            )}
          </div>

          <div className="bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300">
            <button
              className="w-full flex justify-between items-center p-6 text-left text-xl"
              onClick={() => setShow3(!show3)}
            >
              <span>Where can I watch?</span>
              {show3 ? (
                <CloseIcon fontSize="large" />
              ) : (
                <AddIcon fontSize="large" />
              )}
            </button>
            <hr className="border-t border-gray-950 " />
            {show3 && (
              <div className="text-xl font-normal px-6 pb-6">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app.
              </div>
            )}
          </div>

          <div className="bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300">
            <button
              className="w-full flex justify-between items-center p-6 text-left text-xl"
              onClick={() => setShow4(!show4)}
            >
              <span>How do I cancel?</span>
              {show4 ? (
                <CloseIcon fontSize="large" />
              ) : (
                <AddIcon fontSize="large" />
              )}
            </button>
            <hr className="border-t border-gray-950 " />
            {show4 && (
              <div className="text-xl font-normal px-6 pb-6">
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. No cancellation fees – start or stop your account
                anytime.
              </div>
            )}
          </div>

          <div className="bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300">
            <button
              className="w-full flex justify-between items-center p-6 text-left text-xl"
              onClick={() => setShow5(!show5)}
            >
              <span>What can I watch on Netflix?</span>
              {show5 ? (
                <CloseIcon fontSize="large" />
              ) : (
                <AddIcon fontSize="large" />
              )}
            </button>
            <hr className="border-t border-gray-950 " />
            {show5 && (
              <div className="text-xl font-normal px-6 pb-6">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </div>
            )}
          </div>

          <div className="bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300">
            <button
              className="w-full flex justify-between items-center p-6 text-left text-xl" 
            onClick={() => setShow6(!show6)}>
              Is Netflix good for kids?
              {show6 ? <CloseIcon fontSize="large"/> : <AddIcon fontSize="large"/>}
            </button>
            <hr className="border-t border-gray-950 " />
            {show6 && (
              <p className="text-xl font-normal px-6 pb-6">
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space. Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don't want kids to see.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className=" bg-black w-full h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <p className="text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <Form className="flex flex-col sm:flex-row text-white items-center  w-3/4 gap-4 border border-gray-300 rounded-4xl overflow-hidden mt-4">
          <input
            type="email"
            placeholder="Email address"
            className=" w-full px-4 py-3 rounded text-white outline-none"
            required
          />
          <button
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-white font-semibold rounded w-full sm:w-auto"
            type="submit"
          >
            Get Started <ArrowForwardIosOutlinedIcon />
          </button>
        </Form>
        <hr className="my-8 border-b border-gray-600 w-full" />
      </div>

      <div className="px-8 py-10 bg-black text-white">
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-5 max-w-7xl mx-auto ">
          <div className=" flex flex-col bg-black text-white">
            <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
              HOME
            </h2>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
            <span>Pricing</span>
            <span>Partners New</span>
          </div>
          <div className=" flex flex-col bg-black text-white">
            <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
              RESOURCES
            </h2>
            <span>Documentation</span>
            <span>Tutorials</span>
            <span>Support New</span>
          </div>
          <div className=" flex flex-col bg-black text-white">
            <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
              PRODUCTS
            </h2>
            <span>Our Products</span>
            <span>Great Deals New</span>
            <span>Analytics</span>
            <span>Mobile</span>
          </div>
          <div className=" flex flex-col bg-black text-white">
            <h2 className="font-bold text-lg mb-2 text-gray-600 hover:text-2xl hover:underline">
              SUPPORT
            </h2>
            <span>Help Center</span>
            <span>Privacy Policy</span>
            <span>Conditions</span>
          </div>
          <div className=" flex flex-col bg-black text-white">
            <h2 className="font-bold text-lg text-gray-600 mb-2 hover:text-2xl hover:underline">
              CONTACT US
            </h2>
            <span>+91 9305904328</span>
            <span>Punjab</span>
            <span>vrtikaaa1811@gmail.com</span>
          </div>
        </div>

        <hr className="my-8 border-b border-gray-600 w-full max-w-7xl mx-auto" />

        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-sm">
          <p className="text-left">Copyright 2024. All Rights Reserved.</p>
          <Image
            src="/images/socialicons.jpg"
            className="mt-4 md:mt-0"
            alt="socialicons"
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className=" place-items-center text-white bg-gray-600">
        <p>Made by Vartika :) with NextJs.</p>
      </div>
    </>
  );
};

export default page;

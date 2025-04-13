// this will be the main landing page, like localhost:3000
import React from "react";
import Form from "next/form";
import Image from "next/image";



const page = () => {
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
          <Form
            className="flex flex-col sm:flex-row items-center w-full max-w-xl gap-4 border border-gray-300 rounded-2xl overflow-hidden mt-4"  
          >
            <input
              type="email"
              placeholder="Email address"
              className=" w-full px-4 py-3 rounded text-black outline-none"
              required
            />
            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-white font-semibold rounded w-full sm:w-auto" type="submit">
              Get Started 
            </button>
          </Form>
        </div>
      </div>



      
        <div>
          <h2> trending movies api thing</h2>
        </div>




        <div className=" bg-black text-white px-6 py-12 ">
          <h2 className="text-3xl font-bold  mb-10">More reasons to join</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">


            <div className="relative border-2 border-gray-700 rounded-xl p-6 bg-zinc-900">
              <h2 className="text-2xl font-bold mb-2 ">Enjoy on your TV</h2>
              <p className="text-sm text-gray-300">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
              <div className="flex justify-end bottom-0 right-8">
              <Image src = "/images/TV.jpg" alt="tv" width={60} height={60}/>
              </div>
            </div>


            <div className="relative border-2 border-gray-700 rounded-xl p-6 bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">Download to watch offline</h3>
              <p className="text-sm text-gray-300">
                Save your favourites easily and always have something to watch.
              </p>
              <div className="flex justify-end bottom-4 right-4">
              <Image src = "/images/Download.jpg" alt="offline"  width={60} height={60} />
              </div>
            </div>

            <div className="relative border-2 border-gray-700 rounded-xl p-6 bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">Watch everywhere</h3>
            <p className="text-sm text-gray-300">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
            </p>
            <div className="flex justify-end bottom-4 right-4">
              <Image src = "/images/Watch.jpg" alt="tv"   width={60} height={60} />
            </div>
            </div>


            <div className="relative border-2 border-gray-700 rounded-xl p-6 bg-zinc-900">
            <h3 className="text-2xl font-bold mb-2">Create profiles for kids</h3>
            <p className="text-sm text-gray-300">
              Send kids on adventures with their favourite characters in a space made just for them—free with your membership.
            </p>
            <div className="flex justify-end bottom-4 right-4">
              <Image src = "/images/profile.jpg" alt="tv"  width={60} height={60} />
              </div>
            </div>


          </div>
        </div>

        <div className="bg-black text-white px-6 py-12">
          <div className="text-3xl font-bold  mb-10" >Frequently Asked Questions</div>
          <div className="flex flex-col gap-4 font-bold ">

            <div className="border px-2 py-2 bg-grey-400 rounded border-gray-500">What is Netflix?</div>



            <div  className="border px-2 py-2 rounded border-gray-500">How much does Netflix cost?</div>
            <div className="border px-2 py-2 rounded border-gray-500">Where can I watch?</div>
            <div className="border px-2 py-2 rounded border-gray-500">How do I cancel?</div>
            <div className="border px-2 py-2 rounded border-gray-500">What can I watch on Netflix?</div>
            <div className="border px-2 py-2 rounded border-gray-500">Is Netflix good for kids?</div>  
          </div>
        </div>
      
    </>
  );
};

export default page;












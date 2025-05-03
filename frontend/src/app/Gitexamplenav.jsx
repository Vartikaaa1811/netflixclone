import React from "react";

const Gitexamplenav = () => {
  return (
    <div className="bg-color-green">
      <h2>hello baby</h2>
      <h2>hello baby two</h2>
      <h2>hello baby three</h2>
      <h2>hello baby three plus one</h2>
    </div>
  );
};

export default Gitexamplenav;

<div className="bg-black text-white px-6 py-12 ">
        <div className="text-3xl font-bold  mb-10 max-w-7xl mx-auto">
          Frequently Asked Questions
        </div>
        <div className="flex flex-col gap-4 font-bold max-w-7xl mx-auto">
          <div className="border px-2 py-2 bg-black-400 rounded border-gray-800 ">
            <div>
              <button onClick={() => setShowText(!showText)}>
                <p className="inline p-4">What is Netflix? </p>
                {/* {showText ? "+" : "-"} */}
                {showText ? <CloseIcon /> : <AddIcon />}
              </button>
            </div>

            {showText && (
              <p className="border px-2 py-2 text-sm font-normal bg-grey-400 rounded border-gray-800 ">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more on
                thousands of internet-connected devices. You can watch as much
                as you want, whenever you want without a single ad all for one
                low monthly price. There's always something new to discover and
                new TV shows and movies are added every week!
              </p>
            )}
          </div>

          <div className="border px-2 py-2 rounded border-gray-500">
            <button onClick={() => setShow2(!show2)}>
              How much does Netflix cost?
              {show2 ? <CloseIcon /> : <AddIcon />}
            </button>
            {show2 && (
              <p className="border px-2 py-2 bg-grey-400 rounded border-gray-800 hover:bg-gray-600">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from USD 8.99 to USD 16.99 a month. No extra costs, no
                contracts.
              </p>
            )}
          </div>

          <div className="border px-2 py-2 rounded border-gray-500">
            <button onClick={() => setShow3(!show3)}>
              Where can I watch?
              {show3 ? <CloseIcon /> : <AddIcon />}
            </button>
            {show3 && (
              <p className="border px-2 py-2 bg-grey-400 rounded border-gray-800 hover:bg-gray-600">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favourite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </p>
            )}
          </div>

          <div className="border px-2 py-2 rounded border-gray-500">
            <button onClick={() => setShow4(!show4)}>
              How do I cancel?
              {show4 ? <CloseIcon /> : <AddIcon />}
            </button>
            {show4 && (
              <p className="border px-2 py-2 bg-grey-400 rounded border-gray-800 hover:bg-gray-600">
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees - start or stop your
                account anytime.
              </p>
            )}
          </div>
          <div className="border px-2 py-2 rounded border-gray-500">
            <button onClick={() => setShow5(!show5)}>
              What can I watch on Netflix?
              {show5 ? <CloseIcon /> : <AddIcon />}
            </button>
            {show5 && (
              <p className="border px-2 py-2 bg-grey-400 rounded border-gray-800 hover:bg-gray-600">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            )}
          </div>
          <div className="border px-2 py-2 rounded border-gray-500">
            <button onClick={() => setShow6(!show6)}>
              Is Netflix good for kids?
              {show6 ? <CloseIcon /> : <AddIcon />}
            </button>
            {show6 && (
              <p className="border px-2 py-2 bg-grey-400 rounded border-gray-800 hover:bg-gray-600">
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

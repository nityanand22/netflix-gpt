import { useState } from "react";

const ques = [
  "What is Netflix?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is NEtflix good for Kids?",
];

const ans = [
  "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. \n You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.\n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
];

const FAQ = () => {
  const [show, setShow] = useState(null);

  const toggleAnswer = (index) => {
    if (show === index) {
      setShow(null);
    } else {
      setShow(index);
    }
  };

  return (
    <div className="w-full font-semibold text-lg bg-black text-white p-10">
      <div className="w-full flex flex-col gap-2">
        <p>Frequently Asked Questions</p>
        {ques.map((q, index) => (
          <div key={index} className="w-full flex flex-col gap-1">
            <div
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center p-4 bg-[#222831] cursor-pointer hover:bg-[#393e46] transition-colors duration-200"
            >
              <p>{q}</p>
              <p className="text-4xl">{show === index ? "×" : "+"}</p>
            </div>
            {show === index && (
              <p className="bg-[#393e46] p-4 transition-all duration-200">
                {ans[index]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

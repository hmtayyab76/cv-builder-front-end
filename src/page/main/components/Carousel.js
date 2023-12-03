import React, { useState } from "react";
import "../main.css";
import UserCard from "./UserCard";
import cimg1 from "../assets/Brandon.webp";
import cimg2 from "../assets/Linn.webp";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data for the cards (you can replace this with your own data)
  const cardsData = [
    {
      id: 1,
      name: "Brandon Klein",
      job: "Senior Product Marketing Manager at Badu Networks",
      image: cimg1,
      description:
        "Absolutely love Novorésumé! The layouts are phenomenal and enhancement hints that the tool provides you with is like having your own personal resume consultant! So much better than spending hours creating my own design files. Even better, the $16 you pay for the month doesn't auto-renew! Seems like a company that really wants to provide you with value instead of just take your money.",
    },
    {
      id: 2,
      name: "Linn Mollberg",
      job: "Junior Marketing Assistant",
      image: cimg2,
      description:
        "Absolutely love Novorésumé! The layouts are phenomenal and enhancement hints that the tool provides you with is like having your own personal resume consultant! So much better than spending hours creating my own design files. Even better, the $16 you pay for the month doesn't auto-renew! Seems like a company that really wants to provide you with value instead of just take your money.",
    },
    {
      id: 3,
      name: "Linn Mollberg",
      job: "Junior Marketing Assistant",
      image: cimg2,
      description:
        "Absolutely love Novorésumé! The layouts are phenomenal and enhancement hints that the tool provides you with is like having your own personal resume consultant! So much better than spending hours creating my own design files. Even better, the $16 you pay for the month doesn't auto-renew! Seems like a company that really wants to provide you with value instead of just take your money.",
    },
    {
      id: 4,
      name: "Linn Mollberg",
      job: "Junior Marketing Assistant",
      image: cimg2,
      description:
        "Absolutely love Novorésumé! The layouts are phenomenal and enhancement hints that the tool provides you with is like having your own personal resume consultant! So much better than spending hours creating my own design files. Even better, the $16 you pay for the month doesn't auto-renew! Seems like a company that really wants to provide you with value instead of just take your money.",
    },
    // Add more cards as needed
  ];

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };

  return (
    <div className=" w-full relative">
      <div className="relative w-full carousel overflow-hidden my-10">
        <div
          className="flex  w-full h-full transition-transform duration-300 ease-in-out px-12 max-w-full"
          style={{ transform: `translateX(-${currentIndex * 30}%)` }}
        >
          {cardsData.map((card) => (
            <UserCard key={card.id} data={card} />
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-3 rounded-full  bg-gray-500 text-white"
        onClick={handlePrevSlide}
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button
        className="absolute top-1/2 -right-10 transform -translate-y-1/2  bg-gray-500 text-white p-3 rounded-full"
        onClick={handleNextSlide}
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Carousel;

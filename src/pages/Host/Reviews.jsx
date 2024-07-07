import React from "react";
import { BsStarFill } from "react-icons/bs";
import graph from "../../assets/reviews-graph.png"

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-end mb-9">
          <h2 className="text-4xl font-bold mr-6">Your reviews</h2>
          <p className="font-medium">
            Last <span className="font-bold">30 days</span>
          </p>
        </div>
        <img className="graph mb-8" src={graph} alt="Review graph" />
        <h3 className="font-bold text-lg my-6">Reviews (2)</h3>

        {reviewsData.map((review) => (
          <div key={review.id}>
            <div className="review my-6">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <BsStarFill className="review-star text-[#FF8C38]" key={i} />
                ))}
              </div>

              <div className="flex font-semibold mb-4">
                <p className="text-[#161616] mr-3">{review.name}</p>
                <p className="text-[#8c8c8c]">{review.date}</p>
              </div>
              <p className="font-medium text-base">{review.text}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

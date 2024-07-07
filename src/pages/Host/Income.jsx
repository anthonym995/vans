import React from "react";
import income from "../../assets/income-graph.png";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];
  return (
    <>
      <div className="container mx-auto">
        <section className="host-income">
          <h1 className="text-4xl font-bold mb-6">Income</h1>
          <p className="text-base font-medium text-[#4D4D4D] mb-6">
            Income last <span className="font-bold">30 days</span>
          </p>
          <h2 className="text-4xl font-extrabold mb-8">$2,260</h2>
          <img className="graph mb-8" src={income} alt="Income graph" />
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg my-6">Your transactions (3)</h3>
            <p className="text-base font-medium text-[#4D4D4D] mb-6">
              last <span className="font-bold underline">30 days</span>
            </p>
          </div>
          <div className="transactions">
            {transactionsData.map((item) => (
              <div key={item.id} className="bg-white mb-6 flex items-center justify-between rounded-md p-6">
                <h3 className="font-semibold text-4xl text-[#161616]">${item.amount}</h3>
                <p className="text-xl font-medium text-[#4d4d4d]">{item.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

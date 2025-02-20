// src/pages/dashboard/DashboardOtherServices.tsx

import React from "react";
import { useAuth } from "../../context/AuthContext";
import { otherServices } from "../../../seed/seed";

const DashboardOtherServices = () => {
  const { isSubscribed } = useAuth();

  const handlePurchase = (serviceTitle: string, finalPrice: number) => {
    alert(
      `Your request to purchase "${serviceTitle}" has been received. We will contact you regarding the service.\n\nTotal: $${finalPrice}`
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-amber-900">Other Services</h2>
      <p className="text-amber-800">
        Explore additional services designed to help you succeed.{" "}
        {isSubscribed
          ? "As a premium subscriber, you get 20% off!"
          : "Subscribe now to get 20% off all services!"}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherServices.map((svc) => {
          const discountedPrice = Math.round(svc.price * 0.8);
          const finalPrice = isSubscribed ? discountedPrice : svc.price;
          return (
            <div
              key={svc.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h4 className="text-xl font-semibold text-amber-800 mb-2">
                {svc.title}
              </h4>
              <p className="text-amber-700 mb-4">{svc.description}</p>
              <p className="text-amber-900 font-bold mb-4">
                Price: ${finalPrice}
                {isSubscribed && (
                  <span className="text-sm text-amber-600 ml-2 line-through">
                    ${svc.price}
                  </span>
                )}
              </p>
              <button
                onClick={() => handlePurchase(svc.title, finalPrice)}
                className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
              >
                Purchase
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardOtherServices;

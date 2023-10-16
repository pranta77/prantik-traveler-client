import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/users";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div>
      <img src="https://i.ibb.co/C6szKBx/flight.webp" alt="" />
      <h2 className="text-4xl mt-6 font-serif">
        Choose & Go Your Beloved Place
      </h2>
      <div className="grid grid-cols-2 gap-10 m-8 mx-20">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

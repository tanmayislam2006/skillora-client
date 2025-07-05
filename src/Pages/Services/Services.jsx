import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import SkilloraContext from "./../../Context/SkilloraContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Spiner from "./../../Components/Loader/Spiner";
import Search from "../../Components/Search/Search";

const Services = () => {
  const { search } = useContext(SkilloraContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("asc"); // "asc" or "desc"

  // Build URL with search and sort
  let url = `https://skillora-server.vercel.app/allServices`;
  const params = [];
  if (search) params.push(`serviceName=${search}`);
  if (sort) params.push(`sort=${sort}`);
  if (params.length) url += `?${params.join("&")}`;

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((response) => {
      setServices(response.data);
      setLoading(false);
    });
  }, [url]);

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-2 py-16">
      <Helmet>
        <title>All Services | Skillora</title>
        <meta
          name="description"
          content="Explore all services offered on Skillora, your platform for learning and development."
        />
      </Helmet>

      {/* Heading with fade-up */}
      <h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        All Services
      </h2>

      {/* Search with fade-right */}
      <div data-aos="fade-right" data-aos-delay="200">
        <Search sort={sort} setSort={setSort} />
      </div>

      {/* Empty state with fade-up */}
      {!loading && services.length === 0 && (
        <div
          className="flex flex-col items-center justify-center py-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No services"
            className="w-32 h-32 mb-4 opacity-70"
          />
          <p className="text-lg text-gray-500 text-center font-semibold">
            No services found.
            <br />
            Please try a different search or check back later!
          </p>
        </div>
      )}

      {loading && <Spiner />}

      {/* Services List */}
      <div className="flex flex-col gap-8">
        {services.map((service, idx) => (
          <div
            key={service._id}
            className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden bg-base-100 border-2 border-primary"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={idx * 150}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full md:w-56 h-56 object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="mb-3 opacity-80">
                  {service.description?.slice(0, 100)}
                  {service.description?.length > 100 && "..."}
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={service.provider?.image}
                    alt={service.provider?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium">{service.provider?.name}</span>
                </div>
                <div className="mb-3">
                  <span className="font-semibold">Area:</span> {service.area}
                </div>
                <div className="mb-3">
                  <span className="font-semibold">Price:</span> ${service.price}
                </div>
              </div>
              <div>
                <Link
                  to={`/service/${service._id}`}
                  className="px-5 py-2 rounded-full font-semibold bg-primary text-white w-max hover:bg-primary/90 transition"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import { NavLink, useParams } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import { useEffect } from "react";
import moment from "moment";
import Spinner from "./Spinner";
import BackButton from "./BackButton";
const City = () => {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();
  const formatedDate = moment(currentCity.date).format("ddd, MMM DD, YYYY");
  useEffect(() => {
    getCity(id);
  }, [id]);
  
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-dark-2 rounded-md p-4 ">
          {/* Country Name  */}
          <div className="mb-2">
            <p className="uppercase font-bold text-sm">City Name</p>
            <p>
              <span>{currentCity.emoji} &nbsp;</span>
              <span className="text-white font-bold">
                {currentCity.cityName}
              </span>
            </p>
          </div>
          {/* When you went there  */}
          <div className="mb-2">
            <p className="uppercase font-bold text-sm">
              You went to {currentCity.cityName} on
            </p>
            <p className=" text-white">{formatedDate}</p>
          </div>
          {/* Your Note  */}
          <div className="mb-2">
            <p className="uppercase font-bold text-sm">Your Notes</p>
            <p className=" text-white">{currentCity.notes || "Not Added"}</p>
          </div>
          {/* Learn More  */}
          <div className="mb-2">
            <p className="uppercase font-bold text-sm">Learn More</p>
            <NavLink className=" text-yellow-600 underline " to={"/"}>
              Check out {currentCity.cityName} on Wikipedia &rarr;
            </NavLink>
          </div>

          {/* Back Button  */}
          <div>
            <BackButton />
          </div>
        </div>
      )}
    </>
  );
};

export default City;

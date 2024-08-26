import React,{useEffect} from "react";
import "../../CSS/BookingDetails.css";
import PropertyImg from "../PropertyDetails/PropertyImg";
import { useDispatch,useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { fetchBookingDetails } from "../../Store/Booking/booking-action";


const BookingDetails = () => {
    const dispatch= useDispatch();
    const {bookingId} = useParams();
    const {bookingDetails} = useSelector((state)=>state.booking);
    
    useEffect(()=>{
        dispatch(fetchBookingDetails(bookingId));

    },[dispatch,bookingId]);
    if(!bookingDetails||!bookingDetails.property){
        return<div>
            Loading...
        </div>;
    }


  return (
    <div className="details-container">
        <p className="details-header">{bookingDetails.property.propertyName}</p>
        <h6 className="details-location">
            <span className="material-symbols-outlined">location_on </span>
            <span className="location">
                {bookingDetails.property.address.area},{" "}
                {bookingDetails.property.address.city},{" "}
                {bookingDetails.property.address.pincode},{" "}
                {bookingDetails.property.address.state}
            </span>
        </h6>
        <div className="details-information-container">
            <div className="details-information">
                <h5>
                    Booking Information
                </h5>
                <section className="booking-stay-information">
                    <span className="details">
                        <span className="material-symbols-outlined st">

                        </span>

                    </span>

                </section>

            </div>

        </div>
      
    </div>
  )
}

export default BookingDetails

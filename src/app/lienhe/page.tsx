"use client";
import styleLienHe from "../../assets/style/lienhe.module.scss";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import React, { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// clip 1
// https://www.youtube.com/watch?v=_zKRC23SfrM

// import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

// const containerStyle = {
//   width: '50%',
//   height: '50vh'
// };

// const center = {
//   lat: 30.7333,
//   lng: 76.7794
// };

// interface MarkerData {
//   position: google.maps.LatLngLiteral;
//   title: string;
//   content: string;
// }

// const GoogleMapComponent: React.FC = () => {
//   const {isLoaded} = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
//   });
// }
// const [map, setMap] = React.useState(null)
// const [selectedMarker, setSelectedMarker] = React.useState<MarkerData |
// null>(null);

// const markers: MarkerData[] = [
//   {
//     position: { lat: 30.7333, lng: 76.7794 },
//     title: 'Marker 1',
//     content: 'This is Marker 1.'
//   },
// ];

// const onLoad = React.useCallback(function callback(map: any){
//   const bounds = new window.google.maps.LatLngBounds(center);
//   map.fitBounds(bounds);

//   setMap(map);
// }, []);

// const onUnmount = React.useCallback(function callback(map: any){
//   setMap(null);
// },[]);

// const handleMarketClick = (marker: MarkerData) => {
//   setSelectedMarker(marker);
// };
// return isLoaded ? (
//   <GoogleMap
//   mapContainerStyle={containerStyle}
//   center={center}
//   zoom={14}
//   onLoad={onLoad}
//   onUnmount={onUnmount}
//   >
//     {markers.map((marker, index) => (
//       <Marker
//       key={index}
//       position={marker.position}
//       onClick={() => handleMarketClick(marker)}
//       />
//     ))}
//       {selectedMarker && (
//         <InfoWindow
//         position={selectedMarker.position}
//         onCloseClick={() => selectedMarker(null)}
//         >
//           <div>
//             <h3>{selectedMarker.title}</h3>
//             <p>{selectedMarker.content}</p>
//           </div>
//         </InfoWindow>
//       )}
//       </GoogleMap>
// ) : <></>;

// );
// export default GoogleMapComponent;

//////////////////////////////////////////////////////////////
// clip2
// https://www.youtube.com/watch?v=LgTan_NZnAg

// export function Map(){
//   const mapRef= React.useRef(null);
//   useEffect(() =>{
//     const initMap = async () => {
//       const loader = new Loader({
//         apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
//         version: 'weekly'
//       });

//       const { Map } = await loader.importLibrary('maps');
//       const position = {
//         lat: 43.642693,
//         lng: -79.3871189
//       }
//       const mapOptions: google.maps.MapOptions = {
//         center: position,
//         zoom: 17,
//         mapId: 'MY_NEXTJS_MAPID'
//       }
//       const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
//     }
//     initMap();
//   },[]);
//   return(
//     <div style={{height:'600px'}} ref={mapRef}/>
//   )
// }
export default function LienHe() {
  return (
    <>
      <div className={`container ${styleLienHe.contact}`}>
        {/* Tiêu đề */}
        <div>
          <h1 className={styleLienHe.contactTitle}>
            {/* remove a tag */}
            <a href="#">LIÊN HỆ</a>
          </h1>
        </div>

        {/* Thông tin liên hệ */}
        <div className={styleLienHe.contactDetail}>
          <div className={styleLienHe.contactInf}>
            <h5>DOANH NGHIỆP TƯ NHÂN</h5>
            <h1>KHOÁNG SẢN PHƯỚC NHÂN </h1>

            {/* address */}
            <div>
              <p className={styleLienHe.address}>
                <LocationOnRoundedIcon className={styleLienHe.addressIcon} />
                ấp Suối Sâu, xã Đất Cuốc, Huyện Bắc Tân Uyên, Bình Dương
              </p>
            </div>

            {/* phone */}
            <div>
              <LocalPhoneRoundedIcon className={styleLienHe.phoneIcon} />
              <a href="tel:0902945073">0902945073</a>
            </div>

            {/* email */}
            <div>
              <EmailRoundedIcon className={styleLienHe.emailIcon} />
              {/* tag <a href="mailto:someone@example.com">Send email</a></p> */}
              <p className={styleLienHe.email}>phuocnhankaolin@gmail.com</p>
            </div>

            {/* schedule */}
            <p className={styleLienHe.schedule}>
              <CalendarMonthRoundedIcon className={styleLienHe.scheduleIcon} />
              Thời gian làm việc: 6:00 - 18:00 | Thứ Hai - Thứ Bảy
            </p>
          </div>

          {/* Map */}
          <div className={styleLienHe.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31308.167232002117!2d106.5746432!3d11.22304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174ca9ef230deed%3A0x2586c48655cd1ba!2zQ2jhu6MgTG9uZyBOZ3V5w6pu!5e0!3m2!1sen!2s!4v1714674864358!5m2!1sen!2s"></iframe>
            <p>map</p>
          </div>
        </div>
      </div>
    </>
  );
}

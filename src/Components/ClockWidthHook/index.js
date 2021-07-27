// import { useEffect, useState } from "react";
// import "./style.css";

// const setZero = n => n < 10 ? "0" + n : n;

// const ClockWidthHook = () => {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         setTimeout(()=> {setTime(new Date())}, 1000)
//     })

//     return <div className="container pt-5 text-center">
//         <h1>{setZero(time.getHours())} : {setZero(time.getMinutes())} : { setZero(time.getSeconds()) }</h1>
//     </div>
// }

// export default ClockWidthHook;
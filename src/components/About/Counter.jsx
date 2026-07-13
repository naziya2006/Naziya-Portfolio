import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  suffix = "",
  decimals = 0,
  startValue = 0
}) {

  const [count, setCount] = useState(startValue);

  const [start, setStart] = useState(false);

  const ref = useRef(null);


  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if(entry.isIntersecting){

          setStart(true);

          observer.disconnect();

        }

      },
      {
        threshold:0.5
      }
    );


    if(ref.current){
      observer.observe(ref.current);
    }


    return ()=>observer.disconnect();


  },[]);



  useEffect(()=>{

    if(!start) return;


    let current = startValue;


    const duration = 1800;

    const increment =
      (value - startValue) /
      (duration / 16);



    const timer = setInterval(()=>{


      current += increment;


      if(current >= value){

        current = value;

        clearInterval(timer);

      }


      setCount(
        Number(current.toFixed(decimals))
      );


    },16);



    return ()=>clearInterval(timer);


  },[
    start,
    value,
    startValue,
    decimals
  ]);



  return (

    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>

  );

}
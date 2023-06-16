// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect } from "react";
import axios from 'axios';
import Hamburger from 'hamburger-react'
import CurrencyPrices from './CurrencyPrices'
import { format, formatDistanceToNow } from 'date-fns';


export default function Navbar(props) {

  // const [currencyPricesData, setCurrencyPricesData] = React.useState([]);
  const CurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM d, yyyy');
    const dayOfWeek = format(currentDate, 'EEEE');
    {/* <div className="h-auto w-full p3 font-bold">Thursday, June 15, 2023</div> */}
  
    return (
      <div className="flex flex-row w-full ">
        {/* <div className='h-auto w-full p3 font-bold'>Today's date</div> */}

          <span className='h-auto  p3 font-bold py-2'>{dayOfWeek},</span>
          <span className='h-auto  p3 font-bold py-2 pl-2'>{formattedDate}</span>

      </div>
    );
  };






//   async function getCurrencyPricesHandler() {
//     try {
//       const response = await axios.get('https://laravel-backend-production-e601.up.railway.app/api/bloombergcurrencyprices');
//       console.log(response.data)
//       setCurrencyPricesData(response.data)
      
//     } catch (error) {
//       console.error('Error fetching data:', error)
//     }
// }

// useEffect(() => {
//   getCurrencyPricesHandler()
// }, []);

function handleInputChange(event) {
  props.promptHandler(event.target.value)
}

function onSearchHandler() {
  props.fetchGPT()
  props.notify("Loading, Please wait.")
}

function catgClickHandler(catg) {
  props.acChangeHandler(catg)
  props.notify("Loading, Please wait.")
}




  return (

    <div className="h-auto w-full border-b-4 border-double border-primary-400">
      <div className="h-auto w-full flex flex-row bg-primsary-100 ">
          <div className="h-auto w-16 max-w-12 lg:hidden pt-2">
            <Hamburger size={18} onToggle={() => props.hbHandler(!props.hbIsToggled)} distance='sm' hideOutline={true} />
          </div>
          <div className="h-auto w-full bg-prsimary-200 p-3 pl-0">
              <div className="w-full flex justify-center">
              <div className='block md:hidden  h5 font-bold italic'>The Bloom Times</div>
                <div className='hidden md:flex md:flex-col md:w-96'>
                  <div className='w-full flex flex-col justify-center pb-2'>
                    <div className='p3 font-bold italic w-full text-center'>The international Journal</div>
                    <div className='h2 font-bold italic pl-3'>The Bloom Times</div>
                    <div className='flex flex-row justify-center p3 font-bold italic w-full'>
                      <div className='p-2'>business</div>
                      <div className='p-2'>war</div>
                      <div className='p-2'>politics</div>
                      <div className='p-2'>technology</div>
                    </div>
                  </div>
                </div>
                
              </div>
          </div>
          
      </div>
      <div className='w-full flex justify-center items-center p-2 pb-6'>
        <div className='flex flex-row w-auto justify-center md:justify-end items-center  border-2'>
          <div className='h-8 w-52'>
            <input value={props.prompt} onChange={handleInputChange} className='h-8 outline-none p3 pl-2' type='email' placeholder='SEARCH'></input>
          </div>
          <div className='pl-2 cursor-pointer' onClick={onSearchHandler}>
            <img className='h-6 w-6 pr-2' src='https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62c700d4e10c1f03508b1c19_button-arrow.svg'></img>
          </div>
        </div>
      </div>

      <div className="h-12 bg-secondary-50 lg:bg-white flex flex-row justify-center items-center pl-3 border-t-[1px] border-b-[1px]">
        <CurrentDate />
        <div className="h-auto w-full p3 font-semibold text-primary-300 flex justify-center md:justify-end md:pr-3">Today's paper</div>
      </div>
      <CurrencyPrices currencyPricesData={props.currencyPricesData}/>
      <div className='hidden lg:flex bg-secondary-50 h-12 w-full lg:flex-row pt-4'>
        <div onClick={() => catgClickHandler("markets")} className='w-full text-center p3 font-semibold cursor-pointer hover:underline'>Markets</div>
        <div onClick={() => catgClickHandler("politics")} className='w-full text-center p3 font-semibold cursor-pointer hover:underline'>Politics</div>
        <div onClick={() => catgClickHandler("technology")} className='w-full text-center p3 font-semibold cursor-pointer hover:underline'>Technology</div>
        <div onClick={() =>  catgClickHandler("businessweek")} className='w-full text-center p3 font-semibold cursor-pointer hover:underline'>Business week</div>
        <div onClick={() =>  catgClickHandler("green")} className='w-full text-center p3 font-semibold cursor-pointer hover:underline'>Green</div>
        <div onClick={() =>  catgClickHandler("personalfinance")} className='w-full text-center p3 font-semibold cursor-pointer hover:underline'>Personal finance</div>
      </div>
    </div>
  )
}

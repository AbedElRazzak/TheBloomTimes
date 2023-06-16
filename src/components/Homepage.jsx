// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import Mainarticles from './Mainarticles'
import axios from 'axios';
import { useEffect } from "react";
import ReadNowModal from './ReadnowModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Homepage() {

  const [articleData, setArticleData] = React.useState([]);
  const [currencyPricesData, setCurrencyPricesData] = React.useState([]);
  const [hbIsToggled, setHb] = React.useState(false)
  const [articleCategory, setArticleCategory] = React.useState("markets")
  const [state, setState] = React.useState(false)
  const [prompt, setPrompt] = React.useState("")
  const [gptResponse, setGptResponse] = React.useState("")

  async function getArticleDataHandler(catg) {
    try {
      const response = await axios.get('https://laravel-backend-production-e601.up.railway.app/api/bloomberg/' + `${catg}`);
      console.log(response.data)
      setArticleData([... response.data])
      
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  async function getCurrencyPricesHandler() {
    try {
      const response = await axios.get('https://laravel-backend-production-e601.up.railway.app/api/bloombergcurrencyprices');
      console.log(response.data)
      setCurrencyPricesData(response.data)
    
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  async function fetchGPT() {

      axios.post('https://laravel-backend-production-e601.up.railway.app/api/chatgptcomplete/' + `${prompt}`).then(
        response => {
          console.log(response)
          setGptResponse(response.data.choices[0].message.content)
          console.log(response.data.choices[0].message.content)
          setState(true)
        }
      ).catch(error => {
        // Handle the error
        console.error(error);
      });
      
    
    }

    useEffect(() => {
      getCurrencyPricesHandler()
      getArticleDataHandler(articleCategory)
    }, []);

    function refetchArticleData(catg) {
      getArticleDataHandler(catg)
    }

    function refetchCurrencyPrices() {
    getCurrencyPricesHandler()
    }


    function hbHandler(state) {
        setHb(state)
    }

    function acChangeHandler(catg) {
        setArticleCategory(catg)
        refetchArticleData(catg)
        console.log("here: ", catg)
    }

    function promptHandler(prompt) {
      setPrompt(prompt)
    }

    function notify(mssg) {
      toast.info(mssg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }

  



  return (
    <div className='lg:px-20'>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      limit={2}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      <Navbar notify={notify} currencyPricesData={currencyPricesData} hbIsToggled={hbIsToggled} hbHandler={hbHandler} articleCategory={articleCategory} acChangeHandler={acChangeHandler} prompt={prompt} promptHandler={promptHandler} fetchGPT={fetchGPT}/>
      <Mainarticles notify={notify} articleData={articleData} hbIsToggled={hbIsToggled} articleCategory={articleCategory} acChangeHandler={acChangeHandler}/>
      <ReadNowModal gptResponse={gptResponse} prompt={prompt} state={state} stateHandler={() => setState(false)}/>
      
    </div>
  )
}

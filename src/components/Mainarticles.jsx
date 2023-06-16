import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CardArticle from "./CardArticle";


export default function Mainarticles(props) {
    const articleData = props.articleData

    // const [articleData, setArticleData] = React.useState([]);


    // async function getArticleDataHandler(catg) {
    //         try {
    //           const response = await axios.get('https://laravel-backend-production-e601.up.railway.app/api/bloomberg/' + `${catg}`);
    //           console.log(response.data)
    //           setArticleData([... response.data])
              
    //         } catch (error) {
    //           console.error('Error fetching data:', error)
    //         }
    // }



    // useEffect(() => {
    //     getArticleDataHandler(props.articleCategory)
    //   }, []);

      function catgOnClickHandler(catg) {
        props.acChangeHandler(catg)
        document.querySelector('div.hamburger-react').click()
        props.notify("Loading, Please wait.")
      }

      

    return (
        (props.hbIsToggled == false ?
        <>

            <div className="h-auto w-full pl-4">
                <div className="h3 capitalize underline pt-4" >{props.articleCategory}</div>
            </div>

            <div className="lg:hidden">
            {
                articleData.map((item, index) => (   
                <CardArticle key={index} title={item.title} summary={item.summary} img={item.thumbnail} category={item.category} articleURL={item.articelURL}/>      
                ))
            }
            </div>


        <div className="hidden lg:pt-4 lg:grid lg:grid-cols-[70%_30%] lg:grid-cols-2 gap-2">
            <div className="h-auto w-full bg-pridmary-100">
            {
                articleData.map((item, index) => (   
                    item.thumbnail != "null" && item.summary != "" ?

                    <CardArticle key={index} title={item.title} summary={item.summary} img={item.thumbnail} category={item.category} articleURL={item.articelURL} />

                    :
                    <></>
                    
                    
                ))
            }
            </div>
            <div className="h-auto w-full bg-primasry-50 border-l-[1px] border-primary-100">
            {
                articleData.map((item, index) => (  
                    (item.thumbnail == "null" || item.summary == "") ?
                <CardArticle key={index} title={item.title} summary={item.summary} img={item.thumbnail} category={item.category} articleURL={item.articelURL}/>
                :
                <></>
                ))
            }
            </div>
          </div>
        </>
        :
        <div className="flex flex-col px-4">
            <div className="h-auto w-full py-8 flex justify-center">
                <div className="h5 underline">Categories</div>
            </div>
            <div className="h-auto w-full border-b-[1px] border-primary-200 flex justify-center py-4"  onClick={() => catgOnClickHandler('markets')}>
                <div className="h6 ">Markets</div>
            </div>

            <div className="h-auto w-full border-b-[1px] border-primary-200 flex justify-center py-4"  onClick={() => catgOnClickHandler('politics')}>
                <div className="h6 ">Politics</div>
            </div>

            <div className="h-auto w-full border-b-[1px] border-primary-200 flex justify-center py-4"  onClick={() => catgOnClickHandler('technology')}>
                <div className="h6 ">Technology</div>
            </div>

            <div className="h-auto w-full border-b-[1px] border-primary-200 flex justify-center py-4"  onClick={() => catgOnClickHandler('businessweek')}>
                <div className="h6 ">Business week</div>
            </div>

            <div className="h-auto w-full border-b-[1px] border-primary-200 flex justify-center py-4"  onClick={() => catgOnClickHandler('green')}>
                <div className="h6 ">Green</div>
            </div>

            <div className="h-auto w-full border-b-[1px] border-primary-200 flex justify-center py-4"  onClick={() => catgOnClickHandler('personalfinance')}>
                <div className="h6 ">Personal finance</div>
            </div>

        </div>
        )

    )
}
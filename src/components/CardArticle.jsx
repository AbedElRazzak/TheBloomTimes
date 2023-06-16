import React from "react"



export default function CardArticle(props) {


    function decodeURL(url) {
        console.log(url)
        // Replace any occurrences of "\/" with "/"
        const decodedURL = url.replace(/\\\//g, "/");
        
        // Decode the URL
        const functionalURL = decodeURIComponent(decodedURL);
        console.log(functionalURL)
        
        return functionalURL;
      }

    return (
        // <>
        (
            props.img == "null" ?
        <div className="px-5">
            <div className="flex flex-col border-b-2 border-primary-200">
                <div className="text-primary-400 font-bold h6 bg-primry-200 pb-2 ">{props.title}</div>
                <div className="text-primary-300 p2 tracking-[-0.65px]">{props.summary}</div>
                <div className="pb-1 h-auto w-full flex justify-end">
                  <div className="p3 ">{props.category}</div>
                </div>
                {/* <div className="w-full pl-4 pt-4">
                  <a target="_blank" href={() => console.log(props.articleURL)}  className="text-primary-300 hover:text-primary-400 p1 pb-6 underline cursor-pointer hover:font-bold" >Read now </a>
                </div> */}
            </div>

        </div>
            : props.summary == "" ?
        <div className=" p-5">
            <div className="flex flex-col justify-center items-center border-b-[1px] border-primary-400">
            <div className=" pr-6 h-auto w-full flex justify-end">
                <div className="p3">{props.category}</div>
            </div>
            <img src={props.img} className="h-auto w-72 pb-4 pt-4"></img>
            
            <div className="text-primary-400 font-bold h6 bg-primay-200 py-0 pl-4 ">{props.title}</div>
            {/* <div className="w-full pl-4 pt-4">
                <a target="_blank" href={() => console.log(props.articleURL)}  className="text-primary-300 hover:text-primary-400 p1 pb-6 underline cursor-pointer hover:font-bold" >Read now </a>
            </div> */}


                
            </div>
        </div>

        :
        <div className="p-5">
            <div className="flex flex-col border-b-2 border-primary-400  bg-primry-100 lg:hidden">
                <div className="text-primary-400 font-bold h5 bg-primry-200 py-2">{props.title}</div>
                <div className="text-primary-300 p2 py-2 tracking-[-0.65px]">{props.summary}</div>
                <img src={props.img} className="min-h-80 min-w-80 pb-1 pt-4"></img>
                <div className="pb-12 h-auto w-full flex justify-end">
                  <div className="p3 ">{props.category}</div>
                </div>
                {/* <div className="w-full pl-4 pt-4">
                <a target="_blank" href={() => console.log(props.articleURL)} className="text-primary-300 hover:text-primary-400 p1 pb-6 underline cursor-pointer hover:font-bold" >Read now </a>
            </div> */}
            </div>
            <div className="hidden lg:flex lg:flex-row border-b-[1px] border-primary-400">
                
                <div className="w-full">
                  <div className="flex flex-col">
                      <div className="text-primary-400 font-bold h5">{props.title}</div>
                      <div className="text-primary-300 p2 py-2 tracking-[-0.65px]">{props.summary}</div>
                  </div>
                </div>
                <div className="w-[60rem] bg-primasry-200">
                    <div className="w-full ">
                      <img src={props.img} className="w-full h-full pb-1 pt-4"></img>
                      <div className="w-full flex justify-end">
                        <div className="p3 p-2">{props.category}</div>
                      </div>
                    </div>
                    {/* <div className="w-full pl-4 pt-4">
                        <a target="_blank" href={() => console.log(props.articleURL)} className="text-primary-300 hover:text-primary-400 p1 pb-6 underline cursor-pointer hover:font-bold" >Read now </a>
                    </div> */}
                </div>


                  

                
            </div>
        </div>

        )
        
    
    )
  }
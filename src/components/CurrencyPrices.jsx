import React from 'react'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';



export default function CurrencyPrices(props) {
  const currencyPricesData = props.currencyPricesData
  const controls = useAnimation();

  useEffect(() => {
    const scrollLeft = () => {
      controls.start({
        x: ['-100%', '0%'],
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 140,
          ease: 'linear',
        },
      });
    };

    scrollLeft();
  }, [controls]);



    return (
        <div className="h-20 w-auto flex flex-row overflow-hidden">
          {/* {
            currencyPricesData.map((item, index) => (
              <div key={index} className="p-2 min-w-[6rem] bg-pr5imary-200">
                <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">{item.symbol}</div>
                  {Number(item.netChange) < 0 ?
                  <div className="text-accent-red w-full">{Math.round(item.netChange * Math.pow(10, 4)) / Math.pow(10, 4)}% ↓</div>
                  :
                  <div className="text-accent-green w-full">{Math.round(item.netChange * Math.pow(10, 4)) / Math.pow(10, 4)}% ↑</div>
                  }
                  
                </div>
              </div>
              ))
          } */}

          <motion.div className="flex flex-row"
          style={{ display: 'flex' }}
          animate={controls}
          >
            {
            currencyPricesData.map((item, index) => (
              <div key={index} className="p-2 min-w-[6rem] bg-pr5imary-200">
                <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">{item.symbol}</div>
                  {Number(item.netChange) < 0 ?
                  <div className="text-accent-red w-full">{Math.round(item.netChange * Math.pow(10, 4)) / Math.pow(10, 4)}% ↓</div>
                  :
                  <div className="text-accent-green w-full">{Math.round(item.netChange * Math.pow(10, 4)) / Math.pow(10, 4)}% ↑</div>
                  }
                  
                </div>
              </div>
              ))
          }
            {/* <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pri5mary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">USD-GPY</div>
                  <div className="text-accent-red w-full">-0.07% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-prim5ary-100 justify-center items-center">
                  <div className="p3 text-primary-300">GPB-MXN</div>
                  <div className="text-accent-red w-full">-0.87% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">LBP-EUR</div>
                  <div className="text-accent-green w-full">+0.14% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pri5mary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">USD-GPY</div>
                  <div className="text-accent-red w-full">-0.07% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-prim5ary-100 justify-center items-center">
                  <div className="p3 text-primary-300">GPB-MXN</div>
                  <div className="text-accent-red w-full">-0.87% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">LBP-EUR</div>
                  <div className="text-accent-green w-full">+0.14% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pri5mary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">USD-GPY</div>
                  <div className="text-accent-red w-full">-0.07% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-prim5ary-100 justify-center items-center">
                  <div className="p3 text-primary-300">GPB-MXN</div>
                  <div className="text-accent-red w-full">-0.87% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">LBP-EUR</div>
                  <div className="text-accent-green w-full">+0.14% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pri5mary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">USD-GPY</div>
                  <div className="text-accent-red w-full">-0.07% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-prim5ary-100 justify-center items-center">
                  <div className="p3 text-primary-300">GPB-MXN</div>
                  <div className="text-accent-red w-full">-0.87% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">LBP-EUR</div>
                  <div className="text-accent-green w-full">+0.14% ↑</div>
              </div>
            </div>
            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">MXN-GPY</div>
                  <div className="text-accent-green w-full">+0.08% ↑</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pri5mary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">USD-GPY</div>
                  <div className="text-accent-red w-full">-0.07% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-prim5ary-100 justify-center items-center">
                  <div className="p3 text-primary-300">GPB-MXN</div>
                  <div className="text-accent-red w-full">-0.87% ↓</div>
              </div>
            </div>

            <div className="p-2 min-w-[6rem] bg-pr5imary-200">
              <div className="h-full w-full flex flex-col bg-pri5mary-100 justify-center items-center">
                  <div className="p3 text-primary-300">LBP-EUR</div>
                  <div className="text-accent-green w-full">+0.14% ↑</div>
              </div>
            </div> */}
          </motion.div>


          

            
            
        </div>
    )
}



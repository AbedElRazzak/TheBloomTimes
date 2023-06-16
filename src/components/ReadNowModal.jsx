import React from 'react';

export default function ReadNowModal(props) {
  return (
    <>
      {props.state == true && (
        <div className="h-screen w-full  backdrop-filter backdrop-blur-sm bg-opacity-50 fixed inset-0 flex items-center justify-center z-50 ">
        <div className="h-auto w-[80%] bg-secondary-50 p-6 rounded-lg shadow-lg max-h-96 max-w-96 overflow-y-scroll">
        <div className="h-full w-full flex flex-col">
          <div className="w-full flex justify-center items-center">
            <div className='h3'>{props.prompt}</div>
          </div>
          <div className="w-full flex justify-center items-center pt-12 py-4">
            <div className='p1 text-primary-300'>{props.gptResponse}</div>
          </div>
        </div>
          <button
            className=" text-primary-400 font-semibold py-2 px-4 h6 underline italic"
            onClick={props.stateHandler}
          >
            Close
          </button>
        </div>
      </div>
      )}
    </>
  );
}


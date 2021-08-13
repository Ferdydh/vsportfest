import React from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  const text = props.text;
  const title = props.title;

  React.useEffect(() => {
    window.addEventListener('mousedown', (event) => {
      if (!event.target.matches(".modal")) {
        setShowModal(false);
      }
    });
  });


  return (
    <>
      <button className="flex flex-wrap align-middle justify-center content-center transform skew-y-6 my-10 float-left transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-110
             bg-blue-500 font-mono hover:bg-blue-700 text-white py-2 px-4 border border-black-700 h rounded text-sm" type="button"
             onClick={() => setShowModal(true)}
        >
        <div className="mt-0.5">Rules</div>
        <span class="material-icons">chevron_right</span>
        </button>

      {showModal ? (
        <>
          <div
            className="transition justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-10"
          >
            <div className="modal">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 bg-opacity-70 outline-none focus:outline-none backdrop-filter-blur">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-none border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-gray-700">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-gray-700 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-gray-700 text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 px-2 border-t border-solid border-blueGray-200 rounded-b h-12">
                  <button
                    className="text-red-500 hover:bg-red-500 hover:text-white rounded-md background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-in-out duration-300 transition-all"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            </div>
            
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
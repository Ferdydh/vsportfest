import React from "react";

export default function RegistrationButton(props) {
  const url = props.url;

  const handleRegistration = () => {
    window.open(url);
  }

  return (
      <div className="transform translate-y-10 skew-y-6 mx-5 ml-20 mb-20 sm:my-15">
        <button className="flex flex-wrap align-middle justify-center content-center transform float-left transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-110
                bg-blue-500 font-mono hover:bg-cyan text-white py-2 px-4 mx-4 border border-black-700 rounded text-sm" type="button"
                onClick={() => handleRegistration()}
            >
          <div className="mt-0.5">Registration</div>
          <span class="material-icons">chevron_right</span>
        </button>
      </div>
  );
}
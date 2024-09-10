import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ConectToApp() {
  const { toApp } = useParams();
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newNumber = Math.floor(Math.random() * 100) + 1;
      setRandomNumber(newNumber);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      {randomNumber == 0 ? (
        <>
          <div className="flex flex-row [@media(max-width:420px)]:flex-col flex-wrap w-[-webkit-fill-available] justify-center items-center gap-4">
            <div className="w-36 [aspect-ratio:1/1] [@media(max-width:420px)]:w-16 rounded-full border border-[#989898] border-dashed border-4 flex flex-col justify-center items-center">
              <h1>MY Portal</h1>
            </div>
            <svg
              className="w-[100px] [@media(max-width:420px)]:rotate-90"
              fill="#8b05c8"
              width="400px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 195.762 195.762"
            >
              <path
                d="M195.762,97.882l-47.699,47.699l-10.606-10.607l10.317-10.316H113.5V71.105h34.273l-10.316-10.316l10.606-10.607
	L195.762,97.882z M56.75,71.105v53.552h41.615V71.105H56.75z M0,71.105v53.552h41.615V71.105H0z"
              />
            </svg>
            <div className="w-36 [aspect-ratio:1/1] [@media(max-width:420px)]:w-16 rounded-full border border-[#530378] border-4 flex flex-col justify-center items-center">
              <h1 className="bold">SIMAK</h1>
            </div>
          </div>
          <h3 className="text-center text-[clamp(1rem,5cqi+2vmax,2rem)] font-[serif] text-black">
            Sedang pindah ke aplikasi {toApp || "yang dituju"}
          </h3>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center gap-6 animate-bounceOnce">
            <div className="w-36 [aspect-ratio:1/1] [@media(max-width:420px)]:w-16 rounded-full border border-[#e93434] border-4 flex flex-col justify-center items-center">
              <svg
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 500 500"
              >
                <path
                  fill="#e93434"
                  d="M232.192,232.192L80.769,232.192L80.769,298.028L232.192,298.028L232.192,449.451L298.028,449.451L298.028,298.028L449.451,298.028L449.451,232.192L298.028,232.192L298.028,80.769L232.192,80.769L232.192,232.192Z"
                  transform="rotate(45 275.794 239.316)"
                ></path>
              </svg>
            </div>
            <h2 className="text-4xl text-[clamp(1rem,3cqi+2vmax,2rem)] text-center text-[#e93434] font-[serif] [line-height:initial]">
              Terjadi masalah saat pindah aplikasi
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default ConectToApp;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AlternativeLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function handlerShowPassword() {
    setShowPassword(!showPassword);
  }
  function handlerLogin() {
    navigate(`/panel`);
  }

  return (
    <>
      <div className="w-full h-screen grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {/* section left */}
        <div className="w-full h-full max-[600px]:order-1 min-[600px]:rounded-tr-xl min-[600px]:rounded-br-xl rounded-tr-xl bg-[#7515a0]">
          <img
            src="https://readymadeui.com/signin-image.webp"
            alt="image"
            className="h-full [aspect-ratio:1/1]"
          />
        </div>
        {/* end section left */}

        {/* section right */}
        <div className="w-full h-full flex flex-col justify-stretch items-end">
          <div className="flex gap-2 p-[1rem]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo-Resmi_Unpak.png"
              alt="logo"
              className="w-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Logo_Kampus_Merdeka_Kemendikbud.png"
              alt="kampus medeka"
              className="h-12"
            />
          </div>

          <div className="w-full p-[2rem] flex flex-col gap-9">
            {/* row 1 */}
            <div className="flex flex-col">
              <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
              <p className="text-sm mt-4 text-gray-800">
                Belum punya akun!{" "}
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Daftar Disini
                </a>
              </p>
            </div>
            {/* end row 1 */}

            {/* row 2 */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label className="flex items-center gap-2 px-4 bg-white border border-black rounded-md h-12 text-black text-base leading-[1.5rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path>
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Username / Email / NIDN / NIM / NIP"
                  />
                </label>
                <div className="flex justify-between">
                  <small className="text-red-500">validation</small>
                  {/* <small>Bottom Right label</small> */}
                </div>
              </div>

              <div className="clex flex-col">
                <label className="flex items-center gap-2 px-4 bg-white border border-black rounded-md h-12 text-black text-base leading-[1.5rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="grow"
                    placeholder="Password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 inline-flex items-center justify-center cursor-pointer"
                    onClick={handlerShowPassword}
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    ) : (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </>
                    )}
                  </svg>
                </label>
                <div className="flex justify-between">
                  <small className="text-red-500">validation</small>
                </div>
              </div>
            </div>
            {/* end row 2 */}

            {/* row 3 */}
            <div className="flex flex-col">
              <button
                className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-[#7515a0] hover:bg-[#4e0e6a] focus:outline-none"
                onClick={handlerLogin}
              >
                Masuk
              </button>

              <div className="my-1 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              <button className="flex items-center justify-center gap-4 w-full py-3 px-6 text-sm tracking-wide rounded-md text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  ></path>
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  ></path>
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  ></path>
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  ></path>
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  ></path>
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  ></path>
                </svg>
                Masuk menggunakan google
              </button>
            </div>
            {/* end row 3 */}
          </div>
        </div>
        {/* end section right */}
      </div>
    </>
  );
}

export default Login;

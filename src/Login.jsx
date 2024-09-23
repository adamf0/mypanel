import logo_unpak from "./assets/logo_unpak.png"

function Login(){

    return <div className="w-full min-h-screen bg-[#77099d] bg-[linear-gradient(180deg,_#77099d_0%,_##b221f6_80%)] flex flex-col sm:flex-row">
        <div className="w-full min-h-screen sm:w-1/2 sm:min-h-[inherit] flex flex-col items-center text-white text-center">
            <div className="w-[104px] sm:w-[203px] h-[150px] sm:h-[288px] bg-[#7D0CA7] sm:grow flex items-end justify-center px-[1vw] pb-4 sm:pb-[50px] rounded-bl-[100vw] rounded-br-[100vw]">
                <img src={logo_unpak} alt="logo" className="w-[64px] sm:w-[128px]"/>
            </div>
            <div className="sm:grow pt-[16px] sm:pt-[55px] pb-[24px] flex flex-col gap-4">
                <h1 className="text-[20px] sm:text-[32px] font-[bolder]">SIPAKSI</h1>
                <h3 className="text-[14px] sm:text-[20px] font-[bolder] [line-height:initial]">Sistem Informasi<br/> Penelitian, Abdimas dan PubliKaSI</h3>
                <h6 className="text-[12px] sm:text-[16px] font-[light]">Lembaga Penjaminan Mutu Internal (LPMI) Universitas Pakuan</h6>
            </div>
            <div className="grow flex flex-col items-end w-full padding_24">
                <div className="grow flex flex-col [@media(min-width:640px)]:hidden w-full bg-white rounded-lg pt-[24px] pb-[52px]">
                    <div className="flex flex-col text-left padding_24">
                        <h1 className="text-black text-[20px] font-[600]">Login</h1>
                        <div className="flex flex-col gap-4 mt-[15px] mb-[59px]">
                            <div className="flex flex-col gap-2">
                                <label className="grow text-[#77099D] text-[12px]">NIDN/Username</label>
                                <input type="text" className="grow text-black text-4 outline-none outline-[#D9D9D9] hover:outline-[#77099D] active:outline-[#77099D] focus:outline-[#77099D] focus-visible:outline-[#77099D] placeholder-[#D9D9D9] px-[8px] rounded-sm" placeholder="Placeholder"/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="grow text-[#77099D] text-[12px]">Password</label>
                                <input type="password" className="grow text-black text-4 outline-none outline-[#D9D9D9] hover:outline-[#77099D] active:outline-[#77099D] focus:outline-[#77099D] focus-visible:outline-[#77099D] placeholder-[#D9D9D9] px-[8px] rounded-sm" placeholder="Placeholder"/>
                            </div>
                        </div>
                        <button className="w-full bg-[#b221f6] bg-[linear-gradient(180deg,_#b221f6_0%,_#77099d_70%)] uppercase font-semibold text-[14px] text-white py-[12px] rounded-xl">
                            Login
                        </button>
                    </div>
                </div>
                <small className="[@media(max-width:640px)]:hidden w-full pb-[50px]">
                    Universitas Pakuan 2024
                </small>
            </div>
        </div>

        <div className="hidden sm:w-1/2 bg-white grow px-[12cqi] sm:flex items-center">
            <div className="grow w-[inherit]">
                <h1 className="text-[32px] font-[600]">Login</h1>
                <div className="flex flex-col gap-[24px] mt-[62px] mb-[48px]">
                    <div className="flex flex-col gap-4 group">
                        <label className="grow text-black group-active:text-[#77099D] group-focus:text-[#77099D] group-focus-visible:text-[#77099D] group-focus-within:text-[#77099D]">
                            NIDN/Username
                        </label>
                        <input type="text" className="grow text-black text-4 outline-none outline-[#D9D9D9] hover:outline-[#77099D] active:outline-[#77099D] focus:outline-[#77099D] focus-visible:outline-[#77099D] placeholder-[#D9D9D9] px-[8px] py-[10px] rounded-sm" placeholder="Placeholder"/>
                    </div>

                    <div className="flex flex-col gap-4 group">
                        <label className="grow text-black group-active:text-[#77099D] group-focus:text-[#77099D] group-focus-visible:text-[#77099D] group-focus-within:text-[#77099D]">
                            Password
                        </label>
                        <input type="password" className="grow text-black text-4 outline-none outline-[#D9D9D9] hover:outline-[#77099D] active:outline-[#77099D] focus:outline-[#77099D] focus-visible:outline-[#77099D] placeholder-[#D9D9D9] px-[8px] py-[10px] rounded-sm" placeholder="Placeholder"/>
                    </div>
                </div>
                <button className="w-full bg-[#b221f6] bg-[linear-gradient(180deg,_#b221f6_0%,_#77099d_70%)] uppercase  font-semibold text-[14px] text-white py-[12px] rounded-xl">
                    Login
                </button>
            </div>
        </div>
    </div>;
}

export default Login;
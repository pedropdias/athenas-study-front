export default function Header(){
    return(
        <div className="bg-[#121212] flex m-0 justify-between">
            <h1 className=" p-2 mt-1 pl-[3rem] text-xl cursor-pointer">Athenas <span className="text-sky-500">Academy</span></h1>
            <div className="flex ">
                <h1 className=" p-3 pl-[2rem] cursor-pointer hover:text-sky-500">Dashboard</h1>
                <h1 className=" p-3 pl-[2rem] cursor-pointer hover:text-sky-500">Cursos</h1>
            </div>
            <div className="flex">
                <div className="w-8 h-8 bg-gray-400 mt-2 rounded-full cursor-pointer"></div>
                <h1 className="p-3 pl-[1rem] pr-[3rem] cursor-pointer">Username</h1>
            </div>
        </div>
    )
}
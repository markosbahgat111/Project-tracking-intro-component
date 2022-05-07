const TextContainer = () => {
    return ( 
        <div className="textContainer desktop:w-1/2 w-11/12 h-[auto] desktop:px-20  px-0 desktop:mt-0 sm:mt-[80%] mt-[50vh] mb-10 relative z-10">
            <span className="tracking-[5px] text-xl text-[#a0a1ac] "><b className="tracking-[1px] bg-[#242942] text-white px-2 py-[1px] rounded-2xl">NEW</b> MONOGRAPH DASHBOARD</span>
            <h1 className="md:text-7xl text-4xl font-bold text-[#242942] mt-3">POWERFUL INSIGHTS INTO YOUR TEAM</h1>
            <p className="w-1/2 text-2xl mt-10 mb-20 text-[#5b5f71] whitespace-nowrap">
                Project planning and time tracking <br/>for agile teams
            </p>
            <section className="flex flex-row  items-center justify-start gap-5">
                <button className="cursor-pointer px-5 whitespace-nowrap py-3 rounded-md bg-[#ff5c5c] font-bold tracking-widest text-[#eef3f6]">SCHEDULE A DEMO</button>
                <h2 className="font-normal md:tracking-[5px] text-[#a0a1ac] whitespace-nowrap">TO SEE A PREVIEW</h2>
            </section>
        </div>
     );
}
 
export default TextContainer;

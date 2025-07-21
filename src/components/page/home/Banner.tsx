import { LuCalendarDays } from "react-icons/lu";

const Banner = () => {
    return (
        <div className='banner_bg py-20 text-center text-white'>
            <div className='container  flex flex-col items-center justify-center'>
                <p className='p-4 rounded-2xl bg-[#ffffff]/30'>
                    <LuCalendarDays className='text-5xl' />
                </p>
                <h1 className='text-6xl font-bold text-white'>
                    Smart Event Scheduler
                </h1>
                <p className='text-2xl w-[55%] mt-4'>
                    Organize your life with intelligent categorization and
                    beautiful design
                </p>
                <div className='w-3/4 mx-auto mt-8 grid grid-cols-4 gap-4'>
                    <div className='px-8 py-5 bg-white/20 rounded-2xl'>
                        <h2 className='text-4xl font-bold mb-2'>3</h2>
                        <span>Total Events</span>
                    </div>{" "}
                    <div className='px-8 py-5 bg-white/20 rounded-2xl'>
                        <h2 className='text-4xl font-bold mb-2'>0</h2>
                        <span>Active</span>
                    </div>{" "}
                    <div className='px-8 py-5 bg-white/20 rounded-2xl'>
                        <h2 className='text-4xl font-bold mb-2'>3</h2>
                        <span>Today</span>
                    </div>{" "}
                    <div className='px-8 py-5 bg-white/20 rounded-2xl'>
                        <h2 className='text-4xl font-bold mb-2'>3</h2>
                        <span>Upcoming</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

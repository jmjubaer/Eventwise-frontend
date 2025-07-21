import { FaRegClock } from "react-icons/fa6";
import { LuArchive, LuCalendarDays } from "react-icons/lu";

const StatsTab = () => {
    return (
        <div className='mb-20 mt-5'>
            <div className='grid grid-cols-3 gap-5'>
                <div className='bg-white p-5 rounded-lg border border-[#e4e4e7]'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-semibold'>Total Events</h3>
                        <LuCalendarDays className='text-lg' />
                    </div>
                    <h3 className='text-3xl font-bold my-1'>1</h3>
                    <p>{"0"} Upcoming</p>
                </div>
                <div className='bg-white p-5 rounded-lg border border-[#e4e4e7]'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-semibold'>
                            Today`s` Events
                        </h3>
                        <FaRegClock className='text-lg' />
                    </div>
                    <h3 className='text-3xl font-bold my-1'>1</h3>
                    <p>{"0"} scheduled for today</p>
                </div>
                <div className='bg-white p-5 rounded-lg border border-[#e4e4e7]'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-semibold'>Archived</h3>
                        <LuArchive className='text-lg' />
                    </div>
                    <h3 className='text-3xl font-bold my-1'>1</h3>
                    <p>completed events</p>
                </div>
            </div>
            <div className='bg-white p-5 mt-5 rounded-lg border border-[#e4e4e7] '>
                <h2 className="text-2xl font-semibold">Events by Category</h2>
                <p>Distribution of your events across different categories</p>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    <div className='flex items-center justify-between bg-personal/10 p-4 rounded-lg border border-personal/20'>
                        <div className='text-personal'>
                            <h4 className='font-medium'>Personal</h4>
                            <p className='text-2xl font-bold'>{"0"}</p>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-personal text-white flex items-center justify-center '>
                            <LuCalendarDays className='text-lg' />
                        </div>
                    </div>{" "}
                    <div className='flex items-center justify-between bg-work/10 p-4 rounded-lg border border-work/20'>
                        <div className='text-wbg-work'>
                            <h4 className='font-medium'>Work</h4>
                            <p className='text-2xl font-bold'>{"0"}</p>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-work text-white flex items-center justify-center '>
                            <LuCalendarDays className='text-lg' />
                        </div>
                    </div>{" "}
                    <div className='flex items-center justify-between bg-other/10 p-4 rounded-lg border border-other/20'>
                        <div className='text-other'>
                            <h4 className='font-medium'>Other</h4>
                            <p className='text-2xl font-bold'>{"0"}</p>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-other text-white flex items-center justify-center '>
                            <LuCalendarDays className='text-lg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsTab;

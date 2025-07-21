import { CiStickyNote } from "react-icons/ci";
import { FaSearch, FaTrashAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { LuArchive, LuCalendarDays } from "react-icons/lu";

const EventTab = () => {
    return (
        <div className='mb-20 mt-5'>
            <div className=' flex justify-between items-center '>
                <div className=''>
                    <h2 className='text-2xl font-semibold'>Your Events</h2>
                    <p>{"1"} Event</p>
                </div>
                <div className='flex items-center gap-3'>
                    <select className='border border-gray-300 rounded-md p-2 px-5 outline-0'>
                        <option value=''>Filter by Category</option>
                        <option value='personal'>Personal</option>
                        <option value='work'>Work</option>
                        <option value='other'>Other</option>
                    </select>

                    <div className='w-fit h-fit relative'>
                        <input
                            type='search'
                            placeholder='Search Events ...'
                            className='border border-gray-300 rounded-md p-2 px-5 pl-9 outline-0 w-60'
                        />
                        <FaSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400' />
                    </div>
                </div>
            </div>
            <div className='border-[#e4e4e7] border bg-white rounded-2xl p-4 border-t-4 border-t-[#f97415] my-5'>
                <div className='flex items-center justify-between '>
                    <h3 className='capitalize text-xl font-medium'>birthday</h3>
                    <span
                        className={`px-3 text-white rounded-3xl bg-[#f97415]`}>
                        Personal
                    </span>
                </div>
                <div className='flex items-center gap-4 mt-1'>
                    <span className='flex items-center gap-1.5'>
                        <LuCalendarDays />
                        Wed, Jul 23, 2025
                    </span>
                    <span className='flex items-center gap-1.5'>
                        <FaRegClock />
                        2:51 PM
                    </span>
                </div>

                <div className='flex items-center gap-1 mt-3 p-3 bg-[#f97415]/20 rounded-lg'>
                    <CiStickyNote className='text-lg' />
                    <p>asdsf adsfas adadf</p>
                </div>
                <div className='flex items-center gap-3 mt-4'>
                    <button className='flex items-center gap-2 border border-[#e4e4e7] bg-[#f9f9fa] cursor-pointer py-1.5 px-5 rounded text-sm '>
                        <LuArchive /> Archive
                    </button>
                    <button className='flex items-center gap-2 border border-[#e4e4e7] bg-[#f9f9fa] text-red-500 cursor-pointer py-1.5 px-5 rounded text-sm '>
                        <FaTrashAlt /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventTab;

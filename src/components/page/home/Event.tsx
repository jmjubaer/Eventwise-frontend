import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { FaPlus, FaRegCalendar } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { LuArchive } from "react-icons/lu";

const EventSection = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: (
                <button className='flex items-center gap-2 bg-white py-1.5 px-5 rounded-xl text-sm'>
                    <FaRegCalendar /> Events
                </button>
            ),
            children: "Content of Tab Pane 1",
        },
        {
            key: "2",
            label: (
                <button className='flex items-center gap-2 bg-white py-1.5 px-5 rounded-xl text-sm'>
                    <FaPlus /> Create
                </button>
            ),
            children: "Content of Tab Pane 2",
        },
        {
            key: "3",
            label: (
                <button className='flex items-center gap-2 bg-white py-1.5 px-5 rounded-xl text-sm'>
                    <LuArchive /> Archive
                </button>
            ),
            children: "Content of Tab Pane 3",
        },
        {
            key: "4",
            label: (
                <button className='flex items-center gap-2 bg-white py-1.5 px-5 rounded-xl text-sm'>
                    <IoStatsChart /> Stats
                </button>
            ),
            children: "Content of Tab Pane 3",
        },
    ];

    return (
        <div className='container'>
            {" "}
            <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
        </div>
    );
};

export default EventSection;

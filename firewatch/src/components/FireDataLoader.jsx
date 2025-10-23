// src/components/FireDataLoader.jsx
import { useEffect, useState } from "react";
import Papa from "papaparse";
import useFiresData from '../components/Logic/ParseData';

export default function FireDataLoader() {

    const { fires } = useFiresData();

    const [monthFilter, setMonthFilter] = useState("");
    const [dayFilter, setDayFilter] = useState("");

    const [entriesStart, setEntriesStart] = useState(0);
    const [entries, setEntries] = useState(10);
//   const [newEntry, setNewEntry] = useState({
//     month: "",
//     day: "",
//     temp: "",
//     RH: "",
//     wind: "",
//     rain: "",
//     area: ""
//   });

    const filteredFires = fires.filter(fire => {
        const monthMatch = monthFilter ? fire.month === monthFilter : true;
        const dayMatch = dayFilter ? fire.day === dayFilter : true;
        return monthMatch && dayMatch;
    });

  // Add new entry (persist + refresh state)
//   const handleAdd = () => {
//     if (!newEntry.month || !newEntry.day) return alert("Month and Day required");

//     const entry = {
//       month: newEntry.month.toLowerCase(),
//       day: newEntry.day.toLowerCase(),
//       temp: parseFloat(newEntry.temp) || 0,
//       RH: parseFloat(newEntry.RH) || 0,
//       wind: parseFloat(newEntry.wind) || 0,
//       rain: parseFloat(newEntry.rain) || 0,
//       area: parseFloat(newEntry.area) || 0,
//     };

//     const updated = [...fires, entry];
//     setFires(updated);
//     localStorage.setItem("fires", JSON.stringify(updated));
//     setNewEntry({ month: "", day: "", temp: "", RH: "", wind: "", rain: "", area: "" });
//   };

    function incrementByTen() {
        setEntriesStart((prev) => prev + 10);
        setEntries((prev) => prev + 10);
    };
    function decreaseByTen() {
        setEntriesStart((prev) => Math.max(prev - 10, 0));
        setEntries((prev) => Math.max(prev - 10, 10));
    };

  return (
    <>
        <div className="w-[100%] h-25 bg-white rounded-[10px] mt-10">
            <div className="flex items-center justify-center h-[100%] gap-4 mb-4">
                <select
                value={monthFilter}
                onChange={(e) => setMonthFilter(e.target.value)}
                className="
                    border border-gray-300
                    rounded-lg
                    p-2 w-50 h-10
                    bg-white
                    shadow-sm
                    focus:outline-none
                    hover:border-orange-300
                    cursor-pointer
                "
                >
                    <option className='bg-purple-600 rounded-[10px]' value="">Filter: Months</option>
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sep">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                </select>

                <select
                value={dayFilter}
                onChange={(e) => setDayFilter(e.target.value)}
                className="
                    border border-gray-300
                    rounded-lg 
                    p-2 w-50 h-10 
                    shadow-sm
                    focus:outline-none
                    hover:border-orange-300
                "
                >
                    <option value="">All Days</option>
                    <option value="mon">Monday</option>
                    <option value="tue">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thu">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Saturday</option>
                    <option value="sun">Sunday</option>
                </select>
            </div>
        </div>
        <div className="p-6">

            {/* Add new entry form */}
            {/* <div className="grid grid-cols-7 gap-2 mb-6">
                {Object.keys(newEntry).map((key) => (
                <input
                    key={key}
                    placeholder={key}
                    value={newEntry[key]}
                    onChange={(e) => setNewEntry({ ...newEntry, [key]: e.target.value })}
                    className="border rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-400"
                />
                ))}
            </div> */}
            {/* <button
                onClick={handleAdd}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
                Add Entry
            </button> */}

            <div className="mt-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="grid grid-cols-7 bg-orange-100 font-semibold text-gray-800 p-2 border-b">
                <div>Month</div>
                <div>Day</div>
                <div>Temp</div>
                <div>RH</div>
                <div>Wind</div>
                <div>Rain</div>
                <div>Area</div>
            </div>

            {filteredFires.slice(entriesStart, entries).map((fire, i) => (
            <div
                key={i}
                className="grid grid-cols-7 p-2 border-b last:border-none hover:bg-orange-50"
            >
                <div>{fire.month}</div>
                <div>{fire.day}</div>
                <div>{fire.temp}°C</div>
                <div>{fire.RH}%</div>
                <div>{fire.wind}</div>
                <div>{fire.rain}</div>
                <div>{fire.area}</div>
            </div>
            ))}
        </div>

        <div className="flex items-center gap-5 pt-3">
            <p className="text-sm text-gray-500">
                Showing {entriesStart + 1}–{Math.min(entries, filteredFires.length)} of{" "}
                {filteredFires.length} entries
            </p>
            {entries < filteredFires.length && (
            <button
                onClick={incrementByTen}
                className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 transition">
                More Entries
            </button>
            )}
            {entriesStart > 0 && (
            <button
                onClick={decreaseByTen}
                className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 transition">
                Less Entries
            </button>
            )}
        </div>
        </div>
    </>
  );
}

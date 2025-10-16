import { useState } from 'react'
// import './App.css'
import { ComposedChart, Area, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart } from 'recharts'

function LandingPage() {
  const [monthFilter, setMonthFilter] = useState("");
  const [dayFilter, setDayFilter] = useState("");

    
  return (
    <>
        <div className="w-[100wv] h-[100dvh] bg-gray-200 flex justify-center">
          <div className="w-[80%]">
            <div className='flex items-center justify-center gap-[50px] mt-10'>
                <h1 className='text-[2.3rem]'>FireWatch Dashboard</h1>
                <button className='text-white bg-orange-300 rounded-[7px] p-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105'>Add New Data</button>
            </div>
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
            <div className="flex justify-center gap-10 pt-10">
              <div className="avg-columns">
                <h2 className='text-[1.5rem]'>Avg. Temp: {}</h2>
              </div>
              <div className="avg-columns">
                <h2 className='text-[1.5rem]'>Fires: {}</h2>
              </div>
              <div className="avg-columns">
                <h2 className='text-[1.5rem]'>Avg. Area: {}</h2>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default LandingPage
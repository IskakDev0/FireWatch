import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function ParseData(){
    const [fires, setFires] = useState([]);
    const [loading, setLoading] = useState(true);
    const [averageTemp, setAverageTemp] = useState(0);
    const [averageArea, setAverageArea] = useState(0);
    const [averageFires, setAverageFires] = useState(0);
    const stored = localStorage.getItem("fires");

    useEffect(() => {
        if (stored) {
            setFires(JSON.parse(stored));
            setLoading(false);
        } else {
            Papa.parse("/forestfires.csv", {
                download: true,
                header: true,
                dynamicTyping: true,
                complete: (results) => {
                    const cleaned = results.data
                        .filter((r) => r.month && r.day)
                        .map((r) => ({
                            month: r.month.toLowerCase().trim(),
                            day: r.day.toLowerCase().trim(),
                            temp: +r.temp,
                            RH: +r.RH,
                            wind: +r.wind,
                            rain: +r.rain,
                            area: +r.area,
                        }));
                    setFires(cleaned);
                    localStorage.setItem("fires", JSON.stringify(cleaned));
                    setLoading(false);
                },
            });
        }
    }, []);

    useEffect(() => {
        if (fires.length > 0) {
            const totalTemp = fires.reduce((sum, f) => sum + f.temp, 0);
            const totalArea = fires.reduce((sum, f) => sum + f.area, 0);
            const totalFires = fires.length;

            setAverageTemp((totalTemp / fires.length).toFixed(2));
            setAverageArea((totalArea / fires.length).toFixed(2));
            setAverageFires(totalFires);
        }
    }, [fires]);

    return { averageFires, averageTemp, averageArea, fires};
    
    const filteredFires = fires.filter(fire => {
        const monthMatch = monthFilter ? fire.month === monthFilter : true;
        const dayMatch = dayFilter ? fire.day === dayFilter : true;
        return monthMatch && dayMatch;
    });

    return filteredFires;
}
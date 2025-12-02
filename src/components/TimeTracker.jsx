import {useState, useEffect} from 'preact/hooks';

export default function WorldClock() {
    const [times, setTimes] = useState({});

    useEffect(() => {
        const fetchTimes = async() => {
            const cities = [
                {name:'Los Angeles', tz:'America/Los_Angeles'},
                {name:'London', tz:'Europe/London'},
                {name:'Pakistan', tz:'Asia/Karachi'}
            ];
            const timeData = {};
            for (const city of cities) {
                const response = await fetch(`http://worldtimeapi.org/api/timezone/${city.tz}`);
                const data = await response.json();
                timeData[city.name] = new Date(data.datetime).toLocaleTimeString();
            }
            setTimes(timeData);
        };
        fetchTimes();
        const interval = setInterval(fetchTimes, 60000);
        return () => clearInterval(interval);

    },[]);
        return (
            <div class='flex gap-6'>
                {Object.entries(times).map(([city,time]) => (
                    <div key={'city'}>
                        <p class='flex justify-center text-sm text-gray-600'>{city}</p>
                        <p class='text-lg font=mono'>{time}</p>
                    </div>
                ))}
            </div>
        );
    }
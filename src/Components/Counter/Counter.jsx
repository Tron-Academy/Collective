import { useEffect, useState } from "react";
import "../Counter/Counter.css"
const CounterCard = ({ icon, number, text }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = number;
        if (start === end) return;
        
        let totalDuration = 2000; 
        let incrementTime = Math.floor(totalDuration / end);
        
        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);
        
        return () => clearInterval(timer);
    }, [number]);

    return (
        <div className="counter-card">
            <div className="icon">{icon}</div>
            <div className="counter">
                <span>{count}</span>
                <p>{text}</p>
            </div>
        </div>
    );
};

const StatsSection = () => {
    return (
        <div className="stats-container">
            <CounterCard icon="🏆" number={150} text="TRANSPORTATIONS DONE" />
            <CounterCard icon="👕" number={150} text="CLIENTS HAPPY" />
            <CounterCard icon="👥" number={40} text="WORKERS TEAM" />
            <CounterCard icon="⏳" number={3} text="YEARS IN MARKET" />
        </div>
    );
};

export default StatsSection;

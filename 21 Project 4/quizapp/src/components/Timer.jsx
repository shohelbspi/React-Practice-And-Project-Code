import React, { useEffect, useState } from "react";

function Timer({setIsOver}) {
    const [leftTime, setLeftTime] = useState(5);

    const [displayTime, setDisplaytTime] = useState("");


    useEffect(() => {
        const interval = setInterval(() => {
            setLeftTime((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);



        return () => clearInterval(interval);
    }, []);

    useEffect(function () {
        if(leftTime ===0){
            setIsOver(true)
        }
        
        const minutes = Math.floor(leftTime / 60);
        const seconds = leftTime % 60;

        let formateTime = `${minutes.toString().padStart(2,0)} : ${seconds
            .toString().padStart(2, 0)}` 
            setDisplaytTime(formateTime)


    }, [leftTime])

    return (
        <div>
            <h1>Time Left: {displayTime}</h1>
        </div>
    );
}

export default Timer;
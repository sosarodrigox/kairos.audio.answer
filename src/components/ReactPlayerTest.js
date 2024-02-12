import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export const ReactPlayerTest = () => {

    const [currentTime, setCurrentTime] = useState(0);

    const handleProgress = ({ playedSeconds }) => {
        setCurrentTime(playedSeconds);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div>
            <h1>React Player Test</h1>
            <ReactPlayer
                controls={true}
                url='https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3'
                onProgress={handleProgress}
            />
            <p>Tiempo de reproducción: {formatTime(currentTime)}</p>
        </div>
    )
}

export default ReactPlayerTest;
import React, { useEffect, useState } from "react"
import dayjs from "dayjs";

//MUI
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

//Components
import Circle from "../../components/user/Circle";
import CommuteButton from "../../components/user/CommuteButton";

export default function CommuteModule() {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
          clearInterval(timer);
        };
    }, []);

    const commuteButtonclick = () => {
        console.log("ds")
    }

    return(
        <Card
            sx={{
                minWidth: '800px',
                height: '840px'
            }}
        >
            <CardContent>
                <Stack spacing={10}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Circle value={progress}/>
                    <CommuteButton onClick={commuteButtonclick}/>
                </Stack>
            </CardContent>
        </Card>
    )
}
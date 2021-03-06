/* eslint-disable react/jsx-key */
import { Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import Mint from './Mint';
import Title from './Title';

type TimePeriod = 'Days' | 'Hours' | 'Minutes' | 'Seconds';

type TimerSegmentType = {
    timePeriod: TimePeriod;
    value: number;
};
const TimerSegment: FC<TimerSegmentType> = ({ timePeriod, value }) => {
    const formattedValue: string = value.toString().padStart(2, '0');
    return (
        <Stack direction="column" alignContent="center" textAlign={'center'} minWidth={50}>
            <Typography fontFamily="Aleo" fontSize="1.5rem">
                {formattedValue}
            </Typography>
            <Typography fontFamily="Aleo" fontSize="1.5rem">
                {timePeriod}
            </Typography>
        </Stack>
    );
};
const Timer: FC = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMins] = useState(0);
    const [seconds, setSecs] = useState(0);
    const [read2mint, setReady2Mint] = useState(false);
    useEffect(() => {
        const target = 1652634000;

        const interval = setInterval(() => {
            const now = new Date();
            const diff = target - now.getTime();
            if (diff < 0 && !read2mint) {
                setReady2Mint(true);
            }
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(h);

            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            setMins(m);

            const s = Math.floor((diff % (1000 * 60)) / 1000);
            setSecs(s);
        }, 10);
        return () => clearInterval(interval);
    }, []);
    return !read2mint ? (
        <Stack direction="column" alignItems="center">
            <Title>Countdown To Mint</Title>
            <Stack direction="row" spacing={3}>
                {[
                    { timePeriod: 'Days', value: days },
                    { timePeriod: 'Hrs', value: hours },
                    { timePeriod: 'Mins', value: minutes },
                    { timePeriod: 'Secs', value: seconds },
                ].map((val: any) => (
                    <TimerSegment
                        key={val.timePeriod}
                        timePeriod={val.timePeriod}
                        value={val.value}
                    />
                ))}
            </Stack>
        </Stack>
    ) : (
        <Stack direction="row" alignItems="center" justifyContent="center" pt="1.5rem" pb="3rem">
            <Mint />
        </Stack>
    ); /* difference <= 0 ? (
        <Stack direction="row" alignItems="center" justifyContent="center" pt="1.5rem" pb="3rem">
            <Mint />
        </Stack>
    ) : (
        <Stack direction="column" alignItems="center">
            <Title>Countdown To Mint</Title>
            <Stack direction="row" spacing={3}>
                {[
                    { timePeriod: 'Days', value: days },
                    { timePeriod: 'Hours', value: hours },
                    { timePeriod: 'Minutes', value: minutes },
                    { timePeriod: 'Seconds', value: seconds },
                ].map((val: any) => (
                    <TimerSegment timePeriod={val.timePeriod} value={val.value} />
                ))}
            </Stack>
        </Stack>
    ); */
};
export default Timer;

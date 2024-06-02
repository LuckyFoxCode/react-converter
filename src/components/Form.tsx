import { FormData } from '@/libs/types';
import { useState } from 'react';
import { Box, Button, Input } from './common';

interface FormProps {
  setData: React.Dispatch<React.SetStateAction<number>>;
}

export const Form: React.FC<FormProps> = ({ setData }) => {
  const [nightDays, setNightDays] = useState<number>(0);
  const [form, setForm] = useState<FormData>({
    allHoursDay: 0,
    allHoursNight: 0,
    taxDay: 63,
    taxNight: 65.9,
  });

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getNightDays = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNightDays(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dayHours = (form.allHoursDay * form.taxDay).toFixed(2);

    const firstStep = nightDays * 4 * form.taxDay;
    const secondStep = form.allHoursNight - nightDays * 4;
    const thirdStep = (secondStep * form.taxNight).toFixed(2);
    const fourthStep = ((firstStep + +thirdStep) * 1.5).toFixed(2);
    const halfHourPercent = (form.taxNight * 0.5 * nightDays).toFixed(2);
    const result = +fourthStep - +halfHourPercent;

    console.log(
      dayHours,
      firstStep,
      secondStep,
      +thirdStep,
      +fourthStep,
      +halfHourPercent,
      result,
    );

    setData(+dayHours + result);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-[650px] flex flex-col gap-y-3 bg-gray-800 rounded-xl p-3'
    >
      <Input
        label='Day:'
        name='allHoursDay'
        onChange={getInputValue}
        value={form.allHoursDay}
      />
      <Box position>
        <Input
          label='Night:'
          name='allHoursNight'
          onChange={getInputValue}
          value={form.allHoursNight}
        />
        <Input
          label='Night days:'
          name='nightDays'
          onChange={getNightDays}
          value={nightDays}
        />
      </Box>
      <Button type='submit'>Рассчитать</Button>
    </form>
  );
};

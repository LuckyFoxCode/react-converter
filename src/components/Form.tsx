import { FormData } from '@/libs/types';
import { cn } from '@/libs/utils';
import { useState } from 'react';
import { CiBadgeDollar, CiClock2, CiDark, CiLight } from 'react-icons/ci';
import { Box, Button, Input } from './common';

interface FormProps {
  setData: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}

export const Form: React.FC<FormProps> = ({ setData, className }) => {
  const [form, setForm] = useState<FormData>({
    allHoursDay: '',
    allHoursNight: '',
    taxDay: '',
    taxNight: '',
    daysNight: '',
  });

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dayCount = Number(form.allHoursDay) * Number(form.taxDay);
    const halfNightHoursToDay = Number(form.daysNight) * 4;

    const lostNightHours = Number(form.allHoursNight) - halfNightHoursToDay;
    const nightCount = lostNightHours * Number(form.taxNight);

    const totalNightCount =
      (halfNightHoursToDay * Number(form.taxDay) + nightCount) * 1.5;

    const result = (dayCount + totalNightCount).toFixed(2);

    setData(Number(result));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'w-full max-w-[650px] flex flex-col gap-y-3 bg-gray-800 rounded-xl p-3',
        className,
      )}
    >
      <Input
        withIcon
        iconSize={24}
        iconName={CiLight}
        label='Day:'
        name='allHoursDay'
        onChange={getInputValue}
        value={form.allHoursDay}
      />
      <Input
        withIcon
        iconSize={24}
        iconName={CiDark}
        label='Night:'
        name='allHoursNight'
        onChange={getInputValue}
        value={form.allHoursNight}
      />
      <Box className='gap-x-2'>
        <Input
          withIcon
          iconSize={24}
          iconName={CiClock2}
          label='NightDays:'
          name='daysNight'
          onChange={getInputValue}
          value={form.daysNight}
          className='w-1/3'
        />
        <Input
          withIcon
          iconSize={24}
          iconName={CiBadgeDollar}
          label='TaxDay:'
          name='taxDay'
          onChange={getInputValue}
          value={form.taxDay}
          className='w-1/3'
        />
        <Input
          withIcon
          iconSize={24}
          iconName={CiBadgeDollar}
          label='TaxNight:'
          name='taxNight'
          onChange={getInputValue}
          value={form.taxNight}
          className='w-1/3'
        />
      </Box>

      <Button type='submit'>Рассчитать</Button>
    </form>
  );
};

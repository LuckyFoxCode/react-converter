import { FormData } from '@/libs/types';
import { useState } from 'react';
import { Input } from './common';

interface FormProps {
  setData: React.Dispatch<React.SetStateAction<number>>;
}

export const Form: React.FC<FormProps> = ({ setData }) => {
  const [form, setForm] = useState<FormData>({
    allHoursDay: 0,
    allHoursNight: 0,
    taxDay: 63,
    taxNight: 65.9,
  });

  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result =
      Number(form.allHoursDay) * Number(form.taxDay) +
      Number(form.allHoursNight) * (Number(form.taxNight) * 1.5);

    setData(Number(result.toFixed(2)));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-[650px] flex flex-col gap-y-2 bg-gray-800 rounded-xl p-3'
    >
      <Input
        label='Day:'
        name='allHoursDay'
        onChange={getInputValue}
        value={String(form.allHoursDay)}
      />
      <button>Рассчитать</button>
    </form>
  );
};

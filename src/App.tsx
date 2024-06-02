import { Form, TheHeader } from '@/components';
import { Box } from '@/components/common';
import { useState } from 'react';

function App() {
  const [data, setData] = useState<number>(0);

  return (
    <Box position>
      <TheHeader />
      <main className='px-4 py-4'>
        <Form setData={setData} />
        <p className='text-rose-500'>Сумма: {data}</p>
      </main>
    </Box>
  );
}

export default App;

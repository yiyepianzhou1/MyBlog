import { useState } from 'react';
import { Toast } from '@/utils/index';

Toast.info('彩色')
function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className='page_home'>
    </div>
  )
}

export default Home;

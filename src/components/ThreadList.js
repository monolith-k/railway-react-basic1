// components/ThreadList.js
import React, { useEffect, useState } from 'react';
import { getThreads } from '../api/threads';
import IcOutlineArrowForward from '../icon/IcOutlineArrowForward';

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      const data = await getThreads();
      setThreads(data);
    };

    fetchThreads();
  }, []);

  return (
    <>
    <h2 className='mt-2 pt-4 pb-2 px-4 font-bold text-lg'>新着スレッド 一覧</h2>
    <ul className='p-2'>
      {threads.map((thread) => (
        <li key={thread.id}>
          <a href={`/threads/${thread.id}`} className='block mb-2 p-4 bg-gray-100 rounded-lg transition ease-in-out hover:bg-cyan-50 duration-100'>
          <h3 className='flex items-center justify-between'>{thread.title}<IcOutlineArrowForward /></h3>
          <p>{thread.description}</p>
          </a>
        </li>
      ))}
    </ul>
    </>
  );
};

export default ThreadList;
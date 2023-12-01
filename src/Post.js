// Post.js
import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const thread = {
      title,
      description
    };

    try {
      await axios.post('https://railway.bulletinboard.techtrain.dev/threads', thread);
      window.alert('新しいスレッドを作成しました！');
    } catch (error) {
      window.alert('スレッド名が空です');
    }

    setTitle('');
    setDescription('');

  };

  return (
    <>
    <h2 className='mt-2 pt-4 pb-2 px-4 font-bold text-lg'>スレッド作成</h2>
    <div className='p-3'>
    <form onSubmit={handleSubmit} className='block p-7 bg-gray-100 rounded-lg'>
      <label>
        <textarea type="text" value={title} onChange={e => setTitle(e.target.value)} rows="5" cols="30" placeholder='例:UIがダサいとやる気起きないスレ' className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'></textarea>
      </label>
      <div className='mt-6 text-right'>
      <input type="submit" value="作成" className='bg-cyan-500 hover:bg-cyan-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white' />
      </div>
    </form>
    </div>
    </>
  );
};

export default Post;
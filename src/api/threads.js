// api/threads.js
export const getThreads = async () => {
  const response = await fetch(
    "https://railway.bulletinboard.techtrain.dev/threads"
  );
  const data = await response.json();
  return data;
};

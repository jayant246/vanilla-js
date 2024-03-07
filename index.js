/* here we have 4 buttons 
1. to calculate the sum and simultaneously change the bg, but we are unable to do so if we have a heavy task ongoing
2. so we shift the heavy task to the web worker
3. rest 2 buttons are 2 fetch the data from the API
*/
const worker = new Worker("./worker.js");
const preElem = document.querySelector('#pre');
const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const countSum = () => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log("task finished");
  worker.postMessage("hey there");
  // our main thread will 
  worker.onmessage = (msg) => {
    alert("msg from worker", msg.data);
  };
};

const changeBg = () => {
  if (document.body.style.background === "green") {
    document.body.style.background = "blue";
  } else document.body.style.background = "green";
};

const fetchTodos = () => {
    worker.postMessage({actionType: 'FETCH', payload: TODO_URL});
    worker.onmessage = (msg) => {
        const {data} = msg;
        preElem.textContent = JSON.stringify(data, null, 2);
    }
}

const fetchPosts = () => {
    worker.postMessage({actionType: 'FETCH', payload: POSTS_URL});
    worker.onmessage = (msg) => {
        const {data} = msg;
        preElem.textContent = JSON.stringify(data, null, 2);
    }
}
/* 
1. self here represent the worker object
2. in worker file the worker object is the global object i.e  self
3. we can directly use postMessage or worker.postMessage
4. onMessage is the event listener attach for listening all the postMessages for that worker
5. web worker doesn't have access to the DOM but have access to 
    - setTimeout & setInterval
    - fetch API
    - navigator API
    - have their own thread, execution context and event loop
6.  worker.terminate() -  this will terminate the current worker i.e other tasks won't be completed
  
*/

self.onmessage = (msg) => {
  console.log("msg received", msg.data);
  const { actionType = "default" } = msg?.data;
  switch (actionType) {
    case "FETCH": {
      const url = msg.data.payload;
      fetch(url)
        .then((res) => res.json())
        .then((data) => postMessage(data))
        .catch((err) => postMessage(err));
      break;
    }
    default: {
      let sum = 0;
      console.log("max", Math.min());
      for (let i = 0; i < 10000000000; i++) {
        sum += 1;
      }

      postMessage("sum");
    }
  }
};

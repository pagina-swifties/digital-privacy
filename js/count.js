var firstcount = 5;

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

const counter = async () => {
    for (let i = 0; i < 150000; i++) {
      await sleep(1000)
      firstcount++;
      document.getElementById("counting").innerHTML = firstcount;
    }
  }

counter();

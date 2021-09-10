//Timer Initialization
let counter = 0;
const header = document.querySelector('#counter');
let timer = setInterval(() => header.textContent = counter++, 1000);

//Minus Button Event
const minusButton = document.querySelector("#minus");
minusButton.addEventListener('click', () => header.textContent = counter--)

//Plus Button Event
const plusButton = document.querySelector("#plus");
plusButton.addEventListener('click', () => header.textContent = counter++)

//Heart Button Event
const heartButton = document.querySelector("#heart");
heartButton.addEventListener('click', function (){

    const timeStamp = document.createElement("li");
    timeStamp.dataset.num = counter;
    const oldCounter = document.querySelector(`[data-num='${counter}']`);
    
    if (oldCounter === null){
        timeStamp.innerHTML = `${counter} has been liked <span>1</span> time`;
        document.querySelector(".likes").append(timeStamp);   
    }
    else {
        oldCounter.innerHTML = `${counter} has been liked <span>${Number(oldCounter.querySelector("span").innerText) + 1}</span> times`;
    }
})

// //Pause Button Event
const pauseButton = document.querySelector("#pause");
pauseButton.addEventListener('click', function (){
    if(pauseButton.innerText === "resume"){
        pauseButton.textContent = "pause";
        plusButton.disabled= false;
        minusButton.disabled= false;
        heartButton.disabled= false;
        newCounter = counter;
        timer = setInterval(() => {
            header.innerHTML = newCounter++;
          }, 1000);

    } else{
        pauseButton.textContent = "resume";
        plusButton.disabled= true;
        minusButton.disabled= true;
        heartButton.disabled= true;
        clearInterval(timer);
    }
});

//Submit Button
const submitButton = document.querySelector("#comment-form");
submitButton.addEventListener('submit', submitEntry);

function submitEntry(e){
    e.preventDefault();
    const divHolder = document.createElement("div");
    const commentText = document.createElement("p");

    commentText.innerText = e.target.comment.value;
    divHolder.append(commentText);
    document.querySelector("#comment-form").before(divHolder);
    submitButton.reset();
}
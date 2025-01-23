const poll = {
  question: "what is your favourate programming language?",
  option: ["0:javascript", "1:python", "2:rust", "3:c++"],
  answers: new Array(4).fill(0),
  // get the answer
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.option.join("\n")}\n (write option number)`
      )
    );
    console.log(answer);
    //register answer
    typeof answer == "number" && answer < this.answers.length && this.answers[answer]++;
    console.log(this.answers);
    
    this.displayResult()
    this.displayResult('string')

  },
  displayResult(type ='array'){
    if(type === 'array'){
      console.log(this.answers);
      
    }else if(type === 'string'){
      console.log(`poll result are ${this.answers.join(',')}`);
      
    }
  }
};

poll.registerNewAnswer();

document.querySelector('.btn',addEventListener('click',poll.registerNewAnswer.bind(poll)))
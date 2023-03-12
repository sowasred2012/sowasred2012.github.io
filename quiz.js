const initQuiz = () => {
  const questionEl = document.getElementById("question");
  const answerEl = document.getElementById("answer");
  const prizeEl = document.getElementById("prize");
  const letterKeys = document.querySelectorAll('input[type="button"]');
  const modal = document.querySelector(".modal");
  let questionObject;
  let question;
  let answer;
  let attempt;

  const attachEventListeners = () => {
    letterKeys.forEach((letterKey) => {
      letterKey.addEventListener("click", (e) => {
        const letter = e.target.value;

        if (answer.indexOf(letter) > -1) {
          updateAnswer(letter);
          e.target.classList.add("correct");
        }

        e.target.disabled = true;
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        reset();
      }
    });
  };

  const setQuestion = () => {
    questionObject = {
      question: "What is your name?",
      answer: "oliver",
      prize: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3vJBYp02CRpQ5cP4Q3htVf?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
    };
    question = questionObject.question;
    answer = questionObject.answer.split("");
    attempt = Array(answer.length).fill(null);

    questionEl.innerHTML = `${question}`;
    answerEl.innerHTML = `${"_".repeat(attempt.length)}`;
  };

  const updateAnswer = (letter = null) => {
    let attemptString = "";

    answer.forEach((char, i) => {
      if (char === letter) {
        attempt[i] = letter;
      }
    });

    attempt.forEach((char) => {
      if (char) {
        attemptString += char;
      } else {
        attemptString += "_";
      }
    });

    answerEl.innerHTML = attemptString;

    checkForWin();
  };

  const checkForWin = () => {
    if (attempt.join("") == answer.join("")) {
      prizeEl.innerHTML = questionObject.prize;
      modal.classList.add("active");
    }
  };

  const reset = () => {
    setQuestion();
    letterKeys.forEach((key) => {
      key.classList.remove("correct");
      key.disabled = false;
    });
  };

  attachEventListeners();
  setQuestion();
};

initQuiz();

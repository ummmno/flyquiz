const questions = [["Question one", ["Answer 1", "Answer 2", "Answer 3"], 0], ["Question two", ["Answer 1", "Answer 2", "Answer 3"], 1], ["Question three", ["Answer 1", "Answer 2", "Answer 3"], 2]]

export async function getQuestion(qnum) {
  console.log("Get question")
  return questions[qnum]
}

export async function QuestionsLength() {
    return questions.length;
}

let correct = 0;
let incorrect = 0;

$(document).ready(function () {
  $('#start').click(function () {
    for (let i = 0; i < questions.length; i++) {
      $('#wrapper').append('<p>' + questions[i].question + '</p>');

      $('#wrapper').append(`<form id='options-${i}'>`);
      for (let j = 0; j < questions[i].answers.length; j++) {
        $(`#options-${i}`).append(
          "<p><input type ='radio' name = 'question- " +
            i +
            "'value=" +
            questions[i].answers[j] +
            '>' +
            questions[i].answers[j]
        );
      }
      $('#wrapper').append('</form>');
    }
    $('#sub-wrapper').remove();
  });
  $('#submit').click(function (){
    $('h1').hide()
    for (let i = 0; i < questions.length; i++) {
      const selectedAnswer = $(`#options-${i} input[type=radio]:checked`).val();
      console.log({
        selectedAnswer,
        correctAnswer: questions[i].correctAnswer,
      });
      if (questions[i].correctAnswer === selectedAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    }

    $('#result').append(
      '<h3> You have scored:' + (correct * 100) / 4 + '%</h3>'
    ).animate({
        marginLeft:'350',
        fontSize: '3em',
        color: 'fuchsia';
    })
    

    console.log({ correct, incorrect });
    $('#wrapper').remove();
    $('#submit').remove();
  });
});

let questions = [
  {
    question: 'The following are countries except?',
    answers: ['Lagos', 'China', 'Uganda'],
    correctAnswer: 'Lagos',
  },
  {
    question: 'Which of the following is an animal?',
    answers: ['Bat', 'Ball', 'Shoe'],
    correctAnswer: 'Bat',
  },
  {
    question: 'The capital of Bauchi is what?',
    answers: ['Yobe', 'Benue', 'Bauchi'],
    correctAnswer: 'Bauchi',
  },
  {
    question: 'Brands of cars are except?',
    answers: ['Ford', 'Gokada', 'BMW'],
    correctAnswer: 'Gokada',
  },
];
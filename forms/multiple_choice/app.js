let multipleChoice = (function () {
  const questions = [
    {
      id: 1,
      description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
      options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
    },
    {
      id: 2,
      description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
      options: ['66', '13', '111', '42'],
    },
    {
      id: 3,
      description: 'What is Pan Galactic Gargle Blaster?',
      options: ['A drink', 'A machine', 'A creature', 'None of the above'],
    },
    {
      id: 4,
      description: 'Which star system does Ford Prefect belong to?',
      options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
    },
  ];

  const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

  return class {
    constructor() {
      this.submitLink = $('.submit');
      this.resetLink = $('.reset_form');
      this.generateHtml();
      this.bindEvents();
    }

    generateHtml() {
      let $template = $('#question_template');
      let templateCompiler = Handlebars.compile($template.html());
      let html = ''
      questions.forEach(question => {
        let questionHtml = templateCompiler(question);
        html += questionHtml;
      })
      $('fieldset').append(html);
    }

    bindEvents() {
      this.submitLink.on('click', this.handleSubmit.bind(this));
      this.resetLink.on('click', this.handleReset.bind(this));
    }

    markQuestion(question) {
      let id = $(question).attr('data-id');
      let correctAnswer = answerKey[id];
      let checked = $(question).find('input:checked')[0];
      let $messageP = $(question).find('p.result');

      if (!checked) {
        $messageP.addClass('wrong');
        $messageP.text(`You did not answer the question. Correct answer is ${correctAnswer}`);
      } else if (checked.value === correctAnswer) {
        $messageP.addClass('correct');
        $messageP.text('Correct answer!');
      } else {
        $messageP.addClass('wrong');
        $messageP.text(`Incorrect answer. Correct answer is ${correctAnswer}`);
      }

    }

    enableReset() {
      this.submitLink.addClass('disabled');
      this.resetLink.removeClass('disabled');
    }

    resetUI() {
      let $allMessageP = $('p.result');
      $allMessageP.text('');
      $allMessageP.removeClass('wrong');
      $allMessageP.removeClass('correct');
      let form = document.querySelector('form');
      form.reset();
    }

    enableSubmit() {
      this.submitLink.removeClass('disabled');
      this.resetLink.addClass('disabled');
    }

    handleSubmit(event) {
      event.preventDefault();
      let questionsArr = Array.from($('div.question'));

      questionsArr.forEach(question => {
        this.markQuestion(question);
      });

      this.enableReset();
    }

    handleReset() {
      event.preventDefault();
      this.resetUI();
      this.enableSubmit();
    }
  }


})();


$(function () {

  new multipleChoice();
});

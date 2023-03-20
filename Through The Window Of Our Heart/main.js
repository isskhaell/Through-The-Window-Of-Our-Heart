const button = document.getElementById('btn'),
    content = document.getElementById('text');

//the lines that will show on the cards
button.onclick = function() {
    var text = [
      "What do you think is the hardest part of living?",
      "Who makes you feel loved, even when you don't feel lovable?",
      "Who are you with when you feel your best?",
      "What's the riskiest text you could send right now?",
      "What promise you wanted to fulfill but you failed?",
      "What lesson in love should you have learned by now?",
      "What's the most pain you've ever been in that wasn't physical?",
      "Who in your life can you be your most vulnerable with?",
      "What is the best thing you've done for your mental health recently?",
      "What title would you give this chapter in your life?",
      "What is the last thing you want your mother to know about you?",
      "What's one thing you never told your dad?",
      "What's been your hardest goodbye?",
      "Are you happy?",
      "How did your first heartbreak change you?",
      "Do you have a secret hunch about how you will die?",
      "When was the last time you felt truly understood by somebody? who was it? what did they understand?",
      "What insecurity of yours holds you back the most?",
      "What's been keeping you sane lately?",
      "In what ways are you most like the people who raised you?",
      "How would you describe the feeling of being in love in one word",
      "What are you overthinking right now?",
      "Were you more attracted to their potential or who they really were? explain.",
      "What's the hardest part about dating you?"
    ];
    
    //will throw one of the lines randomly
  
    const randomItem = text[Math.floor(Math.random()*text.length)];

    content.innerHTML = randomItem;
};

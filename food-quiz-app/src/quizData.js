const quizData = [
  {
    "cuisine": "indian",
    "question": "This sweet is made from deep-fried, thick sugar syrup and shaped into a large, pretzel-like shape.",
    "option1": "Gajar Halwa",
    "option2": "Jalebi",
    "option3": "Rasgulla",
    "option4": "Jamun",
    "answer": "Jalebi",
    "image": "images/jalebi.jpg"
  },
  {
    "cuisine": "indian",
    "question": "What is India's National fruit?",
    "option1": "Mango",
    "option2": "Apple",
    "option3": "Banana",
    "option4": "Watermelon",
    "answer": "Mango",
    "image": "images/fruits.jpg"
  },
  {
    "cuisine": "indian",
    "question": "Which of these is a popular dish from the Udupi cuisine?",
    "option1": "Dosa",
    "option2": "Vada",
    "option3": "Poha",
    "option4": "Puri",
    "answer": "Vada",
    "image": "images/vada.jpg"    
  },
  {
    "cuisine": "indian",
    "question" : "Lassi is a drink made from what dairy product?",
"option1" : "Cheese",
"option2" : "Cream Cheese",
"option3" : "Heavy Cream",
"option4" : "Buttermilk",
"answer" : "Buttermilk",
    "image" : "images/lassi.jpg"
  }, 
  {
    "cuisine": "indian",
    "question" : "What is the main ingredient of chapati?",
"option1" : "Rice Flour",
"option2" : "Wheat Flour",
"option3" : "Moong Daal Flour",
"option4" : "Urad Daal Flour",
"answer" : "Wheat Flour",
    "image" : "images/wheat.jpg"
  },
  {
    "cuisine": "mexican",
    "question": "This is a flat Mexican bread, made from flour or corn, used to make many Mexican dishes.",
    "option1": "Tortilla",
    "option2": "Blintz",
    "option3": "Flatbread",
    "option4": "Pancake",
    "answer": "Tortilla",
    "image": "images/tortilla.jpg"
  },
  {
    "cuisine": "mexican",
    "question": "A filling of meat, beans or other ingredients, wrapped in a large, soft flour tortilla.",
    "option1": "Mole",
    "option2": "Quesadilla",
    "option3": "Rolled taco",
    "option4": "Burrito",
    "answer": "Burrito",
    "image": "images/buritto.jpg"
  },
  {
    "cuisine": "mexican",
    "question": "A flour (sometimes corn) tortilla folded in half and filled with melted cheese.",
    "option1": "Taco",
    "option2": "Burrito",
    "option3": "Quesadilla",
    "option4": "Frijoles refritos",
    "answer": "Quesadilla",
    "image": "images/quesadilla.jpg"
  },
  {
    "cuisine": "mexican",
    "question": "A deep-fried pastry stick, rolled in sugar and served hot.",
    "option1": "Mole",
    "option2": "Churro",
    "option3": "Chicharrones",
    "option4": "Galleta",
    "answer": "Churro",
    "image": "images/churro.jpg"
  },
 {
    "cuisine": "mexican",
    "question": "Corn tortilla chips covered with melted cheese.",
    "option1": "Enchiladas",
    "option2": "Nachos",
    "option3": "Chile rellenos",
    "option4": "Tacos",
    "answer": "Nachos",
    "image": "images/nachos.jpg"
  },
  {
    "cuisine": "itallian",
    "question": "Gnocchi is a type of pasta, but with a main added ingredient. What is that main ingredient?",
    "option1": "Tomato",
    "option2": "Spinach",
    "option3": "Potato",
    "option4": "Parmesan",
    "answer": "Potato",
    "image": "images/gnocchi.jpg"
  },
  {
    "cuisine": "itallian",
    "question": "Tiramisu is a delicious layered dessert made with sponge fingers, coffee, mascarpone and booze. Literally translated, what does 'tiramisu' mean?",
    "option1": "Pick me up",
    "option2": "Wake me up",
    "option3": "Shake me up",
    "option4": "Break me up",
    "answer": "Pick me up",
    "image": "images/tiramisu.jpg"
  },
  {
    "cuisine": "itallian",
    "question": "What is the main flavour of tartufo, another Italian dessert?",
    "option1": "Peach",
    "option2": "Lemon",
    "option3": "Chocolate",
    "option4": "Orange",
    "answer": "Chocolate",
    "image": "images/chocolate.jpg"
  },
  {
    "cuisine": "itallian",
    "question": "Which of the following is NOT an ingredient in pesto?",
    "option1": "Parmesan",
    "option2": "Olive oil",
    "option3": "Black olives",
    "option4": "Basil",
    "answer": "Black olives",
    "image": "images/pesto.jpg"
  },
  {
    "cuisine": "itallian",
    "question": "Which of these is NOT a stuffed pasta dish?",
    "option1": "Fusilli",
    "option2": "Tortellini",
    "option3": "Cappelletti",
    "option4": "Fazzoletti",
    "answer": "Fusilli",
    "image": "images/pasta.jpg"
  },
  {
    "cuisine": "british",
    "question": "Which of these dishes is eaten during the summer tennis tournament Wimbledon?",
    "option1": "Leek and potato soup",
    "option2": "Strawberries and cream",
    "option3": "Chocolate ice cream",
    "option4": "Cucumber sandwiches",
    "answer": "Strawberries and cream",
    "image": "images/strawberries.jpg"
  },
  {
    "cuisine": "british",
    "question": "Which British dish is made with apples, sugar and sultanas?",
    "option1": "Pork roast",
    "option2": "Eve's pudding",
    "option3": "Welsh rarebit",
    "option4": "Christmas cake",
    "answer": "Eve's pudding",
    "image": "images/christmas-pudding.jpg"
  },
  {
    "cuisine": "british",
    "question": "Which of these is the name of a Britsh cake?",
    "option1": "Plankin",
    "option2": "Panik",
    "option3": "Parkin",
    "option4": "Pannel",
    "answer": "Parkin",
    "image": "images/parkin.jpg"
  },
  {
    "cuisine": "british",
    "question": "Which British dish could you make with beef, potato, carrot, onion, pastry and gravy?",
    "option1": "Sheperd's pie",
    "option2": "Steak Balmoral",
    "option3": "Toad in the hole",
    "option4": "Cornish Pasty",
    "answer": "Cornish Pasty",
    "image": "images/cornish-pasty.jpg"
  },
 {
    "cuisine": "british",
    "question": "Which of the following is not traditionally a part of a full English breakfast?",
    "option1": "Bacon",
    "option2": "Eggs",
    "option3": "Sausages ",
    "option4": "pancakes",
    "answer": "pancakes",
    "image": "images/pancakes.jpg"
  }
];

export default quizData;
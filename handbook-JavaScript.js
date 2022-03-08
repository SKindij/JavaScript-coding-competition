//Виконати один або інший блок коду, залежно від умови:
if (умова) {
   console.log("виконається, якщо умова істинна (true)");
} else {
   console.log("виконається, якщо умова помилкова (false)");
};


//Виконати блок коду, якщо умова дійсна, або пропустити його:
if (умова) {
   console.log("виконаюся, якщо умова істинна");
};


//Виконати блок коду, у якого умова істинна і знаходиться найвище у списку, інші перевірки проігнорувати:
if (умова1) {
   // ...
} else if (умова2) {
   // ...
} else if (умова3) {
   // ...
} else {
   // виконається, якщо всі умови вищі були помилковими
};


/* х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х */
switch (ім'я_змінної_значення_з_якою_порівнюємо) {
   case значення:
     // код
     break
};

//Приклад вітання користувача в залежності від статусу:
switch (membershipStatus) {
   case "vip":
     // виконається, якщо в змінній membershipStatus зберігається рядок "vip"
     console.log("Вітаємо вас, ваша пишнота!")
     console.log("раді вас бачити!")
     break
   case "diamond":
     console.log("Здрастуйте, діамантовий клієнт!")
     break
   case "gold":
     console.log("Привіт, золотий мій!")
     break
   default:
     // виконається, якщо жоден інший випадок не спрацював
     console.log("Хто ти?")
     break
};

//Серед завдань є особливий підтип – коли потрібно подивитися на значення змінної та виконати різний код залежно від цього значення.
let discount;
if (memberStatus === "vip") {
   discount = 0.25;
} else if (memberStatus === "diamond") {
   discount = 0.2;
} else if (memberStatus === "gold" || memberStatus === "silver") {
   // знижка 10% користувачам статусу золотий та срібний
   discount = 0.1;
} else {
   discount = 0;
};
//Код вище працює, але виглядає надмірно - у ньому дуже багато порівнянь. Можна зробити ось так:
let discount;
switch (memberStatus) {
   case "vip":
     discount = 0.25;
     break
   case "diamond":
     discount = 0.2;
     break
   case "gold":
   case "silver":
     // можна написати кілька кейсів та зв'язати з одним блоком
     discount = 0.1;
     break
   default:
     discount = 0;
     break
};


//Метод tofixed перетворює число в рядок із зазначеною кількістю знаків після коми. Якщо необхідно, число округляється:
const num = 10.468;
console.log(num.toFixed(4));
// '10.4680'
console.log(num.toFixed(3));
// '10.468'
console.log(num.toFixed(2));
// '10.47'
console.log(num.toFixed(0));
// '10'
//Якщо після округлення потрібно робити інші арифметичні операції, то краще розпарсувати число за допомогою parseFloat


//Метод toLocaleString перетворює число на рядок, враховуючи локаль (інформація про мову користувача, а також регіональні налаштування) користувача.
/*Найчастіше використовуються два види:
код_мови. 
Наприклад, 'ru' (російська мова), 'de' (німецька), 'en' (англійська).
код_мови-код_регіону. 
Наприклад, de-AT (австрійська німецька), 'en-US' (американська англійська), es-AR (аргентинська іспанська)*/
const bigNumber = 100000000;
console.log(bigNumber.toLocaleString("ru")); // 100 000 000
console.log(bigNumber.toLocaleString("en-US")); // 100,000,000
console.log(bigNumber.toLocaleString("ar-SA")); // ١٠٠٬٠٠٠٬٠٠٠

/*другим аргументом методу можна передати об'єкт з тонкими налаштуваннями форматування. 
Наприклад, вказати, що число, що форматується, — гроші:*/
const bigNumber = 100000000
console.log(bigNumber.toLocaleString('es', { style: 'currency', currency: 'EUR' }))
// 100.000.000,00 €


//коли потрібно згенерувати випадкове число в заданому діапазоні
Math.floor(Math.random() * (max - min)) + min;


/*об'єкт, що зберігається в const, можна мутувати;
Об'єкти зберігаються за посиланням. Зміна об'єкта не призводить до зміни посилання на нього:*/
const obj = {
  a: 5,
};
obj.a = 10;
console.log(obj);
// { a: 10 };

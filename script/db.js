const questionWord = "What's in the console?";

export const questionnaire = [
    {
        quizTitle:`
    <pre>
        <code>
    console.log(str); 
    let str = 'Hello'
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            'Hello',
            'undefined',
            'ReferenceError: str is not defined',
            "ReferenceError: Cannot access 'str' before initialization",
        ],
        correctAnswer: 3,
    },
    {
        quizTitle:`
    <pre>
        <code>
    'W' === 'w'
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            'true',
            'false',
            'NaN',
            'undefined',
        ],
        correctAnswer: 1,
    },
    {
        quizTitle:`
    <pre>
        <code>
    let num = 1;
    let num = 3;

    console.log(num);
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            'NaN',
            'false',
            'ReferenceError: num is not defined',
            'SyntaxError: Identifier "num" has already been declared',
        ],
        correctAnswer: 3,
    },
    {
        quizTitle:`
    <pre>
        <code>
    const arr = [ ];
    console.log(arr.__proto__.__proto__);
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            'Object',
            'Array',
            'null',
            'undefined',
        ],
        correctAnswer: 0,
    },
    {
        quizTitle:`
    <pre>
        <code>
    class ClassName {
        constructor() { 
    
            }
    }

    console.log(typeof ClassName);
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            'Object',
            'function',
            'constructor',
            'class',
        ],
        correctAnswer: 1,
    },
    {
        quizTitle:`
    <pre>
        <code>
    console.log(myFunction())

    var myFunction = function() {
    return 'Hello';
    }

    var myFunction = function() {
    return 'Hi';
    }

    console.log(myFunction())

    function myFunction() {
    return 'Goodbye'
    }
    console.log(myFunction())
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            'Goodbye, Hello, Hi',
            'Goodbye, Hi, Hi',
            'null',
            'TypeError: myFunction is not a function',
        ],
        correctAnswer: 1,
    },
    {
        quizTitle:`
    <pre>
        <code>
    const animal = {
        eats: true
    }     
    
    const rabbit = {
        eats: false
    }
    
    const bunny = {
        eats: null
    }
    
    rabbit.__proto__ = animal;
    bunny.__proto__ = rabbit;
    console.log(bunny.eats);
    delete bunny.eats;
    console.log(bunny.eats);
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            'null, undefined',
            'true, undefined',
            'false, true',
            'null, false',
        ],
        correctAnswer: 3,
    },
    {

        quizTitle:`
    <pre>
        <code>
    Promise.resolve()
    .then(() => {
            console.log('then 1')
    })
    .then(() => {
        setTimeout(() => {
            console.log('promise in setTimeout')
        })
    })
    
    setTimeout(() => {
            console.log('setTimeout in global')
    }, 0);
    
    console.log('log function');
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            '"log function", "promise in setTimeout", "setTimeout in global", "then 1"',
            '"then 1", "setTimeout in global", log function", "promise in setTimeout"',
            '"log function", "then 1", "setTimeout in global", "promise in setTimeout"',
            '"promise in setTimeout", log function", "then 1", "setTimeout in global",',
        ],
        correctAnswer: 2,
    },
    {
        quizTitle:`
    <pre>
        <code>
    const promise = new Promise((resolve, reject) => {
        resolve('resolve value');
        setTimeout(() => {
            reject('reject value');
        }, 1000)
    })
    
    promise
    .then((resp) => {
        console.log(resp);
    })
    .catch((error) => {
        console.log(error);
    })
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            'reject value',
            'null',
            'resolve value',
            'undefined',
        ],
        correctAnswer: 2,
    },
    {
        quizTitle:`
    <pre>
        <code>
    function MyConstructor(name) {
        this.name = name;
    }
    
    MyConstructor.myMethod = function() {
        console.log('static method')
    }
    
    const obj = new MyConstructor();
    
    obj.myMethod();
        </code>
    </pre>`,
        question: questionWord,
        variants: [
            'obj.myMethod is not a function',
            'static method',
            'null',
            'Error:Uncaught SyntaxError: Invalid or unexpected token',
        ],
        correctAnswer: 0,
    },
];





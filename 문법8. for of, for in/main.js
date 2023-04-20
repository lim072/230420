let colors = ['red', 'green', 'blue'];
colors.map((el)=>{console.log(el)});

for(let el of colors) {console.log(el)};

//map 은 무조건 배열만, for of는 유사배열도 가능합니다

//문자열 반복할수 있습니다

let h1 = document.querySelector("h1");
let txt = h1.innerText;
let tags = '';
h1.innerText = '';
for(let el of txt){tags += `<span>${el}</span>`};
h1.innerHTML = tags;

//여기까지는 배열을 반복하는 내용이었습니다

//객체 배열을 해보겠습니다

let student = {
    name : '땡칠',
    age : 15,
    isMale : true,
    hobby : 'walk'
}
//객체를 탐색할땐 키값으로  탐색

for(let el in student){console.log(student[el])};

// for in반복문은 객체를 반복돌면서 탐색시 key값이 아닌 el즉 각각의 요소를
//의미하는 변수로 탐색하여 반복합니다 [] <-- 주의 
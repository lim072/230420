// let test = function(txt){console.log(txt)}
// //함수 선언형
// function test1(){}
// //함수 표현형
// let test2 = ()=>{}
// //화살표함수

// test("test");
// test`test`; //`` 백틱으로 불러오면 배열로 보여줌
// //에크마6문법에서는 ``(백틱)으로 인해 함수의 호출과 인수값을 ``으로 처리하면
// //함수의 값이 배열로 반환됩니다 => 이것을 이용해서 DOM요소를 만들때
// //동시에 스타일도 입히는 styled component가 가능합니다

// let main = document.querySelector("main");

// //태그이름을 인수로 받아서 해당 태그를 생성하는 함수를 제작하겠습니다

// let makeDom = (tag)=>{
//     let dom = document.createElement(tag);
//     dom.innerText = 'Hello';
//     //return dom;
//     //함수 리턴값은 문자나 숫자등의 값을 리턴했습니다만, 
//     //함수값으로 함수를 리턴할 수 있습니다
//     return (css)=>{
//         dom.style[css.prop] = css.value;
//         return dom;
//     }
// }
// console.log(makeDom('h1'));

/*
makeDom(tag)() 이뜻은 그 반환된 함수를 호출하겠다는 의미입니다
두번째()안에 인수를 넣으면 반환된 함수에 인수를 대입해서 최종 호출하겠다는 의미가 됩니다

()소괄호는 안에 매개변수자리에 인수를 넣는 공간입니다
리턴하는 함수 안에 인수를 넣으려면 ()소괄호를  한번 더 옆에 써주면 됩니다

component는 하나의 기능을 하는 단위 정도로 정의할 수 있습니다
즉 styled component는 tag이름을 받아서 해당 태그를 만드는데 스타일도 동시에
입힐 수 있는 함수안에 함수를 적용한 방법입니다
*/

// main.append(makeDom('h1')({prop : 'color', value : 'blue'}));

//위 예제는 객체의 형태로 인수를 넣어서 호출하다보니 속성, 값의 형태인 하나만 호출할 수 있으며
//만약 h1의 폰트사이즈, 폰트패밀리, 라인하이트, 컬러등등 한번에 적용시켜 호출한다면
//위 코드는 한계가 존재합니다

let main = document.querySelector("main");

let styled = (tag)=>{
    let dom = document.createElement(tag);

    return(css) => {
        dom.style = css[0];
        return dom;
    }
}

let box = styled("div")`
    width : 200px;
    height : 200px;
    border-radius : 50%;
    background-color : orange;
    margin : 0 auto;
    margin-top : 100px;


`;

let box2 = styled("div")` 
    width : 100px;
    height : 100px;
    border-radius : 50%;
    background-color : black;
    margin : 0 auto;
`;

main.append(box);
box.append(box2);
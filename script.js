const btn = document.getElementsByClassName('btn');
const display = document.getElementById('display');
const result = document.getElementsByClassName('equal');
const del = document.getElementById('delete');
const reset = document.getElementsByClassName('reset-btn');



let value_list = [];

function btnFunction(e) {
    let value  = e.target.value;
    display.innerHTML = value;
    value_list.push(value);
    display.innerHTML = value_list.join("");
    if (value_list.includes("+")) {
        let before_number = '';
        let after_number = '';
        index_of_Plus = value_list.indexOf("+");
        let before_array = value_list.slice(0,index_of_Plus);
        for (let i=0; i < before_array.length; i++){
            before_number += before_array[i]; 
        };
        let after_array = value_list.slice(index_of_Plus+1);
        for (let j=0; j < after_array.length; j++){
            after_number += after_array[j]; 
        };
        let total_sum = parseInt(before_number) + parseInt(after_number);
        console.log(total_sum);
        result[0].addEventListener("click", showResult)
        function showResult() {
            display.innerHTML = total_sum;
        }
    } else if (value_list.includes("-")) {
        let before_number = '';
        let after_number = '';
        index_of_Plus = value_list.indexOf("-");
        let before_array = value_list.slice(0,index_of_Plus);
        for (let i=0; i < before_array.length; i++){
            before_number += before_array[i]; 
        };
        let after_array = value_list.slice(index_of_Plus+1);
        for (let j=0; j < after_array.length; j++){
            after_number += after_array[j]; 
        };
        let total_sub = parseInt(before_number) - parseInt(after_number);
        result[0].addEventListener("click", showResult)
        function showResult() {
            display.innerHTML = total_sub;
        }
    } else if (value_list.includes("/")) {
        let before_number = '';
        let after_number = '';
        index_of_Plus = value_list.indexOf("/");
        let before_array = value_list.slice(0,index_of_Plus);
        for (let i=0; i < before_array.length; i++){
            before_number += before_array[i]; 
        };
        let after_array = value_list.slice(index_of_Plus+1);
        for (let j=0; j < after_array.length; j++){
            after_number += after_array[j]; 
        };
        let total_dev = parseInt(before_number) / parseInt(after_number);
        result[0].addEventListener("click", showResult)
        function showResult() {
            display.innerHTML = total_dev.toFixed(1);
        }
    } else if (value_list.includes("x")) {
        let before_number = '';
        let after_number = '';
        index_of_Plus = value_list.indexOf("x");
        let before_array = value_list.slice(0,index_of_Plus);
        for (let i=0; i < before_array.length; i++){
            before_number += before_array[i]; 
        };
        let after_array = value_list.slice(index_of_Plus+1);
        for (let j=0; j < after_array.length; j++){
            after_number += after_array[j]; 
        };
        let total_mull = parseFloat(before_number) * parseFloat(after_number);
        result[0].addEventListener("click", showResult)
        function showResult() {
            display.innerHTML = total_mull;
        }
    }
}


btn[0].addEventListener("click",btnFunction);

for (const box of btn) {
    box.addEventListener('click', btnFunction);
}

del.addEventListener("click", dele)
function dele(){
    console.log(value_list)
    del_value = value_list.pop();
    display.innerHTML = value_list.join("");
}

reset[0].addEventListener("click", rem)
function rem() {
    value_list = [];
    display.innerHTML = '';
}




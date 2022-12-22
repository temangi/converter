let $grids = document.querySelectorAll('.grid-item');
let $input = document.querySelector('.input')
let $switch = document.querySelector('.switcher')
let $selectFrom = document.querySelectorAll('#selectFrom')
let $response = document.querySelector('.response')
let str = ''
$grids.forEach((item)=>{
    item.addEventListener('click', function(){
        if (item.textContent == 'DEL' ){
            if (str.length <= 1){
                str = ''
                $input.textContent = 1
            }else{
                let newStr = $input.textContent.slice(0,$input.textContent.length-1)
                str = newStr
                $input.innerHTML = str
            }
        }
        else if (item.textContent == 'C'){
            str = ''
            $input.textContent = '1'
        }else if (item.textContent == 'OK'){
            let num = Number($input.textContent)
            if(selectFrom.value == 'USD' && selectTo.value == 'SOM'){
                num*=85.73
                $response.textContent = num
            }
            if(selectFrom.value == 'EUR' && selectTo.value == 'SOM'){
                num*=92.20
                $response.textContent = num
            }
            if(selectFrom.value == 'RUB' && selectTo.value == 'SOM'){
                num*=1.200
                $response.textContent = num
            }if(selectFrom.value == 'KZT' && selectTo.value == 'SOM'){
                num*=0.1278
                $response.textContent = num
            }if(selectFrom.value == 'CHY' && selectTo.value == 'SOM'){
                num*=10.50
                $response.textContent = num
            }if(selectFrom.value == 'GBP' && selectTo.value == 'SOM'){
                num*=102
                $response.textContent = num
            }
            if(selectFrom.value == 'SOM' && selectTo.value == 'USD'){
                num*=0.012  
                $response.textContent = num
            }
            if(selectFrom.value == 'EUR' && selectTo.value == 'USD'){
                num*=0.94
                $response.textContent = num
            }
            if(selectFrom.value == 'RUB' && selectTo.value == 'USD'){
                num*=72.26
                $response.textContent = num
            }if(selectFrom.value == 'KZT' && selectTo.value == 'USD'){
                num*=468.09
                $response.textContent = num
            }if(selectFrom.value == 'CHY' && selectTo.value == 'USD'){
                num*=6.98
                $response.textContent = num
            }if(selectFrom.value == 'GBP' && selectTo.value == 'USD'){
                num*=0.98
                $response.textContent = num
            }
            if(selectFrom.value == 'USD' && selectTo.value == 'RUB'){
                num*=72.26
                $response.textContent = num
            }
            if(selectFrom.value == 'EUR' && selectTo.value == 'RUB'){
                num*=0.013
                $response.textContent = num
            }
            if(selectFrom.value == 'SOM' && selectTo.value == 'RUB'){
                num*=1.19
                $response.textContent = num
            }if(selectFrom.value == 'KZT' && selectTo.value == 'RUB'){
                num*=6.48
                $response.textContent = num
            }if(selectFrom.value == 'CHY' && selectTo.value == 'RUB'){
                num*=0.097
                $response.textContent = num
            }if(selectFrom.value == 'GBP' && selectTo.value == 'RUB'){
                num*=0.011
                $response.textContent = num
            }
            if(selectFrom.value == 'USD' && selectTo.value == 'KZT'){
                num*=468.09
                $response.textContent = num
            }
            if(selectFrom.value == 'EUR' && selectTo.value == 'KZT'){
                num*=0.0020
                $response.textContent = num
            }
            if(selectFrom.value == 'RUB' && selectTo.value == 'KZT'){
                num*=6.48
                $response.textContent = num
            }if(selectFrom.value == 'SOM' && selectTo.value == 'KZT'){
                num*=0.18
                $response.textContent = num
            }if(selectFrom.value == 'CHY' && selectTo.value == 'KZT'){
                num*=0.015
                $response.textContent = num
            }if(selectFrom.value == 'GBP' && selectTo.value == 'KZT'){
                num*=0.0018
                $response.textContent = num
            }
            if(selectFrom.value == 'USD' && selectTo.value == 'EUR'){
                num*=0.94
                $response.textContent = num
            }
            if(selectFrom.value == 'SOM' && selectTo.value == 'EUR'){
                num*=92.20
                $response.textContent = num
            }
            if(selectFrom.value == 'RUB' && selectTo.value == 'EUR'){
                num*=0.013
                $response.textContent = num
            }if(selectFrom.value == 'KZT' && selectTo.value == 'EUR'){
                num*=0.0020
                $response.textContent = num
            }if(selectFrom.value == 'CHY' && selectTo.value == 'EUR'){
                num*=7.42
                $response.textContent = num
            }if(selectFrom.value == 'GBP' && selectTo.value == 'EUR'){
                num*=0.88
                $response.textContent = num
            }
            if(selectFrom.value == 'USD' && selectTo.value == 'CHY'){
                num*=6.98
                $response.textContent = num
            }
            if(selectFrom.value == 'EUR' && selectTo.value == 'CHY'){
                num*=0.14
                $response.textContent = num
            }
            if(selectFrom.value == 'RUB' && selectTo.value == 'CHY'){
                num*=10.28
                $response.textContent = num
            }if(selectFrom.value == 'KZT' && selectTo.value == 'CHY'){
                num*=67.07
                $response.textContent = num
            }if(selectFrom.value == 'SOM' && selectTo.value == 'CHY'){
                num*=12.28
                $response.textContent = num
            }if(selectFrom.value == 'GBP' && selectTo.value == 'CHY'){
                num*=0.12
                $response.textContent = num
            }
            if(selectFrom.value == 'USD' && selectTo.value == 'GBP'){
                num*=1.21
                $response.textContent = num
            }
            if(selectFrom.value == 'EUR' && selectTo.value == 'GBP'){
                num*=1.14
                $response.textContent = num
            }
            if(selectFrom.value == 'RUB' && selectTo.value == 'GBP'){
                num*=87.52
                $response.textContent = num
            }if(selectFrom.value == 'KZT' && selectTo.value == 'GBP'){
                num*=566.91
                $response.textContent = num
            }if(selectFrom.value == 'CHY' && selectTo.value == 'GBP'){
                num*=8.45
                $response.textContent = num
            }if(selectFrom.value == 'SOM' && selectTo.value == 'GBP'){
                num*=103.76
                $response.textContent = num
            }
        }
        else{
            str+=item.textContent
            $input.innerHTML = str
        }

    })
})

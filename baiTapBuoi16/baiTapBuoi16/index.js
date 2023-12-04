//--------Bài 1: Tìm số nguyên dương nhỏ nhất sao cho 1+2+3+...+n > 10000--------
function tinhTong() {
    var S = 0;
    var dem = 1; 
    while (S <= 10000) {
        S += dem;
        dem++;
    }
    // Hiển thị kết quả trong thẻ span có id="output"
    document.getElementById('output').innerHTML = dem - 1;
}


//--------Bài 2: Viết chương trình nhập vào 2 số x và n sau đó tính tổng S(n)=x+x^2+x^3+...+x^n--------
function tinhTongLuyThua() {
    var x = parseFloat(document.getElementById('giaTriX').value);
    var n = parseInt(document.getElementById('giaTriN').value);
    var S = 0;
    for (var i = 1; i <= n; i++) {
        S += Math.pow(x, i);
    }

    // Hiển thị kết quả trong thẻ div có id="output2"
    document.getElementById('output2').innerHTML = 'Kết quả: ' + S;
}


//--------Bài 3: Tính giai thừa--------
function tinhGiaiThua() {
    var n = parseFloat(document.getElementById('giaTriGiaiThua').value);
    var i = 1;
    var tich = 1;
    while (i <= n) {
        tich *= i;
        i++;
    }
    document.getElementById('output3').innerHTML = 'Kết quả: ' + tich;
}


//--------Bài 4: Viết chương trình in ra 10 thẻ div. Thẻ ở vị trí chẵn thì background màu đỏ, ngược lại màu xanh--------
function in10TheDiv() {
    var output = '';
    for (var dem = 1; dem <= 10; dem++) {
        var div = '<div class="alert mt-2';

        if (dem % 2 === 0) {
            div += ' bg-danger';
        } else {
            div += ' bg-primary';
        }

        div += '">hello</div>';
        output += div;
    }
    document.getElementById('output4').innerHTML = output;
}


//--------Bài 5: Tìm số nguyên tố--------
function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function timVaInSoNguyenTo() {
    var inputNumber = parseInt(document.getElementById('soNguyenTo').value);
    if (isNaN(inputNumber)) {
        document.getElementById('output5').innerText = 'Vui lòng nhập một số nguyên.';
        return;
    }

    var primeNumbers = [];
    for (var i = 1; i <= inputNumber; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }

    document.getElementById('output5').innerText = 'Các số nguyên tố từ 1 đến ' + inputNumber + ': ' + primeNumbers.join(', ');
}
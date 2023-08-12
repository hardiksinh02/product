window.onload = () =>{
    document.querySelector('#calculate').onclick = calculatetip;
}

function calculatetip() {
    let amount = document.querySelector('#amount').value;
    let services = document.querySelector('#services').value;
    let persons = document.querySelector('#persons').value;

    if(amount === ''){
        alert("Please Enter a Amount")
        return;
    }else if(amount === '0'){
        alert("Please Enter Amount - Above 0")
        return;
    }else if(services === 'Select'){
        alert("Please Select A Service")
        return;
    }else if(persons === ''){
        alert("Please Enter a Person")
        return;
    }if(persons === '0'){
        alert("Please Enter a Persons - Above 0")
        return;
    }

    if(persons === '1'){
        document.querySelector('#each').style.display = 'none';
    }else{
        document.querySelector('#each').style.display = 'block';
    }

    document.querySelector('.tip').style.display = 'block';
    let sum = (amount * services) / persons;
    sum = sum.toFixed(2)

    document.querySelector('#total').innerHTML = "$ " + sum;
}
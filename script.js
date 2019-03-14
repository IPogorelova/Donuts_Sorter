function loadDonuts() {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'donuts.json', true);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        loadDonutsButton.innerHTML = "Donuts are here";
        loadDonutsButton.disabled = true;

        if (xhr.status !== 200) {
            // обработать ошибку
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            try {
                var donuts = JSON.parse(xhr.responseText);
            } catch (e) {
                alert( "Некорректный ответ " + e.message );
            }
            showDonuts(donuts);
        }

    };

    button.innerHTML = 'Getting...';
    button.disabled = true;
}

function showDonuts(donuts) {

    /*var sprinkles = document.querySelectorAll('.sprinkles:checked');
    console.log(sprinkles);*/

    var inputElements = document.querySelectorAll('.sprinkles:checked');
    var sprinklesFilter = [];
    for(var i=0; inputElements[i]; ++i){
            checkedValue = inputElements[i].value;
            sprinklesFilter.push(checkedValue);
    }


    donuts.forEach(function(donut) {
        var donutsList = document.getElementById("donutsBox");
        var item = donutsList.appendChild(document.createElement('div'));
        item.classList.add('item');
        item.innerHTML = "<img src=" + donut.imgUrl + ">" +
            "<p class='taste'><b>Taste: </b>" + donut.taste + "</p>" +
            "<p class='filling'><b>Filling: </b>" + donut.filling + "</p>" +
            "<p class='additions'><b>Additions: </b>" + donut.additions + "</p>";
    });
}



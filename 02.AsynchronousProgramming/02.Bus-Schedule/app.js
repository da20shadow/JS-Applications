function solve() {

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const info = document.querySelector('.info');

    const url = 'http://localhost:3030/jsonstore/bus/schedule/';

    let stopId = 'depot';
    let stopName = '';

    function depart() {
        console.log('Depart TODO...');
        fetch(url + stopId)
            .then(response => {
                return response.json();
            }).then(result => {
                info.textContent = 'Next stop ' + result.name;
                stopName = result.name;
                stopId = result.next;
        }).catch(err => {
            info.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        })

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        console.log('Arrive TODO...');
        info.textContent = 'Arriving at ' + stopName;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
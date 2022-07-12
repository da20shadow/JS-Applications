async function getInfo() {

    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    console.log('clicked!')
    const url = ' http://localhost:3030/jsonstore/bus/businfo/' + stopId;

    buses.innerHTML = '';
    // buses.replaceChildren();

    try {
        stopName.textContent = 'Loading...';
        const response = await fetch(url);
        const bussesInfo = await response.json();
        stopName.textContent = bussesInfo.name;

        let theBuses = Object.entries(bussesInfo.buses);
        theBuses.forEach(bus => {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`
            buses.appendChild(li);
        })

    } catch (err) {
        stopName.textContent = 'Error';
    }

}
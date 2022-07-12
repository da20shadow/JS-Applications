function getInfo() {

    const stopId = document.getElementById('stopId').value;
    const submit = document.getElementById('submit');
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    submit.addEventListener('click', () => {
        console.log('clicked!')
        const url = ' http://localhost:3030/jsonstore/bus/businfo/';
        fetch(`${url}${stopId}`)
            .then(res => {
                return res.json();
            })
            .then(result => {
                stopName.innerText = result.name;

                let theBuses = Object.entries(result.buses);
                theBuses.forEach(bus => {
                    let li = document.createElement('li');
                    li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`
                    buses.appendChild(li);
                })

                console.log(result)
            })
            .catch(err => {
                stopName.textContent = 'Error'
        })
    })

}
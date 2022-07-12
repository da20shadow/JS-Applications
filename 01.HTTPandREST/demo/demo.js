let url = 'http://localhost:3030/jsonstore/blog';

function getMovies (){
    fetch(url)
        .then(res => {
            console.log(res)
            return res;
        })
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(err => {
            console.log(err)
        })
}
getMovies();
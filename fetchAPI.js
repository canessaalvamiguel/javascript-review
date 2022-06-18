const url = "https://jsonplaceholder.typicode.com/users";

//GET
fetch(url)
    .then((response) => response.json())
    .then(data => console.log(data))

//POST
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer acadebiseexistiunaiosjiastokenautorization'
    },
    body: JSON.stringify({
        name: "Happy Pig",
        website: 'google.com'
    })
})
.then((response) => response.json())
.then(data => console.log(data))

//POST ASYNC
const fn = async () => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer acadebiseexistiunaiosjiastokenautorization'
        },
        body: JSON.stringify({
            name: "Happy Pig",
            website: 'google.com'
        })
    })
    const data = await response.json()
    console.log(data)
}
fn()
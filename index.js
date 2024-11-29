document.getElementById('loginForm').addEventListener('submit', async event => {
    event.preventDefault()

    const id = document.getElementById('id').value
    const pw = document.getElementById('pw').value

    const res = await fetch('http://localhost:3000', {
        method: 'post',
        body: { id, pw },
    })

    const data = res.json()
    console.log('data', data)
})

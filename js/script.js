document.addEventListener('DOMContentLoaded',async ()=>{
    let response_repo =  await fetch('https://api.github.com/users/samTime101/repos?per_page=100&sort=updated')
    let data_repo = await response_repo.json()
    data_repo.forEach(item => {
        document.querySelector('#repo').innerText += `\n${item['name']}`
    });
    let response_latest = await fetch('https://api.github.com/users/samTime101/repos?per_page=100&sort=updated')
    let data_latest = await response_latest.json()
    let response_latestdata = await fetch(`https://api.github.com/repos/samTime101/${data_latest['0']['name']}/commits`)
    let data_latestdata =  await response_latestdata.json()
    document.querySelector('#latest').innerText = `${data_latest['0']['name']} ${data_latestdata['0']['commit']['message']} ${data_latestdata['0']['commit']['committer']['date']}`
})

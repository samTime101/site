document.addEventListener('DOMContentLoaded', async () => {
    let response_repo = await fetch('https://samip.pythonanywhere.com/space/samip/');
    let data_repo = await response_repo.json();
    let files = data_repo['folder'];
    let i = 0;

    setInterval(async () => {
        let contents = await fetch('https://samip.pythonanywhere.com/space/samip/' + files[i]);
        let data = await contents.json();
        if ('file' in data){
        document.querySelector('#one').innerHTML = `<pre>${data['file']}</pre>`;
        i = (i + 1) % files.length;
    }else{
        i++
        }
    }, 1000);
});


var click_count = 0
document.querySelector('#blog1').addEventListener('click',async ()=>{
    if(click_count % 2 ==0){
    var res = await fetch('../pages/content/blogs/blog1.html')
    var content = await res.text()
    document.querySelector('#blog_content').innerHTML = content
    click_count ++
    }
    else{
        document.querySelector('#blog_content').innerHTML = ''
        click_count ++
    }
})

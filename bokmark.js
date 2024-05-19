let form = document.querySelector('form');
let li = document.querySelector('.list');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let webName = event.target.title.value;
    let url = event.target.url.value;

    console.log(webName, url);
    // "https://crudcrud.com/api/40aef88290774cb3887e35606be5b7f3"

    axios.post("https://crudcrud.com/api/40aef88290774cb3887e35606be5b7f3/bookmarks",
        {
            "WebsiteTitle":webName,
            "WebsiteUrl":url
        }
    )
    .then(response => console.log(response.data))
    .catch(err => console.log(err));


})
window.addEventListener("DOMContentLoaded",  ()=>{
    axios.get("https://crudcrud.com/api/40aef88290774cb3887e35606be5b7f3/bookmarks")
    .then(response => {
        let finallist ='';
        console.log('finallist');

        response.data.forEach((element,index) => {
            // console.log(element);
            finallist += `<div><span>${element.WebsiteTitle} ></span><span> ${element.WebsiteUrl}</span>
            <button onclick = "ok()">delete</button><button>edit</button></div>`
        })
        
            li.innerHTML = finallist;
        
    })
    .catch(err => console.log(err))
})
function ok(i){
    console.log('jai shree ram');
    console.log(i);

}
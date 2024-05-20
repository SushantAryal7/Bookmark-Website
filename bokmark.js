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
    .then(response => getData())
    .catch(err => console.log(err));

    
})
function getData(){
    axios.get("https://crudcrud.com/api/40aef88290774cb3887e35606be5b7f3/bookmarks")
    .then(response => {
        let finallist ='';
        console.log('finallist');

        response.data.forEach((element) => {
            // console.log(element);
            
            finallist += `<div><span>${element.WebsiteTitle} ></span><span> ${element.WebsiteUrl}</span>
            <button onclick = removeFunction('${element._id}')>delete</button><button onclick = editFunction('${element.WebsiteTitle}','${element.WebsiteUrl}','${element._id}')>edit</button></div>`
        })
        
            li.innerHTML = finallist;
        
    })
    .catch(err => console.log(err))
}
function removeFunction(idd){
    axios.delete(`https://crudcrud.com/api/40aef88290774cb3887e35606be5b7f3/bookmarks/${idd}`)
    .then(response =>{
        getData()
    })
    .catch(err => console.log(err))

    getData()
}

function editFunction(title, url, idd){
    document.querySelector('#title').value = title;
    document.querySelector('#url').value = url;

    removeFunction(idd);
}

getData();
const apiKey = "key";

const blogContainer = document.getElementById("id");

const searchButton = document.getElementById("id");
const searchValue = document.getElementById("id");

// fetching random news

async function fetchRandomNews(){
    try{
        const apiUrl = "url";
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    }
    catch(error){
        console.log("Error Fetching Random News IN Function declaration", error);
        return [];
    }
}


searchButton.addEventListener("click", async ()=>{
    const query = searchValue.value;
    if(query !== ""){
        try{
            const articles =  await fetchQueryNews(query);
            displayBlogs(articles);
        }
        catch(error){
            console.log("Error", error);
        }
    }
})

async function fetchQueryNews(query){
    try{
        const apiurl = "url";
        const response = await fetch(apiurl);
        const data = await response.json();
        return data.articles;
    }
    catch(error){
        console.log("Error", error);
    }
}





function displayBlogs(){

}





(async()=>{
    try{
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    }
    catch(error){
        console.log("Error Fetching Random News", error);
        return [];
    }
})();

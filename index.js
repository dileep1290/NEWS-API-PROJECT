const apiKey = "15f87daaf0b04cf795981954eb228bb1";
const blogContainer = document.getElementById("blog-container");

const searchField = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");



async function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2024-09-01&to=2024-09-01&sortBy=popularity&pageSize=20&apikey=${apiKey}`;
        const response =  await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
        
    }
    catch(error){
        console.error("Error Fetching Random News", error);
        return [];
    }
}

searchButton.addEventListener("click", async ()=>{
    const query = searchField.value;
    if(query !== ""){
        try{
            const articles = await fetchNewsQuery(query);
            displayBlogs(articles);
        }
        catch(error){
            console.log("Error Fetching News By Query", error);
        }
    }
})

async function fetchNewsQuery(query){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=20&apikey=${apiKey}`;
        const response =  await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
        
    }
    catch(error){
        console.error("Error Fetching Random News", error);
        return [];
    }
}





function displayBlogs(articles){
    blogContainer.innerHTML = "";
    articles.forEach((article)=>{
        let blogCard = document.createElement("div")
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src= article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        const truncatetitle = article.title.length > 30? article.title.slice(0, 30) + "....": article.title;
        title.innerHTML = truncatetitle;
        const  description = document.createElement("p");
        const truncateDescription = article.description.length > 120? article.description.slice(0, 120) + "....." : article.description;
        description.innerHTML = truncateDescription;
        blogCard.append(img, title, description);

        blogCard.addEventListener("click", ()=>{
            // window.open(article.url,);
            window.location.href = (article.url);
        })

        blogContainer.append(blogCard);

    })
}






(async ()=>{
    try{
        const articles =   await fetchRandomNews();
        displayBlogs(articles);
    }
    catch(error){
        console.error("Error Fetching Random News", error);
    }
})();

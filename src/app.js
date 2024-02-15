class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title,detail){
    this.title = title,
    this.detail = detail
  }

  addTitle(){
    const title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    title_card.innerHTML += this.title;
    document.getElementById('card-text').appendChild(title_card);
  }

  addDescription(){
    const description_card = document.createElement('p');
    description_card.setAttribute("id","blog-description");
    description_card.innerHTML += this.detail;
    document.getElementById('card-text').appendChild(description_card);
  }
  
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`

let popupOn = false;

function helperAddPost(){
  if(popupOn == false){
    document.getElementById('popupContact').style.display = "initial";
    popupOn = true;
  }
  else{
    document.getElementById('popupContact').style.display = "none";
    popupOn = false;
  }
}

// 2. `helperPost()`

function helperPost(){
  let title = document.getElementById('title').value;
  let detail = document.getElementById('detail').value;
  if(title && detail){
    let post = new Blog(title,detail);
    post.addTitle();
    post.addDescription();
  }
}
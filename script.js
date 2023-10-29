function myFunction(branch) {
  if (branch == "0") {
    stuff=document.getElementById("a")
    document.body.style.background="#0f0 url('ricroll.png')"
    
    stuff.innerHTML = `<button onclick="myFunction('1')" class="cb">Click me</button>`
  } else if (branch == "1") {
    stuff=document.getElementById("a")
    document.body.style.background="#0ff url()"
  }  
}


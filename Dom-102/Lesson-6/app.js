let btnWindow = document.getElementById("openNew");

btnWindow.onclick = () => {
  let newWin = window.open("about:blank", "hello", "width=200,height=200");
  newWin.document.write("Hello World");

  //   window.location.reload();
};

document.querySelector(".container").addEventListener("scroll", (a) => {
  console.log(a.target.scrollTop);

  // offsetHeight
});

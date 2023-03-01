document.addEventListener("DOMContentLoaded", function() {
  const bntopenmenu = document.getElementById("menumobileimg")
  const btnclosemenu = document.getElementById("closebtn")

  const submenu = document.getElementById("submenu")

  bntopenmenu.addEventListener("click", onClickOpen)

  btnclosemenu.addEventListener("click", onClickClose);

  document.addEventListener("click", function(event) {
    if (!submenu.contains(event.target) && !bntopenmenu.contains(event.target)) {
      onClickClose();
    }
  });

  function onClickOpen(){
    submenu.classList.remove("inactive")
  }

  function onClickClose(){
    submenu.classList.add("inactive")
  }
});
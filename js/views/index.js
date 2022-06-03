$(document).ready(function() {
  let btnTry = $("#btnTry");
  btnTry.on("click", () => {
    window.location = `${window.location.origin}/upload.html`;
  });
})
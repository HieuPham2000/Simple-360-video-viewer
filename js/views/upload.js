$(document).ready(function() {
  const logoText = $(".logo-text");
  logoText.on("click", () => {
    window.location = `${window.location.origin}/index.html`;
  });

  const btnUpload = $("#btnUpload");
  btnUpload.on("click", () => {
    window.location = `${window.location.origin}/upload-preview.html`;
  });
  
  // const inputTag = document.querySelector("#input-tag");
  
  // inputTag.addEventListener('change', readVideo)
  // const container = document.querySelector('#container');
  
  function readVideo(event) {
    console.log(event.target.files)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        console.log('loaded')
        let panorama = new PANOLENS.VideoPanorama(e.target.result);
        let viewer = new PANOLENS.Viewer({ container: container });
        viewer.add(panorama);
      }.bind(this)
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
})

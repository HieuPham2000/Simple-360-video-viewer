$(document).ready(function() {
  const inputUpload = $("#inputUpload");
  inputUpload.on('change', readVideo)


  let controlUpload = $(".upload-control-wrapper");
  controlUpload.on('click', () => {
    $(inputUpload).trigger('click');
  })
  
  const container = document.querySelector('#previewContainer');
  function readVideo(event) {
    container.innerHTML = '';
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

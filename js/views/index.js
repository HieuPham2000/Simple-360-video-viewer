$(document).ready(function() {
  let btnTry = $("#btnTry");
  btnTry.on("click", () => {
    window.location = `${window.location.origin}/upload.html`;
  });

  const container = document.querySelector('#container');
  const panorama = new PANOLENS.ImagePanorama('./assets/unsplash1.jpg');
  let viewer = new PANOLENS.Viewer({ container: container, autoRotate: true, autoRotateSpeed: 0.2, autoRotateActivationDuration: 3000 });
  // viewer.addUpdateCallback(function () {

  // });
  viewer.add(panorama);
})
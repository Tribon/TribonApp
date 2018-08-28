const {Button, CheckBox, WebView, ImageView, TextView, ui} = require('tabris');

let button = new Button({
  centerX: 0, top: 100,
  text: 'Show message'
}).appendTo(ui.contentView);

let textView = new TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(ui.contentView);

button.on('select', () => {
  textView.text = 'TribonApp rocks!';
});


//createImageView('fit');
//createImageView('none');
createImageView('fill');



 var button1 = new Button({
    layoutData: {left: 10, top: 10, right: 10},
    id:"picturebtn",
    text: "Take a picture"
  }).appendTo(ui.contentView).on("select", function() {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      targetWidth: 1024,
      targetHeight: 1024,
      destinationType: window.Camera.DestinationType.DATA_URL
    });
    function onSuccess(imageData) {
      //$.post( "http://192.168.0.100/apiserver/upload.php", {data: imageData}, function(data) {
      //  imageView.set("image", {src: data});
  }
 function onFail(imageData) {
      //$.post( "http://192.168.0.100/apiserver/upload.php", {data: imageData}, function(data) {
      //  imageView.set("image", {src: data});
  }
  });



new CheckBox({
  left: 10, top: 10,
  checked: true,
  text: 'checked'
}).on('checkedChanged', event => event.target.text = event.value ? 'checked' : 'unchecked')
  .appendTo(ui.contentView);


function createImageView(scaleMode) {
	 new TextView({
  centerX: 0, top: 'prev() 1', 
  font: '24px',
  text: scaleMode
}).appendTo(ui.contentView);
  new ImageView({
    left: 0, top: 'prev() 1', width: 360, height: 100,
    image: 'https://as1.ftcdn.net/jpg/01/16/04/94/500_F_116049466_Kx2RbPTo2DTHEkPxoBi3bW1YXs32dJCo.jpg',
    background: '#aaaaaa',
    scaleMode: scaleMode
  }).on('tap', () => {
  textView.text = 'TribonApp rocks! && ' + scaleMode + navigator.connection.type;
}).appendTo(ui.contentView);
}
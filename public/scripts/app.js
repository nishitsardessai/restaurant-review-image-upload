var imgPreview= document.getElementById("img-preview");
var fileUpload= document.getElementById("file-upload");

var curl= "	https://api.cloudinary.com/v1_1/nishit/upload";
var cpreset= "kkzbmykl";

fileUpload.addEventListener('change', function(event){
	console.log(event);
	var file= event.target.files[0];
	var formData=new FormData;
	formData.append('file', file);
	formData.append('upload_preset', cpreset);

	axios({
		url: curl,
		method: 'POST',
		headers:{
			'Content-Type': 'application/xwww-form-urlencoded'
		},
		data: formData
	}).then(function(res){
		console.log(res);
		imgPreview= res.data.secure_url;

	}).catch(function(err){
		console.error(err);
	});
});
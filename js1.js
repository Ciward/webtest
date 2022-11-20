// JavaScript Document

function f(){
	var a=1;
	while(a){
		alert(document.getElementById("input1").value+"是 SB!!!!");
		alert("hhhhhhhhh!!!!");
	}
}
L2Dwidget.init({
        "model": {
            //jsonPath: "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",
			jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
            "scale": 1
        },
        "display": {
            "position": "right", 
            "width": 300,  
            "height": 600, 
            "hOffset": 0,
            "vOffset": -20
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 0.7,
            "opacityOnHover": 0.2
        },
		"dialog": {
            "enable": true,
            "script": {
                'tap body': '哎呀！别碰我！',
                'tap face': '你是SB吗',
            }
        }

    });

		
$(function() {
	$( "#Button1" ).button(); 
	
});
function createNode(content){
	var newItem = document.createElement("span");
	var textNode = document.createTextNode(content);
	newItem.appendChild(textNode);
	newItem.setAttribute("class","box");
    return newItem ;
}

function leftIn(){
	var inputValue = document.getElementById("inputValue").value;
	if(inputValue.length>0){
		var inputArray = inputValue.split(/\r|,|，|、|\s/);
		var len = inputArray.length;
		var queue = document.getElementById("queue");
		for(var i = 0;i<len;i++){
			var newNode = createNode(inputArray[i]);	
			queue.insertBefore(newNode,queue.childNodes[0]);
		}	
	}
}

function inquiry(){
	var queue = document.getElementById("queue").children;
	var len = queue.length;
	var inquiryInput = document.getElementById("inquiry_input").value;
	var reg = eval("/"+inquiryInput+"/g");
	for(var i = 0;i<len;i++){
		var str = queue[i].innerHTML.toString();
		var str = queue[i].innerHTML.replace(reg,"<span style='color:blue;'>" + inquiryInput + "</span>");
		queue[i].innerHTML = str;
	}
	
}

function init(){
	document.getElementById("in_btn").onclick = leftIn;
	document.getElementById("inquiry").onclick = inquiry;
	var queue = document.getElementById("queue");	
	queue.onclick = function(e){
		queue.removeChild(e.target);	
	};
}

init();
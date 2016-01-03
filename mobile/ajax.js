function createXHR(){
	if(typeof XMLHttpRequest != "undefined"){
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject != "undefined"){
		return new ActiveXObject();
	}else{
		throw new Error("no XHR object available.");
	}
};
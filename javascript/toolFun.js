/****工具函数****/

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getCumputedStyle(obj,false)[attr];
	}
};

function extend(target,source){
    for(var key in source) target[key] = source[key];
    return target;
};

function createEle(html,parent){
    var div = document.createElement('div');
    div.innerHTML = html;
    el = div.firstChild;
    parent && parent.appendChild(el);
    return el;
};

function getMousePos(e){
    if(e.pageX || e.pageY) return {x:e.pageX,y:e.pageY};
    return {
        x:e.clientX + document.documentElement.scrollLeft - document.body.clientLeft,
        y:e.clientY + document.documentElement.scrollTop - document.body.clientTop
    };
};

function getElByClass(node,oClass,parent){
    var re = [],els,parent = parent || document;
    els = parent.getElementsByTagName(node);
    for(var i=0,len=els.length;i<len;i++){
        if((' ' + els[i].className+' ').indexOf(' '+oClass+' ') > -1) re.push(els[i]);
    };
    return re;
};

function addEvent(el,type,fn){
    if(typeof el.addEventListener != 'undefined'){
        if(type == 'mouseenter'){
            el.addEventListener('mouseover',_findElement(fn),false);
        }else if(type === 'mouseleave'){
            el.addEventListener('mouseout',_findElement(fn),false);
        }else{
            el.addEventListener(type,fn,false);
        }
    }else if(typeof el.attachEvent != 'undefined'){
        el.attachEvent('on'+type,fn);
    }else{
        el['on'+type] = fn;
    };

    function _findElement(fn){
        return function(e){
            var parent = e.relatedTarget;
            while(parent && parent != this) parent = parent.parentNode;
            if(parent != this) fn.call(this,e);
        }
    };
};

function removeEvent(el,type,fn){
    if(typeof el.removeEventListener != 'undefined'){
        el.removeEventListener(type,fn,false);
    }else if(typeof el.detachEvent != 'undefined'){
        el.detachEvent('on'+type,fn);
    }else{
        el['on'+type] = null;
    }
};

function cancelSelect(){
    if (window.getSelection) {
        if (window.getSelection().empty) {  // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) {  // Firefox
            window.getSelection().removeAllRanges();
        }
    }else if (document.selection) {  // IE?
      document.selection.empty();
    }
};

function getElementPosition(el){
    var x = 0,y=0;
    if(el.getBoundingClientRect){
        var pos = el.getBoundingClientRect();
        var d_root = document.documentElement,db = document.body;
        x = pos.left + Math.max(d_root.scrollLeft,db.scrollLeft) - d_root.clientLeft;
        y = pos.top + Math.max(d_root.scrollTop,db.scrollTop) - d_root.clientTop;
    }else{
        while(el != db){
            x += el.offsetLeft;
            y += el.offsetTop;
            el = el.offsetParent;
        };
    };
    return {
        x:x,
        y:y
    };
};
//等同上面的方法
function GetRect (ele) {
	var rect = ele.getBoundingClientRect();
	var top = document.documentElement.clientTop;
	var left= document.documentElement.clientLeft;
	return{
		top    :   rect.top - top,
		bottom :   rect.bottom - top,
		left   :   rect.left - left,
		right  :   rect.right - left
	}
};

// 动画帧
var requestFrame = (function(){
    var thisFunc;
    var prefixList = ['webkit','moz','ms'];
    for(var i=0; i<prefixList.length; i++){
        thisFunc = prefixList[i] + 'RequestAnimationFrame';
        if(window[thisFunc]){
            return function(callback){
                window[thisFunc](callback);
            }
        }
    };
    return function(callback){
        window.setTimeout(callback,67);//15FPS;
    }
})();

// 中文字符
function CheckChinese(obj, val) {　　
    var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");　　
    if (reg.test(val)) {
        alert("有汉字");
    }
};

function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

/* method delegate 事件委托方法
 * param [string] 事件类型
 * param [Object] 事件处理对象
 * param [string] 事件目标
 * param [function] 事件回调
 */
function delegate(curTarget, type, sourceSelectors, callback) {
    var source = toArray(document.querySelectorAll(sourceSelectors));

    curTarget.addEventListener(type, function(e) {
        var isChild = source.some(function(item) {
            return item.contains(e.target);
        });
        if (source.indexOf(e.target) > -1 || isChild) {
            callback.call(e.target, e);
        };
    }, false);
};


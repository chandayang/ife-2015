/*
* @Author: Administrator
* @Date:   2016-03-10 14:58:00
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-11 10:46:09
*/
function $(id) {
    return document.getElementById(id);
}

function add(num1, num2) {
    return num1 + num2;
}

function renderResult(result) {
    $("result").innerHTML = result;
}

function addEventHandle() {
    var num1 = $("number1").value;
    var num2 = $("number2").value;
    var result = add(num1, num2);
    renderResult(result);
}

function initEvent() {
    $("addbtn").addEventListener("click", addEventHandle, false);
}

initEvent();
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return Object.prototype.toString.call(arr) ==='[Object Array]';
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
   return Object.prototype.toString.call(fn)==='[object Function]';
}
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) 
   {
   	var o,i,j,k;
   	if(typeof(src)!="object" || src===null)return src;
   	if(src instanceof(Array))
   	{
   		o=[];
   		i=0;j=src.length;
   		for(;i<j;i++)
   		{
   			if(typeof(src[i])=="object" && src[i]!=null)
   			{
   				o[i]=arguments.callee(src[i]);
   			}
   			else
   			{
   				o[i]=src[i];
   			}
   		}
   	}
   	else
   	{
   		o={};
   		for(i in src)
   		{
   			if(typeof(src[i])=="object" && src[i]!=null)
   			{
   				o[i]=arguments.callee(src[i]);
   			}
   			else
   			{
   				o[i]=src[i];
   			}
   		}
   	}
    
   	return o;
   }


// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);//2
console.log(abObj.b.b1[0]);//"Hello"

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var o=[];
    for(var i=0;i<arr.length;i++){
    	if(o.indexOf(arr[i]) ==-1)
    		o.push(arr[i])
    }
    return o;
}
// 第二种方法
function uniqArray2(arr){
	arr.sort();
	var o = [arr[0]];
	for(var i=1;i<arr.length;i++){
		if(arr[i] !==o[o.length-1]){
			o.push(arr[i])
		}
	}
	return o;
}
//第三中方法
function uniqArray3(arr){
	var o={},r=[];
	for(var i=0;i<arr.length;i++){
		if(!o[arr[i]]){
			o[arr[i]] = true;
			r.push(arr[i]);
		}
	}
return r;
}
//第四种方法

function uniqArray4(arr){
	var o=[arr[0]];
	for(var i=1;i<arr.length;i++){
		if(arr.indexOf(arr[i]) ==i ){
			o.push(arr[i]);
		}
	}
	return o;
}
// 使用示例
var a = [9,7,8,1, 3, 5, 7, 5, 3];
var b = uniqArray2(a);
console.log(b); // [1, 3, 5, 7]

function simpleTrim(str) {
    var result="";
    for(var i=0;i<str.length;i++){
    	if(str[i]!=" "&&str[i]!="\t"){
    		break;
    	}
    }
    for(var j=arr.length-1; j>=0;j--){
    	if(str[j]!=" "&&str[j]!="\t"){
    		break;
    	}
    	result = str.slice(i,j+1);
    	return result;
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    var result = "";
    result = str.replace(/^\s+|\s+$/g, ""); //使用正则进行字符串替换
    return result;
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); 

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i=0;i<arr.length;i++){
    fn(arr[i],i);
    }
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var count = 0;
	    for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	            count++;
	        }
	    }
	    return count;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3
// 判断是否为邮箱地址
function isEmail(emailStr) {
   // your implement
      var reg = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
      return reg.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
        var reg = /^1\d{10}$/;
        return reg.test(phone);
}
//判断element中是否含有className为sClass。
function hasClass(element, sClass) {
    return element.className.match(new RegExp("(\\s|^)" + sClass + "(\\s|$)"));
}
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
   if (!hasClass(element, newClassName)) {
        element.className += " " + newClassName;
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
   if (hasClass(element, oldClassName)) {
           var reg = new RegExp("(\\s|^)" + oldClassName + "(\\s|$)");
           element.className = element.className.replace(reg, "");
       }

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var o = {};
    o.x = element.getBoundingClientRect().left+Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);//获取相对位置+滚动距离=绝对位置.;
    o.y = element.getBoundingClientRect().top+Math.max(document.documentElement.scrollTop,document.body.scrollTop);
    return o;
}
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
 if(element.addEventListener){
  element.addEventListener(event,listener,false);
 }else if(element.attachEvent){
  element.attachEvent("on"+event,listener)
 }else{
  element["on"+event] = listener;
 }
}

// 例如：
function clicklistener(event) {
...
}
addEvent($("#doma"),"click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
  if(element.removeEventListener){
    element.removeEventListener(event,listener,false)
  }else if(element.detachEvent){
    element.detachEvent("on"+event,listener)
  }else{
    element["on"+event] = null;
  }
 }
 // 实现对click事件的绑定
 function addClickEvent(element, listener) {
      addEvent(element, "click",listener)
 }

 // 实现对于按Enter键时的事件绑定
 function addEnterEvent(element, listener) {
      addEvent(element, "keydown" function(ev){
        var oEvent = ev || window.event;
        if(oEvent.keyCode === 13){
          listener();
        }
      });
 }
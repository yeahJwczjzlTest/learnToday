/**
 * Created by u._.u on 2016/11/29.
 */
function addLoadEvent(my_func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload !== "function"){
        window.onload = my_func;
    }else {
        window.onload = function () {
            oldOnLoad();
            my_func();
        }
    }
}

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addClass(element,value) {
    if (!element.className){
        element.className = value;
    }else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function highlightPage() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("header");
    if (headers.length === 0) return false;
    var navs = headers[0].getElementsByTagName("nav");
    if (navs.length === 0) return false;
    var links = navs[0].getElementsByTagName("a");
    var linkurl;
    for(var i = 0;i<links.length;i++){
        linkurl = links[i].getAttribute("href");
        if (window.location.href.indexOf(linkurl) !== -1){
            links[i].className = "here"
            var linkurlText = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linkurlText);
        }
    }
}


function moveElement(elem_id, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elem_id)) return false;
    var elem = document.getElementById(elem_id);
    var dist = 0;
    if (elem.moveMent) clearTimeout(elem.moveMent);
    if (!elem.style.left) elem.style.left = "0px";
    if (!elem.style.top) elem.style.top = "0px";
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (ypos === final_y && xpos === final_x) return true;
    if (xpos < final_x){
        dist = Math.ceil((final_x-xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x){
        dist = Math.ceil((xpos-final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y){
        dist = Math.ceil((final_y-ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y){
        dist = Math.ceil((ypos-final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var param = "moveElement('"+elem_id+"',"+final_x+","+final_y+","+interval+")";
    elem.moveMent = setTimeout(param,interval);
}


function prepareSlideshow() {
    //目的是添加一个 div ,然后在 div 里面添加一个 img
    //然后找到所有的 a 标签,组成一个数组,为每一个 a 标签添加合适的 onmouseover 方法,
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("intro")) return false;
    var intro = document.getElementById("intro");
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var frame = document.createElement("img");
    frame.setAttribute("id","frame");
    frame.setAttribute("alt","");
    frame.setAttribute("src","images/frame.gif");
    slideshow.appendChild(frame);
    var preview = document.createElement("img");
    preview.setAttribute("id","preview");
    preview.setAttribute("alt","图片滚动区");
    preview.setAttribute("src","images/slideshow.gif");
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);
    var links = intro.getElementsByTagName("a");
    var destination;
    for (var i = 0;i<links.length;i++){
        links[i].onmouseover = function () {
            destination = this.getAttribute("href")
            if (destination.indexOf("index.html") != -1) moveElement("preview",0,0,5);
            if (destination.indexOf("about.html") != -1) moveElement("preview",-150,0,5);
            if (destination.indexOf("photos.html") != -1) moveElement("preview",-300,0,5);
            if (destination.indexOf("live.html") != -1) moveElement("preview",-450,0,5);
            if (destination.indexOf("contact.html") != -1) moveElement("preview",-600,0,5);
        }
    }
}

//控制about.html页面 section 显示方式的函数,传入参数为 section 标签的 id 属性
function showSection(id) {
    //首先,获取所有的 section 标签,赋值给 sections 数组.
    var sections = document.getElementsByTagName("section");
    //现在遍历 sections 数组
    for (var i = 0;i<sections.length;i++){
        //获取 每个 section 标签的 id 属性,判断是否和传入的 id 对象相同
        //如果不相同,继续隐藏
        if (sections[i].getAttribute("id") != id){
            sections[i].style.display = "none";
        }else {
            //如果相同,那么就用 block 形式显示出来
            sections[i].style.display = "block";
        }
    }
}
//作用是,设置about.html页面的 section 标签内容的默认显示模式为 隐藏,并
//设置 其中链接的点击 onclick 事件为执行 showSection() 方法.
function prepareInternalnav() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var articles = document.getElementsByTagName("article");
    if (articles.length === 0) return false;
    var navs = articles[0].getElementsByTagName("nav");
    if (navs.length === 0) return false;
    var links = navs[0].getElementsByTagName("a");
    for (var i = 0;i<links.length;i++){
        var sectionId = links[i].getAttribute("href").split("#")[1];
        if (!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = "none";
        //为链接 links[i]创建一个属性,并保存 id
        links[i].destination = sectionId;
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }

    }
}

//图片列表 ul 的 id = imagegallery
//图片显示区域 img 的 id = placeholder
//显示文字描述区域 p 的 id = description

//首先的是改变状态的 showPic 函数,改变图片显示区和描述显示
function showPic(whichpic) {
    if (!document.getElementById) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if (!document.getElementById("description")) return false;
    if (whichpic.getAttribute("title")){
        var text = whichpic.getAttribute("title");
    }else {
        var text = "";
    }
    var description = document.getElementById("description");
    if (description.firstChild.nodeType === 3){
        description.firstChild.nodeValue = text;
    }
    return true;
}
//动态插入 图片显示区域和描述区域
function preparePlaceholder() {
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    if (!document.createTextNode) return false;
    if (!document.createElement) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("alt","imageView");
    placeholder.setAttribute("src","images/placeholder.gif");
    var description = document.createElement("p");
    var txt = document.createTextNode("The choose pictures!");
    description.setAttribute("id","description");
    description.appendChild(txt);
    var gallery = document.getElementById("imagegallery");
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}
//prepareGallery()
function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0;i<links.length;i++){
        links[i].onclick = function () {
            return showPic(this)?false:true;
        }
    }
}

//表格条纹
function stripeTable() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for (var i = 0;i<tables.length;i++){
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for (var j = 0;j<rows.length;j++){
            if (odd === true){
                addClass(rows[j],"odd");
                odd = false;
            }else {
                odd = true;
            }
        }
    }
}

//鼠标移入高亮显示 row
function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0;i<rows.length;i++){
        rows[i].oldClassName = rows[i].className;
        rows[i].onmouseover = function () {
            addClass(this,"highlight");
        }
        rows[i].onmouseout = function () {
            this.className = this.oldClassName;
        }
    }
}

//将 abbr 标签里面的 title 显示出来用 dl 自定义列表显示出来
function displayAbbreviations() {
    if (!document.createElement) return false;
    if (!document.getElementsByTagName) return false
    if (!document.createTextNode) return false;
    var abbrs = document.getElementsByTagName("abbr");
    if (abbrs.length < 1) return false;
    var defs = new Array();
    for (var i = 0;i<abbrs.length;i++){
        var current_abbr = abbrs[i];
        var title_abbr = current_abbr.getAttribute("title");
        var key_abbr = current_abbr.lastChild.nodeValue;
        defs[key_abbr] = title_abbr;
    }
    var dlist = document.createElement("dl");
    for (var key in defs){
        var title_defs = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_txt = document.createTextNode(key);
        dtitle.appendChild(dtitle_txt);
        var ddesc = document.createElement("dd");
        var ddsec_txt = document.createTextNode(title_defs);
        ddesc.appendChild(ddsec_txt);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    if (dlist.childNodes.length < 1) return false;
    var header = document.createElement("h3");
    var header_txt = document.createTextNode("Abbreviations");
    header.appendChild(header_txt);
    var articles = document.getElementsByTagName("article");
    if (articles.length === 0) return false;
    articles[0].appendChild(header);
    articles[0].appendChild(dlist);
}

//点击label标签使输入框获得焦点
function focusLabels() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var labels = document.getElementsByTagName("label");
    for (var i = 0;i<labels.length;i++){
        if (!labels[i].getAttribute("for")) continue;
        labels[i].onclick = function () {
            var id = this.getAttribute("for");
            if (!document.getElementById(id)) return false;
            var elem = document.getElementById(id);
            elem.focus();
        }
    }
}



//placeholder 占位符,
function resetField(whichform) {
    //检测浏览器是否支持 placeholder 属性
    if (Modernizr.input.placeholder) return;
    //循环遍历 form 表单元素(form.elements 是仅包括表单元素的数组)
    for (var i = 0;i<whichform.elements.length;i++){
        //获取表单元素标签
        var element = whichform.elements[i];
        //获取palceholder文字
        var check = element.placeholder || element.getAttribute("placeholder");
        //进行判断,如果不存在,退出本次循环,进行下次循环
        if (!check) continue;
        //指定 表单元素事件:获得焦点 onfocus()
        element.onfocus = function () {
            //获得表单的 placeholder 数据
            var text = this.placeholder || this.getAttribute("placeholder");
            //判断,如果元素的 value === 获取到的 text 值,那就清空 value = "",并将 className 值设置为 ""
            if (this.value === text){
                //在 color.css里面设置了 input.placeholder的样式,这里取消掉className的值意思是清除样式
                this.className = "";
                this.value = "";
            }
        }
        element.onblur = function () {
            if (this.value === ""){
                this.className = "placeholder";
                this.value = this.placeholder || this.getAttribute("placeholder");
            }
        }
        //默认状态是失去焦点的
        element.onblur();
    }
}

function prepareForms() {
    //遍历所有的 form 并将其交给函数 resetField 运行
    for (var i = 0;i<document.forms.length;i++){
        var thisform = document.forms[i];
        resetField(thisform);
        thisform.onsubmit = function () {
            if (!validateForm(this)) return false;
            var article = document.getElementsByTagName("article")[0];
            if (submitFormWithAjax(this,article)) return false;
            return true;
        }
    }
}

//验证函数(是否更改内容)
function isFilled(field) {
    if (field.value.replace(" ","").length === 0) return false;
    var placeholder = field.placeholder || field.getAttribute("placeholder");
    return (field.value !== placeholder);
}
//邮件是否正确,粗略的判断
function isEmail(field) {
    //element.value.indexOf("@") 作用是:找到value中第一次出现 @ 的位置,找到了返回位置,找不到返回 -1 状态码
    return (field.value.indexOf("@") !== -1 && field.value.indexOf(".") !== -1);
}

//
function validateForm(whichform) {
    for (var i = 0;i<whichform.elements.length;i++){
        var elem = whichform.elements[i];
        if (elem.required === "required"){
            if (!isFilled(elem)) {
                alert(elem.name+"必须填写");
                return false;
            }
        }
        if (elem.type === "email"){
            if (!isEmail(elem)){
                alert(elem.name+'必须为正确的Email地址');
                return false;
            }
        }
    }
    return true;
}



//Ajax拦截请求

//创建XMLHttpRequest()函数;
function getHTTPObject() {
    if (typeof XMLHttpRequest === "undefined")
        XMLHttpRequest = function () {
            try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
                catch (error){}
            try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
                catch (error){}
            try {return new ActiveXObject("Msxml2.XMLHTTP");}
                catch (error){}
            return false;
        }
    return new XMLHttpRequest();
}

function displayAjexLoading(element) {
    while (element.hasChildNodes()){
        element.removeChild(element.lastChild);
    }
    var content = document.createElement("img");
    content.setAttribute("src","/images/loading.gif");
    content.setAttribute("alt","Loading...");
    element.appendChild(content);
}

function submitFormWithAjax(whichform, the_target) {
    var request = getHTTPObject();
    if (!request) return false;
    displayAjexLoading(the_target);
    var dataParts = [];
    var element;
    for (var i = 0;i<whichform.elements.length;i++){
        var element = whichform.elements[i];
        dataParts[i] = element.name + "=" + encodeURIComponent(element.value);
    }
    var data = dataParts.join("&");
    request.open("POST",whichform.getAttribute("action"),true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState === 4){
            if (request.status === 200 || request.status === 0){
                var matchs = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if (matchs.length>0){
                    the_target.innerHTML = matchs[1];
                }else {
                    the_target.innerHTML = "<p>Oops, there was an error. Sorry.</p>";
                }
            }else {
                the_target.innerHTML = "<p>"+request.statusText+"</p>";
            }
        }
    };
    request.send(data);
    return true;
}




addLoadEvent(prepareForms);
addLoadEvent(focusLabels);
addLoadEvent(stripeTable);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareInternalnav);
addLoadEvent(prepareSlideshow);
addLoadEvent(highlightPage);
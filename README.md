# The-way-of-Web
##前端学习之路
### 浏览器相关知识
#### IE
- trident内核
- 从IE6开始，引入了Standards模式，标准模式中，浏览器尝试给符合标准的文档在规范的正确处理达到指定浏览器中的程度。在IE6之前CSS技术还不够成熟，所以在IE5之前的浏览器对CSS的支持很差，IE6将对CSS提供更好的支持，但由于很多页面基于旧的布局方式写的，而如果IE6支持CSS则将另这些页面显示不正常，为了保证不破坏现有页面，又提供新的渲染机制。在IE6中将DTD作为区别是否采用最新布局的一个标记，而这种就是Quirks模式（怪癖模式，诡异模式，怪异模式）。
#### Firefox
gecko内核
####Safari
webkit内核
####Opera
之前是presto内核，现在已经改为和chrome内核一样的Blink内核。
####Chrome
-  blink内核
- 调试技巧
1. 快速切换文件
cmd+p 快速搜寻和打开你的项目的文件
2. 在源代码中搜索
 cmd+opt+f 可支持正则表达式
3. 跳到指定行
 在sources标签中打开一个文件之后，cmd+L，然后输入行号，就可以跳到指定的行。
 还可以不用打开文件，直接按cmd＋o,输入：和行数，而不用去寻找一个文件
###标准
- <!DOCTYPE> 声明位于文档中的最前面的位置，处于 <html> 标签之前。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范。（重点：告诉浏览器按照何种规范解析页面）

### 标签的相关知识
####img
##### alt和title的异同
a:alt(alt text):为不能显示图像、窗体或applets的用户代理（UA），alt属性用来指定替换文字。替换文字的语言由lang属性指定。(在IE浏览器下会在没有title时把alt当成 tool tip显示)
title(tool tip):该属性为设置该属性的元素提供建议性的信息。
##### 图片加载的时机
###### 浏览器加载的特点：
- 并发下载图片，在下载的过程中没有阻塞。
- src的值如果相同的话，浏览器只会下载一次。
- 图片的下载和渲染会阻塞整个页面的渲染。
- 图片的大小与下载时间成正比。

###### 图片加载的方式
- 即时加载

正常的加载机制

- 预先加载

可预测到用户会进行下面图片的查看动作的

- 延迟加载

网站中存在大量图片，并且可预测中用户不会全部查看图片
####strong
粗体强调标签，表示内容的重要性
####em
斜体强调标签，更强烈的强调，表示内容的强调点。
###相关知识解释
#### cookies,sessionStorage,localStorage
sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。web storage和cookie的区别Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。#### src和href的区别
sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。web storage和cookie的区别Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。
#### CSS都有哪些选择器
- 派生选择器（用HTML标签申明）- id选择器（用DOM的ID申明）- 类选择器（用一个样式类名申明）- 属性选择器（用DOM的属性申明，属于CSS2，IE6不支持，不常用，不知道就算了）除了前3种基本选择器，还有一些扩展选择器，包括- 后代选择器（利用空格间隔，比如div .a{  }）- 群组选择器（利用逗号间隔，比如p,div,#a{  }）那么问题来了，CSS选择器的优先级是怎么样定义的？基本原则：一般而言，选择器越特殊，它的优先级越高。也就是选择器指向的越准确，它的优先级就越高。复杂的计算方法：用1表示派生选择器的优先级用10表示类选择器的优先级用100标示ID选择器的优先级div.test1 .span var 优先级 1+10 +10 +1span#xxx .songs li 优先级1+100 + 10 + 1\#xxx li 优先级 100 +1那么问题来了，看下列代码，<p>标签内的文字是什么颜色的？<style>.classA{ color:blue;}.classB{ color:red;}</style><body><p class='classB classA'> 123 </p></body>答案：red。与样式定义在文件中的先后顺序有关，即是后面的覆盖前面的，与在<p class=’classB classA’>中的先后关系无关。
#### CSS中如何使DOM元素不显示在浏览器可是范围内
1. display:none;  整个dom元素都会消失。
2. visibility:hidden; dom元素隐藏，并不会消失。
3. 设置宽高为0，透明度为0，z-index位置在-1000。
#### 超链接访问过后hover样式不再出现
被点击访问过后，超链接不再具有hover和active，可以改变CSS属性的排列顺序：L-V-H-A(link,visted,hover,active)。
#### 行内元素，块级元素，inline-block元素
- 行内元素
和相邻的内联元素在同一行;宽度(width)、高度(height)、内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)都不可改变（也就是padding和margin的left和right是可以设置的），就是里面文字或图片的大小

- 块级元素

总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示;宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制;
- inline-block元素
\<input> 、\<img> 、\<button> 、\<texterea> 、\<label>
清除inline-block元素间的空格间隙问题:
1.标签间减少空格
### 网站优化
####多个域名存储网站资源
1. CDN缓存更方便
2. 突破浏览器并发限制
3. 节约cookie带宽
4. 节约主域名连接数，优化页面响应速度
5. 防止不必要的安全问题

####js请求的缓存处理
1. dns缓存
2. cdn缓存
3. 浏览器缓存
4. 服务器缓存

#### 单页面上有大量的图片（大型电商网站），优化加载图片的速度
图片懒加载，在页面上的未可视区域可以添加一个滚动条事件，判断图片位置与浏览器顶端的距离与页面的距离，如果前者小于后者，优先加载。如果为幻灯片、相册等，可以使用图片预加载技术，将当前展示图片的前一张和后一张优先下载。如果图片为css图片，可以使用CSSsprite，SVGsprite，Iconfont、Base64等技术。如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图，以提高用户体验。如果图片展示区域小于图片的真实大小，则因在服务器端根据业务需要先行进行图片压缩，图片压缩后大小与展示一致。
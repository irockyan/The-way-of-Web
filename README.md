# The-way-of-Web
##自己的前端学习之路
### 图片加载的时机
#### 浏览器加载的特点：
- 并发下载图片，在下载的过程中没有阻塞。
- src的值如果相同的话，浏览器只会下载一次。
- 图片的下载和渲染会阻塞整个页面的渲染。
- 图片的大小与下载时间成正比。

### 图片加载的方式
- 即时加载

正常的加载机制

- 预先加载

可预测到用户会进行下面图片的查看动作的

- 延迟加载

网站中存在大量图片，并且可预测中用户不会全部查看图片
# 3D card
### perspective
#### perspective 的2种表示方式
```css
.class{
    perspective: 800px;
}
.class{
    transform: perspective(800px);
}
```
#### 两种方式的不同理解
```text
- 单独的定义只在初次渲染时投影在屏幕上
- 写在 transform 中的 perspective会根据 
  transform动画的变化来进行重新加载，所以使用js或者css3 动画时尽量使用后者
```
#### perspective 注意事项
```text
    perspective 的定义要在其他3d变化之前，否则无效
    呈现3d 效果的父元素要添加 transform-style: preserver-3d 属性，则该元素的子元素按照3D效果呈现
    backface-visibility 用来定义元素不是正面向视点时的可视情况
    
    图片翻转一类的效果就是利用 backface-visible:hidden 来实现的
```

### 回顾 useSpring 效果
```text
   
```

```text
- 弧长/半径 = 弧度
```
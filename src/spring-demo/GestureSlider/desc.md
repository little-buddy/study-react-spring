### 细节

```text
	react-with-gesture 由个人维护
	升级成 react-use-gesture 由 react-spring 官方维护
```

### react-use-gesture
```text
movement 和 offset 之间的区别

movement 是手势的移动
offset 是所有手势移动的综合

譬如 drag 模式
	movement 一直是 [0,0]
	offset 就会保留之前的位置


cancel 触发应该会改变 canceled 的值
```
```text
	react-spring 的结构浏览器兼容措施
	最好能在入口层做一个当下浏览器兼容的配置，那简直就是完美了
```

```text
movement expresses the gesture movement,
while offset is the sum of all gesture movements on the same component.
```

```text
一些 useSpring 的配置也是可以直接通过 set 的形式触发的
```

import React from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import './style.scss';

/*
	TODO 这里 offset 有问题
		官方给出的例子使用的是 react-with-gesture
		我们这里需要做对应的操作


		TODO
			为什么我觉得这个东西这么智障 with-gesture 和 use-gesture 的差别


* * */

/*
	TODO x 横向运动 然后 再做处理
* * */
const GestureSlider: React.FC = () => {
	const [props, set] = useSpring(() => ({
		scale: 1,
		bg: ['#f093fb', '#f5576c'],
		x: 0,
		immediate: name => {
			return name === 'x';
		},
	}));

	const bind = useGesture({
		onDrag: state => {
			const { down, movement, delta, initial } = state;
			console.log(delta);
			set({
				scale: down ? 1.1 : 1,
				bg: delta[0] < 0 ? ['#f093fb', '#f5576c'] : ['#96fbc4', '#f9f586'],
				x: down ? movement[0] : 0,
			});
		},
	});

	return (
		<animated.div
			{...bind()}
			className="gesture-slider"
			style={{ background: props.bg.interpolate(x => `linear-gradient(120deg, ${x[0]} 0%, ${x[1]} 100%)`) }}
		>
			<animated.div />
			<animated.div
				className="gesture-slider__front"
				style={{
					// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
					// @ts-ignore
					transform: interpolate([props.scale, props.x], (scale, x) => {
						return `translate3d(${x}px,0,0) scale(${scale})`;
					}),
				}}
			>
				Slider.
			</animated.div>
		</animated.div>
	);
};

export default GestureSlider;

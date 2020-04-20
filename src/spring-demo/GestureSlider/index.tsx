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
	const downStatus = React.useRef(false);
	const [props, set] = useSpring(() => ({
		scale: 1,
		bg: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
		x: 0,
		immediate: name => {
			return downStatus.current && name === 'x';
		},
	}));

	const bind = useGesture({
		onDrag: state => {
			const { down, movement } = state;
			if (down !== downStatus.current) {
				downStatus.current = down;
			}
			set({
				scale: down ? 1.1 : 1,
				bg:
					movement[0] < 0
						? `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`
						: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
				x: down ? movement[0] : 0,
			});
		},
	});

	return (
		<animated.div
			{...bind()}
			className="gesture-slider"
			style={{
				// @ts-ignore
				background: props.bg,
			}}
		>
			<animated.div
				className="gesture-slider__circle"
				style={{
					transform: props.x
						.interpolate({
							// @ts-ignore
							map: Math.abs,
							range: [50, 300],
							output: [0.5, 1.5],
							extrapolate: 'clamp',
						})
						.interpolate((o: any) => {
							return `scale(${o})`;
						}),
					alignSelf: props.x.interpolate(o => {
						return o > 0 ? 'flex-start' : 'flex-end';
					}),
				}}
			/>
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

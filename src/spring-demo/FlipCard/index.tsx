/**
 * Created by buddy on 2020-04-16.
 */

import React from 'react';
import { useSpring, animated } from 'react-spring';
import './style.scss';

const Card: React.FC = () => {
	const [flip, setFlip] = React.useState(false);
	// mySelf
	// const [style, set] = useSpring(() => ({
	// 	y: 1,
	// }));
	// React.useEffect(() => {
	// 	set({ y: flip ? 0 : 1 });
	// }, [flip, set]);
	// const toggle = React.useCallback(() => {
	// 	setFlip(s => !s);
	// }, []);
	// const transform = style.y
	// 	.interpolate({
	// 		range: [0, 1],
	// 		output: [0, -180],
	// 	})
	// 	.interpolate(trans)

	// 专业版
	const { opacity, transform } = useSpring({
		opacity: flip ? 1 : 0,
		transform: `perspective(20px) rotateX(${flip ? 0 : 180}deg)`,
	});
	const toggle = React.useCallback(() => {
		setFlip((x: boolean) => !x);
	}, []);

	return (
		<div>
			<animated.div
				onClick={toggle}
				className="flip-card__graph"
				style={{
					opacity,
					transform,
					backgroundColor: 'yellow',
				}}
			/>
			<animated.div
				onClick={toggle}
				className="flip-card__graph"
				style={{
					transform,
					// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
					// @ts-ignore
					opacity: opacity.interpolate((o: number) => 1 - o),
				}}
			/>
		</div>
	);
};

export default Card;

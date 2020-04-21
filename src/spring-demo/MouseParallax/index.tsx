import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useMove } from 'react-use-gesture';
import './style.scss';

/*
	TODO
		我比较好奇，这个偏差度是怎么搞出来
* * */
/* useSpring 即使是数组也会这样做的 */

const calc: (x: number, y: number) => number[] = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

// TODO 这里就是运动的速率
const trans1: any = (x: number, y: number): any => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2: any = (x: number, y: number): any => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3: any = (x: number, y: number): any => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4: any = (x: number, y: number): any => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const MouseParallax: React.FC = () => {
	const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

	const bind = useMove(state => {
		set({ xy: calc(...state.xy) });
	});

	return (
		<div className="container" {...bind()}>
			<animated.div className="card1" style={{ transform: xy.interpolate(trans1) }} />
			<animated.div className="card2" style={{ transform: xy.interpolate(trans2) }} />
			<animated.div className="card3" style={{ transform: xy.interpolate(trans3) }} />
			<animated.div className="card4" style={{ transform: xy.interpolate(trans4) }} />
		</div>
	);
};

export default MouseParallax;

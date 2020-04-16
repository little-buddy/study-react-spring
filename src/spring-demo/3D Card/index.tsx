import React from "react";
import { useSpring, animated } from "react-spring";
import "./style.scss";

const calc: (x: number, y: number) => number[] = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans: (x: number, y: number, s: number) => string = (x, y, s) =>
  `perspective(600px) rotateY(${y}deg) rotateX(${x}deg) scale(${s})`;

const App: React.FC = () => {
  const [style, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const onMouseMove: (e: React.MouseEvent) => void = (e) => {
    const { clientX, clientY } = e;
    set({ xys: calc(clientX, clientY) });
  };
  const onMouseLeave: () => void = () => {
    set({ xys: [0, 0, 1] });
  };

  const animatedProps = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    transform: style.xys.interpolate(trans),
  };

  return (
    <animated.div
      className="card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={animatedProps}
    />
  );
};
export default App;

/*
  TODO 3D 视图的探究
    - perspective 的说明

* * */

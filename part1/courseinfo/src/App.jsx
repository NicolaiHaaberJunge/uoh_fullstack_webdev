const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.score}
    </p>
  );
};

const Content = (props) => {
  const [part1, part2, part3] = props.parts;
  return (
    <div>
      <Part name={part1.name} score={part1.exercises} />
      <Part name={part2.name} score={part2.exercises} />
      <Part name={part3.name} score={part3.exercises} />
    </div>
  );
};

const Total = (props) => {
  //console.log(props.total);
  return <p>Number of excercises {props.total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts.reduce((sum, part) => sum + part.exercises, 0)}
      />
    </div>
  );
};

export default App;

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
  return (
    <div>
      <Part name={props.part1} score={props.score1} />
      <Part name={props.part2} score={props.score2} />
      <Part name={props.part3} score={props.score3} />
    </div>
  );
};

const Total = (props) => {
  //console.log(props.total);
  return <p>Number of excercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header name={course} />
      <Content
        part1={part1.name}
        score1={part1.excercises}
        part2={part2.name}
        score2={part2.excercises}
        part3={part3.name}
        score3={part3.excercises}
      />
      <Total total={part3.exercises + part2.exercises + part1.exercises} />
    </div>
  );
};

export default App;

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Content = (props) => {
  return (
    <p>
      {props.name} {props.score}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of excercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const excercise1 = 10;
  const part2 = "Using props to pass data";
  const excercise2 = 7;
  const part3 = "State of a component";
  const excercise3 = 14;

  return (
    <div>
      <Header name={course} />
      <Content name={part1} score={excercise1} />
      <Content name={part2} score={excercise2} />
      <Content name={part3} score={excercise3} />
      <Total total={excercise1 + excercise2 + excercise3} />
    </div>
  );
};

export default App;

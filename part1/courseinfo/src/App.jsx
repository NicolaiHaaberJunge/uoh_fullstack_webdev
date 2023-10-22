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
      <h1>{course}</h1>
      <p>
        {part1} {excercise1}
      </p>
      <p>
        {part2} {excercise2}
      </p>
      <p>
        {part3} {excercise3}
      </p>
      <p>Number of excercises {excercise1 + excercise2 + excercise3}</p>
    </div>
  );
};

export default App;

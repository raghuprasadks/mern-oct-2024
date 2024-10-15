const Content = () => {
    let course = "React";
    let topics = ["JSX", "Components", "Props", "State", "Hooks"];
    return (
        <div>
        <h1>I am learning - {course}</h1>
        <h2>Topics - {topics}</h2>
        </div>
    );
    }

    export default Content;
import '../style/about.css'
  
const About = () => {
  return (
    <div id='container'>
      <h1 id="aboutH1">
        Pokemon comparisons is a web based app to help you find better pokemon match ups.
      </h1>
      <ul id="aboutUl">
        <span id="aboutSpan">Features that are on their way:</span>
        <li>Login/Sign up</li>
        <li>Saving pokemon teams - 🗹</li>
        <li>Editing pokemon teams - 🗹</li>
        <li>Recommend what pokemon to use against opponents pokemon</li>
        <li>Display a list of typeweaknesses for your opponents pokemon</li>
        <span id="secondSpan">Latest fixes:</span>
        <li>Fixed an issue that could cause the page to crash</li>
        <li>Fixed an issue on smaller screen sizes</li>
      </ul>
    </div>
  );
};
  
export default About;
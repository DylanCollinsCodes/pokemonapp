import '../style/about.css'
  
const About = () => {
  return (
    <div id='container'>
      <div id='putItAllHere'>
        <div class='backGroundSetup'>
          <h1 id="aboutH1">Here's you can find the most recent changes!</h1>
        </div>
        <div class='backGroundSetup'>
          <ul id="aboutUl">
            <span id="aboutSpan">Features that are on their way:</span>
            <li>Login/Sign up</li>
            <li>Saving pokemon teams - Check</li>
            <li>Editing pokemon teams - Check</li>
            <li>Recommend what pokemon to use against opponents pokemon</li>
            <li>Display a list of typeweaknesses for your opponents pokemon</li>
            <span id="secondSpan">Latest fixes:</span>
            <li>Fixed an issue that could cause the page to crash</li>
            <li>Fixed an issue on smaller screen sizes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
  
export default About;
import '../style/index.css'

const Home = () => {
  return (
    <div>
      <div id='indexHome'>
        <h1 id="indexH1"class='indexHome centerMe'>Welcome to this Pokemon App!</h1>
        <p id='indexP' class='indexHome bigTextSmall'>Welcome to the Pokemon App that lets you build teams and compare pokemon! On here you'll find the <a href="pokemon">comparison tool</a> and the <a href="teambuilder">teambuilder tool</a>. I hope you enjoy your stay at the site and I hope you come back soon to check out future changes!</p>
        <div id='flexThisDiv'>
          <div class="shrinkThisDiv margin-right">
          <p class='indexHome centerMe fullWidth customHeaderHeight bigTextSmall'>Pokemon Compare Tool Guide</p>
          <p class='indexHome fullWidth smallerText'>Hey there! I'm glad that you're here. Here's a couple tips for this tool! You can display a number of pokemon and then click on them to test their strengths and weaknesses against each other. If you insert a number this will override your list of pokemon so be careful if you don't want it reset! Lists will be savable in the future. You can however add specific pokemon to a list generated providing a number!</p>
          </div>
          <div class="shrinkThisDiv margin-left">
          <p class='indexHome centerMe fullWidth customHeaderHeight bigTextSmall'>Team Builder Guide</p>
          <p class='indexHome fullWidth smallerText'>Here are some tips to help you use the Team Builder! You can generate a team by typing in pokemon names and then save that team for future use! If you clear your cache you will your data so be careful! This will be moved to a database in the future for those who sign up! You can click on a pokemon in your active team to delete them from it and you can resave a team to update it to a new pokemon list! Enjoy your stay!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Home;
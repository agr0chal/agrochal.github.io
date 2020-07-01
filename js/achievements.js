(async () => {
  const achievements = document.querySelector("#achievements");
  achievements.insertAdjacentHTML('afterbegin', await getAchievements());
})();

async function getAchievements() {
  const json = await fetch('./achievements.json');
  const achievements_data = await json.json();
  let achievements = "";

  achievements_data.forEach(achievement => {
    const {
      name,
      place,
      tech
    } = achievement;

      achievements += `<div class="achievement">
          <h2>${name}</h2>
          <h3>${place}</h3>
          <h4>${tech.map(tech => `${tech}`).join(', ')}</h4>
        </div>
        `;
  });

  return achievements;
}

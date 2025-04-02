async function getPlayers(n = 15, season = 2025) {
  try {
    const response = await fetch(
      `https://statsapi.mlb.com/api/v1/sports/1/players?season=${season}&gameType=R`
    );

    const data = await response.json();
    const allPlayers = data.people;
    const shuffledPlayers = shuffleArray([...allPlayers]);

    return shuffledPlayers.slice(0, n).map((player) => ({
      id: player.id,
      fullName: player.fullName,
      img: `https://img.mlbstatic.com/mlb-photos/image/upload/w_213,d_people:generic:headshot:silo:current.png,q_auto:best,f_auto/v1/people/${player.id}/headshot/67/current`,
    }));
  } catch (e) {
    throw new Error(e);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export { getPlayers, shuffleArray };

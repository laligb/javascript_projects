const team = {
  _players: [
    {
      firstname: "George",
      lastname: "Brown",
      age: 45
    },
    {
      firstname: "Michael",
      lastname: "Wilson",
      age: 34
    },
    {
      firstname: "John",
      lastname: "McFly",
      age: 37
    }
  ],
  _games: [
    {
      opponent: "Opponent 1",
      teamPoints: 20,
      opponentPoints: 23
    },
    {
      opponent: "Opponent 2",
      teamPoints: 18,
      opponentPoints: 15
    },
    {
      opponent: "Opponent3",
      teamPoints: 21,
      opponentPoints: 21
    }
  ],

  get players(){
    return this._players;
  },

  get games(){
    return this._games;
  },

  addPlayer(firstName, lastName, age){
    return this._players.push({
      firstName: firstName,
      lastName: lastName,
      age: age
    })
  },

  addGame(opponent, teamPoints, opponentPoints){
    return this._games.push({
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    })
  }
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team);
console.log("===============");
console.log(team.players);
console.log(team.games);
console.log(team.players[3])
console.log("===============");
console.log("===============");
team.addGame('Titans', 100, 98);
console.log(team.games);

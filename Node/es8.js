function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  const players = ['Joe', 'Caroline', 'Sabrina'];
  
  players.reduce((chain, player) => {
    return chain.then(() => {
      return luckyDraw(player)
        .then(message => {
          console.log(message);
        })
        .catch(error => {
          console.error(error.message);
        });
    });
  }, Promise.resolve());
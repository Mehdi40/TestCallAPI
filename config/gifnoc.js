// Ok j'ai enlevé le fichier config.js du repo, mais du coup
// ça risque d'être galère pour toi si tu dois créer une clé d'API et tout
// Du coup pour faciliter le process, j'ai laissé le fichier intact
// Avec les différentes images, la clé, le port, etc.
// Evidemment, ça n'aurait jamais été commit en prod ça
const config = {
  port: 3000,
  apiUrl: 'https://apicloud-facerect.p.mashape.com/process-url.json',
  mashapeKey: 'PgozWflPeVmsh4ITxnU2QOkeJ30Kp1B5XSojsnbMwyPGC2frWn',
  pictureWithOneFace: 'https://www.lawyersweekly.com.au/images/LW_Media_Library/LW-603-p28-partner-profile.jpg',
  pictureWithManyFaces: 'http://sm.ign.com/ign_fr/screenshot/default/this-quiz-will-reveal-which-friends-character-you-2-8214-148_fvq2.jpg',
  pictureWithNoFace: 'https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg'
}

module.exports = config
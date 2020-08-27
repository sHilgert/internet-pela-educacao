declare var firebase: any;

export const getDepoimentos = () => {
  return firebase.database().ref('/depoimentos').orderByKey().limitToLast(2).once('value').then((snapshot: any) => {
    return snapshot.val()
  });
}

export const getAssinaturas = () => {
  return firebase.database().ref('/assinaturas').orderByKey().limitToLast(50);
}

export const getTotalAssinaturas = () => {
  return firebase.database().ref('/assinaturas').once('value').then((snapshot:any) => {
    return snapshot.val().length;
  });
}

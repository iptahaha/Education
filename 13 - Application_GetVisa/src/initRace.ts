import {
  addListener,
  buttonsDisabledOn,
  buttonsDisabledOff,
  elementsVisibilityToggler,
  getNodeById,
  getRandomIntInclusive,
} from './utils';
import { Circle } from './Circle';

export function initRace(state) {
  const params = {
    circles: [],
    counter: 0,
    names: [],
    balances: [],
    ages: [],
    documents: [],
    engLevels: [],
  };

  addListener('init_btn', 'click', () => {
    const counter = state.candidatesCount;
    const canvas = <HTMLCanvasElement>getNodeById('canvas');
    canvas.height = 500;
    canvas.width = counter * 100;

    makeArrOfCandidatesData(state, params);
    prepToRace(params, canvas);
  });

  addListener('race_btn', 'click', () => {
    buttonsDisabledOn('race_btn');

    racePromise(params);

  });
}

function racePromise(params) {
  const { counter } = params;
  const { circles } = params;
  let index = 0;

  Promise.race([
    Promise.resolve(counter)
      .then(
        () => {
          for (let i = 0; i < counter; i++) {
            checkData(
              checkBalance,
              params.balances[i],
              getRandomIntInclusive(5000, 10000),
              i,
              circles
            );
          }
        },
        () => {
          console.log('REJECTED :((');
        },
      )
      .then(() => {
        for (let j = 0; j < counter; j++) {
          Promise.all([
            checkData(
              checkAge,
              params.ages[index],
              getRandomIntInclusive(1000, 3000),
              index,
              circles
            ),
            checkData(
              checkDocuments,
              params.documents[index],
              getRandomIntInclusive(10000, 20000),
              index,
              circles
            ),
            checkData(
              checkLangLevel,
              params.engLevels[index],
              getRandomIntInclusive(5000, 10000),
              index,
              circles
            ),
          ]).then(() => {
            return index;
          });
          index++;
        }
      }),
  ])
    .then(() => {
      console.log(`FINAL ${index}`);
    })
    .catch(() => {
      console.log('ERROR');
    });
}

function makeArrOfCandidatesData(state, params) {
  params.counter = state.candidatesCount;
  for (let i = 0; i < state.candidatesCount; i++) {
    params.names.push(state.queueOfCandidates[i].name);
    params.balances.push(state.queueOfCandidates[i].balance);
    params.ages.push(state.queueOfCandidates[i].age);
    params.documents.push(state.queueOfCandidates[i].documents);
    params.engLevels.push(state.queueOfCandidates[i].engLevel);
  }
  console.log(params);
}

function prepToRace(params, canvas) {
  buttonsDisabledOn('init_btn');
  buttonsDisabledOn('addCandidate_btn');
  buttonsDisabledOn('allGenerate_btn');
  buttonsDisabledOff('race_btn');
  elementsVisibilityToggler('race');
  for (let i = 0; i <= params.counter; i++) {
    const x = 50 + 100 * i;
    params.circles.push(new Circle(x, 50, canvas, 'green'));
  }
}

function checkData(fnc, data, time, index, circles) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fnc(data)) {
        resolve('You win');
      } else {
        reject(new Error('You lose'));
      }
    }, time);
  })
    .then(() => {
      circles[index].updatePosition(circles[index], 'green');
      return true;
    })
    .catch(() => {
      circles[index].updatePosition(circles[index], 'red');
      return false;
    });
}

function checkBalance(data) {
  return data >= 2000;
}

function checkAge(data) {
  return data >= 18 && data <= 60;
}

function checkDocuments(data) {
  return data === 'passport, insurance, photo';
}

function checkLangLevel(data) {
  return data === 'B1' || data === 'B2' || data === 'C1';
}

// function isTrueResults(results) {
//   return results.every((value) => value === true);
// }

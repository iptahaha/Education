import { CandidateRandomData } from './CandidateRandomData';
import {
  addListener,
  buttonsDisabledOff,
  buttonsDisabledOn,
  setTextValue,
  getTextValue,
  createHTMLElement
} from './utils';

export function initVisaCenter(state) {
  const candidate = new CandidateRandomData();

  const valuesFormFields = {
    name: '',
    balance: 0,
    age: 0,
    documents: '',
    engLevel: '',
  };

  const newCandidate = {
    name: '',
    balance: 0,
    age: 0,
    documents: '',
    engLevel: '',
  };

  const generateButtons = {
    name: 'name_btn',
    balance: 'balance_btn',
    age: 'age_btn',
    documents: 'documents_btn',
    engLevel: 'engLevel_btn',
  };

  addListener('allGenerate_btn', 'click', () =>
    putAllValues(valuesFormFields, newCandidate, candidate),
  );

  addListener('addCandidate_btn', 'click', () =>
    addCandidate(valuesFormFields, newCandidate, state),
  );

  addListener('clear_btn', 'click', clearqueueOfCandidates.bind(null, state));

  addListener('form', 'mouseup', () => {
    checkGenerateButtons(generateButtons, valuesFormFields, newCandidate, candidate);
  });
  addListener('form', 'change', () => {
    editFormFieldsValues(valuesFormFields);
    checkFormFieldsValues(valuesFormFields);
  });
}

function clearqueueOfCandidates(state) {
  state.candidatesCount = 0;
  state.queueOfCandidates = {};
}

function addCandidate(valuesFormFields, newCandidate, state) {
  state.queueOfCandidates[state.candidatesCount] = { ...valuesFormFields };
  state.candidatesCount += 1;

  if (state.candidatesCount >= 2) {
    buttonsDisabledOff('init_btn');
  }
  //createHTMLElement('raceInfo', 'span', `${state.candidatesCount} candidate: some info`);
}

function changeNewCandidateState(key, newCandidate, candidate) {
  if (key && key === 'name') {
    newCandidate.name = candidate.randomName();
  } else if (key && key === 'balance') {
    newCandidate.balance = candidate.randomBalance();
  } else if (key && key === 'age') {
    newCandidate.age = candidate.randomAge();
  } else if (key && key === 'documents') {
    newCandidate.documents = candidate.randomDocuments();
  } else if (key && key === 'engLevel') {
    newCandidate.engLevel = candidate.randomEngLevel();
  }
}

function checkGenerateButtons(generateButtons, valuesFormFields, newCandidate, candidate) {
  for (const key in generateButtons) {
    addListener(`${generateButtons[key]}`, 'click', () => {
      changeNewCandidateState(key, newCandidate, candidate);
      valuesFormFields[`${key}`] = newCandidate[`${key}`];
      setTextValue(`${key}`, newCandidate[`${key}`]);
      checkFormFieldsValues(valuesFormFields);
    });
  }
}

function putAllValues(valuesFormFields, newCandidate, candidate) {
  for (const key in valuesFormFields) {
    changeNewCandidateState(key, newCandidate, candidate);
    valuesFormFields[`${key}`] = newCandidate[`${key}`];
    setTextValue(`${key}`, newCandidate[`${key}`]);
  }
  buttonsDisabledOff('addCandidate_btn');
}

function checkFormFieldsValues(valuesFormFields) {
  if (
    valuesFormFields.name !== '' &&
    valuesFormFields.balance !== 0 &&
    valuesFormFields.age !== 0 &&
    valuesFormFields.documents !== '' &&
    valuesFormFields.engLevel !== ''
  ) {
    buttonsDisabledOff('addCandidate_btn');
  } else {
    buttonsDisabledOn('addCandidate_btn');
  }
}

function editFormFieldsValues(valuesFormFields) {
  for (const key in valuesFormFields) {
    valuesFormFields[`${key}`] = getTextValue(`${key}`);
  }
}

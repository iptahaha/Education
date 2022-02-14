import './style/index.scss';
import { initVisaCenter } from './initVisaCenter';
import { initRace } from './initRace';

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    candidatesCount: 0,
    queueOfCandidates: {},
  };

  initVisaCenter(state);
  initRace(state);
});

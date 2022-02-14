import { getRandomIntInclusive, arrayRandElement } from './utils';

export class CandidateRandomData {
  reqBalance = 2000;

  minReqAge = 18;

  maxReqAge = 60;

  totalMaxAge = 120;

  totalMinAge = 12; // 12 is minimum age for visa self documentation

  reqEngLevel = ['B1', 'B2', 'C1'];

  allDocuments = ['passport', 'insurance', 'photo'];

  names = [
    'Lillian Richardson',
    'Rhea Howard',
    'Gwyneth Davis',
    'Ysabella Ramirez',
    'Angelina Young',
    'Queen Anderson',
    'Jayda Miller',
    'Lilliana Scott',
    'Mariana Morris',
    'Jane Clark',
    'Bella Collins',
    'Helena Evans',
    'Ivey Powell',
    'Lexi Scott',
    'Tia Gonzales',
    'Isabela Ramirez',
    'Fernanda King',
    'Queta Foster',
    'Carolina Bailey',
    'Queen Patterson',
    'Evangeline King',
    'Urbana Watson',
    'Luna Clark',
    'Philomena Williams',
    'Cecelia Young',
    'Ondina Foster',
    'Ziva Robinson',
    'Viola Davis',
    'Vivianne Parker',
    'Makayla Ward',
    'Nylah Wilson',
    'Melody Smith',
    'Lillian Baker',
    'Hattie Stewart',
    'Camila Flores',
    'Hakeem Peterson',
    'Damon Garcia',
    'Gordon Hernandez',
    'Maximus Reed',
    'Ignace Thomas',
    'Zakari Stewart',
    'Bowen Jackson',
    'Yoshiaki Rogers',
    'Barrett Barnes',
    'Jaxson Garcia',
    'Karter Hall',
    'Harlan Perry',
    'Ishaan Gonzalez',
    'Yaakov Adams',
    'Kingston Bailey',
    'Uria Jackson',
    'Ziyad Hayes',
    'Richard Rodriguez',
    'Percy Washington',
    'Davis Long',
    'Armando Roberts',
    'Charles Rogers',
    'Pembroke Rogers',
    'Varun Rivera',
    'Oskar Brooks',
    'Cesar Long',
    'Seamus Nelson',
    'Easton Price',
    'Ulric Jones',
    'Darren Gonzales',
    'Grady Anderson',
    'Todd Powell',
    'Ruben Allen',
    'Otto Morris',
    'Emmanuel Stewart',
    'Ziya Peterson',
    'Peter Rodriguez',
    'Rhett Robinson',
    'Valente Perez',
    'Desmond Thompson',
    'Liam Miller',
  ];

  randomEngLevel(): string {
    if (Math.random() <= 0.3) {
      return arrayRandElement(this.reqEngLevel);
    }
    return arrayRandElement(['English, do you speak it?', 'A0', 'A1', 'dumb']);
  }

  randomDocuments(): string {
    if (Math.random() <= 0.8) {
      return this.allDocuments.toString();
    }
    return arrayRandElement([
      'passport, insurance',
      'passport, photo',
      'insurance, photo',
      'passport',
      'insurance',
      'photo',
    ]);
  }

  randomAge(): number {
    switch (true) {
      case Math.random() <= 0.7:
        return getRandomIntInclusive(this.minReqAge, this.maxReqAge); // 71% lucky chance
      case Math.random() <= 0.85:
        return getRandomIntInclusive(this.totalMinAge, this.minReqAge - 1); // 15% unlucky chance
      default:
        return getRandomIntInclusive(this.minReqAge + 1, this.totalMaxAge); // same 15% unlucky chance
    }
  }

  randomBalance(): number {
    const maxBalance = this.reqBalance * 1.5; // 1.5 coefficient equal to 60% lucky chance
    let cash: number;
    if (Math.random() <= 0.6) {
      cash = getRandomIntInclusive(this.reqBalance, maxBalance);
    } else {
      cash = getRandomIntInclusive(0, this.reqBalance);
    }
    return cash;
  }

  randomName(): string {
    return arrayRandElement(this.names);
  }
}

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqf, floors) {
    super(sqf);
    this.floors = floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

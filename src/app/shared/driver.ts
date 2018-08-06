export class RaceTeam {
  id: number;
  name: string;
}

export class Brand {
  id: number;
  name: string;
}

export class Driver {
  id: number;
  name: string;
  age: number;
  team: RaceTeam;
  raceExperience: number;
  sponsor: Brand;
  photoUrl: string;
}

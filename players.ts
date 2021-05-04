// name, jersey
export class Player {
    // LONG WAY: create properties, constuctor params, this. in constructor
    // name: string;
    // jersey: number;
    // constructor(name: string, jersey: number) {
    //   this.name = name;
    //   this.jersey = jersey;
    // }
    // SHORT WAY: add 'public' in front of constructor params
    constructor(public name: string, public jersey: number) {
    }
    describe(): string {
      return `${this.name} wears ${this.jersey}`;
    }
  }

// + team (string)
export class TeamPlayer extends Player {
    team: string;
    constructor(name: string, jersey: number, team: string) {
        super(name, jersey);
        this.team = team;
    }
    // override the parent version of describe
    describe(): string {
        // call the paren version of describe as part of the new version
        return super.describe() + ` and plays for the ${this.team}`
    }
}
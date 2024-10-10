import Team from '../Team'
import { Bowerman, Swordsman, Magician, Daemon } from '../Character'

let team;
let bowerman;
let swordsman;
let daemon;
let magician;

beforeEach(() => {
    team = new Team();
    bowerman = new Bowerman('Vasya');
    swordsman = new Swordsman('Kolya');
    daemon = new Daemon('Egor');
    magician = new Magician('Petya');
});

test('add new character', () => {
    team.add(bowerman);
    expect(team.members.has(bowerman)).toBe(true);
});

test('add duplicate character', () => {
    team.add(bowerman);
    expect(() => team.add(bowerman)).toThrow(`Character ${bowerman.name} is already in the team`);
});

const objCharacter = [swordsman, daemon, magician]

test('addAll character', () => {
    team.addAll(...objCharacter);
    objCharacter.forEach(element => {
        expect(team.members.has(element)).toBe(true); 
    });
})

test('characters to Array', () => {
    expect(team.toArray()).toBeInstanceOf(Array) 
})
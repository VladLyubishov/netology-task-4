import Character, { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../Character'

let shortName;
let wrongType;

beforeEach(() => {
    shortName = () => new Character('V', 'Bowman');
    wrongType = () => new Character('Vasya', 'Warior');
});

test('Invalid name', () => {
    expect(shortName).toThrow('Имя должно состоять минимум из 2-х символом. Максимальная длинна имени 10 символов');
});

test('Invalid type', () => {
    expect(wrongType).toThrow('Неизвестный персонаж. Доступны следующие персонажи: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('Unable to up level. Character dead', () => {
    const character = new Character('Vasya', 'Bowman');
    expect(() => character.levelUp(0)).toThrow('Уровень не может быть повышен. Персонаж мертв.')
});

test.each([
        ['Bowman', 'Vasya', 30, 77.5],
        ['Swordsman', 'Kolya', 20, 82],
        ['Magician', 'Petya', 10, 94]
    ])('Get dammage', (type, name, points, afterDammage) => {
    const character = new Character(name, type);
    character.damage(points);
    let currentHealth = character.health;  
    expect(currentHealth).toBe(afterDammage)
    }
)

test.each([
        ['Bowman', new Bowerman('Vasya')],
        ['Swordsman', new Swordsman('Vasya')],
        ['Magician', new Magician('Vasya')],
        ['Daemon', new Daemon('Vasya')],
        ['Undead', new Undead('Vasya')],
        ['Zombie', new Zombie('Vasya')]
    ])('Create new type %s', (type, newClass) => {
        const typesCharacter = newClass;
        expect(typesCharacter.type).toBe(type);
    }
)

test('Level up. Health', () => {
    const character = new Character('Vasya', 'Bowman');
    character.levelUp(50);
    expect(character.health).toEqual(100);
})

test('Level up. Level', () => {
    const character = new Character('Vasya', 'Bowman');
    character.levelUp(50);
    expect(character.level).toBe(2);
})

test('Level up. Attack', () => {
    const character = new Character('Vasya', 'Bowman');
    character.levelUp(50);
    expect(character.attack).toBe(character.getAttack('Bowman') * 1.2);
})

test('Level up. Defence', () => {
    const character = new Character('Vasya', 'Bowman');
    character.levelUp(50);
    expect(character.defence).toBe(character.getDefence('Bowman') * 1.2);
})

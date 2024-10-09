import Character, { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../Character'

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

const character = new Character('Vasya', 'Bowman');
test('Unable to up level. Character dead', () => {
    expect(() => character.levelUp(0)).toThrow('Уровень не может быть повышен. Персонаж мертв.')
});

const characters = [
    ['Bowman', 'Vasya', 30, 77.5],
    ['Swordsman', 'Kolya', 20, 82],
    ['Magician', 'Petya', 10, 94]
]

const handlerLevelUp = test.each(characters)

handlerLevelUp('Level up. For %s with name %s', (type, name) => {
    const character = new Character(name, type);
    character.levelUp(50);
    expect(character.health).toEqual(100);
    expect(character.level).toBe(2);
    expect(character.attack).toBe(character.getAttack(type) * 1.2);
    expect(character.defence).toBe(character.getDefence(type) * 1.2);
})


const handlerGetDammage = test.each(characters)

handlerGetDammage('Get dammage', (type, name, points, afterDammage) => {
    const character = new Character(name, type);
    character.damage(points);
    let currentHealth = character.health;  
    expect(currentHealth).toBe(afterDammage)
})

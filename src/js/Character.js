export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно состоять минимум из 2-х символом. Максимальная длинна имени 10 символов');
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('Неизвестный персонаж. Доступны следующие персонажи: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = this.getAttack(this.type);
        this.defence = this.getDefence(this.type);
    }

    getAttack(type) {
        switch (type) {
            case 'Bowman':
            case 'Undead':
                return 25;
            case 'Swordsman':
            case 'Zombie':
                return 40;
            case 'Magician':
            case 'Daemon':
                return 10;
        }
    }

    getDefence(type) {
        switch (type) {
            case 'Bowman':
            case 'Undead':
                return 25;
            case 'Swordsman':
            case 'Zombie':
                return 10;
            case 'Magician':
            case 'Daemon':
                return 40;
        }
    }

    levelUp(health) {
        if (health === 0) {
            throw new Error('Уровень не может быть повышен. Персонаж мертв.');
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health >= 0){
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

export class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowman');
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
    }
}

export class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
    }
}

export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
    }
}

export class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
    }
}
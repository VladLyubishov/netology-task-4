import ErrorRepository from "../Error";

let errorRepo;

beforeEach(() => {
    errorRepo = new ErrorRepository();
})

test('add error', () => {
    errorRepo.add('1', 'Ошибка 1');
    expect(errorRepo.errors.has('1')).toBe(true);
});

test('translate error', () => {
    errorRepo.add('1', 'Ошибка 1');
    expect(errorRepo.translate('1')).toBe('Ошибка 1');
})

test('unknown translate error', () => {
    expect(errorRepo.translate('1')).toBe('Unknown error');
})


import Name from './name';

describe('Test class Name', () => {
  describe('CamelCase', () => {
    it('should return the correct value', () => {
      expect(new Name('hello world').camelCase()).toBe('helloWorld');
    });
  });

  describe('PascalCase', () => {
    it('should return the correct value', () => {
      expect(new Name('hello world').pascalCase()).toBe('HelloWorld');
    });
  });

  describe('CamelCase', () => {
    it('should return the correct value', () => {
      expect(new Name('hello world').camelCase()).toBe('helloWorld');
    });
  });

  describe('kebabCase', () => {
    it('should return the correct value', () => {
      expect(new Name('hello world').kebabCase()).toBe('hello-world');
    });
  });

  describe('capitalize', () => {
    it('should return the correct value', () => {
      expect(new Name('hello world').capitalize()).toBe('Hello world');
    });
  });

  describe('toLowerCase', () => {
    it('should return the correct value', () => {
      expect(new Name('hello world').toLowerCase()).toBe('hello world');
    });
  });

  describe('toUpperCase', () => {
    it('should return the correct value', () => {
      expect(new Name('hello world').toUpperCase()).toBe('HELLO WORLD');
    });
  });
});

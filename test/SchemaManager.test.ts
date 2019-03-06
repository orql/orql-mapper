import orqlExecutor from './orqlExecutor';

const configuration = orqlExecutor.configuration;

const schemaManager = configuration.schemaManager;

test('test schema', () => {
  const userSchema = schemaManager.getSchema('user');
  expect(userSchema).not.toBe(undefined);
});

test('test id', () => {
  const userSchema = schemaManager.getSchema('user')!;
  expect(userSchema.getIdColumn()!.name).toBe('id');
});

test('test belongsTo ref key', () => {
  const userSchema = schemaManager.getSchema('user')!;
  expect(userSchema.getAssociation('role')!.refKey).toBe('roleId');
});
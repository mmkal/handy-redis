import { JsonSchemaCommand } from ".";

export const fixup = (schema: Record<string, JsonSchemaCommand>) => {
  const clone: typeof schema = JSON.parse(JSON.stringify(schema))
  
  fixSetEnum(clone)

  return clone
}

/** https://github.com/redis/redis-doc/pull/1232 */
function fixSetEnum(schema: Record<string, JsonSchemaCommand>) {
  const badSetArg = schema.SET.arguments
    .find(a => a.name === 'expiration' && a.schema.enum?.join(',') === 'EX seconds,PX milliseconds')!
  badSetArg.schema = {
    type: 'array',
    items: [
      {type: 'string', enum: ['EX', 'PX']},
      {type: 'number'},
    ]
  }
}

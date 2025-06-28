import { number } from 'yup';

const schema = number();

console.log(schema.isValidSync(Number.POSITIVE_INFINITY));
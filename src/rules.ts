import { array, boolean, date, mixed, number, object, string } from 'yup';
import { ObjectShape } from 'yup/lib/object';

export const rules = {
  array,
  boolean,
  date,
  mixed,
  number,
  object,
  string,
};

export type ValidationRules = typeof rules;
export { ObjectShape };

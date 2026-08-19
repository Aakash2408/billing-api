/**
 * Generated from the user API spec -- do not edit by hand.
 *
 * `phoneNumber` is ABSENT because the spec removed it. That is what turns every
 * remaining reference in this package into a compile error, which is the whole
 * point of this repository: it is a consumer in the state it reaches the moment
 * an upstream API drops a field.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

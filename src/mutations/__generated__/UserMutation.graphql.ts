/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateUserInput = {
    name: string;
    email: string;
    password: string;
    clientMutationId?: string | null;
};
export type UserMutationVariables = {
    input: CreateUserInput;
};
export type UserMutationResponse = {
    readonly userCreateMutation: {
        readonly token: string | null;
        readonly error: string | null;
    } | null;
};
export type UserMutation = {
    readonly response: UserMutationResponse;
    readonly variables: UserMutationVariables;
};



/*
mutation UserMutation(
  $input: CreateUserInput!
) {
  userCreateMutation(input: $input) {
    token
    error
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateUserPayload",
    "kind": "LinkedField",
    "name": "userCreateMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserMutation",
    "selections": (v1/*: any*/),
    "type": "UserMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5d697f861500419c741b1468e62adb5e",
    "id": null,
    "metadata": {},
    "name": "UserMutation",
    "operationKind": "mutation",
    "text": "mutation UserMutation(\n  $input: CreateUserInput!\n) {\n  userCreateMutation(input: $input) {\n    token\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c01b076ea428991dcf8815eb2b31e319';
export default node;

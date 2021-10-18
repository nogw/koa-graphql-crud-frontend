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
export type UserRegistrationMutation_UserMutationVariables = {
    input: CreateUserInput;
};
export type UserRegistrationMutation_UserMutationResponse = {
    readonly userCreateMutation: {
        readonly token: string | null;
        readonly error: string | null;
    } | null;
};
export type UserRegistrationMutation_UserMutation = {
    readonly response: UserRegistrationMutation_UserMutationResponse;
    readonly variables: UserRegistrationMutation_UserMutationVariables;
};



/*
mutation UserRegistrationMutation_UserMutation(
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
    "name": "UserRegistrationMutation_UserMutation",
    "selections": (v1/*: any*/),
    "type": "UserMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserRegistrationMutation_UserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a8aded41270eb395da313c87d853e891",
    "id": null,
    "metadata": {},
    "name": "UserRegistrationMutation_UserMutation",
    "operationKind": "mutation",
    "text": "mutation UserRegistrationMutation_UserMutation(\n  $input: CreateUserInput!\n) {\n  userCreateMutation(input: $input) {\n    token\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ccddadcff56910810e4dae9191218eeb';
export default node;

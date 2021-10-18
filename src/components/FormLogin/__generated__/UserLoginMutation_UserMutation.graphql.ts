/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserLoginInput = {
    email: string;
    password: string;
    clientMutationId?: string | null;
};
export type UserLoginMutation_UserMutationVariables = {
    input: UserLoginInput;
};
export type UserLoginMutation_UserMutationResponse = {
    readonly userLoginMutation: {
        readonly token: string | null;
        readonly error: string | null;
    } | null;
};
export type UserLoginMutation_UserMutation = {
    readonly response: UserLoginMutation_UserMutationResponse;
    readonly variables: UserLoginMutation_UserMutationVariables;
};



/*
mutation UserLoginMutation_UserMutation(
  $input: UserLoginInput!
) {
  userLoginMutation(input: $input) {
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
    "concreteType": "UserLoginPayload",
    "kind": "LinkedField",
    "name": "userLoginMutation",
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
    "name": "UserLoginMutation_UserMutation",
    "selections": (v1/*: any*/),
    "type": "UserMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserLoginMutation_UserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4334eaf91bc43449e649e99351208bc1",
    "id": null,
    "metadata": {},
    "name": "UserLoginMutation_UserMutation",
    "operationKind": "mutation",
    "text": "mutation UserLoginMutation_UserMutation(\n  $input: UserLoginInput!\n) {\n  userLoginMutation(input: $input) {\n    token\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e6d6e0386615b6c1b9df4fb9500764eb';
export default node;

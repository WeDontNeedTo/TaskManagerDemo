import * as t from "./types";

export function loadingTrue() {
  return {
    type: t.loadingTrue,
  };
}

export function loadingFalse() {
  return {
    type: t.loadingFalse,
  };
}

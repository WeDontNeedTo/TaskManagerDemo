import * as t from "./types";

export function loadingReducer(loading = true, action) {
  switch (action.type) {
    case t.loadingTrue: {
      return (loading = true);
    }
    case t.loadingFalse: {
      return (loading = false);
    }
    default:
      return loading;
  }
}

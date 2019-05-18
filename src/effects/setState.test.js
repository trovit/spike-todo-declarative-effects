import * as reffects from "reffects";
import * as setStateEffect from "./setState";
import { store as storeModule } from "reffects-store";
import { destroyAllMocks } from "../../testHelpers/fixtures";
import { callsTo } from "../../testHelpers/mockHelpers";

describe("setState effect", () => {
  expect(storeModule.setState).toBeDefined();

  afterEach(() => {
    reffects.clearHandlers();
    destroyAllMocks();
  });

  test("should setState the state in the store", () => {
    const effectId = "setState";
    const store = { setState: jest.fn() };
    setStateEffect.register(store);
    const setStateHandler = reffects.getEffectHandler(effectId);
    const firstMutation = { path: "visibilityFilter", newValue: "all" };
    const secondMutation = { path: "toast.isShown", newValue: true };
    const mutations = {
      [firstMutation.path]: firstMutation.newValue, 
      [secondMutation.path]: secondMutation.newValue
    };

    setStateHandler(mutations);

    expect(store.setState).toHaveBeenCalledTimes(2);
    expect(callsTo(store.setState)).toEqual([[firstMutation], [secondMutation]]);
  });
});
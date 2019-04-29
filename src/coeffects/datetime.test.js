import * as reffects from "reffects";
import * as datetimeCoeffect from "./datetime";
import { destroyAllMocks } from "../../testHelpers/fixtures";
import { callsTo } from "../../testHelpers/mockHelpers";

describe("datetime coeffect", () => {
  afterEach(() => {
    reffects.clearHandlers();
    destroyAllMocks();
  });

  test("should extract the expected date", () => {
    const coeffectId = "datetime";
    const expectedDateTime = "anyDateTime";
    datetimeCoeffect.register({ now: () => expectedDateTime });
    const dateTimeHandler = reffects.getCoeffectHandler(coeffectId);

    expect(dateTimeHandler()).toEqual({ [coeffectId]: expectedDateTime });
  });
});
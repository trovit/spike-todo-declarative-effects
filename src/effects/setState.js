import { registerEffectHandler } from "reffects";

export function register(store) {
  registerEffectHandler("setState", function setStateEffect(mutations) {
    mutations.forEach(function (mutation) {
      store.setState(mutation);
    });
  });
}

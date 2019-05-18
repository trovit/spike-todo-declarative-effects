export function coeffect(id, data) {
  if (!data) {
    return id;
  }
  return { id: id, data: data };
} // TODO: move coeffect to reffects

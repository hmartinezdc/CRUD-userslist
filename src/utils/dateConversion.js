export const dateConversion = (dateOriginal) => {
  const fechaFormateada = new Date(dateOriginal).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return fechaFormateada;
};

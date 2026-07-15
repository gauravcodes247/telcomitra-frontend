export const formatDate = (date) => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

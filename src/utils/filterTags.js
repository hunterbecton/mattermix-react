const remove = ['Vega'];

const filterTag = (tags) => {
  return tags.filter((tag) => !remove.includes(tag));
};

export default filterTag;

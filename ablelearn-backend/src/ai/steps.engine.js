exports.generateSteps = (text) => {
  const sentences = text.split('.').filter(s => s.trim().length > 0);

  return sentences.map((sentence, index) => {
    return `Step ${index + 1}: ${sentence.trim()}`;
  });
};

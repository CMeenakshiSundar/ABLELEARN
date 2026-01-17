exports.generateExplanation = (text) => {
  const sentences = text.split('.').filter(s => s.trim().length > 0);

  
  return `In simple terms, this topic explains that ${sentences[0].trim()}. 
This means the learner should understand the core idea before details.`;
};

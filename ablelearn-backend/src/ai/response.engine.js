exports.getAdaptiveResponse = (mode) => {
  switch (mode) {
    case 'blind':
      return {
        explanation_level: 1,
        output_mode: 'audio',
        speech_rate: 'slow'
      };

    case 'deaf_mute':
      return {
        explanation_level: 2,
        output_mode: 'visual',
        animations: true
      };

    case 'cognitive':
      return {
        explanation_level: 1,
        output_mode: 'visual',
        step_by_step: true
      };

    default:
      return {
        explanation_level: 2,
        output_mode: 'standard'
      };
  }
};

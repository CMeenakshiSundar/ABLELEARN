exports.detectUserMode = (logs) => {
  const actions = logs.map(l => l.action);
  const slowCount = actions.filter(a => a === 'slow').length;
  const repeatCount = actions.filter(a => a === 'repeat').length;
  console.log({ slowCount, repeatCount, actions });

  if (actions.includes('audio') && actions.includes('repeat')) {
    return 'blind';
  }

  if (actions.includes('visual') && actions.includes('repeat')) {
    return 'deaf_mute';
  }

  if (slowCount > 2 || repeatCount > 2) {
    return 'cognitive';
  }

  return 'default';
};

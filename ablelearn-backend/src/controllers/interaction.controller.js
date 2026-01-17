const Interaction = require('../models/Interaction');
const { detectUserMode } = require('../ai/adapt.engine');
const { getAdaptiveResponse } = require('../ai/response.engine');


 
exports.logInteraction = async (req, res) => {
  try {
    const { action } = req.body;

    
    if (!action) {
      return res.status(400).json({
        message: 'Action is required'
      });
    }

    
    await Interaction.create({
      user_id: req.user.userId,
      action
    });

    
    const logs = await Interaction.find({
      user_id: req.user.userId
    });

   
    const mode = detectUserMode(logs);

    const adaptation = getAdaptiveResponse(mode);


    res.json({
      message: 'Interaction logged',
      inferred_mode: mode,
      adaptation
    });

  } catch (error) {
    console.error('Interaction Controller Error:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

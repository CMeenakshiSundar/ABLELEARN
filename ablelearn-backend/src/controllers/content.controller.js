const Content = require('../models/Content');
const { generateExplanation } = require('../ai/explanation.engine');
const { generateSteps } = require('../ai/steps.engine');
const { generateSummary } = require('../ai/summary.engine');

exports.createContent = async (req, res) => {
  try {
    const { title, raw_content } = req.body;

    const aiGenerated = {
      level1_explanation: generateExplanation(raw_content),
      level2_steps: generateSteps(raw_content),
      level3_summary: generateSummary(raw_content)
    };

    const content = await Content.create({
      teacher_id: req.user.userId,
      title,
      raw_content,
      ai_generated: aiGenerated
    });

    res.status(201).json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveContent = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);

    content.approved_content = content.ai_generated;
    content.status = 'approved';

    await content.save();

    res.json({ message: 'Content approved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getApprovedContent = async (req, res) => {
  const content = await Content.find({ status: 'approved' });
  res.json(content);
};

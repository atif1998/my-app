const Leave = require("../models/leavePolicy.model");

const addLeavePolicy = async (req, res) => {
  try {
    let data = req.body;
    let companyId = req.token.companyId;
    let leavePolicyExist = await Leave.findOne({
      companyId: companyId,
    });
    if (leavePolicyExist) {
      return res.status(400).json({
        msg: "leave policy already exist update the existing one",
        success: true,
      });
    }

    let newLeavesPolicy = new Leave(data);
    let newPolicys = await newLeavesPolicy.save();
    if (!newPolicys) {
      return res.status(404).json({
        msg: "No leaves record is added! Record cant be saved empty",
        success: false,
      });
    }
    return res.status(200).json({
      leavesPolicy: newPolicys,
      msg: "Leave Policy added",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error",
      success: false,
    });
  }
};
const viewLeavePolicy = async (req, res) => {
  try {
    let companyId = req.token.companyId;
    let viewLeavesPolicies = await leavesPolicy.findOne({
      companyId: companyId,
    });

    res.status(200).json({
      leavePolicies: viewLeavesPolicies,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error",
      success: false,
    });
  }
};
const updateLeavePolicy = async (req, res) => {
  try {
    let _id = req.body?.data?._id;
    if (!_id) {
      return res.status(400).json({
        msg: "Provide the id of leave policy to update the record",
        success: false,
      });
    }
    let updateLeavePolicy = await leavesPolicy.findOneAndUpdate(
      { _id: _id },
      data
    );
    if (!updateLeavePolicy) {
      return res.status(404).json({
        msg: "Leave policy with this id not found",
        success: false,
      });
    }
    return res.status(200).json({
      data: updateLeavePolicy,
      msg: "Leaves Policy updated",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error",
      success: false,
    });
  }
};
const deleteLeavePolicy = async (req, res) => {
  try {
    let _id = req.body._id;
    if (!_id) {
      return res.status(400).json({
        msg: "Provide the id of leave policy to delete the record",
        success: false,
      });
    }
    let deleteLeavePolicy = await Leave.findOneAndDelete(_id);
    if (!deleteLeavePolicy) {
      return res.status(404).json({
        msg: "Leave policy with this id not found",
        success: false,
      });
    }
    return res.status(200).json({
      msg: "Leave policy with this id deleted",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error",
      success: false,
    });
  }
};

module.exports = {
  addLeavePolicy,
  viewLeavePolicy,
  updateLeavePolicy,
  deleteLeavePolicy,
};

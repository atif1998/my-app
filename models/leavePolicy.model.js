const mongoose = require("mongoose");
const leavePolicySchema = new mongoose.Schema({
  sickLeaves: {
    type: String,
    default: null,
  },
  casualLeaves: {
    type: String,
    default: null,
  },
  workFromHomeLeaves: {
    type: String,
    default: null,
  },
  bereavementLeaves: {
    type: String,
    default: null,
  },
  unpaidLeaves: {
    type: String,
    default: null,
  },
  paternityLeaves: {
    type: String,
    default: null,
  },
  maternityLeaves: {
    type: String,
    default: null,
  },
  marriageLeaves: {
    type: String,
    default: null,
  },
  halfDayLeaves: {
    type: String,
    default: null,
  },
  annualLeaves: {
    type: String,
    default: null,
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "company",
    required: true,
  },
});
const Leave = mongoose.model("Leave", leavePolicySchema);
modul.exports = Leave;

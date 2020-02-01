const calculateBMR = function(gender, age, weight, feet, inches) {
  const multiplierOffsets = {
    Male: {
      offset: 66,
      weightMultiplier: 6.3,
      heightMultiplier: 12.9,
      ageMultiplier: 6.8
    },
    Female: {
      offset: 655,
      weightMultiplier: 4.3,
      heightMultiplier: 4.7,
      ageMultiplier: 4.7
    }
  };
  const height = +feet * 12 + +inches;

  const BMR =
    multiplierOffsets[gender].offset +
    multiplierOffsets[gender].weightMultiplier * +weight +
    multiplierOffsets[gender].heightMultiplier * height -
    multiplierOffsets[gender].ageMultiplier * +age;

  return BMR;
};

module.exports = { calculateBMR };

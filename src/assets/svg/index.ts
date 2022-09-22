const svgRequired = require.context("../../assets/svg", false, /\.svg$/);
svgRequired.keys().forEach((item) => svgRequired(item));

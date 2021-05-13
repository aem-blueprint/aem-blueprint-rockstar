const resolveConfig = require('tailwindcss/resolveConfig');
console.log('resolveConfig',resolveConfig('../../../../tailwind.config.js'))
// module.export = () => {
  const backgroundSizes = ['cover','contain','auto','100%','75%','50%','25%','15%','10%','5%'];
  const theme = resolveConfig();


// }
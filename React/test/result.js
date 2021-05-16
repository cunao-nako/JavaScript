let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter( employer => employer ).map( employer => employer.toLowerCase().trim() ).join(', ');

let sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0) {
  if (own) { return own.reduce((a, b) => a + b); }
  else { return 0; }
}

let money = calcCash(sponsors.cash);

function makeBusiness({
  owner = 'none',
  director = 'Victor',
  cash = 0,
  emp = 'none'} = {})
  {
    let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'].join(', ');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: ${sumSponsors}`);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
  }

makeBusiness({
  owner: 'Sam',
  cash: money,
  emp: employersNames,
});
export const discoverLeads = async (req, res) => {
  const dummyLeads = [
    { name: 'Alice', title: 'CTO', company: 'Growlytics', domain: 'growlytics.io' },
    { name: 'Bob', title: 'CMO', company: 'ScaleWise', domain: 'scalewise.ai' }
  ];
  res.json(dummyLeads);
};

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x122f7d14c52c9A61bBc8F6e304d0106828CB1632'
);

export default instance;
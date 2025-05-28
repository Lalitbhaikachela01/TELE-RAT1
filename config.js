const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8138306659:AAE1JVo-DBCYGU0NYIIlHcNdHnDW4vNFDL4',
  id: isNaN(parsedId) ? 6260645203 : parsedId // replace 12345.. with your telegram chat id
};

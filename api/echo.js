function echo(req, res) {
   try {
      let message = req.query('message'); 
      res.status(200).json({ message: `echo ${message}`});
      console.log('sent a message' + ` echo ${message}`);
   } catch (err) {
      res.status(500).json(err);	
      console.log(err.stack); 
   }
}

module.exports = {
   echo: echo

}; 

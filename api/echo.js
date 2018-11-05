function echo(req, res) {
   if(!req && !req.query['message']) {
      res.status(500).json({ error: "Missing 'message' to echo in query string"});
      return;
   }

   try {
      let message = req.query['message']; 
      res.status(200).json({ message: `echo ${message}`});
   } catch (err) {
      res.status(500).json(err);	
      console.log(err.stack); 
   }
}

module.exports = {
   echo: echo

}; 

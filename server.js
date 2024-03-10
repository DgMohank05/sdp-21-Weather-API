const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const { LoginCred } = require('./login');
const { RegisterCred } = require('./Register');
const { ActiveUsers } = require('./dashboard');
const { ActiveUserDetails } = require('./activeUser');
const { FetchAPIdata } = require('./weatherAPI')

app.use(cors());
app.use(express.json());

app.post('/loginCredentials', async (req, res) => {
  const { Username, Password } = req.body;
  const result = await LoginCred(Username, Password);

  if (result === 1) {
    res.send('successful')
  } else {
    res.send('unsuccessful')
  }

});

app.post('/registerCredentials', async (req, res) => {
  const { Username, Password, Name, City } = req.body;
  const result = await RegisterCred(Username, Password, Name, City);

  if (result === 1) {
    res.send('exists')
  } else if (result === 2) {
    res.send('created')

  }
  else if (result === 0) {
    res.send('unsuccessful')
  }

});

app.get('/loadDashboard', async (req, res) => {
  const result = await ActiveUserDetails();
  const WeatherData = await FetchAPIdata(result.City);

  finData = {result, WeatherData}

  console.log('sending this data to frontend')
  console.log(result)

  res.send(finData);

})

app.post('/activeUsers', async (req, res) => {
  const { Username, Password } = req.body;

  const result = await ActiveUsers(Username, Password)
  if (result == 1) {
    res.send('added')
  } else {
    res.send('not added')
  }

})

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true }); // Returns the updated user
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(port, () => {
});


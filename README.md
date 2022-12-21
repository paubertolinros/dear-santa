# Dear Santa App 🎄

![]('public/images/christmas.gif')

This project has been initialized with `express generator`. It already has `mongoose` and `nodemon` installed, so all that's left to do is:
```bash
npm install
````

To run the app, run:
```bash
npm run dev
```
There is also a connection to the database, called *dear santa*.

> 🎁 The goal of this app is to perform as a present list, either for yourself or for other people. Everytime you think of something you might like as a gift, you should be able to add a new present, see all the presents, and see the present's detail.

## Iteration 1

Create the model for `Present`. It should have the following properties (here is an example):

```js
{
  name: 'Lego Star Wars: Death Star',
  image: 'https://i.ebayimg.com/images/g/Wb4AAOSwuPdifpxC/s-l640.jpg',
  price: 850,
  recipient: 'Ale',
  description: ''
}
```






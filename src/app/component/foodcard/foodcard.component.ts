import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodcard',
  templateUrl: './foodcard.component.html',
  styleUrls: ['./foodcard.component.css']
})
export class FoodcardComponent implements OnInit {
  foodMenu = [{
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qhiy6coolxjequzdstn0',
    name: 'Sri Udupi Park',
    slogan: 'South Indian, North Indian, Jain, Chinese, Desserts',
    rating: '4.2',
    time: '29 Min',
    priceRange: '₹200 For 2'
  },
  {
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fdndqr0kk2spbofgxwoa',
    name: 'Madurai Idly Shop',
    slogan: 'South Indian',
    rating: '4.2',
    time: '30 Min',
    priceRange: '₹150 For 2'
  },
  {
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ns0lzgzeafpkosvhbryt',
    name: 'FreshMenu',
    slogan: 'Chinese, Continental, Italian, Mediterranean, Thai, Lebanese',
    rating: '4.0',
    time: '33 Min',
    priceRange: '₹400 For 2'
  },
  {
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qmizlmc1vwzogsm5is0w',
    name: 'Burger King',
    slogan: 'American, Fast Food',
    rating: '4.1',
    time: '38 Min',
    priceRange: '₹350 For 2'
  },
  {
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/w0aezn9w5mfnwlv1d8vx',
    name: 'Dominos Pizza',
    slogan: 'Pizzas',
    rating: '4.4',
    time: '30 Min',
    priceRange: '₹400 For 2'
  },
  {
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/iiobxrejmhgymk5mtp1s',
    name: 'New Delicacy',
    slogan: 'Chinese, Thai',
    rating: '4.2',
    time: '40 Min',
    priceRange: '₹600 For 2'
  },
  {
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a5vicg5iynxnhmodv8ak',
    name: 'Drunken Monkey',
    slogan: 'Healthy Food',
    rating: '4.4',
    time: '32 Min',
    priceRange: '₹300 For 2'
  },
  {
    img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xlltmzid6l8pshzfodxm',
    name: 'Chai Point',
    slogan: 'Fast Food, Beverages',
    rating: '4.3',
    time: '32 Min',
    priceRange: '₹150 For 2'
  }];
  constructor() { }

  ngOnInit() {
  }

}
